var WPAPI = require('wpapi');
const dotenv = require('dotenv');
const axios = require("axios");
dotenv.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var wp = new WPAPI({
    endpoint: 'https://almubarakwaqf.org/wp-json/wp/v2/posts',
    // This assumes you are using basic auth, as described further below 
    username: 'aliyu_b@almubarakwaqf.org',
    password: 'Q6HT 3XvK TFZz Wgi6 dseZ Eou3',

});

async function addPost(req, res) {
    try {
        const { title, content, status } = req.body;
    await axios({
            method: 'post',
            url: 'https://almubarakwaqf.org/wp-json/wp/v2/posts',
            headers:{
                'Authorization': 'Bearer '+`admin:Q6HT 3XvK TFZz Wgi6 dseZ Eou3`
            },
            data:{title,content,status}
        })
    } catch (error) {
        console.warn(error);
    }
    
    // wp.posts().create({
    //     title: title,
    //     content: content,
    //     status: status
    // }).then(function (response) {
    //     // handle error
    //     console.log(response.id);
    //     res.json(response)
    // }).catch((err) => {
    //     console.log(err);
    // });
}

module.exports = {
    addPost
}
