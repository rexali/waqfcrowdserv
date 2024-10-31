const axios = require("axios");

async function getPosts(req, res) {

    try {
        var page = parseInt(req.query?.page ?? 1);
        var pageSize = 4;
        let startIndex = (page - 1) * pageSize;
        let endIndex = page * pageSize;
        let { data } = await axios({
            method: 'get',
            url: 'https://almubarakwaqf.org/wp-json/wp/v2/posts',
        });

        let news = data.slice(startIndex, endIndex);
        let newsLength = news.length
        res.json(news.map(post => ({
            ...post,
            newsLength
        })));
    } catch (error) {
        console.warn(error);
    }
}

module.exports = {
    getPosts
}