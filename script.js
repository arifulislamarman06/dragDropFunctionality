const dragArea = document.querySelector(".appBody"),
      dragText = dragArea.querySelector("h3"),
      button   = dragArea.querySelector("button"),
      input   = dragArea.querySelector("input");
let myFile;

button.onclick = () => {
    input.click();
}
input.addEventListener("change", function () {
    myFile = this.files[0];
    dragArea.classList.add("active");
    showMe();
})

dragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
})

dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("active");
    dragText.textContent = "Drag & Drop";
})

dragArea.addEventListener("drop", (event)=> {
    event.preventDefault();
    myFile = event.dataTransfer.files[0];
    showMe();
})

function showMe() {
    let fileType  = myFile.type;
    let fileValid = ["image/jpeg", "image/jpg", "images/png"];

    if (fileValid.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
           let imgUrl = fileReader.result;
           let img = `<img src="${imgUrl}" alt="" />`;
           dragArea.innerHTML = img;
           dragArea.style.border = "3px solid black";
           dragArea.style.boxShadow = "none";
        }
        fileReader.readAsDataURL(myFile);
    }else{
        alert("Your File Extension Didn't Match");
        dragArea.classList.remove("active");
    }
}
