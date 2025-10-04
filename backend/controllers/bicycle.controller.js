const db = require("../models");

const Bicycle = db.bicycles;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.brand || !req.body.model) {
        res.status(400).send({
             message: "content cannot be empty"
         });
        return;
    }

    const bicycle = {
        brand: req.body.brand,
        model: req.body.model
    };

    Bicycle.create(bicycle).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: "some error en db" });
    })
};

exports.findAll = (req, res) => {

    Bicycle.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {

            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving bicycles."
            });

        });

};

exports.update = (req, res) => {
}

exports.delete = (req, res) => {
}