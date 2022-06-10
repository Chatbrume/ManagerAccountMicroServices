# HOOK

Dans le fichier `ManagerAccountMicroServices\.git\hooks\pre-commit` mettre:
````bash
#!/bin/bash

echo "Running Maven clean test for errors"
# retrieving current working directory
CWD=`pwd`
MAIN_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# go to main project dir
cd $MAIN_DIR/../../
# running maven clean test
mvn -f ManagerAccountService/pom.xml clean test
if [ $? -ne 0 ]; then
  "Error while testing the code"
  # go back to current working dir
  cd $CWD
  exit 1
fi
# go back to current working dir
cd $CWD
```
Ce code vas lancer les test du projet ManagerAccountService.