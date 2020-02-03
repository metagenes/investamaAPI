'use-strict';

const conn = require('../Configs/conn');


exports.getEconomy = () => {
   
    return new Promise((resolve, reject) => {
        conn.query('SELECT * from economy',
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}

exports.postEconomy = req => {
    const body = req.body;
    return new Promise((resolve, reject) => {
        conn.query('insert into economy SET judul = ?, sumber = ?, isi = ?,  img_url = ?, media = ?, date = ?', [body.judul, body.sumber, body.isi, body.img_url, body.media, body.date],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}

exports.patchEconomy = req => {
    const body = {
        ...req.body,
  };
  const id_news = req.params.id_news;
    return new Promise((resolve, reject) => {
        conn.query('update economy SET ? where id = ?', [body,id_news],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}

exports.deleteEconomy = req => {
  const id_news = req.params.id_news;
    return new Promise((resolve, reject) => {
        conn.query('delete from economy where id = ?', [id_news],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}