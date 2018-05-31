#!/usr/bin/env bash


echo 'Creating environment copies'

pwd

BASE_DIR=./dists


rm -rf ${BASE_DIR}

mkdir -p ${BASE_DIR}


cp -rp ./dist/ ./${BASE_DIR}/dist-functionalci
cp -rp ./dist/ ./${BASE_DIR}/dist-realdev
cp -rp ./dist/ ./${BASE_DIR}/dist-realstaging
cp -rp ./dist/ ./${BASE_DIR}/dist-realprod

#sed -i -e 's/http:\/\/localhost\:5000/https:\/\/api\.dev\.crisiscleanup\.services/g' test.js


replaceProperty() {
  # have to add '' for osx after -i
  find ./dists/${1}/static/js/ -type f -name '*.js' -exec sed -i $2 {} \;
}

# functionalci
replaceProperty 'dist-functionalci' 's/"API_ENDPOINT"/"http:\/\/localhost\:5000"/g'
replaceProperty 'dist-functionalci' 's/"GOOGLE_MAPS_API_KEY"/"AIzaSyAS7GowniFU4IZMZUEw0rVPyzY1EcWGXNU"/g'

# realdev
replaceProperty 'dist-realdev' 's/"API_ENDPOINT"/"https:\/\/dev-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realdev' 's/"API_PHONE_ENDPOINT"/"https:\/\/dev-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realdev' 's/"GOOGLE_MAPS_API_KEY"/"AIzaSyAS7GowniFU4IZMZUEw0rVPyzY1EcWGXNU"/g'

# realstaging
replaceProperty 'dist-realstaging' 's/"API_ENDPOINT"/"https:\/\/staging-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realstaging' 's/"API_PHONE_ENDPOINT"/"https:\/\/staging-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realstaging' 's/"GOOGLE_MAPS_API_KEY"/"AIzaSyAS7GowniFU4IZMZUEw0rVPyzY1EcWGXNU"/g'

# realprod
replaceProperty 'dist-realprod' 's/"API_ENDPOINT"/"https:\/\/prod-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realprod' 's/"API_PHONE_ENDPOINT"/"https:\/\/prod-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realprod' 's/"GOOGLE_MAPS_API_KEY"/"AIzaSyAS7GowniFU4IZMZUEw0rVPyzY1EcWGXNU"/g'

#find ./dists/dist-functionalci/static/js/ -type f \( -name '*.js' -o -name '*.map' \) -exec sed -i '' 's/API_ENDPOINT/http:\/\/localhost\:5000/g' {} \;


pwd
#grep -cr "API_ENDPOINT" dists/**/js
