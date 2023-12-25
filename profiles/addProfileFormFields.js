const { transact } = require("../dbase/transact");

async function addProfileFormFields(fields, filename, res) {
  try {
    const {
      firstName,
      lastName,
      userId
    } = fields;

    const selSQL = 'select * from profiles where userId = ?';
    const selEsc = [userId];

    const result = await transact(selSQL, selEsc);

    if (result.length === 1) {
      const updSql = 'update profiles set photo = ? where userId = ?';
      const updEsc = [filename, userId];

      res.json(await transact(updSql, updEsc))
    } else {

      const sql = `insert into profiles(
              photo, 
              firstName, 
              lastName,  
              userId
              )values(
              ?,
              ?,
              ?,
              ?
              )`;
      const esc = [
        filename,
        firstName,
        lastName,
        userId
      ];

      res.json(await transact(sql, esc));
    }
  } catch (error) {
    console.warn(error);
  }

}

module.exports = {
  addProfileFormFields
}
