function generate1() {
    let symbols, color;
    symbols = '0123456789ABCDEF';
    color = '#';

    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
}

function generate2() {
    let phrases = [
        {text:'Привет!'},
        {text:'Будем знакомы. Меня завут Арчи :3'},
        {text:'Будешь моим другом?'},
        {text:'Давай целый день гулять и веселится. На улице восхитительная погода!'},
        {text:'Аа.. Ты же пРогРамМиСт..'}
    ];

    function getRandomElement(phrases) {
        let index = Math.floor(Math.random() * phrases.length);
        return phrases[index];
    }
    
    let button = document.querySelector('.button');
    let phrase = document.querySelector('.phrase');
    if (phrase){
        button.addEventListener('click', function () {
            let randomElement = getRandomElement(phrases);
            (phrase, 'textContent', randomElement.text);
        })
    }
}

document.querySelector("#bttn").onclick = function(){
    generate1();
    generate2();
}