let taskDOM = document.getElementById("task");
let addDOM = document.getElementById("liveToastBtn");
let listDOM = document.getElementById("list");

loadedPage();

// To-do işlemlerine tik atma
var list = document.querySelector("ul");
list.addEventListener("click", function (check) {
  if (check.target.tagName === "LI") {
    check.target.classList.toggle("checked");
  }
});
// To-do işlemi ekleme
addDOM.addEventListener("click", () => {
  if (taskDOM.value) {
    loadStorage(taskDOM.value);
    const listItem = document.createElement("li");
    const valueItem = document.createElement("span");
    const deleteItem = document.createElement("span");
    deleteItem.classList.add("close");
    deleteItem.innerHTML = "X";
    valueItem.classList.add("value");
    valueItem.innerHTML = taskDOM.value;
    listItem.append(valueItem);
    listItem.append(deleteItem);
    listDOM.append(listItem);
    taskDOM.value = "";

    deleteItem.onclick = function (e) {
      deleteByElement(e);
    };
    $(".success").toast("show");
  } else {
    $(".error").toast("show");
  }
});

function deleteByElement(e) {
  let parent = e.target.parentElement;
  console.log(parent);
  let value = parent.getElementsByClassName("value")[0].textContent.trim();
  dltStorage(value);
  parent.remove();
}

// Local kayıt
function loadStorage(prm) {
  let str = JSON.parse(localStorage.getItem("todo"));
  let toDos;
  if (str == null) {
    toDos = [];
  } else {
    toDos = getStorage();
  }
  toDos.push(prm);
  localStorage.setItem("todo", JSON.stringify(toDos));
}

function getStorage() {
  let toDo = JSON.parse(localStorage.getItem("todo"));
  return toDo;
}

// Kayıt Getir

function loadedPage() {
  let toDo = getStorage();
  console.log(toDo);
  if (toDo != null) {
    let html;
    for (let i = 0; i < toDo.length; i++) {
      html = `<li>
            <span class="value">${toDo[i]}</span>
            <span class="close">X</span>
            </li>`;
      listDOM.innerHTML += html;
    }
  }
}

// Kayıt sil
function dltStorage(prm) {
  let toDo = getStorage();
  toDo.forEach((element, id) => {
    if (element === prm) {
      toDo.splice(id, 1);
    }
  });
  localStorage.setItem("todo", JSON.stringify(toDo));
}

(function () {
  // To-do işlemlerini silme (var olan)
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = (e) => deleteByElement(e);
  }
})();
