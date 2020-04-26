const mysql = require('mysql')
const execute = require('./execute')
const getConnection = require('./getConnection')


function makePool(host, user, password, connectionLimit, database) {
    const pool = mysql.createPool({
        connectionLimit,
        host,
        user,
        password,
        database
    })
    return pool
}

module.exports = startMetron


function startMetron(...params) {
    this.pool = makePool(...params)
    let instance = {}
    instance.pool = this.pool
    instance.execute = async function (query, params) {
        const connection = await getConnection(this.pool)
        const result = await execute(connection, query, params)
        return result
    }
    return instance
}