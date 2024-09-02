const {flashcards} = require('../data')

const deletarFlashcards = (req, res) =>{
    const {id} = req.params;
    const index = flashcards.findIndex((fla)=> fla.id == id);

    if (index === -1){
        return res.status(404).send('Flashcard não encontrado!');
    }
    const FlashcardDeletado = flashcards.splice(index, 1) [0];

    flashcards.forEach((flashcard, index) => {
        if (flashcard.baralhoId == id) {
            flashcards.splice(index, 1);
        }
    })

    res.status(200).send({
        mensagem: 'Flashcard deletado com sucesso!',
        baralho: FlashcardDeletado
    })
}

module.exports = deletarFlashcards