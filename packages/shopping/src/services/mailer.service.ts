import {bind, /* inject, */ BindingScope} from '@loopback/core';
import {SentMessageInfo} from 'nodemailer';
import Mail = require('nodemailer/lib/mailer');

const nodemailer = require("nodemailer");

@bind({scope: BindingScope.TRANSIENT})
export class MailerService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  async sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo> {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport(
      {
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "aathisoftwares@gmail.com", // generated ethereal user
          pass: "D1cti0n@ry", // generated ethereal password
        },
      }
    );
    /*
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"AathiSoftwares" <aathisoftwares@gmail.com>', // sender address
      to: "sentthill@gmail.com, dhiruvenkadam@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    */
    //console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return transporter.sendMail(mailOptions);
  }

}

