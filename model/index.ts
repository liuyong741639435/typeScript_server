const mysql = require('mysql')
const mysqlConfig =require('../config/mysql.config')
const pool = mysql.createPool(mysqlConfig)
require('./tables/image')(pool)
export = pool