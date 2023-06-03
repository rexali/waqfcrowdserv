const { connectDb } = require("../dbase/connectDb");

/**
 * 
 * @param {*} sql 
 * @param {*} esc 
 * @param {*} res 
 */
function getUserAuthToken(sql, esc, res) {
  connectDb().query(sql, esc, function (err, result, fields) {
    if (err) throw err;
    console.log("Auth record read");
    const jwtSecret = process.env.SECRET_KEY;
    const token = jsonwebtoken.sign(
      { result },
      jwtSecret,
      { noTimestamp: true, expiresIn: '1h' }
    );
    res.cookie('token', token, { httpOnly: true });
    res.json({ token: token });
  });
}

module.exports = {
  getUserAuthToken
}