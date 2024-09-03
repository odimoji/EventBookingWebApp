const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

const toggle = document.getElementById("toggleLight");
const body = document.querySelector('body')


function changeNavbarLinksColor(color) {
    const navbarLinks = document.querySelectorAll('.navbar__links');
    navbarLinks.forEach(link => {
        link.style.color = color;
        link.style.transition = 'color 2s'
    });
}
function changeNavbarContainerColor(color) {
    const navbarContainer = document.querySelector('.navbar__container');
    navbarContainer.style.backgroundColor = color;
    navbarContainer.style.transition = 'background-color 2s';
    localStorage.setItem('NavbarColor', color);
}

function changeMoonColor(color){
    toggle.style.color = color;
    toggle.style.transition = 'all 2s'
    localStorage.setItem('MoonIconColor', color);
}
function changeMainContainerColor(color){
    const mainContainer = document.querySelector('.main__container');
    mainContainer.style.backgroundColor = color;
    mainContainer.style.transition = 'background-color 2s';
    localStorage.setItem('MainContainerColor', color);
}

function changeMainImgContainerColor(color){
    const mainImgContainer = document.querySelector('.main__img--container');
    mainImgContainer.style.backgroundColor = color;
    mainImgContainer.style.transition = 'background-color 2s';
    localStorage.setItem('MainImgContainerColor', color);
}

function changeTextColor(color){
    const text = document.querySelector('.text');
    text.style.color = color;
    localStorage.setItem('TextColor', color);
}

function changeServicesColor(color){
    const services = document.querySelector('.services');
    services.style.backgroundColor = color;
    services.style.transition = 'background-color 2s';
    localStorage.setItem('ServicesColor', color);
}

function changeFooterColor(color){
    const footer = document.querySelector('.footer__container');
    footer.style.backgroundColor = color;
    footer.style.transition = 'background-color 2s';
    localStorage.setItem('FooterColor', color);
}

function changeFooterH2Color(color){
    const footerH2 = document.querySelectorAll('.footer__link--items h2');
    footerH2.forEach(link =>{
        link.style.color = color;
    })
    localStorage.setItem('FooterH2Color', color);
}

function changeFooterTextColor(color){
    const footerText = document.querySelectorAll('.footer__link--items a');
    footerText.forEach(link =>{
        link.style.color = color;
    })
    localStorage.setItem('FooterTextColor', color);
}

function changeWebsiteRightscolor(color){
    const websiteRights = document.querySelector('.website__rights');
    websiteRights.style.color = color;
    localStorage.setItem('WebsiteRights', color);
}

function changeFooterLogoColor(color){
    const footerLogo = document.getElementById('footer__logo');
    footerLogo.style.color = color;
    localStorage.setItem('FooterLogo', color);
}

 
toggle.addEventListener('click',function(){
   const isMoonIcon = this.classList.toggle('bi-moon');
   localStorage.setItem('MoonIconState', isMoonIcon);


    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        changeNavbarLinksColor('#fff');
        changeNavbarContainerColor('#3b1e1e');
        changeMoonColor('#fff');
        changeMainContainerColor('#141414');
        changeMainImgContainerColor('#141414');
        changeTextColor('#fff');
        changeServicesColor('#141414');
        changeFooterColor('#141414');
        changeFooterTextColor('#fff');
        changeFooterH2Color('#fff');
        changeWebsiteRightscolor('#fff')
        changeFooterLogoColor('#fff')
    }
    else{ 
    body.style.background = '#3b1e1e';
    body.style.color = 'white';
    body.style.transition = '2s';
    changeNavbarLinksColor('#000');
    changeNavbarContainerColor('#21d4fd')
    changeMoonColor('#000')
    changeMainContainerColor('#fff');
    changeMainImgContainerColor('#fff')
    changeTextColor('#000');
    changeServicesColor('#fff');
    changeFooterColor('#fff');
    changeFooterTextColor('#000');
    changeFooterH2Color('#000');
    changeWebsiteRightscolor('#000')
    changeFooterLogoColor('#000')
    }

    body.classList.add('transition');
})

