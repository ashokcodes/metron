# Metron

A simple package to manage mysql pool setups in nodejs

## Installation
```
npm i metron-mysql --save
```

## Example

### Initializing Metron
```
const metron = require('metron-mysql')

const host = 'localhost'
const user = 'username'
const pass = 'password'
const connectionLimit = 20
const database = 'test_db'


const connection = metron(host, user, pass, connectionLimit, database)
```


### Running Queries
```
const connection = metron(host, user, pass, connectionLimit, database)

const result = await connection.execute('Show tables;') 
const result1 = await connection.execute('insert into user set ?', {name: 'John Doe', age: 21}) 
```