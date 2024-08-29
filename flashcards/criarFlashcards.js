const {flashcards} = require('../data')

function criarFlashcards(req,res){
    console.log(req.body);
    const novoFlashcard = {
        id: flashcards.length + 1,
        titulo: req.body.titulo
    };
    flashcards.push(novoFlashcard)
    res.status(201).send({mensagem: 'Flashcards criado com sucesso!', baralho: novoFlashcard});
}

module.exports = criarFlashcards