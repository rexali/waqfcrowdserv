const getToken = (req) => {
    try {
         if (req.headers["user-agent"] === null || undefined) {
              return req.headers.authorization?.split(' ')[1] || req.cookies.jwtoken;
         } else {
              return req.cookies.jwtoken;
         }
    } catch (error) {
         console.warn(error);
    }
};

module.exports={
    getToken
}