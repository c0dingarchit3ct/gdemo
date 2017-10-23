
echo "Building autocomplete image"
docker build --force-rm -f microautocomplete/Dockerfile -t gcr.io/google_containers/klf-autocomplete:v1 microautocomplete/
echo "Building sidecar image"
docker build --force-rm -f sidecar/Dockerfile -t gcr.io/google_containers/klf-redis-sidecar:v1 sidecar/
echo "Building web image"
docker build --force-rm -f web/Dockerfile -t gcr.io/google_containers/klf-web:v1 web/
