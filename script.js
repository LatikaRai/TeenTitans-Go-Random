//Selecting button element
let btn = document.querySelector('button')

//Adding an Event Listener
btn.addEventListener('click', ()=>{
  //Generating random values
  let x = Math.random()*80 
  let y = Math.random()*80 
  let rot = Math.random()*360 

  //Creating a random image element
  let img = document.createElement('img')

  //Choosing a Random Character Image
  let imgs = ['raven.png', 'star.png', 'beast.png', 'robin.png', 'cyborg.png']
  let i = Math.floor(Math.random()*imgs.length)
  img.setAttribute('src',`./${imgs[i]}`)

  //Setting image styles
  img.style.height = '30vh'
  img.style.position = 'absolute'
  img.style.left = x+'%'
  img.style.top = y+'%'
  img.style.rotate = rot+'deg'

  // Adding the image to the page
  document.body.appendChild(img)
})
