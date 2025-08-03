const words = 'kinh tự do anh công trình xây dựng phần im bếp điện tử hay ký tên bao quát kiến trúc dạ vâng hãy viết lách thang dễ dàng công ty viết lách thơ huế'.split(' ');
const wordsCount = words.length;

function addClass(el, name){
    el.className += ' ' + name;
}

function removeClass(el, name){
    el.className = el.className.replace(name, '');
}

function randomWord(){
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex-1];
}

function formatWord(word){
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame(){
    document.getElementById('words').innerHTML = '';
    for (let i=0; i<200; i++){
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
    addClass(document.querySelector('word'), 'current');
    addClass(document.querySelector('letter'), 'current');
}

document.getElementById('game').addEventListener('keyup', ev =>{
    const key = ev.key;
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter.innerHTML;
    const isLetter = key.length === 1 && key !== '';

    console.log({key, expected});

    if(isLetter){
        if(currentLetter) {
            addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
            removeClass(currentLetter, name: 'current');
            addClass(currentLetter.nextSibling, name:'current');
        }
    }
});
    

   
newGame();