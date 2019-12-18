SHELL := /bin/bash
include .env 

.PHONY: clean
clean:
	rm -rf ./bin ./vendor Gopkg.lock

.PHONY: run
run:
	cp .env.dev .env
	source .env
	sls offline start --stage dev -v

.PHONY: deployDev
deployDev:
	mv serverless.yml serverless1.yml
	cp .env.dev .env
	source .env
	sls deploy --stage dev --app nse --basepath nse -v
