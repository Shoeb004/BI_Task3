let plusBtn = document.querySelectorAll('.plus-btn');
let questonContainer = document.querySelectorAll('.queston-container');
console.log(plusBtn);
console.log(questonContainer);

const handleClick = (index) =>{
    console.log(index);
    questonContainer[index].classList.add('active')
}
plusBtn.forEach((element, index)=>{
    element.addEventListener('click',()=>{
        // alert(index);
        handleClick(index);

    })
})