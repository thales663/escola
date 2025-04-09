document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usuarios = {
        "Thales": "123",
        "Lucas": "456",
        "Ana": "senhaAna"
    };

    if (usuarios[username] && usuarios[username] === password) {
        window.location.href = "escola projeto.html";
    } else {
        document.getElementById("message").textContent = "Usuário ou senha incorretos!";
        document.getElementById("message").style.color = "red";
    }
});
