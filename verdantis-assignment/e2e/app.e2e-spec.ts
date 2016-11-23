import { VerdantAssignmentPage } from './app.po';

describe('verdant-assignment App', function() {
  let page: VerdantAssignmentPage;

  beforeEach(() => {
    page = new VerdantAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
