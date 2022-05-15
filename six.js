const button = document.querySelector('button')
const body = document.querySelector('body')
button.addEventListener('click',()=>{
    const img = document.createElement('img')
    img.setAttribute('src','/OIP.jfif')
    body.appendChild(img)
})