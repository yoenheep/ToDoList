// LIst 추가
function addList() {
  // text에 할일 작성값 받아오기
  let addToDo = document.getElementById("addToDo").value;

  // 추가할 li요소 가져오기
  const li = document.createElement("li");
  li.setAttribute("id", "list"); // li에 id 추가

  // li에 text node 추가
  let textNode = document.createTextNode(addToDo);
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "check";
  checkBox.onclick = "'on_clicked()";
  li.appendChild(textNode);
  li.appendChild(checkBox);

  // ul에 li넣기
  document.getElementById("list").appendChild(li);

  //text칸 비우기
  document.getElementById("addToDo").value = "";
}

function on_clicked() {
  let checkedBox = document.getElementById("check");
  let isChecked = checkedBox.isChecked;

  if (isChecked) {
    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";
    deleteBtn.onclick = "'delList()'";
    li.appendChild(deleteBtn);
  }
}
