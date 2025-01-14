// LIst 추가
function addList() {
  // text에 할일 작성값 받아오기
  let addToDo = document.getElementById("addToDo").value;

  console.log(addToDo);
  if (addToDo !== "" && addToDo !== undefined) {
    // 추가할 li요소 가져오기
    const li = document.createElement("li");
    li.setAttribute("id", "liList"); // li에 id 추가

    // li에 text node 추가
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "check";
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        span.style.textDecorationLine = "line-through";
      } else {
        span.style.textDecorationLine = "";
      }
    });
    let span = document.createElement("span");
    span.innerHTML = addToDo;
    let deleteBox = document.createElement("button");
    deleteBox.id = "delete";
    deleteBox.innerHTML = "✖";
    deleteBox.onclick = () => deleteBox.closest("li").remove();
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBox);

    // ul에 li넣기
    document.getElementById("list").appendChild(li);

    //text칸 비우기
    document.getElementById("addToDo").value = "";
  } else {
    alert("내용 없음");
  }
}
