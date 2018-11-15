//zmiana koloru tła w headerze po klikaniu w strzałki góra dół

let red = 173;
let green = 255;
let blue = 47;

const header = document.querySelector('header');
header.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {

    if (e.keyCode === 38 && red < 255) {
        header.style.backgroundColor = `rgb(${++red},${++green},${++blue})`;
    } else if (e.keyCode === 40 && red > 0) {
        header.style.backgroundColor = `rgb(${--red},${--green},${--blue})`;
    }

    //zapis za pomoca funkcji switch

    /*
    switch (e.keyCode){
        case 38:
        document.body.style.backgroundColor = 
        `rgb(${red<255 ? ++red :red},
            ${green<255 ? ++green :green},
            ${blue<255 ? ++blue : blue})`;
         break;
        case 40: 
        document.body.style.backgroundColor = 
        `rgb(${red>0 ? --red :red},
            ${green>0 ? --green :green},
            ${blue>0 ? --blue : blue})`;
        break;
    }
    */
}
window.addEventListener('keydown', changeColor)


//podpowiedz do hasła i zmiana koloru inputa
const input = document.getElementById('password');
let hint = document.createElement('div');

input.addEventListener('focus', (e) => {
    hint.textContent = 'hasło:user lub admin lub 1234';
    document.body.insertBefore(hint, input);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
})
input.addEventListener('blur', (e) => {
    hint.remove();
    e.target.style.backgroundColor = "white";
})


//odkrywanie wiadomości po wpisaniu hasła

const divMessage = document.querySelector('div.message');
divMessage.textContent = "Niespodzianka";
const passwords = ["uSer", "admin", "1234"];
const messages = ["strzałka w górę - rozjaśnianie nagłówka, strzałka w dół - przyciemnianie",
    "cześć ;-)", "Miłego dnia;-)"
]
let activeLetter = 0;
let activeWord = 0;
let indexTyping;


//dodawanie liter w sposób maszynowy
const addLetter = () => {
    {
        divMessage.textContent += messages[activeWord][activeLetter];
        activeLetter++;
        if (activeLetter === messages[activeWord].length || input.value.length < passwords[activeWord].length) {
            clearInterval(indexTyping);
            activeLetter = 0;
            hint.textContent = 'hasło:user lub admin lub 1234';
            document.body.insertBefore(hint, input);
            divMessage.textContent = "Niespodzianka";
        }
    }
}

input.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    divMessage.classList.remove('retro');
    passwords.forEach((password, index) => {

        if (password.toLocaleLowerCase() === text) {
            hint.remove();
            divMessage.textContent = "";
            activeWord = index;
            divMessage.classList.toggle('retro');
            indexTyping = setInterval(addLetter, 300);
        }
    })
})


//zmiana obrazka po lewej

const baners = ['img/roze.jpg', 'img/tulipany.jpg', 'img/maki.jpg', 'img/lawenda.jpg'];
let counter = 0;

function run() {
    setInterval(changeImage, 5000);
}

function changeImage() {
    let baner = document.getElementById('baner');
    if (counter < baners.length) {
        baner.src = baners[counter];
        counter++
    } else {
        counter = 0;
    }

}