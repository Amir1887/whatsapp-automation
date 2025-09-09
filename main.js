const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


// ---- Config  ----
const COUNTRY_CODE = '20'; // e.g., '20' for Egypt
const BULK_NUMBERS = [1124105863, 1503437327]; // raw national numbers (no +, no spaces)
const BULK_TEXT = 'Hello Multiple People';
const MEDIA_PATH = './image.png'; // must exist
const TEST_MEDIA_RECIPIENT = '1124105863'; // raw national number (will be formatted)
// -----------------------------


// Client: stays logged in locally
const client =new Client({
  authStrategy: new LocalAuth(),
})

// Show QR if not logged in yet
client.on('qr', (qr)=> {
    qrcode.generate(qr ,{small: true});
});


// Login success / session ready
client.on('ready', ()=> {
    console.log("client is ready!");

    // 1) Bulk text

    // 2) Send media (optional)
})

// initializing 
client.initialize();