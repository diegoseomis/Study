
function run(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    msg.innerHTML = `Agora são ${hour} horas.`
   
    if (hour >= 0 && hour < 12){
        //BOM DIA
        img.src = 'morning.png'
        document.body.style.background = '#f1df99'
    }else if (hour >= 12 && hour < 18){
        //BOA TARDE
        img.src ='afternoon.png'
        document.body.style.background = '#cd7015'
    }else{
        //BOA NOITE
        img.src ='night.png'
        document.body.style.background='#282828'
    }
} 
