const oncekiTus = document.querySelector('.left');
const sonrakiTus = document.querySelector('.right');

const kayan = document.querySelector('.kyn');
const circles = document.querySelectorAll('.crc');

sonrakiTus.addEventListener('click',tiklanmaSonraki);
oncekiTus.addEventListener('click',tiklanmaOnceki)

let currintActive = 1;
function tiklanmaSonraki()
{
    currintActive++;
    if(currintActive > circles.length)
    {
        currintActive=circles.length;
        
    }
    
    
    
    update();
}



function tiklanmaOnceki()
{
    currintActive--;
    if(currintActive<1)
    {
        currintActive = 1;
        
    }
    

    update();
    
}

function update()
{
    
    circles.forEach((circle,index) => {
    if(index < currintActive)
    {
        circle.classList.add('active');
    }
    else{
        circle.classList.remove('active');
    }

})

    const actives = document.querySelectorAll(".active");

    //console.log(actives.length,circles.length);
    //const deger = ((actives.length)*33)/2;
    //console.log((actives.length)*25);
    const değerim = ((actives.length-1)*25);
    

    kayan.style.width = değerim +'%';

    if(currintActive == 1)
    {
        oncekiTus.disabled = true;
    }
    else
    {
        oncekiTus.disabled = false;
    }

    if(currintActive == 4)
    {
        sonrakiTus.disabled = true;
    }
    else
    {
        sonrakiTus.disabled = false;
    }
}




//****************************** 

var a = 21;
var b = 2;

console.log(a);
console.log(b);

    
    
    b = a+b;
    a = b-a;
    b = b-a;



console.log(a);
console.log(b);