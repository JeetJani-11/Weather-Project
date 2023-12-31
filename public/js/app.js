console.log('Client Side Java Script File is loded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent =''
    console.log(location)
    fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response) =>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})