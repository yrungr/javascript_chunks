
		var optionList = [];
		var selectElement = document.getElementById('overlay');
    var optionElement;
		optionList.push(['Power - Average','powerAverage',false]);
		optionList.push(['Power - Maximum','powerMaximum',false]);
		optionList.push(['Slot availability','slotAvailability',true]);
		optionList.forEach(function(option){
      optionElement = document.createElement('option');
      optionElement.text = option[0];
      optionElement.value = option[1];
      optionElement.disabled = option[2];
      selectElement.add(optionElement);
		});
