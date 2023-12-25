const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

const updateWaqfFile = async (req, res) => {

    try {
        const {
            waqfId,
            filename,
            column
        } = req.body;
    
        const esc = [
            escapeHTML(filename),
            escapeHTML(waqfId),
        ];
    
        const sql = `update waqfs set ${[column]} = ? where waqfId = ?`;
        
        try {
    
            res.json(await transact(sql, esc));;
        } catch (error) {
    
            console.log(error);
        }
    } catch (error) {
        console.warn(error);
    }
    
};

module.exports = {
    updateWaqfFile
}
