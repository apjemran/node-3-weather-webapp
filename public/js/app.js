// fetch("http://puzzle.mead.io/puzzle").then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })

// })
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const address = search.value
    const url = '/weather?address='+address
    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast.prediction             
        }        
    })
})
    
})