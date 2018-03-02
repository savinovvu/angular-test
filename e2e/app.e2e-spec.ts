import {browser, by, element} from 'protractor';

describe('Given I am posting a new comment', () => {
  describe('When I push the submit button', () => {
    beforeEach(() => {
      browser.get('');
      let commentInput = element(by.css('input'));
      commentInput.sendKeys('a sample comment');
      let submitButton = element(by.buttonText('Submit')).click();
    });

    it('Should then add the comment', () => {
      let comment = element.all(by.css('li')).first();
      expect(comment.getText()).toBe('a sample comment');
    });

  });
});
