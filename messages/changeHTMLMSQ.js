/**
 * HTML message for change of password
 * @param {string} email - email address
 * @param {string} code - randomly generated code
 * @returns string of text
 */
function changeHTMLMSQ(email, code) {
    return `
    <html>
    <body>
    <h1>Hi there, You can change your password now</h1>
    <p>If you request for password change, click this link: 
    <a href="https://express.mujaware.com/user/change?rCode=${code}&emailAddress=${email}">
    Change your password</a>.
    </p>
    <p style="font-size:18px;">Otherwise ignore this message.</P>
    <p style="font-size:18px;">Thank you.</P>
    </body></html>
    `
}

module.exports={
    changeHTMLMSQ
}