import {loadContactPage} from "./contact";
import {loadAboutPage} from "./about";
import {loadMenuPage } from "./menu";

export {loadPageContent}

function loadPageContent(){
    const container = document.querySelector('#content');
    const aboutPageButton = document.createElement('button');
    const menuPageButton = document.createElement('button');
    const contactPageButton = document.createElement('button');
    aboutPageButton.textContent = "About";
    menuPageButton.textContent = "Menu";
    contactPageButton.textContent = "Contact"
    let count = 0;
    
    aboutPageButton.addEventListener('click', () =>{
        deleteCurrentPage(count);
        loadAboutPage();
        count = 0;
    });
    menuPageButton.addEventListener('click', () =>{
        deleteCurrentPage(count);
        loadMenuPage();
        count =1;
    });
    contactPageButton.addEventListener('click', () =>{
        deleteCurrentPage(count);
        loadContactPage();
        count = 2;
    });

    container.appendChild(aboutPageButton);
    container.appendChild(menuPageButton);
    container.appendChild(contactPageButton);
    loadAboutPage();

}

function deleteCurrentPage(count){
    
    if(count==0){
        const currentPage = document.querySelector('.aboutPage');
        currentPage.remove();
    }else if(count==1){
        const currentPage = document.querySelector('.menuPage');
        currentPage.remove();
    }else if(count==2){
        const currentPage = document.querySelector('.contactPage');
        currentPage.remove();
    }
}

