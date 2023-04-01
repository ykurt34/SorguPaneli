import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import config from "../config.json" assert { type: "json" };
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writeFile = promisify(fs.writeFile);

const setConfig = async (type, value) => {
    if(type === "mysql") {
        config.mysql = value;
        await writeFile(path.resolve(__dirname, '../config.json'), JSON.stringify(config, null, 4));
    }
}

export default setConfig;