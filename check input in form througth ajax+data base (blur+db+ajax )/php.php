<?php
	$arr = array("Piter", "Moscow", "New York", "California", "Washington");
	
	$result = $_GET["name"];

	$temp = $result." NOT in db";

	foreach($arr as $val) {
		if(strtoupper($val) == strtoupper($result)){
			$temp = $val." in db";
			break;
		}
	}

	echo $temp;
?>