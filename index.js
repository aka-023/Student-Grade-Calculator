
function calculate() {

    //parseFloat convert the strings into numeric data type
    let chemistry = parseFloat(document.getElementById("chemistry").value);
    let maths = parseFloat(document.getElementById("maths").value);
    let physics = parseFloat(document.getElementById("physics").value);
    let hindi = parseFloat(document.getElementById("hindi").value);
    let english = parseFloat(document.getElementById("english").value);

    let total = chemistry+hindi+english+maths+physics;

    let percentage = total/5;
    let grade;
    let printGrade = document.getElementById("space");

        //if any of the subjects' marks are not a number then returing with a message
        if(isNaN(chemistry)|| isNaN(maths) || isNaN(physics) || isNaN(hindi)|| isNaN(english)){
        printGrade.textContent = `please fill all the required sections...`;    
        return;
        }

    if(percentage> 90 && percentage<=100){
        grade = "A+";
    }
    else if(percentage> 80 && percentage<=90){
        grade = "A";
    }
    else if(percentage> 70 && percentage<=80){
        grade = "B";
    }
    else if(percentage> 60 && percentage<=70){
    grade = "C";
    }
    else if(percentage>40 && percentage<=60){
    grade = "D";
    }
    else {
        grade = "Fail";
    }
    //toFixed(2) --> rounding off to 2decimal places
    printGrade.textContent = `your percentage is ${percentage.toFixed(2)} and grade is ${grade}`;
    
    if(percentage>=40){
        printGrade.textContent += ". You are pass!";
    }
    else{
        printGrade.textContent += ". You are fail";
    }
}