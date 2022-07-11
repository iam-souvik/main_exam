
let data;
let search = async () =>{
    let query = document.querySelector('#query').value;
    data = await getData(query);
    console.log(data);
    append(data);
}

let getData = async (query)=>{
    const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;
    let res =  await fetch(url);
    let data = await res.json();
    return data.hotels;
}

let append = (data)=>{
    let container = document.querySelector("#hotels_list");
    container.innerHTML = null;

    data.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class", 'hotel');

        let img = document.createElement("img");
        img.src = el.Images.one;

        let title = document.createElement("h3");
        title.innerText = el.Title;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.Rating}`;

        let price = document.createElement("p");
        price.innerText = `Price: ${el.Price}`;

        let type = document.createElement("p");
        type.innerText = `Type: ${el.type ? 'AC' : 'Non-Ac'}` 

        let rooms = document.createElement('p');
        rooms.innerText = `Total Rooms: ${el.Rooms}`;

        let book = document.createElement("button");
        book.id = 'book';
        book.innerText = 'Book now';
        book.addEventListener("click", ()=>{
            bookHotel(el);
        })

        container.append(div);
        div.append(img, title, rating, price, type, rooms, book);
    })
}


function bookHotel(el){
    let bookDataFLS = JSON.parse(localStorage.getItem("login"));

    if(bookDataFLS != null){
        localStorage.setItem("Hotel",(JSON.stringify(el)))
        window.location.href = "checkout.html";
    }else{
        alert("Log In to continue!")
    }
}

document.querySelector("#sort_lth").addEventListener("click", lowtoHigh);

function lowtoHigh(){
    data.sort(function(a,b){
        return a.Price - b.Price;
    })
    append(data);
}


document.querySelector("#sort_htl").addEventListener("click", hightoLow);

function hightoLow(){
    data.sort(function(a,b){
        return b.Price - a.Price;
    })
    append(data);
}


document.querySelector("#filter_ac").addEventListener("click", acFilter);

function acFilter(){
    let filteredData = data.filter(function(el){
        return el.Ac == true
    })

    append(filteredData);
}

document.querySelector("#filter_nonac").addEventListener("click", nonAcFilter);

function nonAcFilter(){
    let filteredData = data.filter(function(el){
        return el.Ac == false
    })

    append(filteredData);
}





let id;
let debounce = (func, delay)=>{
    if(id) {
        clearTimeout(id);
    }else{
        id = setTimeout(function (){
            func();
        }, delay);
    }
}