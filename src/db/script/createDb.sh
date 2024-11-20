#!/bin/bash

# Get the directory of the current script
SCRIPT_DIR=$(dirname "$(realpath "$0")")

# Move one level up from the script directory 
PARENT_DIR=$(dirname "$SCRIPT_DIR")

# Database file
DB_FILE="$PARENT_DIR/cubsReview.db"

# Check if database file exists
if [ ! -f "$DB_FILE" ]; then
  # Create the SQLite database
  sqlite3 "$DB_FILE" <<EOF
  -- Create the CafeReview table
  CREATE TABLE IF NOT EXISTS CafeReview (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    User TEXT NOT NULL,
    Cafe TEXT NOT NULL,
    Product TEXT NOT NULL,
    Score INTEGER NOT NULL
  );
EOF

  echo "Database and table created successfully."
else
  echo "Database already exists."

  # Check if the table exists
  TABLE_EXISTS=$(sqlite3 "$DB_FILE" "SELECT name FROM sqlite_master WHERE type='table' AND name='CafeReview';")

  if [ -z "$TABLE_EXISTS" ]; then
    # Create the CafeReview table
    sqlite3 "$DB_FILE" <<EOF
    -- Create the CafeReview table
    CREATE TABLE IF NOT EXISTS CafeReview (
      Id INTEGER PRIMARY KEY AUTOINCREMENT,
      User TEXT NOT NULL,
      Cafe TEXT NOT NULL,
      Product TEXT NOT NULL,
      Score INTEGER NOT NULL
    );
EOF
    echo "Table created successfully."
  else
    echo "Table already exists."
  fi
fi
