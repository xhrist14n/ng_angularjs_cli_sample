import { A01projectPage } from './app.po';

describe('a01project App', function() {
  let page: A01projectPage;

  beforeEach(() => {
    page = new A01projectPage();
  });

  it('should display message saying hola mundo !!!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hola mundo !!!');
  });
});
