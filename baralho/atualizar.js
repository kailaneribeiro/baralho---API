const {baralhos} = require('../data');
const atualizarBaralho = (req, res) =>{
    const {id} = req.params;
    const novoTitulo = req.body.titulo;

    const baralho = baralhos.find((ba) => ba.id == id);

    if (!baralho){
        return res.status(404).send({mensagem: 'Baralho não encontrado'});
    }
    baralho.titulo = novoTitulo;
    res.status(200).send({ mensagem: 'baralho atualizado com sucesso!',
        baralho: baralho
    });
}

module.exports = atualizarBaralho