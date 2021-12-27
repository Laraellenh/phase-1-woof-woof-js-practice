//fetch
fetchDogData()

function fetchDogData() {
    fetch('http://localhost:3000/pups')
    .then(r => r.json())
    .then(dogData => dogData.forEach(renderDogData))
}

function renderDogData (dog){
    const dogBar = document.getElementById('dog-bar')
    const span = document.createElement('span')
    dogBar.append(span)
    span.textContent = dog.name
    span.addEventListener('click', ()=> {
        
       const img = document.createElement('img')
       img.setAttribute('src', `${dog.image}`)
       const h2 = document.createElement('h2')
       h2.textContent = dog.name
    //    h2.setAttribute
       const button = document.createElement('button')
       button.addEventListener('click', (event) => {
           if (event.target.innerText === "Good Dog!"){
             event.target.innerText = "Bad Dog!"
           } else if (event.target.innerText === "Bad Dog!"){
               event.target.innerText = "Good Dog!"
           }
       })
       if (dog.isGoodDog === true) {
           button.innerText = "Good Dog!"
       } else if (dog.isGoodDog === false) {
           button.innerText = "Bad Dog!"
       }
       const box = document.getElementById('dog-info')
       box.append(img, h2, button)
    })}




















// function renderDogData(dog) {
//     const dogBar = document.getElementById('dog-bar')
    
//     const span = document.createElement('span')
//     span.innerText = dog.name

//     span.addEventListener('click', showDogCard);
     
//     function showDogCard(){
        
//         const dogCard = document.querySelector('#dog-info')
//         dogCard.innerHTML = ""

//         const dogImg = document.createElement('img')
//         dogImg.src = dog.image

//         const dogName = document.createElement('h2')
//         dogName.innerText = dog.name

//         const dogBtn = document.createElement('button')
//         dogBtn.innerText = dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'

//         dogCard.append(dogImg, dogName, dogBtn)


//     }
     

//     dogBar.append(span)
// }