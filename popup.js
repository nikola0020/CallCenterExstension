console.log("test0");
const buttons = document.querySelectorAll("#button");
const descText = document.querySelectorAll("#text");

document.getElementById("switch").addEventListener("change", function() {

  if (document.getElementById("switch").checked == true) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    //button dark mode
    console.log(buttons)
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "#242424";
      buttons[i].style.color = "white";
      buttons[i].style.border = "2px solid white";
    }
    //text dark mode
    for (let i = 0; i < buttons.length; i++) {
      descText[i].style.color = "white";
    }
    console.log("dark mode")

    //Save theme

  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    //button light mode
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "white";
      buttons[i].style.color = "#707070";
      buttons[i].style.border = "2px solid #707070";
    }
    //text dark mode
    for (let i = 0; i < buttons.length; i++) {
      descText[i].style.color = "#707070";
    }
     
    console.log("light mode");
  }
});

// Select Data
buttons[1].addEventListener("click", function(){
  chrome.runtime.sendMessage('get-click-data', (response) => {
    console.log('received click data', response);
  });
});