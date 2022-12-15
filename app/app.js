let translations = [
    { lang: 'en', key: 'language', value: 'Select language' },
    { lang: 'en', key: 'title', value: 'Call a randomly selected Russian! Squad303' },
    { lang: 'en', key: 'whatsapp', value: 'Whatsapp' },
    { lang: 'en', key: 'copy', value: 'copy' },
    { lang: 'en', key: 'newText', value: 'new text' },
    { lang: 'en', key: 'copyText', value: 'copy text' },
    { lang: 'en', key: 'p1', value: 'We the people of the world have a message to the Russian nation.' },
    { lang: 'en', key: 'p2', value: 'A nation that is to pay a huge price because of the shameful decision of the dictator Putin to attack an independent Ukraine by armed forces. The joint action of all the states of the free world, as a response to Russia’s aggression, will lead to the collapse of the entire country.' },
    { lang: 'en', key: 'p3', value: 'However, nearly 150 million Russians do not know the truth about the causes or course of the war in Ukraine. It is fed with the lies of the Kremlin propaganda. There is no free media in Russia and the internet is censored.' },
    { lang: 'en', key: 'p4', value: 'It is possible for each of us to convey a direct message to the inhabitants of this enslaved country.' },
    { lang: 'en', key: 'p5', value: 'Squad303 gives you a tool that allows you to send whatsapp messages from your phones directly to randomly selected Russians.' },
    { lang: 'en', key: 'p6', value: 'Let them know the truth. Let them know the power of the free world!' },
    { lang: 'fr', key: 'language', value: 'Sélectionner la langue' },
    { lang: 'fr', key: 'title', value: 'Appelez un Russe sélectionné au hasard ! Squad303' },
    { lang: 'fr', key: 'whatsapp', value: 'Whatsapp' },
    { lang: 'fr', key: 'copy', value: 'copie' },
    { lang: 'fr', key: 'newText', value: 'nouveau texte' },
    { lang: 'fr', key: 'copyText', value: 'copier le texte' },
    { lang: 'fr', key: 'p1', value: 'Nous, les peuples du monde, avons un message pour la nation russe.' },
    { lang: 'fr', key: 'p2', value: "Une nation qui va payer un prix énorme à cause de la décision honteuse du dictateur Poutine d'attaquer l'Ukraine indépendante par des forces armées. L'action conjointe de tous les États du monde libre, en réponse à l'agression de la Russie, entraînera l'effondrement du pays tout entier." },
    { lang: 'fr', key: 'p3', value: "Cependant, près de 150 millions de Russes ne connaissent pas la vérité sur les causes ou le déroulement de la guerre en Ukraine. Ils sont nourris des mensonges de la propagande du Kremlin. Il n'y a pas de médias libres en Russie et l'internet est censuré." },
    { lang: 'fr', key: 'p4', value: "Il est possible pour chacun d'entre nous de transmettre un message direct aux habitants de ce pays asservi." },
    { lang: 'fr', key: 'p5', value: "Squad303 vous offre un outil qui vous permet d'envoyer des messages whatsapp depuis vos téléphones directement à des Russes choisis au hasard." },
    { lang: 'fr', key: 'p6', value: "Faites-leur connaître la vérité. Qu'ils connaissent le pouvoir du monde libre!" },
    { lang: 'es', key: 'language', value: 'Seleccione el idioma' },
    { lang: 'es', key: 'title', value: 'Que conozcan la verdad. Que conozcan el poder del mundo libre.' },
    { lang: 'es', key: 'whatsapp', value: 'Whatsapp' },
    { lang: 'es', key: 'copy', value: 'copia' },
    { lang: 'es', key: 'newText', value: 'nuevo texto' },
    { lang: 'es', key: 'copyText', value: 'copiar texto' },
    { lang: 'es', key: 'p1', value: "Nosotros, los pueblos del mundo, tenemos un mensaje para la nación rusa." },
    { lang: 'es', key: 'p2', value: "Una nación que va a pagar un precio enorme por la vergonzosa decisión del dictador Putin de atacar con sus fuerzas armadas a una Ucrania independiente. La acción conjunta de todos los estados del mundo libre, como respuesta a la agresión de Rusia, llevará al colapso de todo el país." },
    { lang: 'es', key: 'p3', value: "Sin embargo, casi 150 millones de rusos no conocen la verdad sobre las causas o el curso de la guerra en Ucrania. Se alimentan con las mentiras de la propaganda del Kremlin. En Rusia no hay medios de comunicación libres e internet está censurado." },
    { lang: 'es', key: 'p4', value: 'Es posible que cada uno de nosotros transmita un mensaje directo a los habitantes de este país esclavizado.' },
    { lang: 'es', key: 'p5', value: 'Squad303 te ofrece una herramienta que te permite enviar mensajes de whatsapp desde tus teléfonos directamente a rusos seleccionados al azar.' },
    { lang: 'es', key: 'p6', value: 'Que conozcan la verdad. Que conozcan el poder del mundo libre.' },
    { lang: 'pl', key: 'language', value: 'Wybierz język' },
    { lang: 'pl', key: 'title', value: 'Zadzwoń do losowo wybranego Rosjanina! Squad303' },
    { lang: 'pl', key: 'whatsapp', value: 'Whatsapp' },
    { lang: 'pl', key: 'copy', value: 'kopiuj' },
    { lang: 'pl', key: 'newText', value: 'nowa wiadomość' },
    { lang: 'pl', key: 'copyText', value: 'kopiuj wiadomość' },
    { lang: 'pl', key: 'p1', value: 'My, ludzie świata, mamy przesłanie do narodu rosyjskiego.' },
    { lang: 'pl', key: 'p2', value: 'Naród, który zapłaci ogromną cenę za haniebną decyzję dyktatora Putina o zbrojnej napaści na niepodległą Ukrainę. Wspólna akcja wszystkich państw wolnego świata, będąca odpowiedzią na agresję Rosji, doprowadzi do upadku całego kraju.' },
    { lang: 'pl', key: 'p3', value: 'Jednak prawie 150 milionów Rosjan nie zna prawdy o przyczynach i przebiegu wojny na Ukrainie. Jest karmiona kłamstwami kremlowskiej propagandy. W Rosji nie ma wolnych mediów, a internet jest cenzurowany.' },
    { lang: 'pl', key: 'p4', value: 'Każdy z nas może przekazać bezpośrednie przesłanie do mieszkańców tego zniewolonego kraju.' },
    { lang: 'pl', key: 'p5', value: 'Squad303 udostępnia narzędzie, które umożliwia wysyłanie wiadomości Whatsapp z telefonu bezpośrednio do losowo wybranych Rosjan.' },
    { lang: 'pl', key: 'p6', value: 'Niech poznają prawdę. Niech poznają potęgę wolnego świata!' },
    { lang: 'de', key: 'language', value: 'Sprache auswählen' },
    { lang: 'de', key: 'title', value: 'Rufen Sie einen zufällig ausgewählten Russen an! Squad303' },
    { lang: 'de', key: 'whatsapp', value: 'Whatsapp' },
    { lang: 'de', key: 'copy', value: 'kopieren' },
    { lang: 'de', key: 'newText', value: 'neuer Text' },
    { lang: 'de', key: 'copyText', value: 'Text kopieren' },
    { lang: 'de', key: 'p1', value: 'Wir, die Völker der Welt, haben eine Botschaft an die russische Nation.' },
    { lang: 'de', key: 'p2', value: 'Eine Nation, die einen hohen Preis für die schändliche Entscheidung des Diktators Putin zahlen muss, eine unabhängige Ukraine mit Waffengewalt anzugreifen. Das gemeinsame Vorgehen aller Staaten der freien Welt als Antwort auf die russische Aggression wird zum Zusammenbruch des gesamten Landes führen.' },
    { lang: 'de', key: 'p3', value: 'Allerdings kennen fast 150 Millionen Russen nicht die Wahrheit über die Ursachen oder den Verlauf des Krieges in der Ukraine. Sie werden mit den Lügen der Kreml-Propaganda gefüttert. In Russland gibt es keine freien Medien und das Internet wird zensiert.' },
    { lang: 'de', key: 'p4', value: 'Jeder von uns hat die Möglichkeit, eine direkte Botschaft an die Bewohner dieses versklavten Landes zu übermitteln.' },
    { lang: 'de', key: 'p5', value: 'Squad303 stellt Ihnen ein Tool zur Verfügung, mit dem Sie Whatsapp-Nachrichten von Ihren Telefonen direkt an zufällig ausgewählte Russen senden können.' },
    { lang: 'de', key: 'p6', value: 'Sie sollen die Wahrheit erfahren. Zeigen Sie ihnen die Macht der freien Welt!' },
    { lang: 'it', key: 'language', value: 'Selezionare la lingua' },
    { lang: 'it', key: 'title', value: 'Chiama un russo selezionato a caso! Squad303' },
    { lang: 'it', key: 'whatsapp', value: 'Whatsapp' },
    { lang: 'it', key: 'copy', value: 'copia' },
    { lang: 'it', key: 'newText', value: 'nuovo testo' },
    { lang: 'it', key: 'copyText', value: 'copiare il testo' },
    { lang: 'it', key: 'p1', value: 'Noi, popolo del mondo, abbiamo un messaggio per la nazione russa.' },
    { lang: 'it', key: 'p2', value: "Una nazione che sta per pagare un prezzo enorme a causa della vergognosa decisione del dittatore Putin di attaccare l'Ucraina indipendente con le forze armate. L'azione congiunta di tutti gli stati del mondo libero, come risposta all'aggressione della Russia, porterà al collasso dell'intero paese." },
    { lang: 'it', key: 'p3', value: 'Tuttavia, quasi 150 milioni di russi non conoscono la verità sulle cause o sul corso della guerra in Ucraina. Sono nutriti con le bugie della propaganda del Cremlino. Non ci sono media liberi in Russia e internet è censurato.' },
    { lang: 'it', key: 'p4', value: 'È possibile per ognuno di noi trasmettere un messaggio diretto agli abitanti di questo paese schiavo.' },
    { lang: 'it', key: 'p5', value: 'Squad303 ti dà uno strumento che ti permette di inviare messaggi whatsapp dai tuoi telefoni direttamente a russi selezionati a caso.' },
    { lang: 'it', key: 'p6', value: 'Fategli conoscere la verità. Fategli conoscere il potere del mondo libero!' },
    { lang: 'ua', key: 'language', value: 'Оберіть мову' },
    { lang: 'ua', key: 'title', value: 'Зателефонуйте випадково вибраному росіянину! Загін 303' },
    { lang: 'ua', key: 'whatsapp', value: 'Whatsapp' },
    { lang: 'ua', key: 'copy', value: 'копія' },
    { lang: 'ua', key: 'newText', value: 'новий текст' },
    { lang: 'ua', key: 'copyText', value: 'копіювати текст' },
    { lang: 'ua', key: 'p1', value: 'Ми, люди світу, маємо послання до російської нації.' },
    { lang: 'ua', key: 'p2', value: 'Нація, якій доведеться заплатити величезну ціну через ганебне рішення диктатора Путіна атакувати незалежну Україну збройними силами. Спільні дії всіх держав вільного світу, як відповідь на агресію Росії, призведуть до розпаду всієї країни.' },
    { lang: 'ua', key: 'p3', value: 'Проте майже 150 мільйонів росіян не знають правди про причини та хід війни в Україні. Його годують брехнею кремлівської пропаганди. У Росії немає вільних ЗМІ, а Інтернет піддається цензурі.' },
    { lang: 'ua', key: 'p4', value: 'Кожен з нас може передати пряме послання жителям цієї поневоленої країни.' },
    { lang: 'ua', key: 'p5', value: 'Squad303 дає вам інструмент, який дозволяє надсилати текстові повідомлення зі своїх телефонів безпосередньо випадково вибраним росіянам.' },
    { lang: 'ua', key: 'p6', value: 'Нехай знають правду. Нехай вони знають силу вільного світу!' }
]

