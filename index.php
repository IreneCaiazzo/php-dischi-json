<?php

header('Content-Type: application/json');

$discs = file_get_contents('discs.json');
echo $discs;
