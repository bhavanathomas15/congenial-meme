console.log("hello");

function checkAnswers()
{
    let score = 0;
    let result = 0;
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.colour.value;
    let answer2 = quiz.animal.value;
    let answer3 = quiz.music.value;
    let answer4 = quiz.hobby.value;

        if(answer1 =="pink") 
        {score = score + 1;}
        else if( answer1 == "yellow")
        {score = score + 2;}
        else if( answer1 == "green")
        {score = score + 3;}
        else
        {score = score + 4;}

        if( answer2 == "red-panda")
        {score = score + 1;  }
        else if( answer2 == "giraffe")
        {score = score + 2;}
        else if( answer2 == "jaguar")
        {score = score + 3;}
        else 
        {score = score + 4;}
        
        if( answer3 == "classical")
        {score = score + 1;  }
        else if( answer3 == "pop")
        {score = score + 2;}
        else if( answer3 == "metal")
        {score = score + 3;}
        else
        {score = score + 4;}


        if( answer4 == "read")
        {score = score + 1;}
        else if( answer4 == "dance")
        {score = score + 2;}
        else if( answer4 == "exercise")
        {score = score + 3;}
        else 
        {score = score + 4;}

        
        if (score < 5)
        {result = "Python";}
        else if (score < 10)
        {result = "Javascript";}
        else if (score < 13)
        {result = "HTML";}
        else {result="Java;"}

    alert("The programming language you should learn is " + result)    

}

