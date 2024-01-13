const randomcolor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i=0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};


let startid;
const startchangingColor=function(){
    if(startid==null){
        startid=setInterval(changebgcolor,1000);
    }

    function changebgcolor(){
        document.body.style.backgroundColor=randomcolor();
    }
}
const stopchangingColor=function(){
    clearInterval(startid)
    startid=null;
}

document.querySelector('#start').addEventListener('click',startchangingColor);

document.querySelector('#stop').addEventListener('click',stopchangingColor);



