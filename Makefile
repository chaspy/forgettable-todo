up:
	docker-compose down
	docker-compose up

build:
	docker-compose build

dev:
	docker-compose -f docker-compose-dev.yaml down
	docker-compose -f docker-compose-dev.yaml up

dev-build:
	docker-compose -f docker-compose-dev.yaml down
	docker-compose -f docker-compose-dev.yaml build
