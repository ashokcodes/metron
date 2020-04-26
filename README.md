# Metron

A simple package to simpify mysql pool setups in nodejs

## Example

### Initializing Metron
```
const host = 'localhost'
const user = 'username'
const pass = 'password'
const connetionLimit = 20
const database = 'test_db'


const connection = metron(host, user, pass, connectionLimit, database)
```


### Running Queries
```
const connection = metron(host, user, pass, connectionLimit, database)

const result = await connection.execute('Show tables;') 
const result1 = await connection.execute('insert into user set ?', {name: 'John Doe', age: 21}) 
```