const passwordDisplay = document.getElementById('passwordDisplay');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercaseCheck');
const lowercaseCheck = document.getElementById('lowercaseCheck');
const numbersCheck = document.getElementById('numbersCheck');
const symbolsCheck = document.getElementById('symbolsCheck');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const refreshBtn = document.getElementById('refreshBtn');
const strengthProgress = document.getElementById('strengthProgress');
const strengthLabel = document.getElementById('strengthLabel');
const themeToggle = document.getElementById('themeToggle');
const copyAlert = document.getElementById('copyAlert');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

lengthSlider.addEventListener('input', updateLengthValue);
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
window.addEventListener('load', initTheme);
window.addEventListener('load', generatePassword);
refreshBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
themeToggle.addEventListener('click', toggleTheme);

initTheme();

function updateLengthValue() {
    lengthValue.textContent = lengthSlider.value;
}

function generatePassword() {
    if (!uppercaseCheck.checked && !lowercaseCheck.checked && 
        !numbersCheck.checked && !symbolsCheck.checked) {
        alert('Please select at least one character type');
        return;
    }

    let characterSet = '';
    let password = '';
    const length = lengthSlider.value;
    
    if (uppercaseCheck.checked) characterSet += uppercase;
    if (lowercaseCheck.checked) characterSet += lowercase;
    if (numbersCheck.checked) characterSet += numbers;
    if (symbolsCheck.checked) characterSet += symbols;
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    
    passwordDisplay.textContent = password;
    updateStrengthIndicator(password);
}

function copyPassword() {
    const password = passwordDisplay.textContent;
    if (!password) return;

    navigator.clipboard.writeText(password).then(() => {
        copyAlert.classList.add('show');
        setTimeout(() => copyAlert.classList.remove('show'), 2000);
    }).catch(err => {
        alert('Failed to copy password. Please manually select and copy.');
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    themeToggle.innerHTML = savedTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

function updateStrengthIndicator(password) {
    let strength = 0;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':",./<>?]/.test(password);
    const typesCount = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;

    strength += password.length >= 12 ? 2 : password.length >= 8 ? 1 : 0;
    strength += typesCount * 2;

    let color = 'var(--weak-color)';
    let label = 'Weak';

    if (strength >= 6) {
        color = 'var(--medium-color)';
        label = 'Medium';
    }
    if (strength >= 8) {
        color = 'var(--strong-color)';
        label = 'Strong';
    }
    if (strength >= 10) {
        color = 'var(--very-strong-color)';
        label = 'Very Strong';
    }

    strengthProgress.style.width = `${Math.min((strength / 10) * 100, 100)}%`;
    strengthProgress.style.backgroundColor = color;
    strengthLabel.textContent = `Strength: ${label}`;
}