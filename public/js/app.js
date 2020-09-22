const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const ninjaGif = document.createElement("img")
ninjaGif.setAttribute("class","fun-gif")






weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent='Loading...'
    messageTwo.textContent=''
    messageThree.textContent=''
    messageFour.textContent=''
    messageFive.textContent=''
   // messageSix=''
    
    
    
    
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }else{
            messageOne.textContent=data.location
            let arrweather = data.forecast.split(',')
            messageTwo.textContent = arrweather[0]
            

            messageThree.textContent= arrweather[1]+' C'

            messageFour.textContent = 'Feels like: '+arrweather[2]+'C'
            ninjaGif.src = "/img/ninjaGacha.gif"
            
            messageFive.textContent = 'Time : '+arrweather[3]
            

            //messageSix.textContent=messageSix.appendChild(ninjaGif)

            

            

            
            
        
        
        }
    })

})

})