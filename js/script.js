let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
const formSearch = document.getElementById("form")

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

formSearch.addEventListener("submit", handlerFunction);

function handlerFunction(event){
    event.preventDefault();
    const nameCoffee = event.target.search.value;
    getData(nameCoffee);
}


async function getData(searchInput){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfc61d113emsh81294470ebbec25p15fa2djsn48a806940ac3',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
    };
    let response = await fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${searchInput}`,options)
    let data = await response.json();
    showData(data);
}
getData();

function showData(data){
    let tab = `<tr>
    <th>sugar_g</th>
    <th>fiber_g</th>
    <th>serving_size_g</th>
    <th>sodium_mg</th>
    <th>name</th>
    <th>potassium_mg</th>
    <th>fat_saturated_g</th>
    <th>protein_g</th>
   
    



    </tr>`

    for(let i=0; i<data.items.length; i++){
        tab += `<tr>
        <td>${data.items[i].sugar_g}</td>
        <td>${data.items[i].fiber_g}</td>
        <td>${data.items[i].serving_size_g}</td>
        <td>${data.items[i].sodium_mg}</td>
        <td>${data.items[i].name}</td>
        <td>${data.items[i].potassium_mg}</td>
        <td>${data.items[i].fat_saturated_g}</td>
        <td>${data.items[i].protein_g}</td>
       

        </tr>`
        document.getElementById("table").innerHTML = tab
    }
    
}

// let options2 = {
//    method: "GET",
//    headers: {
//        'X-RapidAPI-Key': 'cfc61d113emsh81294470ebbec25p15fa2djsn48a806940ac3',
//        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//      }
// }
// let lat = 31.9539;
// let lon = 35.9106;


// async function getWeatherData(){
//    let res = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lat=${lat}&lon=${lon}`,options2);
//    let data = await res.json();
//    console.log(data);
//    showWeatherData(data);
   
// }
// getWeatherData();

// function showWeatherData(data){
//    let tableData1 = `<tr>
// <th style = "text-align: center;">City Name</th>
// <th style = "text-align: center;">Temperature</th>
// <th style = "text-align: center;">DateTime</th>
// `;



// for(let i = 0; i<data.data.length; i++){
//        tableData1+= `<tr>
//    <td>${data.data[i].city_name}</td>
//    <td>${data.data[i].temp}</td>
//    <td>${data.data[i].datetime}</td>
//    </tr>`;
//    document.getElementById("weatherTable").innerHTML = tableData1;
// }

// }