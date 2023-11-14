function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function openModal1() {
    document.getElementById("myModal1").style.display = "block";
  }
  
  function closeModal1() {
    document.getElementById("myModal1").style.display = "none";
}
function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  
  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
}

function openModal3() {
    document.getElementById("myModal3").style.display = "block";
  }
  
  function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
}

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*link*/

let section=document.querySelectorAll('active');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });
/*link*/
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
/*o*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.heading ,.home-content',{origin:'top'});
ScrollReveal().reveal('.home-img , .services-container,.project-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p , .about-content',{origin:'right'});

const typed=new Typed('.multiple-text',{
    strings:['Software Developer','Web Designer','DB Administrator'],
    typeSpeed:100 ,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

