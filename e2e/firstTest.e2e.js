/* eslint-disable no-undef */
describe('App', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  afterAll(async () => {
    await device.terminateApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('1 plus 1 should be 2', async () => {
    // 找到 demo tab 的 id
    await expect(element(by.id('demo-tab'))).toExist();
    // 模拟点击 demo Tab
    await element(by.id('demo-tab')).tap();
    // demo 页面渲染完成
    await expect(element(by.id('demo-screen'))).toBeVisible();
    // 模拟点击回答按钮
    await element(by.id('answerBtn')).tap();
    // 显示结果是否与预期一致
    await expect(element(by.id('answerText'))).toHaveText('2');
  });
});
