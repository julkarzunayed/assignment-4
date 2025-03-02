
//Theme related js
const bg = ["bg-lime-200", "bg-yellow-100", "bg-green-100", "bg-orange-100", "bg-gray-100", "bg-red-100", "bg-slate-900", "bg-blue-100" ];
document.getElementById('btn-theme')
    .addEventListener("click", function(event){
        for(let i = 0; i < bg.length; i ++){
            const body = document.getElementById('body').classList
            if(body.contains(bg[i])){
                if(i === bg.length - 1){
                    body.replace(body[1], bg[0]);
                    return;
                }
                body.replace(body[1], bg[i + 1])
                return;

            }
        }
    })