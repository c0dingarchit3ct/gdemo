# in the current project
PROJECT_ID="$(gcloud config get-value project)"
gcloud beta container images list-tags gcr.io/${PROJECT_ID}/$1
#gcloud container images list-tags gcr.io/${PROJECT_ID}/$1
