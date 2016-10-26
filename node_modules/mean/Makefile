REPORTER = dot
UI = qunit
TESTS = test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha -u $(UI) -R $(REPORTER) -c -G -b

lib-cov:
	./node_modules/jscoverage/bin/jscoverage src lib-cov

test-cov:	lib-cov
	@MEAN_COVERAGE=1 $(MAKE) test REPORTER=html-cov > coverage.html
	rm -rf lib-cov

test-coveralls:	lib-cov
	echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@MEAN_COVERAGE=1 $(MAKE) test REPORTER=mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js
	rm -rf lib-cov

component-install:
	./node_modules/.bin/component install

component-build:
	./node_modules/.bin/component build

bower-export:
	./node_modules/.bin/component build --standalone mean
	@mv build dist
	@mv dist/build.js dist/mean.js

.PHONY: test