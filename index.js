const inpname = document.getElementById('inpname');
const inpimg = document.getElementById('inpimg');
const inpcomment = document.getElementById('inpcomment');
const form = document.querySelector('form');
const chatarea = document.querySelector('.chatarea');

inpname.addEventListener('input', () => {
    inpname.value = inpname.value.replace(/( |^)[а-яёa-z]/g, function(u){ return u.toUpperCase(); }  );
});

form.addEventListener("submit", (event) => {
event.preventDefault();
let comment = inpcomment.value;
let checkedComment = comment.replace(/viagra|xxx/gi, '***');

chatarea.insertAdjacentHTML("beforeend", `<img class="avatarimg" src="${inpimg.value}" alt=""><div class="username">${inpname.value}</div><div class="comment">${checkedComment}</div>`);
});