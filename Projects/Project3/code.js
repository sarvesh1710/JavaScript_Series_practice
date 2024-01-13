const clk=document.getElementById('clock')

setInterval(() => {
    let date = new Date()
    clk.innerHTML=date.toLocaleTimeString();
},1000);