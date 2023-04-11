const myHeading = document.querySelector("h1");
myHeading.textContent = "Hey ho, let's go";

// var width = prompt("do it bitch");
// var height = prompt("NOW!");

// var widthint = parseInt(width);
// var heightint = parseInt(height);

// var area = widthint * heightint;

// out.println("The area is: " + area);


// This is the stuff from during the week



function excercise1(){
    let width = 6;
    let height = 9;

    console.log(width * height);
}

excercise1();

function excercise2(){
    let num1 = 5;
    let num2 = 3;

    if(num1 == num2){
        var finalnumber = num1 * 3;
    }
    else{
        var finalnumber = num1 + num2;
    }

    console.log(finalnumber);
}

excercise2();

function excercise3(){
    let randomnumber1 = Math.floor(Math.random() * 51);
    let randomnumber2 = Math.floor(Math.random() * 51);

    if(randomnumber1 == 50 | randomnumber2 == 50 | randomnumber1 + randomnumber2 == 50){
        console.log("Yipee " + randomnumber1 + " yahoo " + randomnumber2);
    }
    else{
        console.log("Number 1 is " + randomnumber1 + " and Number 2 is " + randomnumber2);
    }

}

excercise3();

function excercise4(a, b){
    var power = a * b;

    console.log(power);
}

excercise4(21, 0.2);

function excercise5(){
    var randomnumber1 = Math.floor(Math.random() * 11);
    if(randomnumber1 < 5){
        var isless = true;
    }

    // console.log(randomnumber1);

    if(isless == true){
        console.log("The number is less than five");
    }
    else{
        console.log("The number is more than five");  
    }

    if(randomnumber1 % 2 == 0){
        console.log("The number is even.")
    }
    else{
        console.log("The number is odd.")
    }


}

excercise5();

function excercise6(){
    var pisserstring = "ython is kinda cool yo.";

    

    if(pisserstring.substring(0, 2) == "py" | pisserstring.substring(0, 2) == "Py"){
        
    }
    else{
        pisserstring = "Py" + pisserstring;
    }

    console.log(pisserstring);
}

excercise6();

function excercise7(){
    let movies = ['Scott Pilgrim', 'DRIVE', "Abraham Lincoln: Vampire Hunter", "RRR", "Pulp Fiction"];

    movies.push("Inception");

    movies.splice(2, 1);

    console.log(movies);
}

excercise7();

function excercise8(month){
    switch(month){
        case "January":
            console.log("Summer");
            break;
        case "February":
            console.log("Summer");
            break;
        case "March":
            console.log("Autumn");
            break;
        case "April":
            console.log("Autumn");
            break;
        case "May":
            console.log("Autumn");
            break;

        default:
            console.log("This ain't it");
    }
}

excercise8("May");

function excercise9(arg){
    return typeof arg;
}

console.log(excercise9("21, can you do sum for me"));

function excercise10(names){
    let longestname = names[0];

    names.map(function(country){
        country.length > longestname.length ? longestname = country : longestname;
    })

    return(longestname);
}

console.log(excercise10(["Brazil", "Austria", "Nigeria", "Papau New Guinea"]));
