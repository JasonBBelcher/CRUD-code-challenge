#!/bin/bash
trap "exit" INT TERM ERR
trap "kill 0" EXIT

docker rm -f $(docker ps -aq) &

./install-backend.sh &
./install-angular.sh &

wait
