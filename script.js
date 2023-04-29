const form=document.getElementById('form')

form.addEventListener('submit', function(e){
 e.preventDefault()

 const name=document.getElementById('name').value
 const email=document.getElementById('email').value
 const number=document.getElementById('number').value
 const emailSubject=document.getElementById('emailSubject').value
 const messageArea=document.getElementById('messageArea').value

 
 /* Fetch APi Post */
 fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title:name,
    email:email,
    mobile:number,
    subject:emailSubject,
    message: messageArea,


  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
  title=document.getElementById("title")
  body=document.getElementById("bd")
  title.innerHTML = data.title
  email.innerHTML = data.email  
  mobile.innerHTML = data.number
  subject.innerHTML = data.emailSubject
  message.innerHTML = data.messageArea
}).catch(error => console.error('Error:', error)); 
});

/* fetch api Get*/
const btn = document.getElementById('buttonClick');
  const img = document.getElementById('img');
 

  btn.addEventListener('click', function() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(result => {
        img.src = result.message;
        console.log(result)
    })
    .catch(err=> console.log(err))
  });


/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');

            });
        };
    }); 

    /*sticky navbar*/

let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

};


/*fetch api alert msg for error  
window.addEventListener("load", () => {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      const FD = new FormData(form);
  
      // Define what happens on successful data submission
      XHR.addEventListener("load", (event) => {
        alert(event.target.responseText);
      });
  
      // Define what happens in case of error
      XHR.addEventListener("error", (event) => {
        alert('Thank you ! I will get back to you soon');
      });
  
      // Set up our request
      XHR.open("POST", "https://example.com/cors.php");
  
      // The data sent is what the user provided in the form
      XHR.send(FD);
    }
  
    // Get the form element
    const form = document.getElementById("form");
  
    // Add 'submit' event handler
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      sendData();
    });
  }); */

