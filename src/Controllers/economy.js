'use-strict';

const model = require('../Models/economy'),
    response = require('../Helpers/response');
 

    exports.getEconomy = (req, res) => {
        model.getEconomy(req).then(result => {
            response.success(res, result);
        }).catch(err => response.error(res, err));
    }

    exports.postEconomy = (req, res) => {
        if (req.body.judul == null || req.body.judul === "") return response.error(res, "judul can't be empty");
        if (req.body.sumber == null || req.body.sumber === "") return response.error(res, "sumber can't be empty");
        if (req.body.isi == null || req.body.isi === "") return response.error(res, "isi can't be empty");
        if (req.body.img_url == null || req.body.img_url === "") return response.error(res, "img_url can't be empty");
        if (req.body.media == null || req.body.media === "") return response.error(res, "media can't be empty");
        if (req.body.date == null || req.body.date === "") return response.error(res, "date can't be empty");
            model
            .postEconomy(req)
            .then(result => {
                response.success(res, result);
            }).catch(err => response.error(res, err));
        }

    exports.patchEconomy = (req, res) => {
            model
            .patchEconomy(req)
                .then(result => {
                    response.success(res, result);
                }).catch(err => response.error(res, err));
    }

    exports.deleteEconomy = (req, res) => {
        model
        .deleteEconomy(req)
            .then(result => {
                response.success(res, result);
            }).catch(err => response.error(res, err));
}
 