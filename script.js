//Object to temporarily hold the user's active choice
let characterDraft = {
	nation: "",
	race: "",
	subrace: "",
	background: "",
    class: "",
    choiceSelections: {
        skills: [],
        proficiencies: [],
        languages: [],
    }
};

let currentStep = "nation";

function inferCreatureType(mechanics) {
    const typeMatch = mechanics?.match(/<strong>\s*Type:?\s*<\/strong>\s*([^.<]+)/i);
    if (!typeMatch) return "Humanoid";

    return typeMatch[1]
        .trim()
        .replace(/^you are an?\s+/i, "")
        .replace(/^an?\s+/i, "")
        .replace(/^./, character => character.toUpperCase());
}

function asArray(value) {
    if (value == null) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "string") {
        return value
            .split(/[\n,]/)
            .map(item => item.trim())
            .filter(Boolean);
    }
    if (typeof value === "object") {
        return Object.keys(value);
    }
    return [value];
}

function normalizeDataEntry(entry, inferType = false) {
    if (!entry || typeof entry !== "object") return;

    if (inferType && !entry.type) {
        entry.type = inferCreatureType(entry.mechanics);
    }

    entry.languages = asArray(entry.languages);
    entry.proficiencies = asArray(entry.proficiencies);
    entry.fixedLanguages = asArray(entry.fixedLanguages);
    entry.fixedSkills = asArray(entry.fixedSkills);
    entry.fixedProficiencies = asArray(entry.fixedProficiencies);
    entry.fixedToolProficiencies = asArray(entry.fixedToolProficiencies);
    entry.features ||= {};
    entry.subraces ||= {};

    Object.values(entry.subraces).forEach(subrace => normalizeDataEntry(subrace));
}

function normalizeGameData() {
    Object.values(gameData.races).forEach(race => normalizeDataEntry(race, true));
    Object.values(gameData.universalSubraces).forEach(subrace => normalizeDataEntry(subrace));
    Object.values(gameData.nations).forEach(nation => normalizeDataEntry(nation));
    Object.values(gameData.backgrounds).forEach(background => normalizeDataEntry(background));
    Object.values(gameData.classes).forEach(characterClass => normalizeDataEntry(characterClass));
}

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

// STEP PROGRESSION LOGIC FRAMEWORK
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

// RENDERING LOOPS (Calls inspectOption safely)
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

function buildCharacterSummary(chosenRaceKey, chosenSubraceKey) {
    const baseRace = gameData.races[chosenRaceKey] || {};
    const subrace = baseRace.subraces?.[chosenSubraceKey] || gameData.universalSubraces?.[chosenSubraceKey] || {};

    return {
        proficiencies: [
            ...(baseRace.proficiencies || []),
            ...(subrace.proficiencies || [])
        ],
        languages: Array.from(new Set([
            ...(baseRace.languages || []),
            ...(subrace.languages || [])
        ])),
        features: {
            ...(baseRace.features || {}),
            ...(subrace.features || {})
        }
    };
}

function getCharacterSourceData() {
    const race = gameData.races[characterDraft.race] || {};
    const subrace = race.subraces?.[characterDraft.subrace] || gameData.universalSubraces?.[characterDraft.subrace] || {};

    return [
        race,
        subrace,
        gameData.nations[characterDraft.nation] || {},
        gameData.backgrounds[characterDraft.background] || {},
        gameData.classes[characterDraft.class] || {}
    ];
}

function catalogName(library, key) {
    if (library[key]) return library[key].name || key;

    const normalizedKey = normalizeCatalogValue(key);
    const matchingKey = Object.keys(library).find(candidate =>
        normalizeCatalogValue(candidate) === normalizedKey ||
        normalizeCatalogValue(library[candidate]?.name) === normalizedKey
    );
    return library[matchingKey]?.name || key;
}

