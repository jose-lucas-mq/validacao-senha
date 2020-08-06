
function show() {
    if (senha.type == 'password') {
        senha.type = 'text';

        show_block.classList.remove('fa-eye');
        show_block.classList.add('fa-eye-slash');
    } else {
        senha.type = 'password';

        show_block.classList.add('fa-eye');
        show_block.classList.remove('fa-eye-slash');
    }
}

function validation() {
    let minha_senha = senha.value;
    let cont = 0;
    // MINUSCULAS
    if (minha_senha.match(/[a-z]+/)) {
        minusculas.classList.remove('fa-times');
        minusculas.classList.add('fa-check');

        ++cont;

    }

    // MAIUSCULAS
    if (minha_senha.match(/[A-Z]+/)) {
        maiusculas.classList.remove('fa-times');
        maiusculas.classList.add('fa-check');

        ++cont;
    }

    //NUMEROS
    if (minha_senha.match(/\d/)) {
        numeros.classList.remove('fa-times');
        numeros.classList.add('fa-check');

        ++cont;
    }

    // SIMBOLOS
    if (minha_senha.match(/\W/)) {
        simbolos.classList.remove('fa-times');
        simbolos.classList.add('fa-check');

        ++cont;
    }

    if(cont >= 4){
        ir.style.display = 'block';
    }
}