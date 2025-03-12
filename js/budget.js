const budgetOptions = {
    "Branding": ["$5k - $10k", "$10k - $25k", "$25k - $50k"],
    "Identidade Visual": ["$3k - $8k", "$8k - $15k", "$15k - $30k"],
    "Social Media": ["$2k - $5k", "$5k - $12k", "$12k - $20k"],
    "Web & UI Design": ["$10k - $20k", "$20k - $40k", "$40k+"],
    "Materiais Publicitários": ["$1k - $3k", "$3k - $7k", "$7k - $15k"]
  };

  const serviceSelect = document.getElementById("service");
  const budgetSelect = document.getElementById("budget");

  function updateBudgetOptions() {
    const selectedService = serviceSelect.value;
    budgetSelect.innerHTML = "";
    budgetOptions[selectedService].forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      budgetSelect.appendChild(opt);
    });
  }

  serviceSelect.addEventListener("change", updateBudgetOptions);
  updateBudgetOptions(); // Inicializa com a opção padrão