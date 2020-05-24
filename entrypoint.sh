#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# For production
if [ $RAILS_ENV = "production" ]; then
bundle exec rake assets:precompile
fi

bin/rake db:create db:migrate db:seed

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
