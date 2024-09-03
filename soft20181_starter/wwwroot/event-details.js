let eventlist = " ";
fetch('events.json')
    .then(response => response.json())
    .then(json => {
        json.events.forEach(event => {
           if (event.id == localStorage.chosenId){
            eventlist += `
            <li class="dynamicEventDetails"id="${event.id}">
                <header>
                    <h1>${event.title}</h1>
                    <h2>${event.date}</p>
                    <h2>${event.location}</p>
                </header>
                
                <section class="event-details" >
                    <!-- Event details content -->
                    <center><h1>INFO</h1></center>
                    <p class="">${event.description}</p>
                    <center> <img src="${event.imageUrl}" alt="${event.title} Image" id="event_img">/<center>
                    <p>Additional details and information...</p>
                </section>   
                
            </li>`;
        
           }
        });
        document.querySelector(".eventsLister").innerHTML = eventlist;
        
    });
