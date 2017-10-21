FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD code/autocomplete.json autocomplete.json
ADD code/target/redisloader-1.0-SNAPSHOT-jar-with-dependencies.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
