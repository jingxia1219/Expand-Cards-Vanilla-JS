const panels = document.querySelectorAll('.panel')

function expandHandler(e){
    console.log(e)
    removeActiveClass()
    e.target.classList.add('active')
}
function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

panels.forEach( panel=>{
    panel.addEventListener('click',expandHandler
    )})


