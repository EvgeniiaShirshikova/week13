const inpname = document.getElementById('inpname');
const inpimg = document.getElementById('inpimg');
const inpcomment = document.getElementById('inpcomment');
const form = document.querySelector('form');
const chatarea = document.querySelector('.chatarea');
const chatTitle = document.querySelector('.chattitle');

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
	messageUserName.textContent = inpname.value;
	post.append(messageUserName);

	const messageText = document.createElement('p');
	messageText.classList.add('comment');
	messageText.textContent = checkSpam();
	post.append(messageText);
}

inpname.addEventListener('input', () => {
	inpname.value = inpname.value.replace(/( |^)[а-яёa-z]/g, function (u) {
		return u.toUpperCase();
	});
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	createPost();
});
