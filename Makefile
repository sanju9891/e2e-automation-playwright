TEST_ENV ?= staging
WORKERS ?= 4

api-test:
	TEST_ENV=$(TEST_ENV) npx playwright test --project="api-test" --workers=$(WORKERS)

e2e-test:
	TEST_ENV=$(TEST_ENV) npx playwright test --project="e2e-test" --workers=$(WORKERS)

visual-test:
	TEST_ENV=$(TEST_ENV) npx playwright test --project="visual-test" --workers=$(WORKERS)

smoke-test:
	TEST_ENV=$(TEST_ENV) npx playwright test --grep "@smoke" --workers=$(WORKERS)

regression-test:
	TEST_ENV=$(TEST_ENV) npx playwright test --workers=$(WORKERS)

last-failed-test:
	TEST_ENV=$(TEST_ENV) npx playwright test --last-failed

count-tests:
	npx playwright test --list

test:
ifeq ($(TEST_TYPE), regression-test)
	@echo "Running regression-test in $(TEST_ENV) environment using $(WORKERS) workers"
	TEST_ENV=$(TEST_ENV) npx playwright test --workers=$(WORKERS)
else ifeq ($(TEST_TYPE), smoke-test)
	@echo "Running smoke-test in $(TEST_ENV) environment using $(WORKERS) workers, exclude: visual-test
	TEST_ENV=$(TEST_ENV) npx playwright test --grep "@smoke" --workers=$(WORKERS)
else
	@echo "Running '$(TEST_TYPE)' in $(TEST_ENV) environment using $(WORKERS) workers"
	TEST_ENV=$(TEST_ENV) npx playwright test --project="$(TEST_TYPE)" --workers=$(WORKERS)
endif
