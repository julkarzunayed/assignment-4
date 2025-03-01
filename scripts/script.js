// Date and time related Script
let dateTime = new Date()
let date = dateTime.toDateString().split(' ')
document.getElementById('current-date')
    .innerText = date[1] + "  " + date[2] + "  " + date[3];
document.getElementById('current-day')
    .innerText = date[0] + "," ;
// time
// const time = dateTime.toLocaleTimeString()


//Completed button related script
const button = document.getElementsByClassName('card-btn')
// console.log(button)
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (event) {
        const taskAssigned = parseInt(document.getElementById('task-assigned').innerText);
        const totalCompletedTask = document.getElementById('total-completed-task').innerText
        //time
        const time = new Date().toLocaleTimeString();


        if (button[i].classList.contains('bg-gray-400')) {
            return;
        }
        else {
            button[i].classList.replace('bg-blue-500', 'bg-gray-400');
            document.getElementById('task-assigned').innerText = '0' + (taskAssigned - 1);
            document.getElementById('total-completed-task').innerText = parseInt(totalCompletedTask) + 1;
            //history Massage
            const taskTitle =  button[i].parentNode.parentNode.children[1].innerText;
            console.log(taskTitle)
            const historyMassage = document.createElement('div');
            historyMassage.innerHTML = `
            <div class="bg-[#F4F7FF] rounded-lg mt-4 p-3">
                <p class="">
                    You have Complete The task ${taskTitle} at ${time}
                </p>
            </div>
            `
            document.getElementById('history-massage').appendChild(historyMassage);
            console.log(historyMassage)
            // document.getElementById("history-massage")

            alert('Board updated successfully')

        }
        if(taskAssigned === 1){
            alert('Congress!!! You hame Completed all the current task')
        }
        console.log(taskAssigned);
        console.log(new Date().toDateString());
        console.log()


    })
    // console.log(button[i])
}