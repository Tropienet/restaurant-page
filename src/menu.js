export { loadMenuPage }

function loadMenuPage(){
    const container = document.querySelector('#content');
    const menuPage = document.createElement('div');
    menuPage.setAttribute('class', 'menuPage');
    loadMenuItems(menuPage);
    container.appendChild(menuPage);
}

function loadMenuItems(container){
    addBasicPizza(container);
    addGoodPizza(container);
    addGreatPizza(container);
    addBestPizza(container);
}


function addBasicPizza(container){
    const price = document.createElement('p');
    const pizzaCard = document.createElement('div');
    const basicPizza = document.createElement('p')
    const basicPizzaImage = document.createElement('img');
    basicPizzaImage.src= "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*";
    basicPizzaImage.alt = "This is an image of our basic pizza";
    basicPizza.textContent = "This is our basic pizza. It is very good";
    price.textContent= "5$"
    pizzaCard.appendChild(basicPizza);
    pizzaCard.appendChild(basicPizzaImage);
    pizzaCard.appendChild(price)
    container.appendChild(pizzaCard);
}

function addGoodPizza(container){
    const price = document.createElement('p');
    const pizzaCard = document.createElement('div');
    const goodPizza = document.createElement('p')
    const goodPizzaImage = document.createElement('img');
    goodPizzaImage.src = "https://delhirestaurant.store/wp-content/uploads/2016/10/15-Minute-Pizza-WS-Thumbnail.png"
    goodPizza.alt ="Image of our good pizza"
    goodPizza.textContent = "This is our good pizza. Its even better than our basic pizza";
    price.textContent= "6$"
    pizzaCard.appendChild(goodPizza);
    pizzaCard.appendChild(goodPizzaImage);
    pizzaCard.appendChild(price);
    container.appendChild(pizzaCard);
}

function addGreatPizza(container){
    const price = document.createElement('p');
    const pizzaCard = document.createElement('div');
    const greatPizza = document.createElement('p')
    const greatPizzaImage = document.createElement('img');
    greatPizzaImage.src = "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80";
    greatPizzaImage.alt = "This is an image of our great pizza";
    greatPizza.textContent = "This is our great pizza. Its our 2nd best pizza";
    price.textContent= "8$"
    pizzaCard.appendChild(greatPizza);
    pizzaCard.appendChild(greatPizzaImage);
    pizzaCard.appendChild(price);
    container.appendChild(pizzaCard);
}

function addBestPizza(container){
    const price = document.createElement('p');
    const pizzaCard = document.createElement('div');
    const bestPizza = document.createElement('p')
    const bestPizzaImage = document.createElement('img');
    bestPizzaImage.src = "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg";
    bestPizzaImage.alt = "This is an image of our best Pizza";
    bestPizza.textContent = "This is our good pizza. This is our best pizza";
    price.textContent= "10$"
    pizzaCard.appendChild(bestPizza);
    pizzaCard.appendChild(bestPizzaImage);
    pizzaCard.appendChild(price);
    container.appendChild(pizzaCard);
}

