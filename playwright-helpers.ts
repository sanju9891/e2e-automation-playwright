import test from '@playwright/test';

export function step(stepName?: string) {
	// Refer: https://www.checklyhq.com/learn/playwright/steps-decorators/
	// 1. Make `@step` executable to enable function arguments
	// 2. Return the original decorator
	return function decorator(
		target: Function,
		context: ClassMethodDecoratorContext
	) {
		return function replacementMethod(...args: any) {
			// 3. Use `stepName` when it's defined or
			// fall back to class name / method name
			const name =
				stepName || `${this.constructor.name + '.' + (context.name as string)}`;
			return test.step(name, async () => {
				return await target.call(this, ...args);
			});
		};
	};
}
