const express = require('express');
const ArticleService = require('./services/ArticleService.js');

const app = express();
const PORT = process.env.PORT || 3000;

//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

app.set('views', './views');
app.set('view engine', 'ejs');


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    const articles = ArticleService.getArticles();
    response.render('pages/home', { title: 'InfoInve$t', articles });
});

app.get('/artigos/:articleId', (request, response) => {
    const articleId = request.params.articleId;
    const article = ArticleService.getArticleById(articleId);
    const title = (article) ? article.title : 'Artigo não encontrado';
    response.render('pages/artigos', { title, article });
});

// app.get('/teste',(request,response)=> {

//     const {aporteInicial, aporteMensal, meses, taxaAA } = request.query;
//     console.log(aporteInicial,aporteMensal,meses,taxaAA);
//     response.render('pages/home',{title: 'EJS'});
// });