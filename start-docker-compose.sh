#!/bin/bash
trap "exit" INT TERM ERR
trap "kill 0" EXIT

docker rm mongo -f &

docker-compose up

wait
