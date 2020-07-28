var dateList: Array<string> = [];
var dateObject: object = {};

generateDateList(10);
generateDateObject();
console.log(JSON.stringify(dateList, null, 2));
console.log(JSON.stringify(dateObject, null, 2));

function generateDateList(historyCount){
	var daysAgoInMilliseconds: number;
	var dateObject: Date;
	var dateLoop: number;
	dateList = [];
	for (dateLoop = 0; dateLoop < historyCount; dateLoop++) {
		daysAgoInMilliseconds = 86400 * 1000 * dateLoop;
		dateObject = new Date(Date.now() - daysAgoInMilliseconds);
		dateList.push(dateObject.toISOString().substring(0,10));
	}
	dateList.sort();
}

function generateDateObject(){
	dateObject = {};
	dateList.forEach(function(date){
		dateObject[date] = date;
	})
}

/*
		history[dateString] = null;
				}
				// populate history with ttl data
				ttl_calculations.forEach(function(calculation) {
					servertypeName = calculation['u_product_specific_server_type'];
					if (!servertypeName){
						servertypeName = 'null';
					}
					if (servertypeName === servertype){
						if (calculation['u_location'] === location){
							history[calculation['u_calculation_date']] = {
								"u_ttl_warning_message": calculation['u_ttl_1_day_warning'],
								"u_product_specific_server_type": calculation['u_product_specific_server_type'],
								"u_ttl": calculation['u_ttl_1_day'],
								"u_current_flag": calculation['u_current_flag']
							};
						}
					}
				});
				// convert history from dictonary to list
				Object.keys(history).sort().forEach(function(key) {
					historySort.push({
						"date": key,
						"data": history[key]
					});
				});
				tempLocation.push({"location": location, "shortName": location.split('/')[0], "history": historySort});
			});
			sortedData[servertype] = tempLocation;
		});
*/