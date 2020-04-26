module.exports = (connection, query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, function (error, results, fields) {
            connection.release();
            if (error) reject(error)
            resolve(results)
        })
    })
}