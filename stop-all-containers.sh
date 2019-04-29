#!/bin/bash
trap "exit" INT TERM ERR
trap "kill 0" EXIT

docker rm -f $(docker ps -aq) &
echo "all containers stopped"
wait
