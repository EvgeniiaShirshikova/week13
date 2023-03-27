const inputName = document.getElementById('inpname');
const inputImage = document.getElementById('inpimg');
const inputComment = document.getElementById('inpcomment');
const form = document.querySelector('form');
const chatArea = document.querySelector('.chatarea');
const chatTitle = document.querySelector('.chattitle');
const inputYes = document.getElementById('inpyes');
const inputNo = document.getElementById('inpno');
let icons = ['./assets/icons/astronaut.png', './assets/icons/bear.png', './assets/icons/cat.png', './assets/icons/dog.png', './assets/icons/panda.png', './assets/icons/rabbit.png'];

function checkSpam() {
	let comment = inputComment.value;
	let checkedComment = comment.replace(/viagra|xxx/gi, '***');
	return checkedComment;
}

function createPost() {
	let post = document.createElement('div');
	chatTitle.append(post);
    post.classList.add('postarea');

	const messageAvatar = document.createElement('img');
	messageAvatar.classList.add('avatarimg');
	if (inputImage.value === "") {
		let randomAvatar = Math.floor(Math.random() * icons.length);
		messageAvatar.src = icons[randomAvatar];		
	} else {
		messageAvatar.src = inputImage.value;
	}
	post.append(messageAvatar);

	const messageUserName = document.createElement('p');
	messageUserName.classList.add('username');
	if (inputYes.checked) {
		messageUserName.textContent = inputName.value;
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

	form.reset();
}

inputName.addEventListener('input', () => {
	inputName.value = inputName.value.replace(/( |^)[а-яёa-z]/g, function (u) {
		return u.toUpperCase();
	});
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if ((inputYes.checked && !(inputNo.checked)) || (!(inputYes.checked) && inputNo.checked)) {
		createPost()
	} else {
		alert("Укажите показывать ли ваше имя!");
	}
});
