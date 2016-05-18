<?php

$name = $_POST["name"];

/*
Code modified from online tutorial found at http://www.tutorialspoint.com/mongodb/mongodb_php.htm
*/

    // Connecting to online Mongodb database with PHP
    $connection = new MongoClient( "mongodb://Player:12345@ds023912.mlab.com:23912/bucketbonanzaleaderboard" );
	
	// Selecting Database
	$db = $connection->selectDB('bucketbonanzaleaderboard');
	
	// Selecting Connection from Database
	$leaderboard = $db->selectCollection('Leaderboard');
	
	// Creating the array for player score into the leaderboard
	
	$score = array(
	    "Name"  => "$name",
		"Score" => "69"
	);
	
	// Inserting the score into the leaderboard
	$leaderboard->insert($score);
	
	/*
	Code modified from http://stackoverflow.com/questions/5365082/how-to-print-r-in-php-a-mongodb-collection
	*/
	
	// Getting all documents from the database
	$cursor = $leaderboard->find();
	
	
	/*
	Code modified from http://php.net/manual/en/mongocursor.sort.php
	*/
	// Sorting the cursor in descending order
	$cursor->sort(array('Score'=>-1));
	
	$array = iterator_to_array($cursor);
	
	/* 
	Outputting the leaderboard
	*/
	
	// Leaderboard index number
	$x = 1;
	
	foreach ($array as $value) {
		echo "<p>" . $x . " " . $value['Name'] . " " . $value['Score'];
		$x++;
		if ($x > 9)
			break;
	}

?>

<body>

	<ul style="list-style-type: none">
		<li><a href="titlescreen.html"><img src="buttons/mainMenuButton.png" alt="Exit" id="gameOverExit"></img></a></li>
		<li><a href="GameFrame(BucketBonanza).html"><img src="buttons/restartButton.png" alt="Restart" id="gameOverRestart"></img></a></li>
	</ul>
	
</body>