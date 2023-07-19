Feature('LogOut');

Scenario('Logout success', ({ I }) => {
  I.amOnPage('/');

  I.click('Login');

  I.fillField('email', 'swyks11@naver.com');
  I.fillField('password', 'test1234');

  I.click('로그인', { css: 'form' });

  I.waitForText('Cart');

  I.click('logout');

  I.waitForText('Login');

  I.dontSee('Cart');
});
