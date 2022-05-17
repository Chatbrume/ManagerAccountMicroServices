# ManagerAccount

## Database
Pour avoir une base de données basique vous pouvez utiliser le fichier "_manageraccount.sql_".

### Logins
Admin: Admin<br/>
Toto: tot

## Configuration

Dans le dossier "git-cloud-conf" ([cf.](../ManagerAccountConfig/README.md)) crée un fichier "manager-account.properties":
```
server.port=8081
```

## Postman
Dans le dossier "_postman_" il y a un fichier contenant un export d'un dossier de test postman.<br/>
Pour que les tests fonctionnes il faudra modifier dans le dossier la variable "_id\_account_".

## Swagger
[api-docs](http://localhost:8081/manager-account/swagger/api-docs)<br/>
[swagger-ui](http://localhost:8081/manager-account/swagger/swagger-ui/index.html)

## Actuator
[Actuator](http://localhost:8081/manager-account/actuator)
