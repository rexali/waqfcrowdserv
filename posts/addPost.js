const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();

async function addPost(req, res) {
    try {
        const { title, content, status } = req.body;
        await axios({
            method: 'post',
            url: 'https://almubarakwaqf.org/wp-json/wp/v2/posts',
            headers: {
                'Authorization': 'Bearer ' + `admin:Q6HT 3XvK TFZz Wgi6 dseZ Eou3`
            },
            data: { title, content, status }
        })
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    addPost
}
