sshpass -p "$SERVER_PW" ssh $SERVER_HOST

docker-compose stop
docker-compose rm -f
docker-compose pull   
docker-compose up -d