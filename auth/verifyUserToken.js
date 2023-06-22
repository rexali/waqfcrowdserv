const jwt = require("jsonwebtoken");

function verifyUserToken(req,res) {
       const {token} = req.body;
       try {
              let decoded = jwt.verify(token, process.env.SECRET_KEY);
              if (decoded.result[0].userId && decoded.result[0].email) {
                    return res.json({result:true,token});
              } else {
                    return res.json({result:false});
              }
       } catch (error) {
              console.log(error);
              return res.json({result:false});
       }
}
module.exports={
       verifyUserToken
}
