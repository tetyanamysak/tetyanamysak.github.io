const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateIcon('light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateIcon('dark');
    }
});

function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

const body = document.querySelector('body');
const colorInput = document.getElementById('color-picker');
const colorDiv = document.getElementById('color-div');
const hiddenText = document.getElementById('ruined-text');
const resetBtn = document.getElementById('reset-btn');
const playBtnContainer = document.getElementById('play-game');
const startGameBtn = document.getElementById('start-game-btn');

startGameBtn.addEventListener('click', playGame);
colorInput.addEventListener('input', changeColor);
resetBtn.addEventListener('click', resetColor);

function playGame() {
    colorDiv.classList.remove('hidden');
    playBtnContainer.classList.add('hidden');
}

function changeColor() {
    const selectedColor = colorInput.value;
    body.style.backgroundColor = selectedColor;
    body.style.transition = 'none';

    resetBtn.classList.remove('hidden');
    hiddenText.classList.remove('hidden');
    colorInput.classList.add('hidden');
}

function resetColor() {
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    body.style.backgroundColor = '';

    colorInput.classList.remove('hidden');
    playBtnContainer.classList.remove('hidden');
    hiddenText.classList.add('hidden');
    resetBtn.classList.add('hidden');
    colorDiv.classList.add('hidden');
}