const nodemailer = require("nodemailer");

async function main() {
    let testAcc = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAcc.user,
                pass: testAcc.pass,
            }
        });
    
    let info = await transporter.sendMail({
            to: "emailtestnodejs0@gmail.com",
            from: "navneetkaini@gmail.com",
            subject: "Test",
            text: "Just a Test"
        });

    let returnMessage = {to: info.envelope.to[0],
                        from: info.envelope.from,
                        emailUrl: nodemailer.getTestMessageUrl(info)}
    
    console.log(returnMessage);
    return returnMessage;
}

module.exports = main;