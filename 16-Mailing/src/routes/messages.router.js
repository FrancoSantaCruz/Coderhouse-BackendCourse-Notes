import { Router } from "express";
import { transporter } from "../nodemailer.js";
import { __dirname } from "../utils.js";
import { client } from "../twilio.js";
import config from "../config.js";


const router = Router();

router.get('/', async(req, res) => {
    const options = {
        from: 'email4testingtest@gmail.com',
        to: 'sczfranco@gmail.com',
        subject: 'Primer mail test',
        // text: 'Probando mi primer mail con nodemailing.'
        html: "<h1>Probando con HTML.</h1>",
        attachments: [ { path: __dirname+"/messi.jpg" } ]
    };

    await transporter.sendMail(options);
    res.send("Enviando email");
});

router.post('/', async(req, res) => {
    const { first_name, last_name, email, message } = req.body;
    const opt = {
        from: "email4testingtest@gmail.com",
        to: email,
        subject: message,
        text: `Registro exitoso. Bienvenido ${first_name} ${last_name}!`
    }

    await transporter.sendMail(opt);
    res.send("SIGNUP");
})

// TWILIO

// SMS
router.get("/twilioSMS", async (req, res) => {
    const opt = {
        body: "holaa jaja",
        to: "+543624814473",
        from: config.twilio_phone_number,
    }
    await client.messages.create(opt)
    res.send("TWILIO")
});

// WSP
router.get("/twilioWSP", async (req, res) => {
    const opt = {
        body: "holaa jaja",
        to: "whatsapp:+5493624592726",
        from: config.twilio_wsp_number,
    }
    await client.messages.create(opt)
    res.send("TWILIOwsp")
});


export default router;

