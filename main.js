let bigger_container = document.querySelector('#bigger_container')
let buy = document.getElementById('buy')
let aywa = document.querySelector('#btn_confirm')
let kahyan = document.getElementById('kahyan')
let visa = document.getElementById('visa')
let mode = document.getElementById('mode')
let header = document.getElementById('myheader')
let body = document.getElementById('body')
let addProd = document.querySelector('#add_pro')
let proContainer = document.querySelector('#pro-container')
mode.addEventListener('click', (eo) => {
  body.classList.toggle('dark')
})
console.log(proContainer)

aywa.addEventListener('click', (eo) => {
  visa.style.display = 'none'
  kahyan.style.display = 'block'
  setTimeout(() => {
    bigger_container.classList.remove('active')
  }, 3000)
})

const newProduct = ` <div class="card m-auto" style="width: 18rem">
<img src="..." class="card-img-top" alt="..." />
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
  <a id="buy" href="#" class="js-buy btn btn-primary">Buy</a>
</div>
</div>`
addProd.addEventListener('click', (eo) => {
  console.log(eo.target)
  proContainer.innerHTML += newProduct
})

proContainer.style.border = '10px solid red'

proContainer.addEventListener('click', (eo) => {
  if (eo.target.className == 'js-buy btn btn-primary') {
    console.log('tamam')
    eo.preventDefault()
    visa.style.display = 'block'

    bigger_container.classList.add('active')

    kahyan.style.display = 'none'
  }
})

if (aywa.classList.contains('btn') == true) {
  console.log('gg')
  console.log(aywa.classList.contains('btn'))
}