function normalizeCatalogValue(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function skillKey(value) {
    const normalizedValue = normalizeCatalogValue(value);
    const skillMatch = Object.keys(SKILL_LIBRARY).find(key =>
        normalizeCatalogValue(key) === normalizedValue ||
        normalizeCatalogValue(SKILL_LIBRARY[key].name) === normalizedValue
    );
    if (skillMatch) return skillMatch;

    return Object.keys(PROFICIENCY_LIBRARY).find(key =>
        normalizeCatalogValue(key) === normalizedValue ||
        normalizeCatalogValue(PROFICIENCY_LIBRARY[key].name) === normalizedValue
    ) || value;
}

function isSkillProficiency(value) {
    const key = skillKey(value);
    return Boolean(SKILL_LIBRARY[key]) ||
        PROFICIENCY_LIBRARY[key]?.category === "Skill" ||
        PROFICIENCY_LIBRARY[key]?.catagory === "Skill";
}

function skillName(key) {
    return catalogName(SKILL_LIBRARY, key) === key
        ? catalogName(PROFICIENCY_LIBRARY, key)
        : catalogName(SKILL_LIBRARY, key);
}

function choiceKeys(rule, library) {
    if (!rule) return [];
    if (rule.options === "all") return Object.keys(library);
    if (Array.isArray(rule.options)) return rule.options;

    if (rule.options && typeof rule.options === "object") {
        if (rule.options.category) {
            const categoryKeys = Object.keys(library).filter(key =>
                library[key]?.category === rule.options.category
            );
            return Array.isArray(rule.options.include)
                ? categoryKeys.filter(key => rule.options.include.includes(key))
                : categoryKeys;
        }

        return Object.keys(library).filter(key =>
            (rule.options.type && library[key]?.type === rule.options.type) ||
            rule.options.include?.includes(key)
        );
    }

    return [];
}

function compileCharacterRace(chosenRaceKey, chosenUniversalSubraceKey) {
    const baseRace = gameData.races[chosenRaceKey] || {};
    const universalSubrace = gameData.universalSubraces?.[chosenUniversalSubraceKey] || {};
    const nativeSubrace = baseRace.subraces?.[chosenUniversalSubraceKey] || {};
    const selectedSubrace = Object.keys(nativeSubrace).length > 0 ? nativeSubrace : universalSubrace;

    return {
        raceName: chosenRaceKey,
        subraceName: selectedSubrace.name || chosenUniversalSubraceKey || "None",
        creatureType: selectedSubrace.typeOverride ?? baseRace.type ?? "Humanoid",
        features: {
            ...(baseRace.features || {}),
            ...(selectedSubrace.features || {})
        }
    };
}

function compileCharacterSummary() {
    const allSources = getCharacterSourceData();
    const raceSource = gameData.races[characterDraft.race] || {};
    const subraceSource = raceSource.subraces?.[characterDraft.subrace] || gameData.universalSubraces?.[characterDraft.subrace] || {};
    const backgroundSource = gameData.backgrounds[characterDraft.background] || {};
    const classSource = gameData.classes[characterDraft.class] || {};
    const grantedSources = [raceSource, subraceSource, backgroundSource, classSource];
    const compiledRace = compileCharacterRace(characterDraft.race, characterDraft.subrace);
    const selected = characterDraft.choiceSelections || { languages: [], skills: [], proficiencies: [] };
    const languageKeys = [];
    const skillKeys = [];
    const proficiencyKeys = [];
    const features = {};
    const choiceRules = [];

    grantedSources.forEach(source => {
        languageKeys.push(...asArray(source.languages), ...asArray(source.fixedLanguages));
        skillKeys.push(...asArray(source.fixedSkills).map(skillKey));
        const sourceProficiencies = [
            ...asArray(source.proficiencies),
            ...asArray(source.fixedProficiencies),
            ...asArray(source.fixedToolProficiencies)
        ];
        skillKeys.push(...sourceProficiencies.filter(isSkillProficiency).map(skillKey));
        proficiencyKeys.push(...sourceProficiencies.filter(value => !isSkillProficiency(value)));
        Object.assign(features, source.features || {});
    });

    allSources.forEach(source => {
        [
            ["languages", source.choiceLanguages, LANGUAGE_LIBRARY],
            ["skills", source.choiceSkills, SKILL_LIBRARY],
            ["proficiencies", source.choiceProficiencies, PROFICIENCY_LIBRARY],
            ["proficiencies", source.choiceToolProficiencies, PROFICIENCY_LIBRARY]
        ].forEach(([kind, rule, library]) => {
            if (rule) choiceRules.push({ kind, rule, library });
        });
    });

    languageKeys.push(...selected.languages);
    skillKeys.push(...selected.skills);
    skillKeys.push(...selected.proficiencies.filter(isSkillProficiency).map(skillKey));
    proficiencyKeys.push(...selected.proficiencies.filter(value => !isSkillProficiency(value)));

    return {
        languages: Array.from(new Set(languageKeys)).map(key => catalogName(LANGUAGE_LIBRARY, key)),
        skills: Array.from(new Set(skillKeys)).map(skillName),
        proficiencies: Array.from(new Set(proficiencyKeys)).map(key => catalogName(PROFICIENCY_LIBRARY, key)),
        features,
        choiceRules,
        creatureType: compiledRace.creatureType
    };
}

function buildCharacterSelectionState() {
    const sources = getCharacterSourceData();
    const selected = characterDraft.choiceSelections || { languages: [], skills: [], proficiencies: [] };
    const state = {
        fixed: { languages: [], skills: [], proficiencies: [] },
        choices: {
            languages: [...selected.languages],
            skills: [...selected.skills],
            proficiencies: [...selected.proficiencies]
        },
        expertise: []
    };

    sources.forEach(source => {
        state.fixed.languages.push(...asArray(source.languages), ...asArray(source.fixedLanguages));
        state.fixed.skills.push(...asArray(source.fixedSkills).map(skillKey));
        const sourceProficiencies = [
            ...asArray(source.proficiencies),
            ...asArray(source.fixedProficiencies),
            ...asArray(source.fixedToolProficiencies)
        ];
        state.fixed.skills.push(...sourceProficiencies.filter(isSkillProficiency).map(skillKey));
        state.fixed.proficiencies.push(...sourceProficiencies.filter(value => !isSkillProficiency(value)));
        state.expertise.push(...asArray(source.expertise));
    });

    return state;
}

function validateCharacterSelection(state) {
    const errors = [];
    const warnings = [];
    const duplicateMessage = (category, key) => `Duplicate ${category}: "${catalogName(category === "languages" ? LANGUAGE_LIBRARY : category === "skills" ? SKILL_LIBRARY : PROFICIENCY_LIBRARY, key)}".`;

    ["languages", "skills", "proficiencies"].forEach(category => {
        const allValues = [...state.fixed[category], ...state.choices[category]];
        const seen = new Set();
        allValues.forEach(value => {
            if (seen.has(value)) {
                errors.push(duplicateMessage(category, value));
            }
            seen.add(value);
        });
    });

    state.expertise.forEach(key => {
        if (!state.fixed.skills.includes(key) && !state.fixed.proficiencies.includes(key) && !state.choices.skills.includes(key) && !state.choices.proficiencies.includes(key)) {
            warnings.push(`Expertise "${catalogName(SKILL_LIBRARY, key)}" has no matching proficiency.`);
        }
    });

    return { isValid: errors.length === 0, errors, warnings };
}

function updateDropdownOptionsInUI(state) {
    ["languages", "skills", "proficiencies"].forEach(category => {
        const fixed = new Set(state.fixed[category]);
        const choices = new Set(state.choices[category]);
        const claimed = new Set([...fixed, ...choices]);
        document.querySelectorAll(`.character-choice[data-kind="${category}"]`).forEach(select => {
            const currentValues = new Set(Array.from(select.selectedOptions, option => option.value));
            Array.from(select.options).forEach(option => {
                if (fixed.has(option.value)) {
                    option.selected = false;
                    option.disabled = true;
                    return;
                }

                const isClaimed = claimed.has(option.value);
                const isCurrentlySelected = currentValues.has(option.value);

                option.disabled = isClaimed && !isCurrentlySelected;
            });
        });
    });
}

function renderValidationMessages(validation) {
    if (validation.isValid && validation.warnings.length === 0) return "";
    const errors = validation.errors.map(error => `<li>${error}</li>`).join("");
    const warnings = validation.warnings.map(warning => `<li>${warning}</li>`).join("");
    return `<div style="color:#f2b4a8; margin:8px 0;"><strong>Selection checks:</strong><ul>${errors}${warnings}</ul></div>`;
}

function captureChoiceSelections() {
    const selections = { languages: [], skills: [], proficiencies: [] };
    document.querySelectorAll(".character-choice").forEach(select => {
        const quantity = Number(select.dataset.quantity) || 1;
        selections[select.dataset.kind].push(...Array.from(select.selectedOptions, option => option.value).slice(0, quantity));
    });
    characterDraft.choiceSelections = selections;
    showSummary();
}

function renderChoiceControls(choiceRules) {
    if (choiceRules.length === 0) return "";

    const state = buildCharacterSelectionState();

    const controls = choiceRules.map(({ kind, rule, library }, index) => {
        const options = choiceKeys(rule, library);
        const fixedValues = new Set(state.fixed[kind] || []);
        const selected = new Set(characterDraft.choiceSelections?.[kind] || []);

        const optionMarkup = options.map(key => {
            const isFixed = fixedValues.has(key);
            const isSelected = selected.has(key) && !isFixed;
            return `<option value="${key}" ${isSelected ? "selected" : ""} ${isFixed ? "disabled" : ""}>${catalogName(library, key)}</option>`;
        }).join("");

        const label = kind.charAt(0).toUpperCase() + kind.slice(1);
        const quantity = rule.quantity || 1;
        const select = `<select aria-label="${label} choices" class="character-choice" data-kind="${kind}" data-choice-index="${index}" data-quantity="${quantity}" multiple size="${Math.min(Math.max(options.length, 2), 5)}" onchange="captureChoiceSelections()">${optionMarkup}</select>`;

        if (kind === "languages") {
            return `<details style="margin:8px 15px; color:#bfa88f;"><summary style="cursor:pointer; color:#e4a853;">Languages (${quantity})</summary>${select}</details>`;
        }

        return `<label style="display:block; margin-top:8px;">${label} (${quantity})<br>${select}</label>`;
    }).join("");

    return `<details style="margin:8px 15px; color:#bfa88f;"><summary style="cursor:pointer; color:#e4a853;">Choose Traits</summary>${controls}</details>`;
}

function renderStructuredTraits(summary) {
    const sections = [];

    if (summary.skills.length > 0 || summary.proficiencies.length > 0) {
        const proficiencies = [...summary.skills, ...summary.proficiencies];
        sections.push(`<strong>Skills &amp; Proficiencies:</strong> ${proficiencies.join(", ")}`);
    }

    const featureEntries = Object.entries(summary.features);
    if (featureEntries.length > 0) {
        sections.push(`<strong>Features:</strong><ul>${featureEntries.map(([name, description]) => `<li><strong>${name}:</strong> ${description}</li>`).join("")}</ul>`);
    }

    return sections.join("<br>");
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
    const structuredCharacterSummary = compileCharacterSummary();
    const structuredTraits = renderStructuredTraits(structuredCharacterSummary);
    const choiceControls = renderChoiceControls(structuredCharacterSummary.choiceRules);
    const validation = validateCharacterSelection(buildCharacterSelectionState());
    const validationMessages = renderValidationMessages(validation);

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
    // Keep structured ability scores and languages out of the raw mechanics text.
    const stripLanguageLine = mechanics =>
        (mechanics || "").replace(/<strong>\s*Languages?:\s*<\/strong>.*?(<br>|$)/gi, "");
    let finalRaceBody = stripLanguageLine(raceData.mechanics)
        .replace(/<strong>Ability Score:<\/strong>.*?(<br>|$)/gi, "");
    const finalSubraceBody = stripLanguageLine(subraceData.mechanics);
    const finalBackgroundBody = stripLanguageLine(bgData.mechanics);
    const finalClassBody = stripLanguageLine(classData.mechanics);

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
                    <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> <strong>Creature Type:</strong> ${structuredCharacterSummary.creatureType}</span><br>
               ${statsTextLine ? `<span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> <strong>Ability Score Adjustments:</strong> ${statsTextLine}</span><br>` : ''}
               ${validationMessages}
               ${structuredTraits ? `<span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${structuredTraits}</span><br>` : ''}
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${finalRaceBody}</span>
               ${finalSubraceBody ? `<br><span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${finalSubraceBody}</span>` : ''}
               ${structuredCharacterSummary.languages.length ? `<br><span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"><strong>Languages:</strong> ${structuredCharacterSummary.languages.join(", ")}</span>` : ''}
               </p>

                ${choiceControls}
               
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Background:</strong> ${characterDraft.background}<br>
                    <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${finalBackgroundBody}</span></p>
               
            <p style="margin: 12px 0 0 0;"><strong style="color:#e4a853; font-size:16px;"> Class:</strong> ${characterDraft.class}<br>
                    <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${finalClassBody}</span></p>
        </div>
    `;
    updateDropdownOptionsInUI(buildCharacterSelectionState());
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
    characterDraft = {
        nation: "",
        race: "",
        subrace: "",
        background: "",
        class: "",
        choiceSelections: { languages: [], skills: [], proficiencies: [] }
    };
    currentStep = "nation";
    clearInspector();
    switchView('builder-view');
    renderNationOptions();
}

// INITIALIZATION EXECUTION TRIGGER
let spellHideTimeout;

document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('spell-tooltip')) {
        clearTimeout(spellHideTimeout);

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
    } else if (e.target.closest('#global-spell-box')) {
        clearTimeout(spellHideTimeout);
    }
});

document.addEventListener('mouseout', function(e) {
    const box = document.getElementById('global-spell-box');
    const movingTo = e.relatedTarget;
    
    // Allow time to cross the gap between the fixed tooltip and its source link.
    if (e.target.classList.contains('spell-tooltip') || e.target.closest('#global-spell-box')) {
        if (movingTo && (movingTo.classList.contains('spell-tooltip') || box.contains(movingTo))) return;

        clearTimeout(spellHideTimeout);
        spellHideTimeout = setTimeout(() => {
            box.classList.remove('visible');
        }, 200);
    }
});

// Kickoff Engine Initialization Frame
normalizeGameData();
renderNationOptions();