const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value ===''){
        alert("you must write something");
    
    }
    else {
        let li = document.createElement("li");
li.innerHTML= inputBox.value;//adding the text in the input field 
listContainer.appendChild(li);
let span = document.createElement("span");//adding close icon
span.innerHTML="\u00d7";// adding the span content(close icon)
li.appendChild(span);//diplay the span
} 
inputBox.value="";
saveData();
}
listContainer.addEventListener("click", function(e){

    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},
 false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);// to store our data
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");

}
showTask();