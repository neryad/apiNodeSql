# NodeJs rest API with Sql Database

This is a simple rest api made with node that use sql database

## Installation

```bash
npm i
```

## Usage

```python
Create at .env file to set database 
varibles contenections like this :

DB_USER = youDatabaseUser
DB_Password = youDatabasePassword
DB_Server = youDatabaseServer
DB_Database = youDatabaseName

If you are using vs code you can install rest client plugin 
for test the end-points i will be a folder called request with the configurations
```
For Run in develoment Mode :

```bash
npm run dev  
```

For build :

```bash
npm run build
```

For run in production mode :

```bash
npm run start
```



## Used packages
    cors,
    dotenv,
    express,
    morgan,
    mssql,
## Dev packages
   
    @babel/cli,
    @babel/core,
    @babel/node,
    @babel/plugin-transform-runtime,
    @babel/preset-env
    nodemon

## License
[MIT](https://choosealicense.com/licenses/mit/)
