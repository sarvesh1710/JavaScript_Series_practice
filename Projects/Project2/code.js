const form=document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    const bmi=(weight/((height*height)/10000)).toFixed(2);

    if (height == '' || height<0 || isNaN(height)) {
        results.innerHTML=`Please give a valid height`
    }
    else if(weight == '' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight`
    }
    else{
        results.innerHTML= `<span>${bmi}</span>`
    }
    const sugg=document.querySelector('.suggestion')

    if (bmi < 18.6) {
        sugg.innerHTML = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        sugg.innerHTML = "Normal weight";
    } else {
        sugg.innerHTML = "Overweight";
    }
})