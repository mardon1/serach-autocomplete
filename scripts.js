// getting all required elements

const searchwrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
const attribute = document.querySelector("a");

inputBox.addEventListener("keyup", (e) => {
  let userDate = e.target.value;
  let emptyArray = [];
  if (userDate) {
    emptyArray = info.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userDate.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    searchwrapper.classList.add("active");
    showSuggestion(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchwrapper.classList.remove("active");
  }
});

function select(element) {
  let selectUserDate = element.textContent;
  inputBox.value = selectUserDate;
  searchwrapper.classList.remove("active");
  attribute.setAttribute(
    "href",
    `https://www.google.com/search?q=${selectUserDate}&source=hp&ei=vOpCYbDmCYydrgTLspuAAw&iflsig=ALs-wAMAAAAAYUL4zLMjE5DEyC6CUNLPZL4rJ5Rh3VZ2&oq=birnima&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAoQEzIGCAAQChATMgYIABAKEBMyBggAEB4QEzIICAAQChAeEBMyCAgAEAoQHhATMgYIABAeEBMyCAgAEAoQHhATOgUIABDEAjoECAAQAzoCCCY6BAgAEB46BAgAEBNQiT1YouUBYMOWAmgCcAB4AIABpAaIAdodkgEJMy0xLjIuMy4xmAEAoAEB&sclient=gws-wiz&ved=0ahUKEwiwtJaS9YLzAhWMjosKHUvZBjAQ4dUDCAc&uact=5`
  );
}

function showSuggestion(list) {
  let listData;
  if (!list.length) {
    let userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
