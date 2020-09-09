// Grabbing and storing the buttons into their own containers //
const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const ul = document.querySelector("ul");

// Checks input length //
inputLength = () => {
  return input.value.length;
};

// Creates the entire list item //
createListElement = () => {
    let li = document.createElement("li");
    let delBtn = createDelBtn();
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    li.appendChild(delBtn);
  
    // Toggles line through list-items when clicked //
    finishedTask = () => {
      li.classList.toggle("done");
    };
    
    // Listens for click event, then runs finishedTask //
    li.addEventListener("click", finishedTask);
  
    // Removes child element (li) from the parent(ul) //
    removeListItem = () => {
      delBtn.parentNode.remove(li);
    };
  
    // Listens for click on list-item, then removes clicked item from     list //
    delBtn.addEventListener("click", removeListItem);
};

// Creating contents of 'createListElement' after click //
addAfterClick = () => {
  if (inputLength() > 0) {
    createListElement(); 
  }
};

// Creating contents of 'createListElement' after pressing enter //
addAfterKeypress = () => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
};

// For creating/styling the delete button //
createDelBtn = () => {
  let delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("\u2718"));
  delBtn.classList.add("eraseBtn");
  return delBtn;
};

// Adding an event listener and commencing code once pressed - In this case the '+' button //
button.addEventListener("click", addAfterClick);

// Adding an event listener and commencing code once pressed - In this case the 'enter' button (For input bar only) //
input.addEventListener("keypress", addAfterKeypress);