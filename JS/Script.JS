// Seleção de Elementos
const generatePasswordButton = document.querySelector("generate-password")
const generatedPasswordElement = document.querySelector("generated-password")

// Funções 
const gettLetterLowerCase = () => {
    console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
};

gettLetterLowerCase();

document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'generate-password') {
        // ... código de geração de senha ...
    }
});