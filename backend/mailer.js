import nodemailer from "nodemailer";
const sendMail = async (recipient, order_id) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "fayazsfizza@gmail.com", // generated ethereal user
            pass: "123456789Fizza", // generated ethereal password
        },
    });


    let info = await transporter.sendMail({
        from: 'fayazsfizza@gmail.com', // sender address
        to: recipient, // list of receivers
        subject: `Shipment for Order # ${order_id}`, // Subject line
        text: `Dear Customer, your order # ${order_id} has been shipped. please receive it tomorrow `, // plain text body
        html: "<b>Hello world?</b>", // html body
    });
};

export default sendMail