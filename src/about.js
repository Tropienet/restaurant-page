export {loadAboutPage, loadInfo};

function loadAboutPage(){
    const container = document.querySelector('#content');
    const aboutPage = document.createElement('div');
    aboutPage.setAttribute('class', 'aboutPage');
    loadInfo(aboutPage);
    container.appendChild(aboutPage);
}

function loadInfo(container){
    const header = document.createElement('h1');
    header.textContent = "Pizza restaurant";
    const descripton  = document.createElement('p');
    descripton.textContent = "\nThis is a pizza restaurant. We were established in 1965.\nWe sell many different pizzas.\nEach pizza is handcrafted by the master.\n Our location is: Local area";
    const aboutImage = document.createElement('img');
    aboutImage.src = "https://media-cdn.tripadvisor.com/media/photo-s/13/3a/b5/03/photo5jpg.jpg";
    aboutImage.alt = "A picture of a pizza restaurant";

    container.appendChild(header);
    container.appendChild(descripton);
    container.appendChild(aboutImage);
}

