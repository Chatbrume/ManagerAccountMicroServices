# Les Microservices

Pour pouvoir utiliser les différents microservices vous devez possèder une version **jdk** supérieur ou égale à **16** et une version **jre** supérieur ou égale **1.8**.<br/>

microservice | port | url
-------------|-----:|----
ManagerAccountConfig | 8888 | [http://localhost:8888](http://localhost:8888)
ManagerAccountRegister | 8761 | [http://localhost:8761](http://localhost:8761)
ManagerAccountProxy | 8090 | [http://localhost:8888](http://localhost:8090)
ManagerAccountService | 8081 | [http://localhost:8081](http://localhost:8081)

## Ordre de démarage conseiller
1. ManagerAccountConfig
2. ManagerAccountRegister
3. ManagerAccountProxy
4. ManagerAccountService


## Configuration générale
Dans votre dossier utilisateur vous allez devoir crée un dossier pour sauvegarder des informations de cloud utiliser par les différents microservices.</br>
Dans cette version le dossier s'apple "git-cloud-conf" (Vous pouvez le renomer cependant vous devrez penser a faire tout les modifications nécessaire).</br>
Ce dossier doit contenir les fichiers:
- application.properties ([cf](ManagerAccountConfig/README.md))
- eureka.properties ([cf](ManagerAccountRegister/README.md))
- cloud-gateway.properties ([cf](ManagerAccountProxy/README.md))
- manager-account.properties ([cf](ManagerAccountService/README.md))

## Application
[Lien](localhost:8888)
