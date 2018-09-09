import mysql from 'mysql';

class DB {
    constructor() {
        this.db_config = {
            host: "localhost",
            user: "root",
            password: "123",
            database: 'phonebook'
        }
        this.db_pool = mysql.createPool(this.db_config)
        console.log('test');
    }
    query(sql, params) {
        console.log('sql', sql);
        return new Promise((resolve, reject) => {
            this.db_pool.getConnection((error, conn) => {
                if (error) {
                    reject(error)
                }
                else {
                    conn.query(sql, params, (err, result) => {

                        if (!err) {
                            resolve(result);
                            return conn.release();
                        }
                        reject(err)
                        console.log(err);
                        conn.release();
                    })
                }
            })
        })

    }
}
module.exports = DB;
