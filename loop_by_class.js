classTargets = document.getElementsByClassName(foo);
Array.from(classTargets).forEach(function(target){
  target.addEventListener("click", blah, false);
});
