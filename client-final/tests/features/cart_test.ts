Feature('Cart');

Scenario('cart', ({ I }) => {
  I.amOnPage('/');

  I.click('Login');

  I.fillField('email', 'swyks11@naver.com');
  I.fillField('password', 'test1234');

  I.click('로그인', { css: 'form' });

  I.waitForText('Cart');

  I.click('Cart');

  I.see('장바구니');
});

Scenario('Add to cart', ({ I }) => {
  I.amOnPage('/');

  I.click('Login');

  I.fillField('email', 'swyks11@naver.com');
  I.fillField('password', 'test1234');

  I.click('로그인', { css: 'form' });

  I.waitForText('Cart');

  I.click('Products');

  I.click('CBCL EARRING Silver');

  I.click('장바구니에 담기');

  I.waitForText('장바구니에 담았습니다');

  I.amOnPage('/cart');

  I.see('CBCL EARRING Silver');
});
