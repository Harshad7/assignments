let count = 0;
while(1){
    console.log('hey')
    setTimeout(()=> {
        console.log('In timeout')
        count++;
        console.log(count)
    },1);
}
    

