const inputF = document.querySelector(".text");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const list = document.getElementById("list-container");

const addAction = () =>{
    const text = inputF.value.trim();

    if(text !== ""){
        const itemList = document.createElement(`li`);
        itemList.textContent = text;
        list.appendChild(itemList);
        inputF.value = "";
    }
}

const removeAction = () => {
    const lastItem = list.lastElementChild;

    if (lastItem){
        list.removeChild(lastItem)  
    }
}

btn.addEventListener("click", addAction);
inputF.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        addAction();
    }
})

btn2.addEventListener("click", removeAction);