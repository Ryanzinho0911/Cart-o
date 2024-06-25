function updateText() {
    var input = document.getElementById('inputText').value;
    document.getElementById('outputText').innerHTML = input;
}

function updateText1() {
    var input = document.getElementById('inputText1').value;

    // Limitar o comprimento do texto de entrada a 19 caracteres
    if (input.length > 19) {
        input = input.slice(0, 19);
    }

    // Formatar a entrada com espaços a cada 4 dígitos
    var formattedInput = input.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

    // Atualiza o valor do campo de entrada e o texto de saída formatado
    document.getElementById('inputText1').value = formattedInput;
    document.getElementById('outputText1').innerText = formattedInput;
}

function updateText2() {
    var input = document.getElementById('inputText2').value;
    document.getElementById('outputText2').innerHTML = input;
}

function updateText3() {
    var input = document.getElementById('inputText3').value;
    document.getElementById('outputText3').innerHTML = input;
}

function updateText4() {
    var input = document.getElementById('inputText4').value;
    document.getElementById('outputText4').innerHTML = input;
}

function addNumericInputListener(inputId) {
    document.getElementById(inputId).addEventListener('keydown', function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Permitir backspace (8), delete (46), setas (37-40), tab (9)
        if (charCode != 8 && charCode != 46 && (charCode < 37 || charCode > 40) && charCode != 9 && (charCode < 48 || charCode > 57)) {
            event.preventDefault();
        }
    });
}

// Adiciona o ouvinte de eventos para os quatro campos de entrada
addNumericInputListener('inputText1');
addNumericInputListener('inputText2');
addNumericInputListener('inputText3');
addNumericInputListener('inputText4');

function confirmarCadastro() {
    const nome = document.getElementById('inputText').value;
    const numero = document.getElementById('inputText1').value;
    const validadeMes = document.getElementById('inputText2').value;
    const validadeAno = document.getElementById('inputText3').value;
    const cvv = document.getElementById('inputText4').value;

    const mensagemErro = document.getElementById('erro');

    if (nome && numero && validadeMes && validadeAno && cvv) {
        document.querySelector('.formulario').style.display = 'none';
        document.getElementById('confirmacao').style.display = 'block';

        // Exibir todas as informações no outputText
        document.getElementById('infoCartao').innerHTML = `
            <p1><strong1></strong1> ${nome}</p1>
            <p2><strong2></strong2> ${numero}</p2>
            <p3><strong3></strong3> ${validadeMes}/${validadeAno}</p3>
            <p4><strong4> </strong4> ${cvv}</p4>
        `;
        mensagemErro.textContent = ""; // Limpar mensagem de erro
    } else {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
    }
}