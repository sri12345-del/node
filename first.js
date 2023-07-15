const print = (a, b) => a * b
console.log(print(3, 4))

const obj = {
    name: 'srini',
    greet: function(){
        console.log(this.name)
    }
}
obj.greet()