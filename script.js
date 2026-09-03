//Object to temporarily hold the user's active choice
let characterDraft = {
	nation: "",
	race: "",
	subrace: "",
	background: "",
	class: ""
};

let currentStep = "nation";

// Global view switching
function switchView(viewId) {
    const allViews = document.querySelectorAll('.view');
    allViews.forEach(view => view.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    if (viewId === 'alchemy-view') {
        renderAlchemyShelf();
    }

    const box = document.getElementById('global-spell-box');
    if (box) box.classList.remove('visible');
}

// Side Panel Inspector Engine (MUST BE ABOVE RENDERING LOOPS)
function inspectOption(step, name, description, mechanics) {
    let sourceText = "Homebrew / Custom Setting"; // Default fallback text

    try {
        if (step === "nation") {
            sourceText = gameData.nations[name].source || "Dormegantu Core Setting";
        } else if (step === "race") {
            sourceText = gameData.races[name].source || "Setting Core Rules";
        } else if (step === "subrace") {
            const parentRace = characterDraft.race;
            
            // Check if it's a specific subrace first
            if (gameData.races[parentRace] && gameData.races[parentRace].subraces[name]) {
                sourceText = gameData.races[parentRace].subraces[name].source || gameData.races[parentRace].source;
            } 
            // Fallback: Check if it's a universal subrace
            else if (gameData.universalSubraces && gameData.universalSubraces[name]) {
                sourceText = gameData.universalSubraces[name].source || "Universal Bloodline";
            }
        } else if (step === "background") {
            sourceText = gameData.backgrounds[name].source || "Players Hand Book";
        } else if (step === "class") {
            sourceText = gameData.classes[name].source || "Players Hand Book";
        }
    } catch (e) {
        // Fallback protection if a custom property name typo happens later
        sourceText = "Homebrew / Expansion Source";
    }

    // Update Title element
    document.getElementById('preview-title').innerText = name;
    
    // Inject custom source badge and description text fields smoothly
    document.getElementById('preview-blurb').innerHTML = `
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #e4a853; margin-bottom: 8px; font-weight: bold;">
             Source: ${sourceText}
        </div>
        <em style="display: block; margin-top: 5px; color: #aaa;">"${description}"</em>
    `;
    
    // Update Mechanics box
    document.getElementById('preview-features').innerHTML = `
        <strong> Features & Benefits:</strong>
        <p style="margin-top: 8px; line-height: 1.4; font-size: 14px;">${mechanics}</p>
    `;
    
    // Core confirmation action button
    document.getElementById('preview-actions').innerHTML = `
        <button class="confirm-choice-btn" onclick="advanceBuilder('${step}', '${name}')">Confirm Selection ✓</button>
    `;
}
// Clear panel between choices
function clearInspector() {
    document.getElementById('preview-title').innerText = "Inspect an Option";
    document.getElementById('preview-blurb').innerText = "Click any option on the left to read its lore, racial traits, or class abilities before making your final selection.";
    document.getElementById('preview-features').innerHTML = "";
    document.getElementById('preview-actions').innerHTML = "";
    const box = document.getElementById('global-spell-box');
    if (box) box.classList.remove('visible');
}

// 3. STEP PROGRESSION LOGIC FRAMEWORK
function advanceBuilder(step, selection) {
    characterDraft[step] = selection;
    clearInspector();

    if (step === "nation") {
        currentStep = "race";
        renderRaceOptions();
    } else if (step === "race") {
        // 1. Grab the specific subraces for the selected race
        const specificSubraces = gameData.races[selection].subraces || {};
        
        // 2. Filter the universal subraces based on the player's chosen nation
        const filteredUniversal = {};
        const playerNation = characterDraft.nation;

        Object.keys(gameData.universalSubraces).forEach(subraceName => {
            const subraceData = gameData.universalSubraces[subraceName];
            
            // If allowedNations exists and isn't empty, check if it includes the player's nation
            if (subraceData.allowedNations && subraceData.allowedNations.length > 0) {
                if (subraceData.allowedNations.includes(playerNation)) {
                    filteredUniversal[subraceName] = subraceData;
                }
            } else {
                // If allowedNations is missing or empty, it is completely unrestricted
                filteredUniversal[subraceName] = subraceData;
            }
        });
        
        // 3. Combine the specific race subraces and the filtered universal subraces
        const combinedSubraces = { ...specificSubraces, ...filteredUniversal };

        // 4. Advance to the subrace screen using our filtered, combined list
        if (Object.keys(combinedSubraces).length > 0) {
            currentStep = "subrace";
            renderSubraceOptions(combinedSubraces);
        } else {
            characterDraft.subrace = "None";
            currentStep = "background";
            renderBackgroundOptions();
        }
    } else if (step === "subrace") {
        currentStep = "background";
        renderBackgroundOptions();
    } else if (step === "background") {
        currentStep = "class";
        renderClassOptions();
    } else if (step === "class") {
        showSummary();
    }
}

// 4. RENDERING LOOPS (Calls inspectOption safely)
function renderNationOptions() {
    document.getElementById('step-title').innerText = "Step 1: Choose Your Nation";
    
    // SHOW the randomizer button at the start
    const randomBtn = document.getElementById('random-btn');
    if (randomBtn) randomBtn.classList.remove('hidden');

    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    Object.keys(gameData.nations).forEach(name => {
        const item = gameData.nations[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("nation", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}

function renderRaceOptions() {
    document.getElementById('step-title').innerText = "Step 2: Choose Your Race";
    
    // HIDE the randomizer button once a nation is picked
    const randomBtn = document.getElementById('random-btn');
    if (randomBtn) randomBtn.classList.add('hidden');

    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    const allowedRaces = gameData.nations[characterDraft.nation].allowedRaces;
    allowedRaces.forEach(name => {
        const item = gameData.races[name];
        if (!item) return;
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("race", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}
function renderSubraceOptions(combinedSubraces) {
    document.getElementById('step-title').innerText = "Step 3: Choose Your Subrace";
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";

    // 1. DYNAMIC CHECK: Look at the player's chosen race in the database
    const chosenRace = characterDraft.race;
    const nativeSubraces = gameData.races[chosenRace].subraces || {};

    // 2. ONLY inject the "None" card if the base race has NO native subraces!
    if (Object.keys(nativeSubraces).length === 0) {
        const noneDiv = document.createElement('div');
        noneDiv.className = "option-card";
        noneDiv.innerHTML = `<strong>None (Standard Ancestry)</strong>`;
        noneDiv.onclick = () => inspectOption(
            "subrace", 
            "None", 
            "You reject external alterations or secondary strains, remaining dedicated entirely to your core ancestry traits.", 
            "No additional subrace features are added to your dossier."
        );
        grid.appendChild(noneDiv);
    }

    // 3. RENDER THE REST OF YOUR COMBINED SUBRACES AS USUAL
    Object.keys(combinedSubraces).forEach(name => {
        const item = combinedSubraces[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        
        const desc = item.desc || "A unique offshoot strain of this ancestral lineage.";
        const mech = item.mechanics || "Grants minor distinct thematic visual identifiers.";
        
        div.onclick = () => inspectOption("subrace", name, desc, mech);
        grid.appendChild(div);
    });
}

function renderBackgroundOptions() {
    document.getElementById('step-title').innerText = "Step 4: Choose Your Background";
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    Object.keys(gameData.backgrounds).forEach(name => {
        const item = gameData.backgrounds[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("background", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}

function renderClassOptions() {
    document.getElementById('step-title').innerText = "Step 5: Choose Your Class";
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    Object.keys(gameData.classes).forEach(name => {
        const item = gameData.classes[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("class", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}

function showSummary() {
    switchView('summary-view');
    const container = document.getElementById('summary-card');
    
    // 1. Fetch data blocks based on choices
    const nationData = gameData.nations[characterDraft.nation] || { mechanics: "", stats: {} };
    const raceData = gameData.races[characterDraft.race] || { mechanics: "", stats: {} };
    
    let subraceData = { mechanics: "", stats: {} };
    if (characterDraft.subrace !== "None") {
        if (gameData.races[characterDraft.race]?.subraces?.[characterDraft.subrace]) {
            subraceData = gameData.races[characterDraft.race].subraces[characterDraft.subrace];
        } else if (gameData.universalSubraces?.[characterDraft.subrace]) {
            subraceData = gameData.universalSubraces[characterDraft.subrace];
        }
    }
    
    const bgData = gameData.backgrounds[characterDraft.background] || { mechanics: "", stats: {} };
    const classData = gameData.classes[characterDraft.class] || { mechanics: "", stats: {} };

    // OBJECT-BASED ABILITY SCORE TALLYING ENGINE
    let scores = { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 };
    let flexibleChoices = [];

    // Collect all active stat blocks into a single array to process safely
    const activeStatBlocks = [
        nationData.stats, 
        raceData.stats, 
        subraceData.stats, 
        bgData.stats, 
        classData.stats
    ];

    // Loop through each active object and add up the raw numbers
    activeStatBlocks.forEach(statObj => {
        if (!statObj || typeof statObj !== 'object') return;
        
        Object.keys(statObj).forEach(key => {
            const stringKey = String(key);

            // 1. Check for standard absolute stats (Strength, Dexterity, etc.)
            if (scores.hasOwnProperty(stringKey)) {
                // Ignore boolean values like 'true' if accidentally typed for core stats
                if (typeof statObj[stringKey] !== 'boolean') {
                    scores[stringKey] += (Number(statObj[stringKey]) || 0);
                }
            } 
            // 2. Check for flexible choice descriptions (like "to any one ability score")
            else if (stringKey.toLowerCase().includes("to any")) {
                const val = statObj[stringKey];
                
                // If the value is a number, print the sign. If it is a boolean, print a clean list entry!
                if (typeof val === 'number') {
                    const sign = val >= 0 ? "+" : "";
                    flexibleChoices.push(`${sign}${val} ${stringKey}`);
                } else {
                    // Strips out "+true" entirely and leaves the text.
                    flexibleChoices.push(`${stringKey}`);
                }
            }
            // 3. Check for choices containing "or". Injects the text choice exactly as written!
            else if (stringKey.toLowerCase().includes(" or ")) {
                flexibleChoices.push(stringKey); 
            }
        });
    });

    // Format calculated stats into a clean text line (e.g., "+2 Constitution, +1 Intelligence")
     let combinedStatsArray = [];
    Object.keys(scores).forEach(stat => {
        if (scores[stat] !== 0) {
            const sign = scores[stat] > 0 ? "+" : ""; 
            combinedStatsArray.push(`${sign}${scores[stat]} ${stat}`);
        }
    });

    // Merge standard numeric score adjustments with flexible text choices strings
    const allFinalStats = combinedStatsArray.concat(flexibleChoices);
    let statsTextLine = allFinalStats.join(", ");

    // RE-RENDERING THE CLASSIC IN-LINE LAYOUT
    let combinedRaceTitle = characterDraft.race;
    if (characterDraft.subrace !== "None") {
        combinedRaceTitle = `${characterDraft.subrace} ${characterDraft.race}`;
    }

    // 1. DYNAMIC TRAIT REMOVAL SYSTEM
    // Start with the default cleaned body (removing original duplicate Ability Score texts)
    let finalRaceBody = raceData.mechanics.replace(/<strong>Ability Score:<\/strong>.*?(<br>|$)/gi, "");

    // Check if the chosen subrace instructs us to remove baseline features
    if (subraceData.removes && Array.isArray(subraceData.removes)) {
        subraceData.removes.forEach(featureName => {
            // This RegExp finds strings starting with <strong>Feature Name:</strong> 
            // and grabs all text up until the next feature break tag (<br>).
            const cleanPattern = new RegExp(`<strong>${featureName}:</strong>.*?(<br>|$)`, "gi");
            finalRaceBody = finalRaceBody.replace(cleanPattern, "");
        });
    }

    // 2. Output formatted dossier list into your HTML container view sheet
    container.innerHTML = `
        <div style="background:#1a1510; padding:25px; border:2px solid #8b5a2b; border-radius:6px; line-height:1.6; text-align:left; box-shadow: inset 0 0 15px rgba(0,0,0,0.6);">
            <h3 style="color:#e4a853; margin-top:0; border-bottom:1px solid #8b5a2b; padding-bottom:8px; font-family:Georgia, serif; text-transform:uppercase; letter-spacing:1px;"> Character Dossier</h3>
            
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Ancestry:</strong> ${combinedRaceTitle}</p>
            
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Nation:</strong> ${characterDraft.nation}<br>
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${nationData.mechanics}</span></p>
               
            <!-- Merged Race Details Section -->
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Race Details:</strong><br>
               ${statsTextLine ? `<span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> <strong>Ability Score Adjustments:</strong> ${statsTextLine}</span><br>` : ''}
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${finalRaceBody}</span>
               ${subraceData.mechanics ? `<br><span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${subraceData.mechanics}</span>` : ''}
            </p>
               
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Background:</strong> ${characterDraft.background}<br>
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${bgData.mechanics}</span></p>
               
            <p style="margin: 12px 0 0 0;"><strong style="color:#e4a853; font-size:16px;"> Class:</strong> ${characterDraft.class}<br>
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${classData.mechanics}</span></p>
        </div>
    `;
}
function generateRandomCharacter() {
    // 1. Pick a random Nation
    const nations = Object.keys(gameData.nations);
    const randomNation = nations[Math.floor(Math.random() * nations.length)];
    
    // 2. Pick a random Allowed Race based on that nation
    const allowedRaces = gameData.nations[randomNation].allowedRaces;
    const randomRace = allowedRaces[Math.floor(Math.random() * allowedRaces.length)];
    
    // 3. Compile the exact same filtered subraces list the manual builder uses
    const specificSubraces = gameData.races[randomRace].subraces || {};
    const filteredUniversal = {};
    
    Object.keys(gameData.universalSubraces).forEach(subraceName => {
        const subraceData = gameData.universalSubraces[subraceName];
        if (subraceData.allowedNations && subraceData.allowedNations.length > 0) {
            if (subraceData.allowedNations.includes(randomNation)) {
                filteredUniversal[subraceName] = subraceData;
            }
        } else {
            filteredUniversal[subraceName] = subraceData;
        }
    });
    
    const combinedSubraces = { ...specificSubraces, ...filteredUniversal };
    
    // 4. Determine Subrace selection safely
    let randomSubrace = "None";
    const subraceKeys = Object.keys(combinedSubraces);
    if (subraceKeys.length > 0) {
        randomSubrace = subraceKeys[Math.floor(Math.random() * subraceKeys.length)];
    }
    
    // 5. Pick random Background and Class
    const randomBg = Object.keys(gameData.backgrounds)[Math.floor(Math.random() * Object.keys(gameData.backgrounds).length)];
    const randomCls = Object.keys(gameData.classes)[Math.floor(Math.random() * Object.keys(gameData.classes).length)];

    // 6. Push to state array and output summary sheet layout
    characterDraft = { 
        nation: randomNation, 
        race: randomRace, 
        subrace: randomSubrace, 
        background: randomBg, 
        class: randomCls 
    };
    showSummary();
}

function restartBuilder() {
    characterDraft = { nation: "", race: "", subrace: "", background: "", class: "" };
    currentStep = "nation";
    clearInspector();
    switchView('builder-view');
    renderNationOptions();
}

// 6. INITIALIZATION EXECUTION TRIGGER
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('spell-tooltip')) {
        const spellName = e.target.getAttribute('data-spell');
        const spellDescription = spellBook[spellName];

        if (spellDescription) {
            const box = document.getElementById('global-spell-box');
            box.innerHTML = `<strong> ${spellName}:</strong><br><p style="margin:6px 0 0 0;">${spellDescription}</p>`;
            
            // 1. Unhide it instantly so the browser can calculate sizing rules
            box.classList.add('visible');

            // 2. Measure our structural limits
            const linkRect = e.target.getBoundingClientRect();
            const boxWidth = box.offsetWidth || 320;
            const boxHeight = box.offsetHeight || 150;
            const padding = 15; // Safe padding distance away from browser window borders

            // 3. Establish standard ideal location coordinates (Centered right above your link text)
            let leftPosition = linkRect.left + (linkRect.width / 2) - (boxWidth / 2);
            let topPosition = linkRect.top - boxHeight - 10;

            // --- HORIZONTAL BOUNDS PROTECTION ---
            if (leftPosition < padding) {
                leftPosition = padding;
            }
            if (leftPosition + boxWidth > window.innerWidth - padding) {
                leftPosition = window.innerWidth - boxWidth - padding;
            }

            // --- VERTICAL BOUNDS PROTECTION ---
            if (topPosition < padding) {
                topPosition = linkRect.bottom + 10;
            }
            if (topPosition + boxHeight > window.innerHeight - padding) {
                topPosition = window.innerHeight - boxHeight - padding;
            }

            // 4. Anchor style coordinates directly onto window sheet layout
            box.style.left = leftPosition + 'px';
            box.style.top = topPosition + 'px';
        }
    }
});

document.addEventListener('mouseout', function(e) {
    const box = document.getElementById('global-spell-box');
    const movingTo = e.relatedTarget;
    
    // 1. Safety Check: If moving from the link INTO the box, or moving INSIDE the box, freeze state!
    if (box && box.contains(movingTo)) return;
    if (e.target.closest('#global-spell-box') && (movingTo && (movingTo.classList.contains('spell-tooltip') || box.contains(movingTo)))) return;

    // 2. Global Clear: If leaving the link or leaving the spell-box entirely, turn it off instantly
    if (e.target.classList.contains('spell-tooltip') || e.target.closest('#global-spell-box')) {
        if (box) box.classList.remove('visible');
    }
});

// Kickoff Engine Initialization Frame
renderNationOptions();