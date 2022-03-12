function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors

let language = {
  en: {
    welcome: "We the people of the world have a message to the Russian nation.",
  },

  ka: {
    welcome: "ჩვენ, მსოფლიოს ხალხს გვაქვს გზავნილი რუსი ერისთვის.",
  },
};

// Check if a hash value exists in the URL

if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#ka") {
    langContent.textContent = language.ka.welcome;
  }
}

function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors

let languageW = {
  en: {
    welcomeW:
      "If you would like to send an SMS via WhatsApp, please COPY the text below.",
  },

  ka: {
    welcomeW:
      "თუ გსურთ SMS-ის გაგზავნა WhatsApp-ის საშუალებით, გთხოვთ დააკოპიროთ ქვემოთ მოცემული ტექსტი.",
  },
};

// Check if a hash value exists in the URL

if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#ka") {
    langContentW.textContent = languageW.ka.welcomeW;
  }
}

// Define the language reload anchors

let languageNumber = {
  en: {
    welcomeN: "Phone:",
  },

  ka: {
    welcomeN: "ნომერი:",
  },
};

// Check if a hash value exists in the URL

if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#ka") {
    langContentNumber.textContent = languageNumber.ka.welcomeN;
  }
}

let languageSentence = {
  en: {
    welcomeS: "FIGHT FOR UKRAINE!",
  },

  ka: {
    welcomeS: "ბრძოლა უკრაინისთვის!",
  },
};

// Check if a hash value exists in the URL

if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#ka") {
    langContentSentence.textContent = languageSentence.ka.welcomeS;
  }
}
