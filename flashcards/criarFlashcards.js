const {flashcards} = require('../data')

function criarFlashcards(req,res){
    console.log(req.body);
    const novoFlashcard = {
        id: flashcards.length + 1,
        pergunta: req.body.pergunta,
        resposta: req.body.resposta,
        baralhoId: req.body.baralhoId
    };
    flashcards.push(novoFlashcard)
    res.status(201).send({mensagem: 'Flashcards criado com sucesso!', baralho: novoFlashcard});
}

module.exports = criarFlashcards