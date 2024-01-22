const axios = require('axios');
const url_whatsapp = "https://graph.facebook.com/v18.0/210355018830490/messages";
const token_whatsapp = "EAAKBbwomtvkBO5bxXBgqdcegNHkyAZAZCqZAHSVY9CVB7LWaZCY0KU40gOZCA8HvowmQgMTjJg0JOcufCE8rSe2aYmW55kOK42PL0fph3aZCg180fZACZAa4uUf0xuzNUCmU2FpHYRzzmC9msFAmHpK0oxKwFcezNiWBNY32KmB3YpXM5OZBTdXIDIULmcTbepxitdLekkEGbni67CBnl";
    
const enviarMensajeWhatsappAsync = (mensaje, numero) => {
    const bodyParameters = {
        "messaging_product": "whatsapp",
        "to": numero,
        "recipient_type": "individual",
        "type": "text",
        "text": {
            "preview_url": false,
            "body": mensaje
        }
     };

     enviarMensajeWhatsappApi(bodyParameters);
}

const enviarMensajeWhatsappListMenuAsync = (listado_menu, numero) => {

    const listSections = [];

    for(let element of listado_menu){
        let section = {
            "title": element.nameProduct,
            "rows": [
                {
                    "id": element.id,
                    "title": element.description,
                    "description": element.price
                }
            ]
        };
        listSections.push(section);
    }

    const bodyParameters = {
        "messaging_product": "whatsapp",
        "to": numero,
        "recipient_type": "individual",
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Elige tu comida favorita"
            },
            "body": {
                "text": "Podras elegir la comida que mas te guste"
            },
            "footer": {
                "text": "pie de pagina"
            },
            "action": {
                "button": "falso",
                "sections": listSections
            }
        }
     };

     enviarMensajeWhatsappApi(bodyParameters);
}

const enviarMensajeWhatsapp  = async (mensaje, numero) => {
    const bodyParameters = {
        "messaging_product": "whatsapp",
        "to": numero,
        "recipient_type": "individual",
        "type": "text",
        "text": {
            "preview_url": false,
            "body": mensaje
        }
     };

    await enviarMensajeWhatsappApi(bodyParameters);
}

// const leerMensajeWhatsapp  = async (numero) => {
//     return await client.messages
//     .list({
//         from: 'whatsapp:+14155238886',
//         to: `whatsapp:${numero}`,
//         limit: 5
//     });
// } 


async function enviarMensajeWhatsappApi(body){
    const config = {
        headers: { Authorization: `Bearer ${token_whatsapp}` }
    };
    
    try {
        const response = await axios.post(url_whatsapp,body,config);
        const data = response.data.data
        console.log("enviado mensaje");
        return data;
      } catch (error) {
        console.error(error);
        return null
      }
}


module.exports = { enviarMensajeWhatsappAsync,
     enviarMensajeWhatsapp,
     enviarMensajeWhatsappListMenuAsync }

