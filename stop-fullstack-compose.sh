#!/bin/bash
trap "exit" INT TERM ERR
trap "kill 0" EXIT

docker-compose --file fullstack-compose.yml stop &
docker stop  $(docker ps -aq) &

echo "full stack containers stopped."
wait
