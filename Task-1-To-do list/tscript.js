let inputvl = document.querySelector('.inputval')
let butn = document.querySelector('.createbutton')
let taskli = document.querySelector('.tasklt')

//disable add button

inputvl.addEventListener('keyup', () => {
    if(inputvl.value.trim() != 0){
        butn.classList.add('active')
    }
    else{
        butn.classList.remove('active')
    }
})

//New item Addition

butn.addEventListener('click',() => {
    let newdiv = document.createElement('div');
    if(inputvl.value.trim() != 0){
        
        newdiv.classList.add('task-items');
        newdiv.innerHTML = `
        <div class="exdiv">
            <i id="w2" class="fa fa-check-square"></i>
            </div
            <div class="ptext"><p>${inputvl.value}</p></div>
         <div class="exdiv">
            <i id="w3" class='fas fa-trash-alt'></i>

        </div>
        `
        taskli.appendChild(newdiv);
        inputvl.value = ' ';
    }
    else{
        alert('Please enter a task!!!')
    }
})

//Item Deletion

taskli.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-trash-alt')) {
        e.target.parentElement.parentElement.remove();
    }

})

//Completed marking

taskli.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
        e.target.parentElement.classList.toggle('completed');
    }
})
