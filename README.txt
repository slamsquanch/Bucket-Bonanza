# Bucket-Bonanza

Team: 5

Members:
Robert Arendac
Yi Hsiang Chen
Joanne Hsu
Zac Koop
Eduardo Rosario

Project overview:
Our game is titled Bucket Bonanza.  The objective is to catch the appropriate shape that is falling from the sky.
In the case of a shape with a mixed colour, such as green, the player will have to catch two shapes (such as blue
and yellow to make green) to get a point.  Various other objects will also fall from the sky.  These include boots
which decrements lives, fish that increment lives, and stars that activate bonanza mode.  Bonanza mode changes all
drops to stars, which increases your score.  The game ends when the player runs out of lives, which is capped at five.

Code structure:
Our code is split up into several JavaScript, PHP, and CSS files that group related functions together.  It is more
procedural than object-orientated, and we tried to keep a consistent style among our group.

Technologies used:
 -JavaScript for the bulk of our gameplay code
 -CSS for styling purposes
 -HTML to create web pages
 -WebStorm, Visual Studio, and Notepad++ as IDEs.
 -PHP with the MongoDB extension for the leaderboard
 -Github as our online repository
 -Sai and GIMP for image editing
 -JQuery and Bootstrap for screen responsiveness
 -Audacity and Reaper for recording audio
 -Howler.js to get our audio working with mobile
 
Issues and problems encountered:
1) Getting our game compatible with all devices/resolutions.  We initially designed the game with only one resolution
in mind so getting it to scale with all screens proved to be a challenge.
2) Getting comfortable with Git.  We are still learning how to properly use Git, so there were instances where we accidently
pushed broken coded and deleted entire functions by mistake.
3) Problems getting database and leaderboard to work.  This was a new area for us so we had to learn it from scratch.  
Furthermore, our hosting website does not support MongoDB, therefore database must be redone in MySQL.
4) Implementing audio.  We had not previously used audio when coding in JavaScript/HTMl, so it was a bit of a learning 
curve.  Also, there are issues getting the sound to play on mobile devices.
5) Getting our final game ready.  There were a lot of bugs that we encountered last minute and it was a bit of a rush
to get them finished.
6) Learning to use local storage and cookies.  None of us knew initially how either one works so it took us a bit of 
time to learn how to use them.
