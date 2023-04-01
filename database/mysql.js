import mysql from 'mysql';
import config from "../config.json" assert { type: "json" };

const pool = mysql.createPool(config.mysql);

export default pool;