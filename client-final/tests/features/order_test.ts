Feature('Order');

Scenario('Order', ({ I }) => {
  I.amOnPage('/');

  I.click('Login');

  I.fillField('email', 'swyks11@naver.com');
  I.fillField('password', 'test1234');

  I.click('로그인', { css: 'form' });

  I.waitForText('Cart');

  I.amOnPage('/cart');

  I.click('주문하기');

  I.fillField('이름', '홍길동');

  I.click('우편번호검색');

  I.waitForElement('[title="우편번호서비스 레이어 프레임"]');

  I.switchTo('#address-search-container iframe');
  I.switchTo('iframe');

  I.fillField('#region_name', '상원12길 34');
  I.pressKey('Enter');

  I.wait(3);

  I.click('.txt_addr');

  I.switchTo();

  I.dontSee('#address-search-container');

  I.fillField('상세주소', 'ㅇㅇㅇ호');
  I.fillField('전화번호', '010-1234-5678');
});
