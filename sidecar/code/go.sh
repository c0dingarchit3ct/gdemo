echo "building project"
if (mvn package -DskipTests); then
    echo "done building now Executing ~!!!!"
    java -jar target/redisloader-1.0-SNAPSHOT.jar
 else
echo "we got ERROR"
fi
