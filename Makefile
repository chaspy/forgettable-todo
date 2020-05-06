up:
	docker-compose up

build:
	docker-compose build
	docker-compose run web bin/rake db:create db:migrate db:seed
