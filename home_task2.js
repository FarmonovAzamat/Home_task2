// ---------------------Home Task - Day 3--------------//
//1) Closure
function PlusFive(n){

    function MakePlusFunction(m){
        return n+m;
    }
    return MakePlusFunction;
}
console.log(PlusFive(2)(5));
// console.log(PlusFive(-8)(5));
// console.log(PlusFive(0)(10));
// console.log(PlusFive(188)(10));
// console.log(PlusFive(5)(10));

//2) Recursion
// function FibonacciNumber(Fn) {
//     if (Fn == 1 || Fn == 2) {
//         return 1
//     }
//     return FibonacciNumber(Fn - 1) + FibonacciNumber(Fn - 2);
// }
// console.log(FibonacciNumber(5));
// console.log(FibonacciNumber(4));
// console.log(FibonacciNumber(2));



// 14) Closure
// function multiplyN1(n){

//     function multiplyN2 (m) {
//         return n*m;
//     }
//     return multiplyN2;
// }
// console.log(multiplyN1(10)(2));
// console.log(multiplyN1(-51)(-4));
// console.log(multiplyN1(3)(9));



//6) Рекурсия
// function sumDigit(n){
//     last = n%10;
//     middle = Math.floor(n/10%10);
//     rev = last + middle;
//     if (n==0){
//         return 0
//     }
//     return rev + sumDigit(Math.floor(n/100));
// }
// console.log(sumDigit(999));
// console.log(sumDigit(222));
// console.log(sumDigit(333));