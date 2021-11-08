console.log("Welcome to Indian Riding App")
var fs=require("fs")
const readlineSync=require("readline-sync")
var Current_location=readlineSync.question("Enter your current location:")
var Destination_location=readlineSync.question("Enter your current Destination:")
let vechile_type=["car_cab","taxi_car","Auto_riksha"]
for(vech in vechile_type){
    console.log(vechile_type[vech])
}
let selectCarType=readlineSync.question("Enter the car type u want to travel in:")
let fetch_data=fs.readFileSync("Driver_details.json")
var converted_data=JSON.parse(fetch_data);
let serial_num=1

function giveUsers(data,nameEntered){
    for (let eachProp in converted_data){
        if(eachProp === nameEntered){
            serial_num=1
            for(var i of data[eachProp]){
                console.log(serial_num,i["Driver_name"])
                serial_num+=1
            }
        }
    }
}

giveUsers(converted_data,selectCarType)
let choose_driver=readlineSync.question("Enter the desired driver Name:")
for(let data1 in converted_data["car_cab"]){
    if(converted_data["car_cab"][data1]["Driver_name"]===choose_driver){
        console.log(converted_data["car_cab"][data1])
    }   
}
for(let data1 in converted_data["taxi_cars"]){
    if(converted_data["taxi_cars"][data1]["Driver_name"]===choose_driver){
        console.log(converted_data["taxi_cars"][data1])
    }   
}
for(let data1 in converted_data["Auto_riksha"]){
    if(converted_data["Auto_riksha"][data1]["Driver_name"]===choose_driver){
        console.log(converted_data["Auto_riksha"][data1])
    }   
}
let response=readlineSync.question("Do you want to continue your booking y/n:")
if (response === "y"){
    console.log("Ok");

}else {
    print("Thanks! we would love to serve you next time")
}
console.log("Your Booking is conformed\n Have a nice ride!");

function generateOtp(){ //to generate otp 
    var digit="0123456789"
    let otp=""
    for(let i=0;i<4;i++){
        otp+=digit[Math.floor(Math.random()*10)];
    }
    return otp
     
}
console.log("Your otp is :",generateOtp(),"","\n Share this otp with your driver!");
function kilometers(){
    var total_kms="0123456789"
    let kilo=""
    for (let j=1;j<3;j++){
        kilo+=total_kms[Math.floor(Math.random()*10)]
    }
    return kilo
    
}
total_distance=kilometers()
console.log("Your distance covered is:",total_distance)
console.log("Please pay ",total_distance*5,"To the drive after finishing your journey!");
var amount_to_pay=total_distance*5
var fetch=fs.readFileSync("Driver_details.json");    
var converted_data2=JSON.parse(fetch);
var feedback=readlineSync.question("Please Enter your feedback for the driver:")
var rating=readlineSync.question("Please rate our driver:")
for (var i of  converted_data2[selectCarType]){
    if (i["Driver_name"] === choose_driver){
        i["Travelling_charges"].push(amount_to_pay)
        i["feedback"].push(feedback)
        i["ratings"].push(rating)
    }
}
fs.writeFileSync("Driver_details.json",JSON.stringify(converted_data2))
console.log("Thanks for choosing Indian Riding App!","/n We would love to serve you in future too**");
    



