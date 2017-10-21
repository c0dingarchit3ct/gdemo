cd microautocomplete/code
echo "Building AutoComplete code"
if (mvn clean package -DskipTests); then
	    echo "done!!!!"
		 else
			 echo "we got ERROR"
       exit 1
		 fi
cd ../../sidecar/code
echo "Building Sidecar code"
if (mvn clean package -DskipTests); then
	    echo "done!!!!"
		 else
			 echo "we got ERROR"
       exit 1
		 fi
