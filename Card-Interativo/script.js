// Adiciona um ouvinte de eventos ao campo de entrada
document.getElementById('inputText').addEventListener('input', function() {
    // Pega o valor atual do campo de entrada
    var input = document.getElementById('inputText').value;
    // Define o texto da div de saída com o valor do campo de entrada
    document.getElementById('outputText').innerText = input;
});