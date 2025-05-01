export {};

declare global {
	namespace PlaywrightTest {
		interface Matchers<R> {
			toBeNumber(): R;
			toBeString(): R;
			toHaveOKStatus(): R;
			toHaveCreatedStatus(): R;
			toHaveNoContentStatus(): R;
			toHaveUnauthorizedStatus(): R;
			toHaveForbiddenStatus(): R;
			toHaveNotFoundStatus(): R;
			toHaveUnprocessableContentStatus(): R;
		}
	}
}
