import sqlite3
from pathlib import Path


DB_PATH = Path(__file__).with_name("personal.db")


def get_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def initialize_database() -> None:
    with get_connection() as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS records (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                category TEXT,
                details TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE INDEX IF NOT EXISTS idx_records_name
            ON records(name);

            CREATE INDEX IF NOT EXISTS idx_records_category
            ON records(category);

            CREATE TRIGGER IF NOT EXISTS update_records_updated_at
            AFTER UPDATE ON records
            FOR EACH ROW
            BEGIN
                UPDATE records
                SET updated_at = CURRENT_TIMESTAMP
                WHERE id = OLD.id;
            END;
            """
        )


def add_record(name: str, category: str = "", details: str = "") -> int:
    name = name.strip()
    if not name:
        raise ValueError("Name cannot be empty")

    with get_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO records (name, category, details)
            VALUES (?, ?, ?)
            """,
            (name, category.strip(), details.strip()),
        )
        return cursor.lastrowid


def get_records() -> list[sqlite3.Row]:
    with get_connection() as connection:
        return connection.execute(
            "SELECT * FROM records ORDER BY id"
        ).fetchall()


if __name__ == "__main__":
    initialize_database()
    print(f"Database ready: {DB_PATH}")
