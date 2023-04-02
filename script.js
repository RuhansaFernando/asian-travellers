const start_btn = document.querySelector(".start-button");
const rule_box  = document.querySelector(".rules_box");
const quit_btn  = document.querySelector(".quit");
const continue_btn = document.querySelector(".continue");
const quiz_box = document.querySelector(".quiz_box");
const timerCount = document.querySelector(".timer .number")
const next_btn = document.querySelector(".next_btn button");
const header_text = document.querySelector(".header-text");

const tick = '<div class="right_icon"> <i class="fa-solid fa-check"></i> </div>';
const wrong ='<div class="wrong_icon"> <i class="fa-solid fa-xmark"></i> </div>';

start_btn.onclick = ()=>{
    start_btn.classList.remove("active");
    header_text.classList.remove("active");
    rule_box.classList.add("active");
}

quit_btn.onclick = ()=>{
    rule_box.classList.remove("active");
    start_btn.classList.add("active");
    header_text.classList.add("active");
}

continue_btn.onclick = ()=>{
    rule_box.classList.remove("active");
    quiz_box.classList.add("active");
    showQues(ques_count);
}

//Question Function

let ques_count = 0;

let correct_count = 0;

const result_box = document.querySelector(".result_box");
const result_text = document.querySelector('.score_text');

next_btn.onclick = ()=>{
    ques_count = ++ques_count;
    if(ques_count < 10){
        showQues(ques_count);
        clearInterval(counter);
        startTimer(15);
    }else{
        clearInterval(counter);
        quiz_box.classList.remove("active");
        setResultColor();
        result_box.classList.add("active");
        const count_ques = document.getElementById("count")
        count_ques.innerHTML = correct_count.toString();
        console.log(correct_count);
    }
}

function setResultColor(){
    console.log(correct_count)
    if(correct_count<5){
        result_text.style.color = "#ff7675";
    }else{
        result_text.style.color= "#55efc4";
    }
}

function showQues(index){
    next_btn.style.display = "none";
    console.log(ques_count)
    if(ques_count === 0){
        startTimer(15);
    }
    const question_text = document.querySelector(".question_text");
    question_text.innerHTML = '<span>' + ques[index].question + '</span>';

    const option_list = document.querySelector(".option_list");
    let option = "";
    for(let i = 0; i<4;i++){
        option += '<div class="option-ans"><div class="option" onclick= "selected(this)">'+'<span>' + ques[index].options[i] + '</span>'+ '</div></div>';
    }
    option_list.innerHTML = option;

    const total_que = document.querySelector(".total_que");
    total_que.innerHTML = '<span><p>'+ (ques_count+1) +'</p>of<p>10</p>Questions</span>';
}

function selected(answer) {
    let user = answer.textContent;
    let correctAnswer = ques[(ques_count)].answer
    let option_list = answer.closest('div.option_list');
    let option_ans = answer.closest('div .option-ans');

    console.log(option_ans);

    if(user === correctAnswer){
        answer.classList.add("correct");
        option_ans.insertAdjacentHTML('beforeend',tick);
        correct_count++;
    }else{
        answer.classList.add("incorrect");
        option_ans.insertAdjacentHTML('beforeend',wrong);

        //if answer is incorrect answer select
        for(let i=0; i < 4 ;i++){
            if(option_list.children[i].children[0].textContent === correctAnswer){
                option_list.children[i].children[0].classList.add("correct");
                option_list.children[i].insertAdjacentHTML('beforeend',tick);
            }
        }
    }

    //disable all options
    for(let i =0;i<4;i++){
        option_list.children[i].children[0].classList.add("disabled");
    }

    next_btn.style.display = "block";
}

let counter;

//timer
function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timerCount.textContent = time;

        if(1<=time){
            time--;
        }else{
            ques_count++;
            showQues(ques_count);
            clearInterval(counter);
            startTimer(15);
        }
    }
}

