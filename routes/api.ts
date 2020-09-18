// import pool = require('../model/index');
import express = require('express')
const controllerApi = require('../controlier/api')

const router = express.Router()

router.post('/file_upload',async function(req,res){
  try {
    await controllerApi.upload(req)
    res.send(`success`)
  } catch (error) {
    res.send(error)
  }
})
router.get('/list', async function(req,res) {
  try {
   const result = await controllerApi.getList(req)
   res.send(result)
  } catch (error) {
    res.send('error:'+error)
  }
})

module.exports = router

