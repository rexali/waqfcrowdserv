const { transact } = require("../dbase/transact");

async function addWaqfFormFields(fields, filename1, filename2, res) {
  try {
    const {
      name,
      description,
      address,
      expectedAmount,
      state,
      localGovt,
      purpose,
      country,
      logo,
      endAt,
      organisation,
      document,
      userId
    } = fields;

    const esc = [
      name,
      description,
      address,
      expectedAmount,
      state,
      localGovt,
      purpose,
      country,
      filename1,
      endAt,
      organisation,
      filename2,
      userId
    ];


    const sql = `insert into waqfs(
        name,
        description,
        address,
        expectedAmount,
        state,
        localGovt,
        purpose,
        country,
        logo,
        endAt,
        organisation,
        document,
        userId
    )values(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
        )`;
    
    res.json(await transact(sql, esc));
  } catch (error) {
    console.warn(error);
  }

}

module.exports = {
  addWaqfFormFields
}
