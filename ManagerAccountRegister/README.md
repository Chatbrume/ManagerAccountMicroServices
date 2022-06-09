# ManagerAccountRegister

## Configuration

Dans le dossier "git-cloud-conf" ([cf.](../ManagerAccountConfig/README.md)) crée un fichier "eureka.properties":
```
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

Ce fichier sera publier par ManagerAccountConfig puis utiliser dans cette application.