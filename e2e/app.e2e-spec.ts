import { CommunityClubPage } from './app.po';

describe('community-club App', () => {
  let page: CommunityClubPage;

  beforeEach(() => {
    page = new CommunityClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
