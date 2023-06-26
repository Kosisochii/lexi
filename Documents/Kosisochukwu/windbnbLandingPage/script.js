// const sideNav = document.querySelector("#sideNav");
// const searchInput = document.querySelector("#searchImg");
// const cancelBtn = document.querySelector("#cancelBtn");
// const searchLocation = document.querySelector("#location");
// const locationOptions = document.querySelector("#searchLocationNav");
// const addGuest = document.querySelector("#addGuest");
// const guestSide = document.querySelector("#searchAddGuest");
// let add1 = document.querySelector("#incrementor1");
// let add2 = document.querySelector("#incrementor2");
// let minus1 = document.querySelector("#decrementor1");
// let minus2 = document.querySelector("#decrementor2");
// let childCount = document.querySelector("#childCount");
// let adultCount = document.querySelector("#adultCount");
// let el = document.body;



// searchInput.addEventListener("click", () => sideNav.style.display = "block");

// cancelBtn.addEventListener("click", () => sideNav.style.display = "none");

// searchLocation.addEventListener("click", () => locationOptions.style.display = "block");

// addGuest.addEventListener("click", () => guestSide.style.display = "block");

// let initial = 0;
// let first = 0;

// add1.addEventListener("click", () => {
//     initial += 1;
//     adultCount.innerHTML = initial;
// })

// add2.addEventListener("click", () => {
//     first += 1;
//     childCount.innerHTML = first;
// })

// minus1.addEventListener("click", () => {
//     initial -= 1;
//     adultCount.innerHTML = initial;
// })

// minus2.addEventListener("click", () => {
//     first -= 1;
//     childCount.innerHTML = first;
// });


// async function myfunction() {
//     let res = await fetch("stays.json")
//     let data = await res.json()
//     console.log(data[5].city);
// }

// myfunction();



// fetch ('stays.json')
// .then( (res) => res.json().then( (data) =>  {
//     for(let plain of data) {
//         console.log(plain.photo);
//     }
// }))
// .catch( (err) => {
//     console.log("Something Went Wrong");
// })


fetch('https://rickandmortyapi.com/api/character')
.then( (res) => res.json() .then( (data) => {
    console.log(data);
}));

