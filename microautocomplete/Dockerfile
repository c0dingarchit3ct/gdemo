FROM openjdk:8-jdk-alpine
VOLUME /tmp
#ADD autocomplete.json autocomplete.json
ADD code/target/gs-rest-service-0.1.0.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
