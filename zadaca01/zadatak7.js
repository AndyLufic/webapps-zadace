polje= [1,2,3,4]
polje2 = []
function obrnut(){
    for (let i of polje ){
        polje2.push(i)
        polje.pop()

    }

}
obrnut()
console.log(polje2)