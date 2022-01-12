export {loadContactPage, addEmployeeInfo};

function loadContactPage(){
    const container = document.querySelector('#content')
    const contactPage = document.createElement('div');
    contactPage.setAttribute('class', 'contactPage')
    addEmployeeInfo("Tony", "tony@restaurantpage.com", "055555", contactPage);
    addEmployeeInfo("Alen", "alen@restaurantpage.com", "055556", contactPage);
    addEmployeeInfo("Ana", "ana@restaurantpage.com", "055557", contactPage);
    container.appendChild(contactPage);
}


function addEmployeeInfo(employee,email,number,container){
    const employeeCard = document.createElement('div');
    employeeCard.setAttribute('class', 'employeeCard');
    const employeeName = document.createElement('p');
    employeeName.textContent = employee;
    const employeeEmail = document.createElement('p');
    employeeEmail.textContent = email;
    const employeeNumber = document.createElement('p');
    employeeNumber.textContent = number;
    
    employeeCard.appendChild(employeeName);
    employeeCard.appendChild(employeeEmail);
    employeeCard.appendChild(employeeNumber);
    container.appendChild(employeeCard);
}
