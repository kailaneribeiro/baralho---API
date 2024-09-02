const {flashcards} = require('../data');
const atualizarflashcard = (req, res) =>{
    const {id} = req.params;
    const novaPergunta = req.body.pergunta;
    const novaResposta = req.body.resposta;
    const novoBara = req.body.baralhoId;



    const flashcard = flashcards.find((ba) => ba.id == id);

    if (!flashcard){
        return res.status(404).send({mensagem: 'Flashcard não encontrado'});
    }
    flashcard.pergunta = novaPergunta;
    flashcard.resposta = novaResposta;
    flashcard.baralhoId = novoBara;

    res.status(200).send({ mensagem: 'Flashcard atualizado com sucesso!',
        flashcard: flashcard
    });
}

module.exports = atualizarflashcard