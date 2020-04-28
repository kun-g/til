#! /bin/bash

# TIL
TIL_FILENAME=til/`date +'%Y%m%d%H%M'`.md;
$TIL_FILENAME;
hugo new $TIL_FILENAME;
nvim ./content/$TIL_FILENAME;
