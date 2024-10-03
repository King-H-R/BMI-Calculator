window.onload = ()  => {
    const button =document.querySelector('#btn');
    button.addEventListener('click', calculateBMI)
}
function calculateBMI(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result')

    if(!height ||isNaN(height) || height<0){
        result.innerText="Invalid Height ";
        return;
    }
    else if(!weight ||isNaN(weight) || weight<0){
        result.innerText="Invalid Weight";
        return;
    }
    const bmi = weight / ((height * height)/10000);
    if(bmi<18.5){
        result.innerText = `Under Weight: ${bmi.toFixed(2)}`;;
    }
    else  if(bmi >=18.5 &&  bmi <= 24.0 ){
        result.innerText = `Normal: ${bmi.toFixed(2)}`;
    }
    else  if(bmi >=25 &&  bmi <= 29.9 ){
        result.innerText = `Over Weight: ${bmi.toFixed(2)}`;
    }
    else  if(bmi >=30 &&  bmi <= 34.9 ){
        result.innerText = `Obesity (Class 1): ${bmi.toFixed(2)}`;
    }
    else  if(bmi >=35 &&  bmi <= 39.9 ){
        result.innerText = `Obesity (Class 2): ${bmi.toFixed(2)}`;
    }
    else{
        result.innerText = `Extreme Obesity ${bmi.toFixed(2)}`;
    }


}