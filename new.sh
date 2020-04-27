#! /bin/bash

# TIL
TIL_FILENAME=til/`date +'%Y%m%d%H%M'`.md;
$TIL_FILENAME;
hugo new $TIL_FILENAME;
vim ./content/$TIL_FILENAME;
