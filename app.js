//traversing the dom
//or using selectors

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });

//selectors

const questions = document.querySelectorAll('.question');

questions.forEach(function (ques) {
    // console.log(ques);
    const btn = ques.querySelector('.question-btn');
    console.log(btn);

    btn.addEventListener("click", function () {
        // console.log(ques);

        questions.forEach(function (item) {
            if (item !== ques) {
                item.classList.remove("show-text");
            }
        });

        ques.classList.toggle("show-text");
    });

})