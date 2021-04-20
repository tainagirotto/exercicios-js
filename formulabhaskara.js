
function bhaskara(a, b, c) {
    let delta = Math.pow(b, 2)-4*a*c
    let x1 = (-b + Math.sqrt(delta)) / 2*a
    let x2 = (-b - Math.sqrt(delta)) / 2*a
        
        console.log ('O valor do delta é: ', delta)
        console.log('O valor do x1 é: ', x1)
        console.log('O valor do x2 é: ', x2)
}
 bhaskara(1, -1, -6)