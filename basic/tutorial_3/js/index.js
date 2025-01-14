var qrcode = new QRCode("qrcode", {
    text: "ntnu",
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function goPage() {
    window.location.href = '../tutorial_1/index.html'; 
}