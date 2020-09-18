import file_upload=require('../utils/file_upload')
import apidModeServer=require('../model/server/api')
import pool = require('../model/index')
module.exports = {
  upload: async (req:Express.Request) => {
    const file = await file_upload(req)
    const currentName = file.path.split('upload_')[1]
    const key = currentName.split('.')[0]
    return apidModeServer.upload(key,currentName)
  },
  getList ():Promise<FillMode>{
    return new Promise((resolve,reject)=>{
      pool.query(`SELECT * FROM image`, (err, result)=>{
        console.log(result)
        if(err) reject(err)
        else resolve(result)
      })
    })
  }
}