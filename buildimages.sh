
echo "Building autocomplete image"
docker build --force-rm -f microautocomplete/Dockerfile -t autocomplete microautocomplete/
echo "Building sidecar image"
docker build --force-rm -f sidecar/Dockerfile -t sidecar sidecar/
echo "Building web image"
docker build --force-rm -f web/Dockerfile -t web web/
