    const bgContainer = document.getElementById('background-monsters');
const numberOfMonsters = 15; 

const monsterSVG = `
<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C 20 10, 10 40, 10 60 C 10 80, 20 90, 30 90 C 35 90, 40 80, 50 80 C 60 80, 65 90, 70 90 C 80 90, 90 80, 90 60 C 90 40, 80 10, 50 10 Z" fill="#080808"/>
    <circle cx="35" cy="45" r="4" fill="#ff4757"/>
    <circle cx="65" cy="45" r="4" fill="#ff4757"/>
</svg>
`;

for (let i = 0; i < numberOfMonsters; i++) {
    createMonster();
}

function createMonster() {
    const monster = document.createElement('div');
    monster.classList.add('monster');
    monster.innerHTML = monsterSVG;

    const size = Math.random() * 50 + 30; 
    monster.style.width = `${size}px`;
    monster.style.height = `${size}px`;
    monster.style.left = `${Math.random() * 100}vw`;

    const duration = Math.random() * 20 + 15; 
    monster.style.animationDuration = `${duration}s`;

    const delay = Math.random() * 15;
    monster.style.animationDelay = `${delay}s`;

    bgContainer.appendChild(monster);
}
