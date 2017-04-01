<?php 
	if(isset($_GET['command']))
	{
		$myfile = fopen($_SERVER['DOCUMENT_ROOT']."dev/nsbe/alfred/data.html", "w") or die("Unable to open file!");
		fwrite($myfile, $_GET['command']);
		fclose($myfile);
	}