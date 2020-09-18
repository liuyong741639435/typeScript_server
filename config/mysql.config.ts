const devConfig = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'ts'
}

const prodConfig = {
  host: 'xxx.xxx.xxx.xxx',
  port: '3306',
  user: 'root',
  password: '',
  database: 'ts'
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig