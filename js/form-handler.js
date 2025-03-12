// Certifica-te de que o EmailJS foi carregado corretamente
(function() {
  if (typeof emailjs !== 'undefined') {
    console.log("EmailJS carregado com sucesso!");
  } else {
    console.log("Erro ao carregar EmailJS!");
  }
})();

// Seleção do formulário
const form = document.getElementById("contactForm");

// Adiciona um evento ao envio do formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário (envio para o servidor)

  // Extrair os valores do formulário
  const name = document.querySelector("input[name='name']").value;
  const company = document.querySelector("input[name='company']").value;
  const email = document.querySelector("input[name='email']").value;
  const service = document.querySelector("#service").value;
  const budget = document.querySelector("#budget").value;
  const message = document.querySelector("textarea[name='Message']").value; // Garantir que a "message" é capturada

  // Verificar se todos os campos têm dados
  console.log("Valores capturados:");
  console.log("Nome: ", name);
  console.log("Empresa: ", company);
  console.log("Email: ", email);
  console.log("Serviço: ", service);
  console.log("Orçamento: ", budget);
  console.log("Mensagem: ", message);

  // Verificar se os valores estão a ser capturados corretamente
  if (!name || !company || !email || !service || !budget || !message) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  // Configurar os parâmetros do email
  const templateParams = {
    from_name: name,
    company: company,
    email: email,
    service: service,
    budget: budget,
    message: message  // Garantir que a "message" está inclusa aqui
  };

  // Enviar para o serviço EmailJS
  emailjs.send("service_ds2xclr", "template_o88h88l", templateParams)
    .then(function(response) {
      console.log("Email enviado com sucesso!", response);
      alert("Mensagem enviada com sucesso!");
    }, function(error) {
      console.log("Erro ao enviar email:", error);
      alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    });
});
