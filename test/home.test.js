var app = require('../app');
var supertest = require('supertest');
var cheerio = require('cheerio');
const { default: axios } = require('axios');


describe('Test views', () => {
   var request;
   var jwt;
   
   beforeEach(function () {
      
      request = supertest(app)
         // .get('/jwt').expect(200,(res)=>{
         //     jwt = res.body.jwtoken;
         // })
         .get('/')
         .set('Accept', 'application/json')
         .set('Content-Type', 'application/json')
         // .set('Authorization','Bearer '+jwt);
   });

   it("should return a html response", function (done) {
      request
          .expect("Content-Type", /text\/html/)
          .expect(200)
          .end(done);
  });

   it(`home/index.ejs should return 'Hello, the server is runing'`, (done) => {
      request.expect((res) => {
         var html_response = res.text;
         var $ = cheerio.load(html_response);
         var serverHomePage = $('.server').html().trim();
         if (serverHomePage !== 'Hello, the server is runing') {
            throw new Error('Error!')
         }
      })
      .end(done);

   });

});
