const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, fullName, model) => {
    try {
        await sgMail.send({
            to: `${email}`,
            from: "ryan.yeaman@icloud.com",
            subject: `Model Inquiry: ${model}`,
            text: `Thank you, ${fullName} (${email})! We have received your inquiry for the ${model} model!`
        });
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = { sendEmail };