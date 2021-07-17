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

  // it('可以在 Menu 和 Orders tab 之间切换', async () => {
  //   await expect(element(by.id('menu-screen'))).toExist();
  //   await element(by.id('orders-tab')).tap();
  //   await expect(element(by.id('orders-list'))).toBeVisible();
  //   await element(by.id('menu-tab')).tap();
  //   await expect(element(by.id('menu-screen'))).toExist();
  // });

  // it('可以查看用户的订单', async () => {
  //   await element(by.id('orders-tab')).tap();
  //   await expect(
  //     element(by.id('order-item').withDescendant(by.text('订单状态: 已派送'))),
  //   ).toBeVisible();
  // });

  it('购买紫盒', async () => {
    await element(by.text('下单').withAncestor(by.id('purpleBox'))).tap();
    await element(by.text('大')).tap();
    // wouldnt really do this because the price of pizza can change
    await expect(element(by.id('total'))).toHaveText('$28');
    await element(by.id('order-button')).tap();
    await expect(
      element(by.id('order-item').withDescendant(by.text('purpleBox'))),
    ).toExist();
  });

  // it('自选帝王蟹、叉烧、青瓜炒肉', async () => {
  //   await expect(element(by.id('menu-screen'))).toExist();
  //   await element(by.text('自选')).tap();
  //   await element(by.text('帝王蟹')).tap();
  //   await element(by.text('叉烧')).tap();
  //   await element(by.text('青瓜炒肉')).tap();
  //   await expect(
  //     element(by.text('帝王蟹').withAncestor(by.id('selected-toppings'))),
  //   ).toExist();
  //   await expect(
  //     element(by.text('叉烧').withAncestor(by.id('selected-toppings'))),
  //   ).toExist();
  //   await expect(
  //     element(by.text('青瓜炒肉').withAncestor(by.id('selected-toppings'))),
  //   ).toExist();
  //   await expect(element(by.id('total'))).toHaveText('¥20');
  //   await element(by.text('叉烧')).tap();
  //   await expect(
  //     element(by.text('叉烧').withAncestor(by.id('available-toppings'))),
  //   ).toExist();
  //   await expect(element(by.id('total'))).toHaveText('¥18');
  // });
});
