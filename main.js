const btn = document.querySelector('.btn');
const soq =  document.querySelector('.soqqasi');
const soni = document.querySelector('.soni');
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const num = document.querySelector('.num')

let narx = 0;
let son = 0;
let a = 0;

btn.addEventListener('click',(e) => {
    e.preventDefault()
    narx = narx + 25.600
    son = son + 1
    soq.innerHTML = 'Olgan mashinez narxi:'+ narx + '000' + '$' 
})

plus.addEventListener('click',()=> {
    a++;
    num.innerHTML = a;

})
minus.addEventListener('click', ()=> {
    if(a > 0) {
        a--;
        num.innerHTML = a;
    }
})