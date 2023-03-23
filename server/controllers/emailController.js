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
            from: "emailtestnodejs0@gmail.com",
            to: "navneetkaini@gmail.com",
            subject: "Test",
            text: "Just a Test"
        });

    let returnMessage = `Message sent: ${info.messageId} \nPreview URL: ${nodemailer.getTestMessageUrl(info)}`;
    console.log(returnMessage)
    return returnMessage;
}

module.exports = main;