const pollQuestion = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')

const xhr = new XMLHttpRequest();

xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true)
xhr.send()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let response = JSON.parse(xhr.responseText);
        let title = response.data.title;
        let answers = response.data.answers;
        pollQuestion.innerText = `${title}`;
        for (let i = 0; i < answers.length; i++) {
            let div = `
                <button class="poll__answer">
                    ${answers[i]}
                </button>`
            pollAnswers.insertAdjacentHTML('beforeEnd', div)
        }
        const buttons = Array.from(document.getElementsByClassName('poll__answer'))
        
        buttons.forEach (btn => {
            btn.addEventListener('click', (event) => {
                alert('«Спасибо, ваш голос засчитан!»');
                event.preventDefault();
            })
        })
    }
})

