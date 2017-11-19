docker-compose stop web
docker-compose rm -f web
docker rmi -f gcr.io/google_containers/klf-web:v1
docker rmi $(docker images -f "dangling=true" -q)
docker build --force-rm -f web/Dockerfile -t gcr.io/google_containers/klf-web:v1 web/
docker-compose up web
