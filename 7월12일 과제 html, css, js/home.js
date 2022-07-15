const shortcutAddBtn = document.getElementById("shortcutAddBtn");
const shortcutAddDialog = document.querySelector("#shortcutAddWrap dialog");
const shortcutAddCancleBtn = document.querySelector("#shortcutAdd #btn .cancle-btn");
const shortcutAddActionBtn = document.querySelector("#shortcutAdd #btn .cancle-btn + button");
const shortcutAddNameInput = document.querySelector("#shortcutAdd #name input");
const shortcutAddUrlInput = document.querySelector("#shortcutAdd #url input");
const shortcutDeleteBtn = document.querySelector("#shortcut #shortcutDeleteBtn");
/* 바로가기 추가 */

function shortcutAddEnter() {
    shortcutAddDialog.showModal();
    shortcutAddActionBtn.classList.remove('action-btn');
    shortcutAddActionBtn.disabled = true;
    shortcutAddCancleBtn.addEventListener("click", shortcutAddExit);
    shortcutAddNameInput.addEventListener("keyup", shortcutAddActionActive);
    shortcutAddUrlInput.addEventListener("keyup", shortcutAddActionActive);
}

function shortcutAddExit() {
    document.querySelector('#shortcutAdd #name input').value = '';
    document.querySelector('#shortcutAdd #url input').value = '';
}

function createShortcut() {
    const inputname = document.querySelector('#shortcutAdd #name input').value;
    const inputurl = document.querySelector('#shortcutAdd #url input').value;
    const content = document.createElement('div');
    const deleteBtn = document.createElement('div');
    const alink = document.createElement('a');
    const span = document.createElement('span');
    const iconcircle = document.createElement('div');
    const image = document.createElement('img');
    content.classList.add('content');
    content.setAttribute('onmouseenter', "shortcutDeleteBtnVisible(event);");
    content.setAttribute('onmouseleave', "shortcutDeleteBtnUnvisible(event);");
    content.appendChild(deleteBtn);
    content.appendChild(alink);
    deleteBtn.classList.add('shortcutDeleteBtn', 'hidden');
    deleteBtn.innerText = 'X';
    alink.href = inputurl;
    alink.appendChild(iconcircle);
    alink.appendChild(span);
    span.innerText = inputname;
    iconcircle.classList.add('iconcircle');
    iconcircle.appendChild(image);
    document.querySelector('#shortcut').appendChild(content);
    shortcutAddExit();
}

function shortcutAddActionActive() {
    if (shortcutAddNameInput.value && shortcutAddUrlInput.value) {
        shortcutAddActionBtn.classList.add('action-btn');
        shortcutAddActionBtn.disabled = false;
        shortcutAddActionBtn.addEventListener("click", createShortcut);
    }
    else {
        shortcutAddActionBtn.classList.remove('action-btn');
        shortcutAddActionBtn.disabled = true;
    }
}

shortcutAddBtn.addEventListener("click", shortcutAddEnter);

/* 바로가기 애니메이션 */

function VisibleDelay(e) {
    e.style.transition = 'all 0s ease 0.4s';
}

function UnvisibleDelay(e) {
    e.style.transition = '';
}

function shortcutDeleteBtnBack(e) {
    UnvisibleDelay(e.target);
    e.target.style.backgroundColor = 'rgb(206, 206, 206)';
}

function shortcutDeleteBtnVisible(e) {
    VisibleDelay(e.target.querySelector(".shortcutDeleteBtn"));
    e.target.querySelector(".shortcutDeleteBtn").classList.remove('hidden');
    e.target.querySelector(".shortcutDeleteBtn").addEventListener("mouseover", (e)=>{
        UnvisibleDelay(e.target);
        console.log('event');
        e.target.style.backgroundColor = 'rgb(206, 206, 206)';
    });
    e.target.querySelector(".shortcutDeleteBtn").addEventListener("mouseleave", (e)=>{
        e.target.style.backgroundColor = '';
    });
}

function shortcutDeleteBtnUnvisible(e) {
    UnvisibleDelay(e.target.querySelector(".shortcutDeleteBtn"));
    e.target.querySelector(".shortcutDeleteBtn").classList.add('hidden');
}

/* 바로가기 삭제 */

function shortcutDelete() {

}