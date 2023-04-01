import mysql from 'mysql';
import config from "../config.json" assert { type: "json" };

const pool = mysql.createPool(config.mysql);

const mysqlTest = async () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

export default mysqlTest;