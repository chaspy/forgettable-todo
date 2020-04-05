#!/bin/bash
set -eu
docker-compose build
docker-compose run web bin/rake db:create db:migrate db:seed
docker-compose up
