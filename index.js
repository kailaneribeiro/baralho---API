const express = require ('express');
const app = express();
const port = 3000
app.use(express.json());
app.get('/', (req,res) =>{
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localshost:${port}`);
});


const criarBaralho = require('./baralho/criar');
app.post('/baralho', criarBaralho);

const listarBaralhos = require('./baralho/listar');
app.get('/baralho', listarBaralhos);

const atualizarBaralho = require ('./baralho/atualizar');
app.put('/baralho/:id', atualizarBaralho)

const deletarBaralho = require ('./baralho/deletar');
app.delete('/baralho/:id', deletarBaralho);


const criarFlashcards = require('./flashcards/criarFlashcards');
app.post('/flashcards', criarFlashcards);


const listarFlashcards  = require('./flashcards/listarFlashcards');
app.get('/flashcards', listarFlashcards );

const atualizarflashcard = require ('./flashcards/atualizarFlashcards');
app.put('/flashcards/:id', atualizarflashcard)

const deletarFlashcards = require ('./flashcards/deletarFlashcards');
app.delete('/flashcards/:id', deletarFlashcards);

