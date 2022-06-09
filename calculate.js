const yaricapInput=document.querySelector('#yaricap');


const buton = document.querySelector('#btn');

buton.onclick=()=>{
    const r =yaricapInput.value;
    const alan=(Math.PI*r*r).toFixed(2)
    const cevre= (2*Math.PI*r).toFixed(2)

    document.querySelector('.alan').textContent=alan;
    document.querySelector('.cevre').textContent=cevre;


}

yaricapInput.onkeydown=(e)=>{
    if(e.keyCode===13)
    buton.onclick();
}

yaricapInput.onmouseover=function (e) {
   console.log(e); 
   yaricapInput.style.backgroundColor='darkgray'
}
yaricapInput.onmouseout=function (e) {

    yaricapInput.style.backgroundColor='white'
 }


 window.onload=()=>{
     yaricapInput.focus();
 }