let numCounter=document.querySelector('#counter');
let minus=document.querySelector('#minus');
let plus=document.querySelector('#plus');

plus.addEventListener('click',()=>{
   let num= +(numCounter.textContent);
   num++;
   numCounter.textContent=num;
})

minus.addEventListener('click',()=>{
    let num= +(numCounter.textContent);
    num--;
    numCounter.textContent=num;
 })