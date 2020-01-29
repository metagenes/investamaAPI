'use-strict';

const conn = require('../Configs/conn');


exports.getNews = () => {
   
    return new Promise((resolve, reject) => {
        conn.query('SELECT * from news',
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}

exports.postNews = req => {
    const body = req.body;
    return new Promise((resolve, reject) => {
        conn.query('insert into news SET judul = ?, sumber = ?, isi = ?,  img_url = ?, penulis = ?, date = ?', [body.judul, body.sumber, body.isi, body.img_url, body.penulis, body.date],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}