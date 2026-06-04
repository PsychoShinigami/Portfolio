const menus = document.querySelectorAll('.menu1, .menu2, .menu3, .menu4');
const overlay = document.querySelector('.overlay');
if (window.location.search === "?authenticated=true") {
    overlay.style.visibility = 'hidden';
}

for (const menu of menus){
    menu.onclick = () => {
        if (menu.classList.contains('menu1')) {
            window.location.href = 'index.html?authenticated=true';
        } else if (menu.classList.contains('menu2')) {
            window.location.href = 'explore_paths.html';
        } else if (menu.classList.contains('menu3')) {
            window.location.href = 'videos.html';
        } else if (menu.classList.contains('menu4')) {
            window.location.href = 'index.html';
        }
     };
}

const register = document.querySelector('#register-btn')
const login = document.querySelector('#login-btn')

if (register) {
    register.addEventListener('click', async () => {
        const name     = document.querySelector('.name').value;
        const email    = document.querySelector('.email').value;
        const password1 = document.querySelector('#pass1').value;
        const password2 = document.querySelector('#pass2').value;

        if (password1 !== password2) {
            alert("Passwords do not match!")
        } else if (password1.length < 8) {
            alert("Password length cannot be less than 8!")
        } else if (!email.includes('@')) {
            alert("Please enter a valid email address!")
        } else {
            const response = await fetch('https://PsychoShinigami.pythonanywhere.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: name, password: password1, email: email })
            });
            const result = await response.json();
            alert(result.message);
            if (result.status === 'success') {
                if (overlay !== null && overlay !== undefined) {
                    overlay.style.visibility = 'hidden';
                }
                window.location.href = 'index.html?authenticated=true'
            }  
        }
    })
}

if (login) {
    login.addEventListener('click', async () => {
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.pass').value;
        const response = await fetch('https://PsychoShinigami.pythonanywhere.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: name, password: password, email: email })
        });
        const result = await response.json();
        alert(result.message)
        if (result.status === 'success') {
            window.location.href = 'index.html?authenticated=true'
        }
    })
}
