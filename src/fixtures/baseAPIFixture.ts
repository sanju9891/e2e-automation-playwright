import { mergeExpects } from '@playwright/test';
import { expect as typesExpect } from 'src/api/fixtures/typesExpect';
import { expect as statusesExpect } from 'src/api/fixtures/statusesExpect';

export { test } from '@playwright/test';

export const expect = mergeExpects(typesExpect, statusesExpect);
