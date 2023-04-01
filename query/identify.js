import db from '../database/mysql.js';

const getIdentify = (data) => {
    const { tc, ad, soyad, dogumyil, nufusil, nufusilce, babaadi, anneadi, babatc, annetc } = data;
    const sql = `
        SELECT *
            FROM 101m
        WHERE (? IS NULL OR TC = ?)
            AND (? IS NULL OR ADI = ?)
            AND (? IS NULL OR SOYADI = ?)
            AND (? IS NULL OR NUFUSIL = ?)
            AND (? IS NULL OR NUFUSILCE = ?)
            AND (? IS NULL OR BABAADI = ?)
            AND (? IS NULL OR ANNEADI = ?)
            AND (? IS NULL OR BABATC = ?)
            AND (? IS NULL OR ANNETC = ?)
    `;

    return new Promise((resolve, reject) => {
        db.query(sql, [tc,tc, ad, ad, soyad, soyad, nufusil, nufusil, nufusilce, nufusilce, babaadi, babaadi, anneadi, anneadi, babatc, babatc, annetc, annetc], (err, result) => {
            if (err) {
                reject(err);
            } else {
                let data = [];
                result.forEach((item) => {
                    if(dogumyil) {
                        const dogumSplit = item.DOGUMTARIHI.split('.');
                        if(dogumSplit[2] === dogumyil) {
                            data.push({
                                ...item,
                            });
                        }
                    } else {
                        data.push(item);
                    }
                });
                resolve(data)
            }
        });
    });

}

export default getIdentify;