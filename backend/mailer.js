import nodemailer from "nodemailer";
const sendMail = async (recipient, order_id, order_info) => {
    console.log(order_info)
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
        subject: `FreezeME Shipment #${order_id}`, // Subject line
        html: `<b>Dear Customer, your order # ${order_id} has been shipped. Following are the details please receive it tomorrow</b>`, // html body
    });
    return info
};

export default sendMail