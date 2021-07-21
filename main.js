const table = document.querySelector(".table");


const createElement = (tag, className, innerTxt) => {
    // if(!tag){
    //     alert('Внутренняя ошибка сервиса!');
    //     return;
    // };
    
    const element = document.createElement(tag);

    if(className){
        element.className = className;
    };

    if(innerTxt){
        element.innerText = innerTxt;
    };
    
    return element;
};


fetch("http://localhost:1717/pastry")
    .then(response => response.json())
    .then((data) => {
        for(let i of data){
            const ingr = i.ingredients.join(' | ');
            const tableBody = createElement('tr', 'table__body');
            const name = createElement('td', 'table__body-item name', i.name);
            const ingredients = createElement('td', 'table__body-item ingredients', ingr);
            const inStock = createElement('td', 'table__body-item in-stoke', i.inStock);
            tableBody.append(name, ingredients, inStock);
            table.append(tableBody);
        };
    });