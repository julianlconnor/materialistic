REPORTER = dot

lint:
	@./node_modules/.bin/jshint lib/ test/

test: lint
	@./node_modules/.bin/mocha --reporter $(REPORTER)

setup:
	@npm install