let currentMsg = '';
let messagesPack = {};
let phoneNum = '';
let currentLanguage = 'en';

function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function isMobile() {
    var ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod/i.test(ua);
}

async function draw() {
    const response = await fetch('https://wa.1920.in/api');
    phoneNum = await response.json();
    setMessage();
}

function setMessage()
{
    const phoneNumberField = document.getElementById("phoneNumber");
    phoneNumberField.innerText = '+' + phoneNum;
    let queryChar = iOS() ? '&' : '?';
	let smshref = "https://wa.me/"+ phoneNum + queryChar + "text=" + encodeURI(currentMsg);
    phoneNumberField.href = smshref;
    const sendButton = document.getElementById("buttonSend");
    sendButton.href = smshref;
}

function getDefaultIndex() {
    messageIndex = 0;
    return messageIndex;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawText() {
    const randomInt = getRandomInt(0, Object.keys(messages).length - 1);
    messagesPack = messages[randomInt];
    currentMsg = messagesPack.find( x => x.lang === 'ru').msg;
    document.getElementById("message").innerText = currentMsg;
    setMessage();
}

function setTranslatedContent(lang)
{
    currentLanguage = lang;
    const selectedTranslations = translations.filter(x => x.lang === lang);
    document.getElementById("lang-title").innerText = selectedTranslations.find(x => x.key === 'language').value + ': ';
    document.getElementById("title").innerText = selectedTranslations.find(x => x.key === 'title').value;
    document.getElementById("whatsapp").innerText = selectedTranslations.find(x => x.key === 'whatsapp').value + ': ';
    document.getElementById("buttonCopy").innerText = selectedTranslations.find(x => x.key === 'copy').value;
    document.getElementById("newText").innerText = selectedTranslations.find(x => x.key === 'newText').value;
    document.getElementById("buttonCopyText").innerText = selectedTranslations.find(x => x.key === 'copyText').value;
    document.getElementById("p1").innerText = selectedTranslations.find(x => x.key === 'p1').value;
    document.getElementById("p2").innerText = selectedTranslations.find(x => x.key === 'p2').value;
    document.getElementById("p3").innerText = selectedTranslations.find(x => x.key === 'p3').value;
    document.getElementById("p4").innerText = selectedTranslations.find(x => x.key === 'p4').value;
    document.getElementById("p5").innerText = selectedTranslations.find(x => x.key === 'p5').value;
    document.getElementById("p6").innerText = selectedTranslations.find(x => x.key === 'p6').value;
}

document.addEventListener("DOMContentLoaded", async () => {
    setTranslatedContent(currentLanguage);
    const phoneNumberField = document.getElementById("phoneNumber");
    if (isMobile()) {
        document.getElementById("buttonCopy").style = 'display: none';
    } else {
        document.getElementById("buttonCopy").addEventListener("click", () => { 
            navigator.clipboard.writeText(phoneNumberField.innerText);
        });
    }
    drawText();
    const buttonReload = document.getElementById("buttonReload");
    buttonReload.addEventListener("click", async () => { await draw() });
    await draw();
    
    document.getElementById("buttonCopyText").addEventListener("click", () => {
        navigator.clipboard.writeText(currentMsg);
    });

    document.getElementById("buttonTextReload").addEventListener("click", () => { drawText() });
    phoneNumberField.addEventListener("click", async () => { await draw(); drawText(); });
    document.getElementById("buttonSend").addEventListener("click", async () => { await draw(); drawText(); });
    document.getElementById("langEn").addEventListener("click", () => setTranslatedContent('en'));
    document.getElementById("langFr").addEventListener("click", () => setTranslatedContent('fr'));
    document.getElementById("langEs").addEventListener("click", () => setTranslatedContent('es'));
    document.getElementById("langPl").addEventListener("click", () => setTranslatedContent('pl'));
    document.getElementById("langDe").addEventListener("click", () => setTranslatedContent('de'));
    document.getElementById("langIt").addEventListener("click", () => setTranslatedContent('it'));
    document.getElementById("langUa").addEventListener("click", () => setTranslatedContent('ua'));
    let translated = false;
    document.getElementById("translate").addEventListener("click", () => {
        if (translated){
            document.getElementById("message").innerText = currentMsg;
            translated = false;
        } else {
            const translatedMsg = messagesPack.find( x => x.lang === currentLanguage).msg;
            document.getElementById("message").innerText = translatedMsg;
            translated = true;
        }
    });
});
