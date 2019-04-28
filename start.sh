#!/bin/bash
trap "exit" INT TERM ERR
trap "kill 0" EXIT

docker system prune -a -f

wait

./start-backend.sh &
./start-angular.sh &

wait
