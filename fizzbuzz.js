setImmediate( function(){
    console.log('hola')
});
for (var i=1;i<=10;i++){

    switch (i<=100){
    case ((i%3 == 0) && (i%5 == 0)):
        console.log('FizzBuzz');
        break;
    case (i%3==0):
        console.log('Fizz');
        break;
    case (i%5==0):
        console.log('Buzz');
        break;
    default:
        console.log(i)
        break;

    }   
}