document.querySelector("#items").addEventListener("wheel", event => {
    if(event.deltaY > 0){
        // console.log('Scroll up')
        event.target.scrollBy(300,0) //eixo x = 300 y =0 
    }else{
        event.target.scrollBy(-300,0) 
    }
})
