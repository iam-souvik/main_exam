let data = JSON.parse(localStorage.getItem("Hotel"));


let append = (data) => {
    let container = document.querySelector("#hotel_details");
    container.innerHTML = null;

    let div = document.createElement("div");
    div.setAttribute("class", 'hotel');

    let box = document.createElement("div");
    box.setAttribute('class', 'box');

    let img1 = document.createElement("img");
    img1.src = data.Images.one;

    let img2 = document.createElement("img");
    img2.src = data.Images.two;

    let title = document.createElement("h3");
    title.innerText = data.Title;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${data.Rating}`;

    let price = document.createElement("p");
    price.innerText = `Price: ${data.Price}`;

    let type = document.createElement("p");
    type.innerText = `Type: ${data.type ? 'AC' : 'Non-Ac'}`

    let rooms = document.createElement('p');
    rooms.innerText = `Total Rooms: ${data.Rooms}`;

    container.append(div);
    div.append(box, title, rating, price, type, rooms);
    box.append(img1, img2)
}

append(data);
