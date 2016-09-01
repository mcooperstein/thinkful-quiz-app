$(document).ready(function () {

    /*--- Questions Variable ---*/
    var questions = [
        //Question 1
        {
            question: 'Which movie won the "Best Picture" in 1994?',
            choices: ['Pulp Fiction', 'Forrest Gump', 'The Shawshank Redemption', 'The Lion King'],
            correct: 1,
            correctDetails: 'Forrest Gump is the correct answer.'
        },
        //Question 2
        {
            question: 'In what year did the Academy expand the field for Best Picture nominees from 5 to 10?',
            choices: ['2009', '2005', '2001', '2013'],
            correct: 0,
            correctDetails: '2009 is the correct answer.'
        },
        //Question 3
        {
            question: 'What movie famously won all 11 Academy Awards (including Best Picture) for which it was nominated?',
            choices: ['Titanic', 'The Artist', 'Schindler&#39s List', 'The Lord of the Rings: The Return of the King'],
            correct: 3,
            correctDetails: 'The Lord of the Rings: The Return of the King is the correct answer.'
        },
        //Question 4
        {
            question: 'What is the only romantic comedy film to have ever won Best Picture?',
            choices: ['Four Weddings and a Funeral', 'The Big Chill', 'Annie Hall', 'Moonstruck'],
            correct: 2,
            correctDetails: 'Annie Hall is the correct answer.'
        },
        //Question 5
        {
            question: 'Which Martin Scorsese movie is the only one to have won Best Picture?',
            choices: ['Raging Bull', 'The Wolf of Wall St.', 'The Departed', 'Taxi Driver'],
            correct: 2,
            correctDetails: 'The Departed is the correct answer.'
        },
        //Question 6
        {
            question: 'In 2009, most pundits expected Avatar to win for Best Picture, but it ultimately lost out to what film?',
            choices: ['Up in the Air', 'Precious', 'The Blind Side', 'The Hurt Locker'],
            correct: 3,
            correctDetails: 'The Hurt Locker is the correct answer.'
        },
        //Question 7
        {
            question: 'Which Best Picture Award winner was the highest grossing movie of all time, until it was surpassed by Avatar in 2009?',
            choices: ['LOTR: Return of the King', 'The Godfather', 'Titanic', 'Rocky'],
            correct: 2,
            correctDetails: 'Titanic is the correct answer.'
        },
        //Question 8
        {
            question: 'Which Best Picture has the following famous line: "Of all the gin joints, in all the towns, in all the world, she walks into mine..."?',
            choices: ['On the Waterfront', 'Casablanca', 'The French Connection', 'All About Eve'],
            correct: 1,
            correctDetails: 'Casablanca is the correct answer.'
        },
        //Question 9
        {
            question: 'Citizen Kane is widely considered to be the greatest film of all time, but did not win Best Picture when it was nominated in 1941. What film won Best Picture that year?',
            choices: ['The Maltese Falcon', 'Blossoms in the Dust', 'How Green Was My Valley', 'Suspicion'],
            correct: 2,
            correctDetails: 'How Green Was My Valley is the correct answer.'
        },
        //Question 10
        {
            question: 'Which Best Picture winning film depicts the relationship between a young, self-absorbed hot-shot and his autistic savant brother?',
            choices: ['Terms of Endearment', 'Rain Man', 'Ordinary People', 'Kramer vs. Kramer'],
            correct: 1,
            correctDetails: 'Rain Man is the correct answer.'
        }
    ];

    /*--- Result Message Variable ---*/
    var feedback = 'Well Done';

    /*--- Variables ---*/
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;

    /*--- Hide quiz and result section on load ---*/
    $('.quiz-section').hide();
    $('.results-section').hide();

    /*--- Display Questions Function ---*/
    function questionDisplay() {
        //displays the current question
        $('#questionNum').text('Question ' + (questionNum + 1) + ' of ' + questionTotal);
        $('#question').text(questions[questionNum].question);
        $('#choices').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //displays the answer choices
            $('#choices').append("<input type='radio' class='option' name='option' value=" + i + ">" + " " + questions[questionNum].choices[i] + "<br>");
        }
    }

    /*--- On start quiz ---*/

    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.results-section').hide();
        $('.intro-section').hide();
        $('.quiz-section').show();
        questionDisplay();
    });

    /*--- Show quiz questions ---*/
    $('.quiz-section').on('click', '.option', function () {

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {
            //if correct answer was selected
            $('#correct').show();
            $('.quiz-section').hide();
            correctTotal++;
        } else {
            $('#incorrect').show();
            $('#result_msg').html("<span class='bigIncorrect'>Incorrect: </span>" + questions[questionNum].correctDetails);
            $('.quiz-section').hide();
        }
        //quiz is finished, show results-section
        if ((questionNum + 1) == questionTotal) {
            if (correctTotal < 3) {
                $('#finalScore').text("You scored " + correctTotal + "/" + questionTotal + ". Wow, that was bad!");
            } else if (correctTotal > 2 && correctTotal < 6) {
                $('#finalScore').text("You scored " + correctTotal + "/" + questionTotal + ". That was subpar, probably like your taste in movies ;).");
            } else if (correctTotal > 5 && correctTotal < 8) {
                $('#finalScore').text("You scored " + correctTotal + "/" + questionTotal + ". Not too bad, but you're not winning Jeopardy anytime soon ;).");
            } else if (correctTotal > 7) {
                $('#finalScore').text("You scored " + correctTotal + "/" + questionTotal + ", very impressive!");
            }
            //$('#finalScore').text("You scored " + correctTotal + "/" + questionTotal);
            $('start-button').show();
            //hide other "screens"
            $('.quiz-section').hide();
            $('.intro-section').hide();
            $('#correct').hide();
            $('#incorrect').hide();
            $('.results-section').show();
        }
    });

    /*--- On continue quiz ---*/

    $('#correctContinue').on('click', function () {
        $('.quiz-section').show();
        $('#correct').hide();
        $('#incorrect').hide();
        //continue to next question
        questionNum++;
        questionDisplay();
    });

    $('#incorrectContinue').on('click', function () {
        $('.quiz-section').show();
        $('#incorrect').hide();
        $('#correct').hide();
        //continue to next question
        questionNum++;
        questionDisplay();
        //remove previous question correctDetails
    });
});

/*--- Load the start section from the results section ---*/

$('.results-section').on('click', '#tryagain', function () {
    location.reload();
});
