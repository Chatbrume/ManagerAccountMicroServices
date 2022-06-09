# ManagerAccountProxy

## Configuration

Dans le dossier "git-cloud-conf" ([cf.](../ManagerAccountConfig/README.md)) crée un fichier "cloud-gateway.properties":
```
server.port=8090
spring.cloud.gateway.discovery.locator.enabled=true
spring.cloud.gateway.discovery.locator.lower-case-service-id=true
spring.cloud.gateway.globalcors.cors-configurations.[/**].allowedOrigins="http://localhost:4200"
spring.cloud.gateway.globalcors.cors-configurations.[/**].allowedHeaders="*"
spring.cloud.gateway.globalcors.cors-configurations.[/**].allowedMethods=*
```

Ce fichier sera publier par ManagerAccountConfig puis utiliser dans cette application.