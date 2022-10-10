function visekr(a){
    let b= 1
    if(a>0 & a<1000){
        while(a>0){ 
            b*= a
            a-=7
            
        }
        console.log(b)
    }
    else{
        console.log("invalid number")
    }

}

visekr(35)