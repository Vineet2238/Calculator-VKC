// const input=document.getElementById('output');
// const buttons=document.querySelectorAll('button');

// buttons.forEach(button =>{
//     button.addEventListener('click', (e)=>{
//         const value=e.target.innerHTML;
//         if (value==='AC') {
//             input.value=''
//         }else if (value==='DEL') {
//             input.value=input.value.slice(0,-1);
//         }else if (value==='=') {
//             try{
//                 input.value=eval(input.value)
//             }catch(error){
//                 input.value='Error';
//             }
//         }else{
//             input.value +=value;
//         }
//     })
// })


const display = document.getElementById('output');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === 'AC') {
      display.value = '';
    } else if (value === 'DEL') {
      display.value = display.value.slice(0, -1);
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});