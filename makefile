setup: install

install:
	sudo npm ci

build:
	npm run build

test:
	ACTIONS_RUNNER_DEBUG=1 npx jest

brain-games:
	node bin/brain-games.js

publish:
	sudo npm publish --dry-run

lint:
	sudo npx eslint .
