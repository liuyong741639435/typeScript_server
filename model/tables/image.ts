module.exports = pool => {
  pool.query(
    `SELECT table_name FROM information_schema.TABLES WHERE table_name ="image"`,
    (err, res) => {
      if (err) throw err
      if (res.length === 0) {
        pool.query(`CREATE TABLE \`image\` (
            \`id\` INT NOT NULL AUTO_INCREMENT,
            \`file_key\` VARCHAR(45) NOT NULL,
            \`file_name\` VARCHAR(45) NOT NULL,
            PRIMARY KEY (\`ID\`)
          )`
        )
      }
    }
  )
}