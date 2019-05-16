/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
// TODO: get the main function
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    // TODO: to check whether the length of allFeeds array
    it('allFeeds are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('allFeeds has  URL defined and they are not empty', function() {
      allFeeds.map(i => {
        expect(i.url).toBeTruthy();
      })
    });
    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('allFeeds has name defined and they are not empty', function() {
      allFeeds.map(i => {
        expect(i.name).toBeTruthy();
      })
    });
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('The menu side bar', function() {
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('menu element is visibility is on when clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);

    });
  });
  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done) {
      loadFeed(0, done);
    });
    // TODO: to check the entery elements are present with some data
    it('entry element are present with some data', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    var prev;
    var current;
    beforeEach(function(done) {
      loadFeed(0, function() {
// TODO: to load previous data and store
        prev = $('.feed').html();
        loadFeed(1, function() {
          // TODO: to load current data and store
          current = $('.feed').html();
          done();
        });
      });
    });
    // TODO: check wheter the previous data and curent data have same data
    it(' the feeds (new with old) was not equal', function() {
      expect(prev).not.toEqual(current);
    });
  });
}());
