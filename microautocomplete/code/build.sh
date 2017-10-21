echo "building project"
if (mvn clean package -DskipTests); then
	    echo "done building now Executing ~!!!!"
	        java -jar target/gs-rest-service-0.1.0.jar
		 else
			 echo "we got ERROR"
		 fi
