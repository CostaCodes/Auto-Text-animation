const containerEL = document.querySelector('.container');
let careers = ['Web Developer', 'Forex Trader', 'Businessman', 'Pharmacist']
let careersIndex = 0;
let characterIndex = 0;

updateText()

function updateText() {
    characterIndex++
    containerEL.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0,characterIndex)}</h1>
    `;

    if (characterIndex === careers[careersIndex].length) {
        careersIndex ++;
        characterIndex = 0;
    };

    if (careersIndex === careers.length) {
        careersIndex = 0;
    };

    setTimeout(updateText, 400);
};