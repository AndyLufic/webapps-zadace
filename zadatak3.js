function sati(x){
    let sat = 0
    let minuta = 0

    while ( x>60){
        sat +=1; 
        x-=60
        if(x < 60 ){
            minuta += x; 

        }
        
    }
   
    console.log("ima ", sat , "sati i ", minuta, "minuta " )
}

sati(123)