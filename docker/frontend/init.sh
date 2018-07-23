#!/bin/bash
FILE="/app/package.json"

if [ -f "$FILE" ]; then
     echo "Starting project"
     npm install
     npm run dev
else
    echo "$DIR is Empty: vue-cli init"
    cd /app
    yes | vue init webpack .
    npm install
    npm run dev
fi
# rest of the logic