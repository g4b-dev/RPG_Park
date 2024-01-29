function generatePDF() {
    // Coleta valores do formulário
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Inicializa um novo documento PDF
    var doc = new jsPDF();
  
    // Adiciona conteúdo ao PDF
    doc.text(`Nome: ${name}`, 10, 10);
    doc.text(`E-mail: ${email}`, 10, 20);
    doc.text(`Mensagem: ${message}`, 10, 30);
  
    // Salva o PDF no lado do cliente (pode ser baixado)
    doc.save('respostas_formulario.pdf');
  }
  