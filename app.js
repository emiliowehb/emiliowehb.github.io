const thankState = document.querySelector('#thankState');
const rateState = document.querySelector('#rateState');
const submitBtn = document.querySelector('#submit');
const thankSpan = document.querySelector('.thankSpan');
let ratingSelected;

thankState.remove();
const ratingBtn = document.querySelectorAll('.ratingBtn');

for(let button of ratingBtn){
    button.addEventListener('click', () => {
        ratingSelected = button.innerText;
    })
}
submitBtn.addEventListener('click', ()=>{
    document.body.replaceChild(thankState, rateState);
    thankSpan.innerText = `You selected ${ratingSelected} out of 5`
})
