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

async function whatdraw() {
  const response = await fetch("https://1920.in/api");
  const drawedPhoneWhatsapp = await response.json();
  const phoneNumberField = document.getElementById("phoneNumberWhatsapp");
  phoneNumberField.innerText = "+" + drawedPhoneWhatsapp;
  let queryChar = iOS() ? "&" : "?";
  let whatsmshref =
    "https://wa.me/" +
    "+" +
    drawedPhoneWhatsapp +
    queryChar +
    "body=" +
    encodeURI(
      "Уважаемые россияне, ваши СМИ подвергаются цензуре. Кремль лжет. Тысячи ваших солдат и украинских братьев гибнут на Украине. Узнайте правду в свободном Интернете и в приложении Telegram. Время свергнуть диктатора Путина!"
    );

  phoneNumberField.href = whatsmshref;
  const sendButtonWhatsapp = document.getElementById("buttonSendWhatsapp");
  sendButtonWhatsapp.href = whatsmshref;
}

document.addEventListener("DOMContentLoaded", async () => {
  if (isMobile()) {
    document.getElementById("buttonCopyWhatsapp").style = "display: none";
  } else {
    document.getElementById("buttonSendWhatsapp").style = "display: none";
    document
      .getElementById("buttonCopyWhatsapp")
      .addEventListener("click", () => {
        const phoneNumberField = document.getElementById("phoneNumberWhatsapp");
        navigator.clipboard.writeText(phoneNumberField.innerText);
      });
  }
  const buttonReload = document.getElementById("buttonReloadWhatsapp");
  buttonReload.addEventListener("click", async () => {
    await whatdraw();
  });
  await whatdraw();

  document.getElementById("buttonCopyText").addEventListener("click", () => {
    const messageField = document.getElementById("message");
    navigator.clipboard.writeText(messageField.innerText);
  });
});
