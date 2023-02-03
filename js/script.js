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