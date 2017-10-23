
echo "Building autocomplete image"
docker build --force-rm -f microautocomplete/Dockerfile -t gcr.io/google_containers/autocomplete microautocomplete/
echo "Building sidecar image"
docker build --force-rm -f sidecar/Dockerfile -t gcr.io/google_containers/sidecar sidecar/
echo "Building web image"
docker build --force-rm -f web/Dockerfile -t gcr.io/google_containers/web web/
