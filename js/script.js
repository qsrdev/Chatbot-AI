import messages from "./data.js";
import { printMessages } from "./functions.js";

//devo stampare i messaggi in pagina
const chatbox = document.getElementById("chat-box");

//aggiungo che chatbox è pubblica soltanto in questo documento di script, mentre messages viene da
// un altro documento
printMessages(messages, chatbox);
