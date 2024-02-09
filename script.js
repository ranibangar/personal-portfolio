// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark')
})

// Typing effect

let typed = new Typed('.auto-input',{
 strings: [ 'Front End Developer!' ,'UI Designer!' ],
 typedSpeed:100,
 backSpeed:100,
 backDelay:2000,
 loop:true,
})

// Active Link State On Scroll

//Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
console.log(navLinks)
//Get All Sections
let sections = document.querySelectorAll('section')
console.log(sections)