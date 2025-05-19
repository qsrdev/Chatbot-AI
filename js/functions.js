const renderChat = () => {
  console.log("yo chat is this real");
};

const printMessages = (messagesArray, container) => {
  messagesArray.forEach((curMessage) => {
    //prendo dal file data i messaggi già fatti e destrutturo per prendere
    // i singoli elementi dentro l'oggetto
    const { type, content, timestamp } = curMessage;
    //metodo nativo di JS per convertire le date a schermo in quelle che corrispondono
    //per l'utente che utilizza il sito
    const date = new Date(timestamp).toLocaleString("it-IT");
    //siccome sono in un ciclo ogni volta che si ripete andrò a creare un nuovo div
    const messageElem = document.createElement("div");
    //qua invece al div creato prima aggiungo la classe messagge-container e il tipo
    // il tipo corrisponde a inviato - ricevuto che va a cambiare la classe diretta e quindi a stilare il
    // messaggio automaticamente
    messageElem.classList.add("message-container", type);
    //agguingo l'inner html e sostituisco le cose che ho destrutturato
    messageElem.innerHTML = ` <div class="message">
                                    <p>${content}</p>
                                    <time datetime="${timestamp}">${date}</time>
                                </div>
                                `;
    //utilizziamo append perché ogni volta non andiamo a refreshare
    //l'html ma semplicemente lo aggiungiamo alla fine come se fosse una stringa
    container.append(messageElem);
  });
};

//esporto tutte le funzioni che mi servono come se fosse un oggetto
//basta che siano contenute all'interno delle parentesi graffe
export { renderChat, printMessages };
