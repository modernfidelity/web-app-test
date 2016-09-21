import { WebAppTestPage } from './app.po';

describe('web-app-test App', function() {
  let page: WebAppTestPage;

  beforeEach(() => {
    page = new WebAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
