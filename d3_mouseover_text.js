		newElement = svgContainer
			.append("a")
			.attr("xlink:href", url)
			.append("rect")
			.attr('class', 'cube')
			.attr("x", '10px')
			.attr("y", '10px')
			.attr("rx", '10px')
			.attr("ry", '10px')
			.attr("width", '200px' )
			.attr("height", '200px' )
			.style("stroke-width", '3px')
			.style("stroke", "black")
			.style("fill", "blue");
		newElement
			.append("svg:title")
			.text("blah");
