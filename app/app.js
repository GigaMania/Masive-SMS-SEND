function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

function isMobile() {
  var ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod/i.test(ua);
}

async function draw() {
  const response = await fetch("https://1920.in/api");
  const drawedPhone = await response.json();
  const phoneNumberField = document.getElementById("phoneNumber");
  phoneNumberField.innerText = "+" + drawedPhone;
  let queryChar = iOS() ? "&" : "?";
  let smshref =
    "sms:" +
    "+" +
    drawedPhone +
    queryChar +
    "body=" +
    encodeURI(
      "Уважаемые россияне, ваши СМИ подвергаются цензуре. Кремль лжет. Тысячи ваших солдат и украинских братьев гибнут на Украине. Узнайте правду в свободном Интернете и в приложении Telegram. Время свергнуть диктатора Путина!"
    );

  phoneNumberField.href = smshref;
  const sendButton = document.getElementById("buttonSend");
  sendButton.href = smshref;
}

document.addEventListener("DOMContentLoaded", async () => {
  if (isMobile()) {
    document.getElementById("buttonCopy").style = "display: none";
  } else {
    document.getElementById("buttonSend").style = "display: none";
    document.getElementById("buttonCopy").addEventListener("click", () => {
      const phoneNumberField = document.getElementById("phoneNumber");
      navigator.clipboard.writeText(phoneNumberField.innerText);
    });
  }
  const buttonReload = document.getElementById("buttonReload");
  buttonReload.addEventListener("click", async () => {
    await draw();
  });
  await draw();

  document.getElementById("buttonCopyText").addEventListener("click", () => {
    const messageField = document.getElementById("message");
    navigator.clipboard.writeText(messageField.innerText);
  });
});

async function whatdraw() {
  const response = await fetch("https://1920.in/api");
  const drawedPhoneW = await response.json();
  const phoneNumberField = document.getElementById("phoneNumberW");
  phoneNumberField.innerText = "+" + drawedPhoneW;
  let queryChar = iOS() ? "&" : "?";
  let whatsmshref =
    "https://wa.me/" +
    "+" +
    drawedPhoneW +
    queryChar +
    "body=" +
    encodeURI(
      "Уважаемые россияне, ваши СМИ подвергаются цензуре. Кремль лжет. Тысячи ваших солдат и украинских братьев гибнут на Украине. Узнайте правду в свободном Интернете и в приложении Telegram. Время свергнуть диктатора Путина!"
    );

  phoneNumberField.href = whatsmshref;
  const sendButtonW = document.getElementById("buttonSendW");
  sendButtonW.href = whatsmshref;
}

document.addEventListener("DOMContentLoaded", async () => {
  if (isMobile()) {
    document.getElementById("buttonCopyW").style = "display: none";
  } else {
    document.getElementById("buttonSendW").style = "display: none";
    document.getElementById("buttonCopyW").addEventListener("click", () => {
      const phoneNumberField = document.getElementById("phoneNumberW");
      navigator.clipboard.writeText(phoneNumberField.innerText);
    });
  }
  const buttonReload = document.getElementById("buttonReloadW");
  buttonReload.addEventListener("click", async () => {
    await whatdraw();
  });
  await whatdraw();
});

