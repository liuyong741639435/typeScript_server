import { MysqlError } from 'mysql'
import pool = require('../index')

export = {
  upload (key, name):Promise<void>{
    return new Promise((resolve,reject)=>{
      pool.query(
        `INSERT INTO image (file_key,file_name) VALUES (?,?)`,
        [key,name],function(err,result){
          if(err) reject(err)
          else resolve(result)
        }
      )
    })
  }
}