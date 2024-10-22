
const requests = document.querySelectorAll('.request');
requests.forEach((request) =>{
    request.onclick = function(){
        window.location.href = '../Html/application.html'
    }
})
