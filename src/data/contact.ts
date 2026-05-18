// Dados institucionais — edite aqui para atualizar em toda a página.
export const contact = {
  company: "Spaço Integrativo",
  phone: "(79) 9645-4440",
  whatsapp: "5579996454440", // formato internacional sem +/espaços
  email: "julianaprado.psicologa@gmail.com",
  instagram: "https://www.instagram.com/julianapradopsi/",
  address: "R. Dr. José Roberto Ribeiro, 95",
  cnpj: "62.143.476/0001-39",
  edition: "Edição Dona de Mim",
  eventDate: "30 de Maio",
  eventLocation: "Fazenda Saint Germain",
  agency: {
    name: "Wave Labs Performance",
    url: "https://www.instagram.com/wavelabsperformance/",
  },
};

export const buildWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
