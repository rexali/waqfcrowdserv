// var app = require('../app');
// var supertest = require('supertest');
// var cheerio = require('cheerio');


// describe('Test views', () => {
//    var request;

//    beforeEach(function () {
//       request = supertest(app)
//          .get('/')
//          .set('Accept', 'application/json')
//          .set('Content-Type', 'application/json');
//    });

//    it("should return a html response", function (done) {
//       request
//           .expect("Content-Type", /text\/html/)
//           .expect(401)
//           .end(done);
//   });

//    it(`404 should return 'Page Not Found'`, (done) => {
//       request.expect((res) => {
//          var html_response = res.text;
//          var $ = cheerio.load(html_response);
//          var serverHomePage = $('.notfound').html().trim();
//          if (serverHomePage !== 'Page Not Found') {
//             throw new Error('Error!')
//          }
//       })
//       .end(done);

//    });

// });
