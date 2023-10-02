document
   .getElementById("loginForm")
   .addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário padrão

      // Obter os valores dos campos
      var codigo = document.getElementById("codigo").value;
      var senha = document.getElementById("senha").value;

      // Lógica de validação 
      if (codigo === "adm123" && senha === "adm123") {
         // Redirecionar para outra página após a validação
         window.location.href =
            "https://paulabeatrizsoliveira.github.io/pagina2/index.html";
      } else {
         alert("Código ou senha inválidos. Tente novamente.");
      }
   });
