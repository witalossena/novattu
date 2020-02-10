"use strict";



window.onload = function() {
  var listItems, allimages;
  listItems = document.querySelectorAll(".btn");
  allimages = document.querySelectorAll(".imagecol");
  console.log(listItems);
  console.log(allimages);

  function toggleActiveClass(active) {
    var i;
    for (i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("active");
    }
    active.classList.add("active");
  }

  function toggleimages(dataClass) {
    if (dataClass === "all") {
      for (let i = 0; i < allimages.length; i++) {
        allimages[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < allimages.length; i++)
        if (allimages[i].dataset.class === dataClass) {
          allimages[i].style.display = "block";
        } else {
          allimages[i].style.display = "none";
        }
    }
  }

  for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}}