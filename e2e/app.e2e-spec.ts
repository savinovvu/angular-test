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
      expect(comment.getText()).toBe('a sample comment like 0');
    });

  });

  describe('When I like a comment', () => {
    let firstComment = null;
    let likeButton = null;
    beforeEach(() => {
      firstComment = element.all(by.css('li')).first();
      likeButton = firstComment.element(by.buttonText('like'));
      likeButton.click();

    });
    it('should increase the number of likes to one', () => {
      let commentLikes = firstComment.element(by.css('#likes'));
      expect(commentLikes.getText()).toBe("1");

    });
  });

});


