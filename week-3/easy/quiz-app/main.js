import {quizData} from "./data.js"

const questions = document.getElementById("questions");

function render(){
    questions.innerHTML = "";

    const questionContainer = document.createElement("div");
    questionContainer.setAttribute("id", "questionContainer");

    quizData.forEach((element, index) => {
        const que  = document.createElement("h2");
        que.textContent = `${index+1}. ${element.question}`;
        questionContainer.appendChild(que);
    
        Object.keys(element)
        .filter((key) => key !== "question" && key !== "correct")
        .forEach((key) => {
                const opDiv = document.createElement("div");
                opDiv.classList.add('opDiv');
                
                const checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("value", key);
                checkbox.setAttribute("name", `question-${index}`);
                opDiv.appendChild(checkbox);

                const opContent = document.createElement("h5");
                opContent.textContent = `${element[key]}`;
                opDiv.appendChild(opContent);   

                que.appendChild(opDiv);

                document.addEventListener("change", (event) => {
                    if (event.target.type === "checkbox") {
                      const groupName = event.target.name; // Get the 'name' attribute (e.g., question-0)
                      const group = document.querySelectorAll(`input[name="${groupName}"]`);
                  
                      // Uncheck all checkboxes in the same group except the one just clicked
                      group.forEach((checkbox) => {
                        if (checkbox !== event.target) {
                          checkbox.checked = false;
                        }
                      });
                    }
                });
            }
        );  
    });

    

    questions.appendChild(questionContainer);

    document.createElement("button");
    button.textContent = "Submit";
    button.addEventListener('click', () => {
        res();
    });
    // questions.appendChild(submit);

    // questions.remove(document.getElementById("button"))
}   

document.getElementById("button").addEventListener('click', () => {
    render();
})


function res() {
    let score = 0;
    let allAnswered = true;
    quizData.forEach((element, index) => {

    const selected = document.querySelector(`input[name="question-${index}"]:checked`);

    if (selected){
        if(selected.value === element.correct){
            score += 1;
        }
    }else{
        allAnswered = false;
    }
});

    if(!allAnswered){
        alert("answers the questions");
        return;
    }

    alert(`Your total score is: ${score}`);
}
  




