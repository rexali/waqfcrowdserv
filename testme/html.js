var app = require("./apps");
var supertest = require("supertest");
var cheerio = require("cheerio");

describe("html response", function () {
    var request;

    beforeEach(function () {
        request = supertest(app)
            .get("/")
            .set("User-Agent", "a cool browser")
            .set("Accept", "text/html");
    });

    it("returns a html response", function (done) {
        request
            .expect("Content-Type", /text\/html/)
            .expect(200)
            .end(done);
    });

    it("returns your User Agent", function (done) {
        request
            .expect(function (res) {
                var htmlResponse = res.text;
                var $ = cheerio.load(htmlResponse);
                var userAgent = $(".user-agent").html().trim();
                if (userAgent !== "a cool browser") {
                    throw new Error("User Agent not found");
                }
            })
            .end(done);
    });
});