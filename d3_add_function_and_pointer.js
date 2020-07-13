
          classTargets = document.getElementsByClassName(dataButtonClass);
          Array.from(classTargets).forEach(function(target){
            target.addEventListener("click", dataButton, false);
					  target.addEventListener("mouseover", function(d) {
              d3.select(this).style("cursor", "pointer")
            });
            target.addEventListener("mouseout", function(d) {
              d3.select(this).style("cursor", "")
            });
          });
