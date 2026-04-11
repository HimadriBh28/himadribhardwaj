#!/bin/bash

# Fix imports in all JS files
find src -name "*.js" -type f -exec sed -i '' 's/from '\''\.\/components\/\([^'\'']*\)\.jsx'\''/from '\''\.\/components\/\1'\''/g' {} +
find src -name "*.js" -type f -exec sed -i '' 's/from '\''\.\/pages\/\([^'\'']*\)\.jsx'\''/from '\''\.\/pages\/\1'\''/g' {} +
find src -name "*.js" -type f -exec sed -i '' 's/from '\''\.\/\([^'\'']*\)\.jsx'\''/from '\''\.\/\1'\''/g' {} +

echo "Imports fixed!"
