// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
  } else {
    progressBar.classList.remove("hide");
    if (event.detail.totalProgress === 0) {
      event.target.querySelector(".center-pre-prompt").classList.add("hide");
    }
  }
};
document.querySelector("model-viewer").addEventListener("progress", onProgress);

const toggle = document.getElementById("dropdown-content");

//Show/Hide dropdown menu
function toggleDisplay() {
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
}

//copy url to clipboard
function copyURL() {
  const btnHome = document.getElementsByClassName("share");
  navigator.clipboard.writeText(window.location.href);

  Swal.fire({
    text: '¡Enlace copiado al portapapeles!',
    confirmButtonText: 'Ok',
    confirmButtonColor: '#303030',
    background: '#f9e2dc',
    color: '#303030'
  })
  
  toggle.style.display = "none";
}

//change language
function changeLang() {
  const esp = document.getElementById("text-esp");
  const eng = document.getElementById("text-eng");
  const esp2 = document.getElementById("text-esp2");
  const eng2 = document.getElementById("text-eng2");
  const esp3 = document.getElementById("text-esp3");
  const eng3 = document.getElementById("text-eng3");

  if (esp.style.display === "flex") {
    esp.style.display = "none";
    eng.style.display = "flex";
  } else {
    esp.style.display = "flex";
    eng.style.display = "none";
  }

  if (esp2.style.display === "flex") {
    esp2.style.display = "none";
    eng2.style.display = "flex";
  } else {
    esp2.style.display = "flex";
    eng2.style.display = "none";
  }

  if (esp3.style.display === "flex") {
    esp3.style.display = "none";
    eng3.style.display = "flex";
  } else {
    esp3.style.display = "flex";
    eng3.style.display = "none";
  }

  toggle.style.display = "none";
}

let counter = 0;
let model = document.getElementById("model"); 

function prev(){
  
  counter -= 1;
  if(counter < 0){
    counter = 3;
    
  }
}

function next(){
  
  counter += 1;
  if(counter > 3){
    counter = 0;
    
  }
}

function changeModel(){

  switch(counter){
    case 0:
      model.src = "assets/models/auto.gltf";
      console.log(counter);
      break;
    case 1:
      model.src = "assets/models/cora.gltf";
      console.log(counter);
      break;
    case 2:
      model.src = "assets/models/flores.gltf";
      console.log(counter);
      break;
    case 3:
      model.src = "assets/models/frutas.gltf";
      console.log(counter);
      break;
  }

  
}