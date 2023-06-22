function logHandler(req, res, next) {
    const method = req.method; 
    const url = req.originalUrl;
    req.timeReceived = Date();
    console.log(`${method}: ${url} --- ${req.timeReceived}`);
    next();
}


function logHandler2(req, res, next) {
    req.timeReceived = Date();
    console.log(req.url + ' --- ' + req.timeReceived);
    next();
}

module.exports={
logHandler,
logHandler2
}