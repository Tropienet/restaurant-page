(()=>{"use strict";function e(e,t,n,a){const o=document.createElement("div");o.setAttribute("class","employeeCard");const c=document.createElement("p");c.textContent=e;const i=document.createElement("p");i.textContent=t;const d=document.createElement("p");d.textContent=n,o.appendChild(c),o.appendChild(i),o.appendChild(d),a.appendChild(o)}function t(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("class","aboutPage"),function(e){const t=document.createElement("h1");t.textContent="Pizza restaurant";const n=document.createElement("p");n.textContent="\nThis is a pizza restaurant. We were established in 1965.\nWe sell many different pizzas.\nEach pizza is handcrafted by the master.\n Our location is: Local area";const a=document.createElement("img");a.src="https://media-cdn.tripadvisor.com/media/photo-s/13/3a/b5/03/photo5jpg.jpg",a.alt="A picture of a pizza restaurant",e.appendChild(t),e.appendChild(n),e.appendChild(a)}(t),e.appendChild(t)}function n(e){0==e?document.querySelector(".aboutPage").remove():1==e?document.querySelector(".menuPage").remove():2==e&&document.querySelector(".contactPage").remove()}!function(){const a=document.querySelector("#content"),o=document.createElement("button"),c=document.createElement("button"),i=document.createElement("button");o.textContent="About",c.textContent="Menu",i.textContent="Contact";let d=0;o.addEventListener("click",(()=>{n(d),t(),d=0})),c.addEventListener("click",(()=>{n(d),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("class","menuPage"),function(e){(function(e){const t=document.createElement("p"),n=document.createElement("div"),a=document.createElement("p"),o=document.createElement("img");o.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*",o.alt="This is an image of our basic pizza",a.textContent="This is our basic pizza. It is very good",t.textContent="5$",n.appendChild(a),n.appendChild(o),n.appendChild(t),e.appendChild(n)})(e),function(e){const t=document.createElement("p"),n=document.createElement("div"),a=document.createElement("p"),o=document.createElement("img");o.src="https://delhirestaurant.store/wp-content/uploads/2016/10/15-Minute-Pizza-WS-Thumbnail.png",a.alt="Image of our good pizza",a.textContent="This is our good pizza. Its even better than our basic pizza",t.textContent="6$",n.appendChild(a),n.appendChild(o),n.appendChild(t),e.appendChild(n)}(e),function(e){const t=document.createElement("p"),n=document.createElement("div"),a=document.createElement("p"),o=document.createElement("img");o.src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",o.alt="This is an image of our great pizza",a.textContent="This is our great pizza. Its our 2nd best pizza",t.textContent="8$",n.appendChild(a),n.appendChild(o),n.appendChild(t),e.appendChild(n)}(e),function(e){const t=document.createElement("p"),n=document.createElement("div"),a=document.createElement("p"),o=document.createElement("img");o.src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg",o.alt="This is an image of our best Pizza",a.textContent="This is our good pizza. This is our best pizza",t.textContent="10$",n.appendChild(a),n.appendChild(o),n.appendChild(t),e.appendChild(n)}(e)}(t),e.appendChild(t)}(),d=1})),i.addEventListener("click",(()=>{n(d),function(){const t=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("class","contactPage"),e("Tony","tony@restaurantpage.com","055555",n),e("Alen","alen@restaurantpage.com","055556",n),e("Ana","ana@restaurantpage.com","055557",n),t.appendChild(n)}(),d=2})),a.appendChild(o),a.appendChild(c),a.appendChild(i),t()}()})();