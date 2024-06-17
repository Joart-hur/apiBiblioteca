const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: '45.132.157.103',
    port: 3306,
    user: 'u981546547_informatica',
    password: 'Isr@el123',
    database: 'u981546547_biblioteca1'

})
module.exports = connection
