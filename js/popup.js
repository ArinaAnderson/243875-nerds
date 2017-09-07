

  var writeUsButton=document.querySelector(".write-us-btn");
  var writeUsPopup=document.querySelector(".modal-write-us");
  var closeButton=document.querySelector(".modal-close");
  var fullName=writeUsPopup.querySelector("[name=fullname]");
  var email=writeUsPopup.querySelector("[name=email]");
  var writeUsForm=writeUsPopup.querySelector("form");
  var writeUsStorage=localStorage.getItem("fullName");
  var popup=document.querySelector(".modal");

  var downButton=document.querySelector(".arrow-down");
  var upButton=document.querySelector(".arrow-up");
  var catalogue=document.querySelector(".catalogue-items");

  writeUsButton.addEventListener("click",function(evt) {
    evt.preventDefault(); 
    writeUsPopup.classList.add("modal-show");
    fullName.focus();
    if(storage) {
      fullName.value=writeUsStorage;
      email.focus();
    } else {
    fullName.focus();
    }
  });

  writeUsButton.addEventListener("keydown",function(evt) {
    if(evt.keyCode===13) {
      evt.preventDefault();
      writeUsPopup.classList.add("modal-show");
      fullName.focus();
      if(storage) {
        fullName.value=writeUsStorage;
        email.focus();
      } else {
      fullName.focus();
      }
    }
  });

  closeButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-show");
    writeUsPopup.classList.remove("modal-error");
  }); 

  writeUsForm.addEventListener("submit", function(evt) {
    if(!fullName.value || !email.value) {
      evt.preventDefault();
      writeUsPopup.classList.add("modal-error");
    } else {
        localStorage.setItem("fullName", fullName.value);
    }
  });

  window.addEventListener("keydown", function(evt) {
    if(evt.keyCode===27) {
      if(writeUsPopup.classList.contains("modal-show"))  {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
      }
    }
  });

  upButton.addEventListener("click",function(evt) {
    if(upButton.classList.contains("current")) {
     // evt.preventDefault();
    } else {
      upButton.classList.add("current");
      catalogue.classList.add("current-reverse");
      downButton.classList.remove("current");
    }
  });
  
  downButton.addEventListener("click",function(evt) {
    if(downButton.classList.contains("current")) {
     // evt.preventDefault();
    } else {
      upButton.classList.remove("current");
      catalogue.classList.remove("current-reverse");
      downButton.classList.add("current");
    }
  });

  upButton.addEventListener("keydown",function(evt) {
    if(upButton.classList.contains("current")) {
     // evt.preventDefault();
    } else {
      if(keyCode===13) {
      upButton.classList.add("current");
      catalogue.classList.add("current-reverse");
      downButton.classList.remove("current");}
    }
  });
  
  downButton.addEventListener("click",function(evt) {
    if(downButton.classList.contains("current")) {
      //evt.preventDefault();
    } else {
      if(keyCode===13) {
      upButton.classList.remove("current");
      catalogue.classList.remove("current-reverse");
      downButton.classList.add("current");}
    }
  });




 