// 0 1 1 2 3 5 8 

let n1 = 0
let n2 = 1

for (let i=0; i <= 10; i++) {
    let n3 = n1 + n2
    n1 = n2
    n2 = n3
    console.log(n3)
}