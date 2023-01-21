function nFactorialI(n) {
    var result = 1
    var aux = 0
    
    for (let i = 0; i<n; i++){
        aux++
        result *= aux
    }
    return result
}

console.log(nFactorialI(0))
//4!= 4x3x2x1