import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import {isAdmin, isAuth} from '../utils.js';
import sendMail from '../mailer.js';

const mailing = express.Router();

mailing.post(
    '/sendMail',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        try {
            const {recipient, order_id, info} = req.body
            const ans = await sendMail(recipient, order_id, info)
            if (ans.accepted)
                res.send({'message': 'Mail successfully sent to customer'})
            else
                res.send({'message': 'Mail could not be sent'})
        } catch (e) {
            console.log(`an error has occurred. `)
            console.log(e)
            res.status(400).send({'message': 'E-mail could not be sent'})
        }
    })
);

export default mailing