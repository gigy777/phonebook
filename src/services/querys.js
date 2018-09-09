import database from '../config/database';
import { resolve } from 'path';
let db = new database();

class Querys {
    constructor() {
    }

    insert_data(table, data) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO ' + table + ' SET ?', data).then((r) => {
                if (r.insertId = !undefined) {
                    db.query('SELECT id FROM ' + table + ' WHERE id=last_insert_id()  ORDER BY created DESC LIMIT 1', []).then((res) => {
                        resolve(res);
                    }).catch((res) => {
                        reject(res);
                    })
                }

            }).catch((r) => {
                reject(r)
            });
        })
    }

    get_all(table) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + table + ' WHERE is_active=true', []).then((r) => {
                resolve(r);
            }).catch((r) => {
                reject(r)
            });
        })
    }

    get_by_id(table,id){
        return new Promise((resolve,reject)=>{
          db.query('SELECT * FROM '+table+' WHERE id="'+id+'"',[]).then((r)=>{
              resolve(r[0]);
          }).catch((r)=>{
            reject(r)
        });
        })
    }

    update_data(table,data,id){
        return new Promise((resolve,reject)=>{
            db.query('UPDATE '+table+' SET ? WHERE id ="'+id+'"', data).then((r)=>{
                resolve(r);
		}).catch((r)=>{
            reject(r)
        });
        })
    }
    
    custom_query(query) {
        console.log(query);
        return new Promise((resolve, reject) => {
            db.query(query, []).then((r) => {
                resolve(r);
            }).catch((r) => {
                reject(r)
            });
        })
    }
    
}
export default new Querys();