document.addEventListener('DOMContentLoaded', function() {
    const storedMoonIconState = localStorage.getItem('MoonIconState');
    if (storedMoonIconState == 'true'){
        toggle.classList.add('bi-moon');
    }
    else{
        toggle.classList.add('bi-brightness-high-fill');
    }
    const storedNavbarColor = localStorage.getItem('NavbarColor');
    if (storedNavbarColor) {
        changeNavbarContainerColor(storedNavbarColor);
    }

    const storedMoonIconColor = localStorage.getItem('MoonIconColor');
    if (storedMoonIconColor) {
        changeMoonColor(storedMoonIconColor);
    }

    const storedMainContainerColor =  localStorage.getItem('MainContainerColor')
    if (storedMainContainerColor) {
        changeMainContainerColor(storedMainContainerColor);
    }

    const storedMainImgContainerColor = localStorage.getItem('MainImgContainerColor');
    if (storedMainImgContainerColor) {
        changeMainImgContainerColor(storedMainImgContainerColor);
    }

    const storedTextColor = localStorage.getItem('TextColor');
    if (storedTextColor) {
        changeTextColor(storedTextColor);
    }

    const storedServicesColor = localStorage.getItem('ServicesColor');
    if (storedServicesColor) {
        changeServicesColor(storedServicesColor);
    }

    const storedFooterColor = localStorage.getItem('FooterColor');
    if (storedFooterColor) {
        changeFooterColor(storedFooterColor);
    }

    const storedFooterH2Color = localStorage.getItem('FooterH2Color');
    if (storedFooterH2Color) {
        changeFooterH2Color(storedFooterH2Color);
    }

    const storedFooterTextColor = localStorage.getItem('FooterTextColor');
    if (storedFooterTextColor) {
        changeFooterTextColor(storedFooterTextColor);
    }

    const storedWebsiteRights = localStorage.getItem('WebsiteRights');
    if (storedWebsiteRights) {
        changeWebsiteRightscolor(storedWebsiteRights);
    }

    const storedFooterLogo = localStorage.getItem('FooterLogo');
    if (storedFooterLogo) {
        changeFooterLogoColor(storedFooterLogo);
    }


});






/*
let list = " "
fetch('events.json')
.then(response => response.json())
.then(json => {
    json.events.forEach(event => {
        list += `<li>${event.title}</li>`
        list += `<li>${event.location}</li>`
        list += `<li>${event.date}</li>`
        list += `<img src="${event.imageUrl}" alt="${event.title} Image" width="300">`
    });
    document.querySelector(".eventsContainer").innerHTML = list;
    console.log(json.events)
})
*/
/*
const inputText = document.querySelector("#input-text")
let userInput = inputText.value;
console.log("userinput: ", userInput);
*/


const searchInput = document.getElementById("searchTerm");

let userEvent = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    userEvent.forEach(event => {
        const isVisible = event.title.toLowerCase().includes(value) ||
        event.location.toLowerCase().includes(value);
        event.element.classList.toggle("hide", !isVisible);
    });
});
console.log("userEvent")

/*let list = "";
fetch('events.json')
    .then(response => response.json())
    .then(json => {
        userEvent = json.events.map(event => {
            const listItem = document.createElement('li');
            listItem.id = event.id;
            listItem.innerHTML = `
                <img src="${event.imageUrl}" alt="${event.title} Image" width="100" class="events">
                <div class="eventDetails">
                    <h2>${event.title}</h2>
                    <a href ="${event.locationUrl}" class="bi bi-geo-alt-fill" id="location-icon"></a>
                    <p>${event.location}</p>
                    <p>${event.date}</p>
                    <a href="event-details.html">
                        <button class="colorfont">Learn More</button>
                    </a>
                </div>
            `;
            document.querySelector(".eventsContainer").appendChild(listItem);

            return { title: event.title, location: event.location, element: listItem };
        });
    })
    .finally(function () {
        var allEvents = document.querySelectorAll(".eventsContainer li");
        allEvents.forEach(item => {
            item.querySelector("button").addEventListener("click", function () {
                var id = item.id;
                localStorage.chosenId = id;
            });
        });
    });
*/





