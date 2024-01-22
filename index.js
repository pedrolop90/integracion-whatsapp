const numeroDestino = "573148154033";
const { enviarMensajeWhatsappAsync,
     enviarMensajeWhatsapp,
     enviarMensajeWhatsappListMenuAsync } = require('./src/client_http/clientWhatsapp.js')
const { obtenerInventario } = require('./src/client_http/clientInventory.js')


enviarMensajeWhatsappAsync("Hola, buenas noches, dime, como te podemos ayudar? voy a mostrarte el menu del dia de hoy", numeroDestino)
     obtenerInventario()
    .then(inventario => {
        if(inventario != null){
  
            enviarMensajeWhatsappListMenuAsync(inventario, numeroDestino);

            // setTimeout(() => {
            //     var id = setInterval(()=>{
            //         leerMensajeWhatsapp(numeroDestino)
            //         .then(ultimosMensajes => {
            //                 //console.log(ultimosMensajes);
            //                 let jsonUltimoMensaje = ultimosMensajes[0]
            //                 let bodyUltimoMensaje = jsonUltimoMensaje.body
            //                 let cadenaTratada = bodyUltimoMensaje.replaceAll("You said :", "");
            //                 let indiceEliminar = cadenaTratada.indexOf(".\n");
            //                 let subcadenaElimianr =  cadenaTratada.substring(indiceEliminar);
            //                 cadenaTratada = cadenaTratada.replaceAll(subcadenaElimianr, "");
            //                 console.log(cadenaTratada);
            //                 try{
            //                     let opcionElegida = parseInt(cadenaTratada)-1;
    
            //                     let opcionInventarioElegida = inventario[opcionElegida];
            //                     let respuestaOpcion = `Tu opcion elegida fue:\n
            //                     Producto: ${opcionInventarioElegida.nameProduct}\n
            //                     ____________________\n`;
            //                     respuestaOpcion += `El total es de ${opcionInventarioElegida.price}`;
            //                     enviarMensajeWhatsappAsync(respuestaOpcion,
            //                     numeroDestino);
            //                     clearInterval(id);
            //                 }catch(e){
            //                     //console.error(e);
            //                 }
    
            //             }
            //         );
            //     }, 1000)

            // }, 1000);

        }
    })
    .catch(error => console.error(`Error al enviar el mensaje: ${error.message}`));

