var  menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('ativo')

    )

    this.classList.add('ativo')
}

menuItem.forEach ((item) =>
    item.addEventListener('click', selectLink)
)


var iconeExpandir = document.querySelector ('#btn-exp')
var sideBar = document.querySelector('.navbar')


iconeExpandir.addEventListener ('click', function(){
    sideBar.classList.toggle('expandir')
})