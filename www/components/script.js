const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const altura = parseInt(document.querySelector('#altura').value);
    const peso = parseInt(document.querySelector('#peso').value);
    const resultado = document.querySelector('#resultado');
    
    if((altura === '') || (altura < 0) || (isNaN(altura))){
        results.innerHTML = "Por favor insira uma altura valida";
        
    } else if (peso === '' || peso < 0 || isNaN(peso)){
        results.innerHTML = "Por favor insira um peso valido";
    } else {
    const imc = (peso / ((altura*altura)/10000)).toFixed(2);
    results.innerHTML = `<span>${imc}</span>`
    }
    
    
});

