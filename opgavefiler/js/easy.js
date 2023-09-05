// opgave 1 og 2
const inputElementOne = document.getElementById("inputOne");
const answerButtonOne = document.getElementById("answerButtonOne");
const answerFeedbackElementOne = document.getElementById("answerFeedbackOne");

answerButtonOne.addEventListener("click", function(e) {
    e.preventDefault();
    const userInput = parseInt(inputElementOne.value);

    switch (userInput) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            answerFeedbackElementOne.textContent = `Du har valgt: ${userInput}`;
            break;
        default:
            answerFeedbackElementOne.textContent = "Ugyldigt valg. Skriv et tal mellem 1 og 5.";
            break;
    }
});


// opgave 3 og 4
const inputElementTwo = document.getElementById("inputTwo");
const answerButtonTwo = document.getElementById("answerButtonTwo");
const answerFeedbackElementTwo = document.getElementById("answerFeedbackTwo");

answerButtonTwo.addEventListener("click", function(e) {
    e.preventDefault();
    const userInput = parseInt(inputElementTwo.value);

    switch (userInput) {
        case 1:
            answerFeedbackElementTwo.textContent = "Januar";
            break;
        case 2:
            answerFeedbackElementTwo.textContent = "Februar";
            break;
        case 3:
            answerFeedbackElementTwo.textContent = "Marts";
            break;
        case 4:
            answerFeedbackElementTwo.textContent = "April";
            break;
        case 5:
            answerFeedbackElementTwo.textContent = "Maj";
            break;
        case 6:
            answerFeedbackElementTwo.textContent = "Juni";
            break;
        case 7:
            answerFeedbackElementTwo.textContent = "Juli";
            break;
        case 8:
            answerFeedbackElementTwo.textContent = "August";
            break;
        case 9:
            answerFeedbackElementTwo.textContent = "September";
            break;
        case 10:
            answerFeedbackElementTwo.textContent = "Oktober";
            break;
        case 11:
            answerFeedbackElementTwo.textContent = "November";
            break;
        case 12:
            answerFeedbackElementTwo.textContent = "December";
            break;
        default:
            answerFeedbackElementTwo.textContent = "Ugyldig måned. Skriv et tal mellem 1 og 12.";
            break;
    }
});


// opgave 5
const inputElementThree = document.getElementById("inputFive");
const answerButtonThree = document.getElementById("answerButtonFive");
const answerFeedbackElementThree = document.getElementById("answerFeedbackFive");

answerButtonThree.addEventListener("click", function(e) {
    e.preventDefault();
    
    const userInput = inputElementThree.value.toLowerCase();

    switch (userInput) {
        case "mandag":
        case "tirsdag":
        case "onsdag":
        case "torsdag":
        case "fredag":
            answerFeedbackElementThree.textContent = "Det er en arbejdsdag.";
            break;
        case "lørdag":
        case "søndag":
            answerFeedbackElementThree.textContent = "Det er weekend.";
            break;
        default:
            // Hvis input ikke er en gyldig ugedag, vis en fejlbesked
            answerFeedbackElementThree.textContent = "Ugyldig ugedag. Skriv en gyldig ugedag.";
            break;
    }
});