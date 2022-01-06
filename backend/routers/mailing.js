import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils.js';
import sendMail from '../mailer.js';
const mailing = express.Router();

mailing.post(
    '/sendMail',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const recipient = req.body.recipient
      const orderid= req.body.orderid
      res.send({ message: 'Email Sent'  });
    })
  );
  