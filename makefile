build:
	./node_modules/.bin/browserify ./lib/index.js > ./kern.js
	./node_modules/.bin/uglifyjs ./kern.js > ./kern.min.js

test:
	tap ./test/governance/*.js

.PHONY: build test