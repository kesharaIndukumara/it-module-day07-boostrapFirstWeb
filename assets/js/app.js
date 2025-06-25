console.log("console, World!");

let name = "World";

const address = "panadura";

// console.log( address);

let nameArray = ["saman", "sunil", "nimal","kamal"];

// console.log(nameArray[3]);

// for (let i = 0; i < nameArray.length; i++) {
//     console.log(nameArray[i]);
// }

// for(let name of nameArray){
//     console.log(name);
// }

let index = 0;

// while(index<5){
//     console.log(nameArray[index]);
//     index++;
// }

// do{
//     console.log(nameArray[index])
//     index++;
// }while(index<5)

// nameArray.forEach(name=>{
//     console.log(name)
// })

// class Student{
//     name;
//     age;
//     address;
//     nic;

//     constructor(name, age, address, nic){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.nic = nic;
//     }

// }

// let saman = new Student("saman", 20, "kelaniya", 12345678);

// console.log(saman)


// let kamal = {
//     name: "kamal",
//     age: 25,
//     address: "panadura",
//     nic: "123456789V"
// }

// console.log(kamal.name)

// document.getElementById("name").innerHTML = "Details of " + kamal.name;
// document.getElementById("age").innerHTML = "Age: " + kamal.age;
// document.getElementById("address").innerHTML = "Address: "+ kamal.address;
// document.getElementById("nic").innerHTML = "NIC: " + kamal.nic;

let number01 = document.getElementById("txt-box01");
let number02 = document.getElementById("txt-box02");
// let btnClick = document.getElementById("btn-click");
let btnClear = document.getElementById("btn-clear");

// btnClick.addEventListener("click",function(){
//     document.getElementById("set-name").innerHTML = "Hello " + txtInput.value;
// })

btnClear.addEventListener("click",function(){
    document.getElementById("set-name").innerHTML = "Hello JavaScript";
    number01.value = "";
    number02.value = "";
})

function helloText(){
    document.getElementById("set-name").innerHTML = parseInt(number01.value) + parseInt(number02.value);
    //console.log( parseInt(number01.value))
}