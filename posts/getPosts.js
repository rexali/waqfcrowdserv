const  axios  = require("axios"); 

async function getPosts(req, res) {

    try {
        let { data } = await axios({
            method: 'get',
            url: 'https://almubarakwaqf.org/wp-json/wp/v2/posts',
        });

        res.json(data);
    } catch (error) {
        console.warn(error);
    }
}

module.exports = {
    getPosts
}