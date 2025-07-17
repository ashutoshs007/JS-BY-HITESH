# Projects related to DOM

## project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code


## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
 button.addEventListener('click',function(e){

  console.log(e)
  console.log(e.target)
  if(e.target.id ==='grey'){
    body.style.backgroundColor =e.target.id
  }

  else if (e.target.id ==='yellow'){
    body.style.backgroundColor =e.target.id
  }

  else if (e.target.id ==='white'){
    body.style.backgroundColor =e.target.id
  }

  else if (e.target.id ==='blue'){
    body.style.backgroundColor =e.target.id
  }
  else if (e.target.id ==='purple'){
    body.style.backgroundColor =e.target.id
  }

 });

});




```
# Solution code


## project 2

```javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```



# Solution code


## project 3

```javascript

document.getElementById('clock')
//const clock = document.querySelector('#clock')



//setInterval //(controls events of JS,aap mujhe ek koi bhi method de dijiye aaur interval bta dijiye ki kitne interval baad mai isko continously run krte jaunga)

setInterval(function(){
  let date = new Date()
  clock.innerHTML =date.toLocaleTimeString();
console.log(date.toLocaleTimeString());
},1000)


//1000 for 1 sec coz the parameter is in milliseconds





