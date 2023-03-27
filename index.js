const inpname = document.getElementById('inpname');
const inpimg = document.getElementById('inpimg');
const inpcomment = document.getElementById('inpcomment');
const form = document.querySelector('form');
const chatarea = document.querySelector('.chatarea');
const chatTitle = document.querySelector('.chattitle');
const inpyes = document.getElementById('inpyes');
const inpno = document.getElementById('inpno');

function checkSpam() {
	let comment = inpcomment.value;
	let checkedComment = comment.replace(/viagra|xxx/gi, '***');
	return checkedComment;
}

function createPost() {
	let post = document.createElement('div');
	chatTitle.append(post);
    post.classList.add('postarea');

	const messageAvatar = document.createElement('img');
	messageAvatar.classList.add('avatarimg');
	messageAvatar.src = inpimg.value;
	post.append(messageAvatar);

	const messageUserName = document.createElement('p');
	messageUserName.classList.add('username');
	if (inpyes.checked) {
		messageUserName.textContent = inpname.value;
	} else {
		messageUserName.textContent = "Username";
	};	
	post.append(messageUserName);

	const messageText = document.createElement('p');
	messageText.classList.add('comment');
	messageText.textContent = checkSpam();
	post.append(messageText);

	const messageDate = document.createElement('p');
	messageDate.classList.add('date');
	messageDate.textContent = new Date();
	post.append(messageDate);
}

inpname.addEventListener('input', () => {
	inpname.value = inpname.value.replace(/( |^)[а-яёa-z]/g, function (u) {
		return u.toUpperCase();
	});
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if ((inpyes.checked && !(inpno.checked)) || (!(inpyes.checked) && inpno.checked)) {
		createPost()
	} else {
		alert("Укажите показывать ли ваше имя!");
	}
});
