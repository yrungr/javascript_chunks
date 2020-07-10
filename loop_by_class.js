classTargets = document.getElementsByClassName(dataButtonId);
Array.from(classTargets).forEach(function(target){
  target.addEventListener("click", dataButton, false);
});