/*
const searchInput = document.querySelector("[data-search]")

let userEvent = []

searchInput.addEventListener("input", (e) =>{
    const value = e.target.value.toLowerCase()
    userEvent.forEach(event => {
        const isVisible = event.title.toLowerCase().includes(value) || 
        event.location.toLowerCase().includes(value)
        event.element.classList.toggle("hide", !isVisible)
    })
   
})



let list = " ";
fetch('events.json')
    .then(response => response.json())
    .then(json => {
        userEvent = json.events.map(event => {
            list += `
                <li id="${event.id}" >
                    <img src="${event.imageUrl}" alt="${event.title} Image" width="100" class="events">
                    <div class="eventDetails">
                        <h2>${event.title}</h2>
                        <a href ="${event.locationUrl}" class="bi bi-geo-alt-fill" id="location-icon"></a>
                        <p>${event.location}</p>
                        <p>${event.date}</p>
                        <a href = "event-details.html">
                            <button class="colorfont">Learn More
                            </button>
                        </a>
                    </div>
                </li>`;
                return {title: event.title, location: event.location, element: element.firstChild }
        });
        document.querySelector(".eventsContainer").innerHTML = list;

    }).finally(function() {
        var allEvents = document.querySelectorAll(".eventsContainer li");
        allEvents.forEach(item => {
            item.querySelector("button").addEventListener("click", function() {
                var id = item.id;
                localStorage.chosenId = id;
            })
        })
    });





/*
var events = [
    { title: 'Event 1', location: 'Location 1', date: 'Date 1', imageUrl: 'images/pic1.jpg' },
    { title: 'Event 2', location: 'Location 2', date: 'Date 2', imageUrl: 'images/pic2.jpg' },
    // Add more events as needed
];

var output = '';
for(var i = 0; i< events.length; i++){
   // console.log(events[i].title);
   output += '<li>' +events[i].title+ '<li>';
   
}

document.getElementById("eventsContainer").innerHTML = output;


//console.log(events)





        



/*
let font_incre = document.querySelector(".font-inc");
let reset = document.getElementById("font-reset");
let font_decre = document.querySelector(".font-dec");
let mainheader = document.querySelector(".mainheader");
let darkbox = document.querySelector(".darkbox");
let original = document.querySelector(".original")

function increaseFont(){
    mainheader.setAttribute('id','incre');
    localStorage.fontSize = 'larger';
}
font_incre.addEventListener('click', increaseFont); 

function resetFont(){
    mainheader.setAttribute('id','reset');
    localStorage.fontSize = 'regular';
}
reset.addEventListener('click', resetFont);

function decreFont(){
    mainheader.setAttribute('id','decre');
    localStorage.fontSize = 'smaller';
}
font_decre.addEventListener('click', decreFont);


if (localStorage.fontSize == 'larger'){
    mainheader.setAttribute ('id','incre');
}

else if (localStorage.fontSize == 'smaller'){
    mainheader.setAttribute ('id','decre');
}

else()=>{
    mainheader.setAttribute('id','reset')
}



darkbox.addEventListener('click', function darkbackground(){
    mainheader.setAttribute('class','darker'); localStorage.headerBackground = 'dark';
})

original.addEventListener('click', function originalbackground(){
    mainheader.setAttribute('class','original'); localStorage.headerBackground = 'original';
})

if(localStorage.headerBackground == 'dark'){
    mainheader.setAttribute ('class','darker')
}

else if(localStorage.headerBackground == 'original'){
    mainheader.setAttribute ('class','original')
}

*/


/*

let list = " ";
fetch('events.json')
    .then(response => response.json())
    .then(json => {
        json.events.forEach(event => {
            list += `
                <li id="${event.id}" >
                    <img src="${event.imageUrl}" alt="${event.title} Image" width="100" class="events">
                    <div class="eventDetails">
                        <h2>${event.title}</h2>
                        <a href ="${event.locationUrl}" class="bi bi-geo-alt-fill" id="location-icon"></a>
                        <p>${event.location}</p>
                        <p>${event.date}</p>
                        <a href = "event-details.html">
                            <button class="colorfont">Learn More
                            </button>
                        </a>
                    </div>
                </li>`;
        });
        document.querySelector(".eventsContainer").innerHTML = list;

    }).finally(function() {
        var allEvents = document.querySelectorAll(".eventsContainer li");
        allEvents.forEach(item => {
            item.querySelector("button").addEventListener("click", function() {
                var id = item.id;
                localStorage.chosenId = id;
            })
        })
    });
*/