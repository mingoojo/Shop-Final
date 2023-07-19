// Scenario('Signup success', ({ I }) => {
//   I.amOnPage('/');

//   I.click('Signup');

//   I.fillField('email', 'newbie@example.com');
//   I.fillField('name', 'Newbie');
//   I.fillField('password', 'password');
//   I.fillField('passwordConfirmation', 'password');

//   I.click('가입하기', { css: 'form' });

//   I.waitForText('회원 가입이 완료되었습니다');
// });

Scenario('Email has been already taken', ({ I }) => {
  I.amOnPage('/');

  I.click('Signup');

  I.fillField('email', 'newbie@example.com');
  I.fillField('name', 'Newbie');
  I.fillField('password', 'password');
  I.fillField('passwordConfirmation', 'password');

  I.click('가입하기', { css: 'form' });

  I.waitForText('가입에 실패했습니다.');
});
