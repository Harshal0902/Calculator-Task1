const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
let theme = localStorage.getItem('theme');

if (theme === 'dark') enableDarkMode();

darkModeToggleBtn.addEventListener('click', () => {
    theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    darkModeToggleBtn.innerHTML = '<img src="https://img.icons8.com/cotton/38/000000/sun--v2.png"/>';
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark-mode');
}

function disableDarkMode() {
    darkModeToggleBtn.innerHTML = '<img src="https://img.icons8.com/color/38/000000/moon-satellite.png"/>';
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark-mode');
}

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));


function clearScreen() {
    document.getElementById("result").value = "";
}
function liveScreen(value) {
    document.getElementById("result").value += value;
}
