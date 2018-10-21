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
replaceProperty 'dist-functionalci' 's/"LEAFLET_MAP_APP_ID"/"OxegEAQ46ansqN9LtNd1"/g'
replaceProperty 'dist-functionalci' 's/"LEAFLET_MAP_APP_CODE"/"86XV8M-pIbpy5TUa9H_Aww"/g'
replaceProperty 'dist-functionalci' 's/"PITNEYBOWES_API_KEY"/"sFDDfMzkX8Ior1oIYR8PhxVm9MjwbGpy"/g'
replaceProperty 'dist-functionalci' 's/"PITNEYBOWES_BASIC_AUTH_TOKEN"/"c0ZERGZNemtYOElvcjFvSVlSOFBoeFZtOU1qd2JHcHk6ckdCUmtObUF1YkxWS01CTw=="/g'

# realdev
replaceProperty 'dist-realdev' 's/"API_ENDPOINT"/"https:\/\/dev-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realdev' 's/"API_PHONE_ENDPOINT"/"https:\/\/dev-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realdev' 's/"LEAFLET_MAP_APP_ID"/"OxegEAQ46ansqN9LtNd1"/g'
replaceProperty 'dist-realdev' 's/"LEAFLET_MAP_APP_CODE"/"86XV8M-pIbpy5TUa9H_Aww"/g'
replaceProperty 'dist-realdev' 's/"PITNEYBOWES_API_KEY"/"sFDDfMzkX8Ior1oIYR8PhxVm9MjwbGpy"/g'
replaceProperty 'dist-realdev' 's/"PITNEYBOWES_BASIC_AUTH_TOKEN"/"c0ZERGZNemtYOElvcjFvSVlSOFBoeFZtOU1qd2JHcHk6ckdCUmtObUF1YkxWS01CTw=="/g'


# realstaging
replaceProperty 'dist-realstaging' 's/"API_ENDPOINT"/"https:\/\/staging-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realstaging' 's/"API_PHONE_ENDPOINT"/"https:\/\/staging-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realstaging' 's/"LEAFLET_MAP_APP_ID"/"OxegEAQ46ansqN9LtNd1"/g'
replaceProperty 'dist-realstaging' 's/"LEAFLET_MAP_APP_CODE"/"86XV8M-pIbpy5TUa9H_Aww"/g'
replaceProperty 'dist-realstaging' 's/"PITNEYBOWES_API_KEY"/"sFDDfMzkX8Ior1oIYR8PhxVm9MjwbGpy"/g'
replaceProperty 'dist-realstaging' 's/"PITNEYBOWES_BASIC_AUTH_TOKEN"/"c0ZERGZNemtYOElvcjFvSVlSOFBoeFZtOU1qd2JHcHk6ckdCUmtObUF1YkxWS01CTw=="/g'

# realprod
replaceProperty 'dist-realprod' 's/"API_ENDPOINT"/"https:\/\/prod-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realprod' 's/"API_PHONE_ENDPOINT"/"https:\/\/prod-api\.crisiscleanup\.services"/g'
replaceProperty 'dist-realprod' 's/"LEAFLET_MAP_APP_ID"/"OxegEAQ46ansqN9LtNd1"/g'
replaceProperty 'dist-realprod' 's/"LEAFLET_MAP_APP_CODE"/"86XV8M-pIbpy5TUa9H_Aww"/g'
replaceProperty 'dist-realprod' 's/"PITNEYBOWES_API_KEY"/"sFDDfMzkX8Ior1oIYR8PhxVm9MjwbGpy"/g'
replaceProperty 'dist-realprod' 's/"PITNEYBOWES_BASIC_AUTH_TOKEN"/"c0ZERGZNemtYOElvcjFvSVlSOFBoeFZtOU1qd2JHcHk6ckdCUmtObUF1YkxWS01CTw=="/g'

#find ./dists/dist-functionalci/static/js/ -type f \( -name '*.js' -o -name '*.map' \) -exec sed -i '' 's/API_ENDPOINT/http:\/\/localhost\:5000/g' {} \;


pwd
#grep -cr "API_ENDPOINT" dists/**/js
