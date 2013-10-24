build:
	cp ./lib/index.js ./microkern.js
	./node_modules/.bin/uglifyjs ./lib/index.js > ./microkern.min.js

test:
	tap ./test/governance/*.js

.PHONY: build test