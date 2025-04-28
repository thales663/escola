document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const usuarios = {
      "Thales": "123",
      "alesson albino": "456",
      "Maria": "senhaSegura"
    };
  
    if (usuarios[username] && usuarios[username] === password) {
      window.location.href = "editor_de_texto.html";
    } else {
      const msg = document.getElementById("message");
      msg.textContent = "Usuário ou senha incorretos!";
      msg.style.color = "red";
    }
  });
  