// Run the application.
geotagx.task.run("wintershelter", function(question, answer){
    switch (question){
        case 1: // Do you see shelter in this photo?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
        case 2: // Is the shelter raised off the ground?
        case 3: // Does the shelter have a second cover to protect it from the rain?
        case 4: // Is there space to put a chimney safely inside the shelter?
            geotagx.task.showNextQuestion();
        default:
            break;
    }
});
