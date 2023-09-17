import {device, element, by, waitFor} from 'detox';
describe('Demo', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should see the page title', async () => {
    await expect(element(by.id('screen-title'))).toBeVisible();
  });
});
