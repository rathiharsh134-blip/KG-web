/* =========================
   KG GYM JAVASCRIPT
========================= */


/* BMI Calculator */

function calculateBMI(){

    let weight = document.getElementById("weight").value;

    let height = document.getElementById("height").value;


    if(weight === "" || height === ""){

        document.getElementById("result").innerHTML =
        "Please enter your weight and height.";

        return;

    }


    // Convert cm to meter

    height = height / 100;


    let bmi = weight / (height * height);


    let message = "";


    if(bmi < 18.5){

        message = "Underweight";

    }

    else if(bmi >= 18.5 && bmi < 25){

        message = "Normal Weight";

    }

    else if(bmi >= 25 && bmi < 30){

        message = "Overweight";

    }

    else{

        message = "Obese";

    }


    document.getElementById("result").innerHTML =
    `Your BMI is ${bmi.toFixed(2)} - ${message}`;

}





/* Scroll Animation */


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let position = section.getBoundingClientRect().top;


        let screenPosition = window.innerHeight / 1.2;


        if(position < screenPosition){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }


    });


});





/* Initial Animation */


sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s ease";

});
