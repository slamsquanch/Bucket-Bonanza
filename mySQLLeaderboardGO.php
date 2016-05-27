<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="http://w2ui.com/src/w2ui-1.4.2.min.css" />
    <script type="text/javascript" src="settings.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.29/howler.min.js"></script>
    <script type="text/javascript" src="Scripts/audio.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://w2ui.com/src/w2ui-1.4.3.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script type="text/javascript" src="Scripts/background_display.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="Scripts/resizeLeaderboardMM.js"></script>
    <link rel="stylesheet" href="leaderboard_style.css"></link>
</head> 
<?php 

	/*
	Code to connect to database obtained from: http://php.net/manual/en/function.mysqli-connect.php
	*/
	// Connecting to database
	$db = mysqli_connect("db4free.net", "group05", "pie69car", "bbleaderboard");

	if ($db->connect_errno) {
		echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
	} 
	
	// Getting player information and sending it to online database
	$playerName = $_POST["name"];
	$playerScore = $_POST["scoreOutput"];
	
	mysqli_query($db, 
		"INSERT INTO `leaderboard` (`Name`, `Score`) VALUES ('$playerName', '$playerScore')")
		or die (mysqli_error($db));
	
	
	/*
	Code for query syntax of MySql from Jason's lectures on PHP
	*/
	// Fetching rows from leaderboard table
	if ($result = mysqli_query($db,
		"SELECT * FROM leaderboard ORDER BY Score DESC")){;

	// Creating the table to store rows
	$x = 1;
	
	echo "<table class = 'leaderboard'>
		<thead>
			<tr> 
			<td> Rank </td>
			<td> Name </td>
			<td> Score </td>
			</tr>
		</thead>"
			;
	
	while($row = mysqli_fetch_assoc($result)){
			echo " <tr>";
			echo " <td> " . $x . "</td>";
			echo " <td> " . $row['Name'] . "</td>";		
			echo " <td> " . $row['Score'] . "</td>";	
			echo " </tr>";	
			$x++;
			
			if ($x == 11)
				break;
	}
    echo "</table>";
	
	mysqli_free_result($result);
		}
	else
		die (mysqli_error($db));
	
	mysqli_close($db); 
	
?> 
<body>

    <script>titleBGM.play();</script>
		
	<ul style="list-style-type: none;">
		<li><img id="titleScreen" src="Screens/leaderboard.png" alt="TitleScreen"></img></li>
		<li><a href="index.html"><img src="buttons/backtomenu.png" alt="Play" id="titlePlay"></img></a></li>
		<li><a href="GameFrame(BucketBonanza).html"><img src="buttons/restartButton.png" alt="Play" id="titleRestart"></img></a></li>
	</ul>

	<button id="button" onclick="popup()"></button>
</body>
</html> 
