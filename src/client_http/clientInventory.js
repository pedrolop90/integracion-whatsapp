const urlInventory = "https://script.google.com/macros/s/AKfycbzt2iTizsbaoD1-Jol5FnixML5yT0ERwppsfR4XpjN1OIsauALO4xXYW2FQxVpPfM8ReQ/exec";
const axios = require('axios');


const obtenerInventario = async () => {
    try {
        const response = await axios.get(urlInventory);
        const data = response.data.data
        return data;
      } catch (error) {
        console.error(error);
        return null
      }
}

module.exports = { obtenerInventario }
