#!/bin/bash
trap "exit" INT TERM ERR
trap "kill 0" EXIT

docker-compose --file backend-compose.yml stop &
docker-compose --file fullstack-compose.yml stop &


echo "all docker containers stopped."
wait
