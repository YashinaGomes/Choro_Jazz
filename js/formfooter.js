document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    console.log('Formulário enviado'); // Log de depuração

    var form = event.target;
    var data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        console.log('Resposta recebida:', response); // Log de depuração
        if (response.ok) {
            var successMessage = document.getElementById('successMessage2');
            successMessage.style.display = 'block'; 

            // Redireciona após 3 segundos
            setTimeout(function() {
                window.location.reload(); // Atualiza a página
            }, 3000);
        } else {
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    }).catch(function(error) {
        console.error('Erro ao enviar o formulário:', error); // Log de depuração
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
});
