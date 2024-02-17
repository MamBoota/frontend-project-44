install:
	sudo npm ci

build:
	npm run build

test:
	ACTIONS_RUNNER_DEBUG=1 npx jest

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

publish:
	sudo npm publish --dry-run

fix:
	npm run lint -- --fix

link:
	sudo npm link

eslint:
	sudo npx eslint .
