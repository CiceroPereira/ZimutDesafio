const fs = require('fs');

module.exports = {
    addPlayerPage: (req, res) => {
        res.render('add-pessoa.ejs', {
            title: "NodeApp"
            ,message: ''
        });
    },
    addPlayer: (req, res) => {
      /*  if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        } */

        let message = '';
        let id_bin = req.body.id;
        let name = req.body.name;
        let datanasc = req.body.datanasc;
        let cpf = req.body.cpf;
        let cep = req.body.cep;
        let endereco = req.body.endereco;
        let numero = req.body.numero;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let complemento = req.body.complemento;

        const cpff = require('node-cpf');

        const uuidv1 = require('uuid/v1');
        uuidv1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a' 
     

        let usernameQuery = "SELECT * FROM `pessoas` WHERE cpf = '" + cpf + "'";

        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0 || !(cpff.validate(cpf))) {
                message = 'cpf já cadastrado ou inválido';
                res.render('add-pessoa.ejs', {
                    message,
                    title: "NodeApp"
                });
            }
             else {
                        // send the player's details to the database
                        let query = "INSERT INTO `pessoas` (id_bin ,name, datanasc, cpf, cep, endereco, numero, bairro, cidade, estado, complemento) VALUES ('"+ uuidv1() +"','" +
                            name + "', '" + datanasc + "', '" + cpf + "', '" + cep + "', '" + endereco + "', '" + numero + "', '" + bairro + "', '" + cidade + "', '" + estado + "', '" + complemento + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
            }
        });
    },
    editPlayerPage: (req, res) => {
        let id_bin = req.params.id;
        let query = "SELECT * FROM `pessoas` WHERE id_bin = '" + id_bin + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-pessoa.ejs', {
                title: "Editar Pessoa"
                ,pessoa: result[0]
                ,message: ''
            });
        });
    },
    editPlayer: (req, res) => {
        let id_bin = req.params.id;
        let name = req.body.name;
        let datanasc = req.body.datanasc;
        let cpf = req.body.cpf;
        let cep = req.body.cep;
        let endereco = req.body.endereco;
        let numero = req.body.numero;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let complemento = req.body.complemento;

        let query = "UPDATE `pessoas` SET `name` = '" + name + "', `datanasc` = '" + datanasc + "', `cpf` = '" + cpf + "', `cep` = '" + cep + "', `endereco` = '" + endereco + "', `numero` = '" + numero + "', `bairro` = '" + bairro+ "', `cidade` = '" + cidade + "', `estado` = '" + estado + "', `complemento` = '" + complemento + "' WHERE `pessoas`.`id_bin` = '" + id_bin + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deletePlayer: (req, res) => {
       let id_bin = req.params.id_bin;
        let deleteUserQuery = 'DELETE FROM pessoas WHERE id_bin = "' + id_bin + '"';
        db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });

    }
};
