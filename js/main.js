/* YOUR JS GOES HERE */
function openLevelview(){
    $('#overlay').show('slide', {direction:'bottom'});
}

function closeLevelview(){
    $('#overlay').hide('slide', {direction:'top'});
}

var level = 0;
var question = "";
var points = "0";

function loadQuestions(){
    $('#points').html(points);
    $('#question').html(level1[level].question);
    $('#answer1').html(level1[level].answers[0].answer)
    $('#answer2').html(level1[level].answers[1].answer)
    $('#answer3').html(level1[level].answers[2].answer)
    $('#answer4').html(level1[level].answers[3].answer)
}

$(function () {
    loadQuestions();
});

function checkAnswer(number){
    if (level[level].answers[number].correct){
        points++;
    }
    

}

function next(){
    level++;
    loadQuestions();
}


