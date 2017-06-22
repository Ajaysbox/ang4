import { CompcommPage } from './app.po';

describe('compcomm App', () => {
  let page: CompcommPage;

  beforeEach(() => {
    page = new CompcommPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
