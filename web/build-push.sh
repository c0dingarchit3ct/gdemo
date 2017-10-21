# in the current project
PROJECT_ID="$(gcloud config get-value project)"

#build the docker  image locally
docker build -t gcr.io/${PROJECT_ID}/web:$1 .

#push that guy
echo " pushing autocomplete version 1"
gcloud docker -- push gcr.io/${PROJECT_ID}/web:$1
