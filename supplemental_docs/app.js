window.onload = function() {
 	//expand the story
	document.getElementById("expand").onclick = function(event) {
		console.log("test");
		document.getElementById("test").style.width = "94%";
		document.getElementById("char").innerHTML = longP
	}

	//cut the story for the main page
	var longP = document.getElementById("char").innerHTML;
	function countAndCut() {
		var shortP = document.getElementById("char").innerHTML.slice(0, 250);
		document.getElementById("char").innerHTML = shortP + "...";
	}

	countAndCut();

	//increase the heart and flag counters
	var flagCount = 0;
	var heartCount = 0;

	document.getElementById("heart").onclick = function(event) {
		heartCount++;
		document.getElementById("heartCounter").innerHTML = " " + heartCount;
	}

	document.getElementById("flag").onclick = function(event) {
		flagCount++;
		document.getElementById("flagCounter").innerHTML = " " + flagCount;

		if (flagCount >= 10) {
			document.getElementById("test").remove();
		}
	}

	//dropdown hover
	$(".dropdown-button").dropdown({hover: true });

}



