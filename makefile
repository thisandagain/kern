build:
	cp ./lib/index.js ./kern.js
	./node_modules/.bin/uglifyjs ./lib/index.js > ./kern.min.js

test:
	tap ./test/governance/*.js

.PHONY: build test