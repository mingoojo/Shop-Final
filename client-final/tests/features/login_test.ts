Feature('LogIn');

Scenario('Login success', ({ I }) => {
  I.amOnPage('/');

  I.click('Login');

  I.fillField('email', 'swyks11@naver.com');
  I.fillField('password', 'test1234');

  I.click('로그인', { css: 'form' });

  I.waitForText('Cart');
});

Scenario('Login failed', ({ I }) => {
  I.amOnPage('/');

  I.click('Login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'xxxx');

  I.click('로그인', { css: 'form' });

  I.waitForText('로그인 실패');
});
