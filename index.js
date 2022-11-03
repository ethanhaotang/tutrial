console.log('hello');


// console.log(heightValue);

const button =document.querySelector('#button')

button.addEventListener('click',function(){
  const heightInput=document.querySelector('#height-input').value
const weightInput=document.querySelector('#weight-input').value

if(heightInput === '' || weightInput ==='') {
alert('pls put vaule')
return
}

  const heightValue=Number.parseInt(heightInput)
const weightValue=Number.parseInt(weightInput)



const BMI=weightValue/(heightValue*weightValue)
console.log(`bmi is ${BMI}`);

const resultNode =document.querySelector('#result')
resultNode.innerHTML=BMI


  // console.log('clicked~');
  // console.log('height',heightValue);
  // console.log('weight',weightValue);


const res=weightValue+heightValue
console.log(`weight+height is ${res}`);
} )