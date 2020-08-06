
function show(){
    if(senha.type == 'password'){
        senha.type = 'text';

        show_block.classList.remove('fa-eye');
        show_block.classList.add('fa-eye-slash');
    }else{
        senha.type = 'password';

        show_block.classList.add('fa-eye');
        show_block.classList.remove('fa-eye-slash');
    }
}

function validation(){
    console.log('ìs us dog')
}