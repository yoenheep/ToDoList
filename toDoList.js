const addText = document.querySelector("#addToDo");
const addBtn = document.querySelector("#button_add");
const ul = document.querySelector("#list");

const savedToDoList = JSON.parse(localStorage.getItem("saved-items"));
console.log(savedToDoList);

if (savedToDoList) {
  for (let i = 0; i < savedToDoList.length; i++) {
    addList(savedToDoList[i]);
  }
}

addBtn.addEventListener("click", () => {
  // +버튼 눌렀을 때의 클릭 효과
  if (addText.value !== "") {
    addList();
  } else {
    alert("내용 없음");
  }
});

// LIst 추가
function addList(storageData) {
  // text에 할일 작성값 받아오기
  let addToDo = addText.value;

  if (storageData) {
    addToDo = storageData.contents;
  }

  // 추가할 li요소 생성
  const li = document.createElement("li");
  li.setAttribute("id", "liList"); // li에 id 추가

  // span 생성
  const span = document.createElement("span");
  span.textContent = addToDo;
  span.id = "span";

  // 체크박스 생성
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "check";
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      li.classList.toggle("complete");
      saveList();
    } else {
      li.classList.toggle("false");
      saveList();
    }
  });

  if (storageData && storageData.complete === true) {
    li.classList.add("complete");
  }

  // 삭제버튼 생성
  let deleteBox = document.createElement("button");
  deleteBox.id = "delete";
  deleteBox.innerHTML = "✖";
  deleteBox.onclick = () => {
    deleteBox.closest("li").remove();
    saveList();
  };
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(deleteBox);

  // ul에 li넣기
  ul.appendChild(li);

  //text칸 비우기
  addText.value = "";

  saveList();
}

function saveList() {
  //로컬에 데이터 저장하기
  const saveLi = [];
  for (let i = 0; i < ul.children.length; i++) {
    const todoObj = {
      contents: ul.children[i].querySelector("span").textContent,
      complete: ul.children[i].classList.contains("complete"),
    };
    saveLi.push(todoObj);
  }

  if (saveLi.length === 0) {
    localStorage.removeItem("saved-items");
  } else {
    localStorage.setItem("saved-items", JSON.stringify(saveLi));
  }
}
