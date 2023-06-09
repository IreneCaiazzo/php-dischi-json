<?php

header('Content-Type: application/json');

$message = file_get_contents('discs.json');
echo $message;
