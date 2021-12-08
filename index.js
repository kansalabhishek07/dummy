   // javascript console api
//    console.log("HELLO WORLD");
   // document.write("this is document write");
//    console.warn("this is warning");
//    console.error("this is error");
//    javascript variables
     var num1 = 56;
     var num2 = 34;
    //  console.log(num1 + num2);
   //  data types in javascript
    // string
    var str1 = "This is a string";
    var str2 = "This is also a string";
    // console.log(str1);
     // OBJECTS arrays & objects are referenced data types
    var marks={
        ravi:90,
        abhi:99,
        akki:76
    }
    // console.log(marks);
    // booleans
    var a = true;
    var b= false;
    // console.log(a,b);
     var und;
    // console.log(und);
     var n=null;
    // console.log(n);

    var arr = [1,2,"bablu",4,5];
    // console.log(arr);

    // operators in javascript
    var a = 21;
    var b = 9;
    // console.log("the value of addition is", a+b);
    // var c=b;
    // c+=2;
    // console.log(c);

    // comparison operators
    // var x = 71;
    // var y = 56;
    // console.log(x>=y);
    // console.log(x<y);

    // logical operators
    // console.log(true && true);
    // console.log(true && false);
    // console.log(false && false);
    // console.log(true || true);
    // console.log(true || false);
//     // console.log(false || false);
// console.log(!true)
// console.log(!false)
// functions in javascript
// DRY: DO NOT REPEAT YOURSELF
function avg(a,b){
    return (a+b)/2;
}
   var c1 = avg(4,6);
   var c2 = avg(14,16);
//    console.log(c1,c2);

var age=21;
// if(age>8){
//     console.log('you can drink beer');
// }
// else{
//     console.log('you can not drink beer');
// }

// if-else ladder
age = 31;
if(age>32){
    console.log('you are not a kid');
}
else if(age>26){
    console.log('bacha nhi h tu ab');
}
else if(age>18){
    console.log('bacha nhi h tu ab');
}
else{
    console.log('bacha h tu');
}
console.log('end of ladder');