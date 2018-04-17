#!/bin/sh

# shellcheck disable=SC2086
cd /home/node/testing && exec wait-for --timeout "${WAIT_FOR_TIMEOUT:-10}" $WAIT_FOR_HOSTS -- \
  /home/node/node_modules/.bin/nightwatch "$@"
