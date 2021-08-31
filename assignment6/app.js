var inputText = document.getElementById("text");
var list = document.getElementById("listGroup");

inputText.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        text = inputText.value;
        if (text.length > 0)
            addListItem(text);
        else
            alert("Please enter some text");
    }
})

//add item to list
function addListItem(text) {
    let newListELement = document.createElement('li');
    newListELement.className = "listElement"
    let spanTag = document.createElement('span');
    // update icon
    let updateImg = document.createElement('button');
    updateImg.innerText = "Update";
    updateImg.className = "update";
    spanTag.appendChild(updateImg);
    // up arrow
    let upImg = document.createElement('button');
    upImg.innerText = "Up";
    upImg.className = "up";
    spanTag.appendChild(upImg);
    // down arrow
    let downImg = document.createElement('button');
    downImg.innerText = "Down";
    downImg.className = "down";
    spanTag.appendChild(downImg);
    // delete icon
    let deleteImg = document.createElement('button');
    deleteImg.innerText = "Delete";
    deleteImg.className = "delete";
    spanTag.appendChild(deleteImg);
    //text value
    let textSpan = document.createElement('span');
    textSpan.appendChild(document.createTextNode(text));
    textSpan.className = "text";

    // append elements
    newListELement.appendChild(textSpan);
    newListELement.appendChild(spanTag);
    list.appendChild(newListELement);

}

list.addEventListener("click", function (e) {
    if (e.target.className == 'delete') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;
        p2.remove();
    }

    if (e.target.className == 'update') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;
        p2.firstChild.setAttribute("contenteditable", "true");
    }

    if (e.target.className == 'up') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;

        let temp = p2.previousSibling.firstChild.innerText;
        p2.previousSibling.firstChild.innerText = p2.firstChild.innerText;
        p2.firstChild.innerText = temp;

    }
    if (e.target.className == 'down') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;

        let temp = p2.nextSibling.firstChild.innerText;
        p2.nextSibling.firstChild.innerText = p2.firstChild.innerText;
        p2.firstChild.innerText = temp;

    }
});