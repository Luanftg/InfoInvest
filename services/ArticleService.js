const articles = [
    {
        id:1,
        title: 'O que é, quais são os riscos e consequências?',
        description: 'A informalidade é, em geral, compreendida como um fenômeno negativo do mercado de trabalho dos países. Seus riscos e consequências são diversos, afetando a vida social contemporânea nas dimensões:Individual – As pessoas ocupadas em empregos informais estão expostas aos riscos da não regulação pública da relação empregatícia, ou seja, estão desprotegidas das garantias que a CLT promove. Há ao menos 4 riscos:Riscos relacionados ao exercício da atividade laboral, como condições de trabalho precárias (acidentes, adoecimentos, insalubridade), jornada de trabalho extenuante (sem férias remuneradas), ausência de garantia de alimentação e transporte adequados.Riscos relacionados a períodos de inatividade, como a falta de licença remunerada, seguro-desemprego, aposentadoria (INSS) e da poupança em caso de despedida (FGTS).Riscos de insegurança financeira, como falta de salário mínimo, imprevisibilidade quando ao futuro com maior chance de perda de emprego, dificuldade para proporcionar um rendimento adequado, maior sujeição às instabilidades econômicas.Riscos de não cumprimento dos direitos, como falta de acesso a sindicatos e maior dificuldade de acesso à justiça do trabalho.Empresarial – As unidades produtivas informais tendem a ser pequenas e enfrentam uma série de dificuldades para garantir a sua sobrevivência e para fomentar seu crescimento. Tais unidades são representadas por somente um trabalhador em conta própria. A despeito de terem menores custos do que as unidades formais, por não pagarem impostos, taxas e licenças para funcionamento, frequentemente os negócios informais se restringem à força de trabalho familiar, que é privada de direitos trabalhistas em suas relações de emprego. Além disso, elas enfrentam desafios de impossibilidade de se envolver em transações ou celebrar contratos com outras unidades formais, e também são excluídas do acesso à maior parte das linhas de financiamento por conta da ausência de garantias legais. Soma-se ao risco eventuais fiscalizações que podem vir a bloquear a atividade do negócio, e também a falta de uma contabilidade específica do negócio para a identificação de custos e rendimentos que permita uma tomada de decisão informada.Setor Público – Dizem respeito ao fato de que a existência de empresas e trabalhadores que atuam na informalidade implica em evasão fiscal e, portanto, em perda de recursos tributários volumosos para os três níveis de governo da federação. A informalidade implica em um custo muito alto para o setor público e, sobretudo, para a sociedade, pois sua existência significa a perda de recursos fiscais que poderiam financiar investimentos produtivos e programas sociais focados no Estado de bem estar e na justiça social, além de incertezas sobre a situação fiscal futura.Setor Econômico – A persistência da informalidade constitui um elemento de desvirtuamento das boas práticas econômicas, o que ocorre especialmente nos setores de atividade marcados por ausência ou reduzidas barreiras à entrada, que premiam negócios que fogem à regulação em detrimentos daqueles que buscam a formalização. Ou seja, configura-se um ambiente de competitividade espúria que, embora possa servir aos objetivos de curto prazo do empresário individual, constitui um elemento desfavorável à dinâmica do sistema econômico como um todo. Adicionalmente, como a remuneração dos trabalhadores tende a ser reduzida e o acesso ao crédito é restrito, há uma perda da capacidade de consumo geral na sociedade. Além disso, por estarem excluídos do “pacto social”, a persistência da informalidade reforça a fratura social e o sentimento de injustiça que marca as sociedades.'   
    },
    {
        id:2,
        title: 'Quais são as visões sobre o trabalho informal?',
        description: 'Existem diversos tipos de visões sobre o trabalho informal, sendo que elas não são excludentes e podem estar interligadas, assim como também existem diversas estratégias para solucioná-las:Por mais que algumas dessas visões tenham claramente um poder explicativo maior que outras, nenhuma pode por si só explicar e abordar as diferentes situações existentes no país. Elas são melhor entendidas como um conjunto que revela diferentes facetas da informalidade e que oferece possibilidades de caminhos para lidar com esse desafio.'
    },
    {
        id:3,
        title: 'Quantas pessoas são afetadas?',
        description: 'De acordo com a pesquisa realizada pela Fundação Arymax, B3 Social, e Instituto Veredas, com base em diversos dados, o número total de pessoas no retrato da informalidade chega a um contingente total de 32,5 milhões de pessoas, o que equivale a quase metade (48,9%) da população ocupada no Brasil. Ao analisar a participação dos diferentes grupos, é especialmente significativo o número de informais de subsistência, representando 60% do total, sendo a maioria trabalhadores por conta própria.'
    },
    {
        id:4,
        title: 'Conclusão',
        description: 'Por mais que a informalidade seja um fenômeno complexo, muitos dos seus determinantes têm uma origem comum, com elementos compartilhados nas suas consequências, que se estendem para todo o funcionamento da sociedade. Colocar a informalidade em evidência permite visibilizar um conjunto significativo de atividades econômicas e ocupações nas quais as pessoas envolvidas estão privadas, em diferentes níveis, do acesso à proteção social, o que gera situações de vulnerabilidade e insegurança. Para grande parte dessas pessoas, a informalidade não é simplesmente resultante da vontade individual, mas um produto das escolhas possíveis diante das oportunidades limitadas e das necessidades de sobrevivência. Assim, a informalidade é melhor entendida como um problema social, que precisa ser pensado coletivamente e ser objeto de políticas públicas.'
    },
    {
        id:5,
        title: 'Referências',
        description: 'Todos os dados foram tirados do estudo feito pela Fundação Arymax, B3 Social, e Instituto Veredas, publicadas neste site.O estudo completo pode ser visto aqui.'
    },
    
];

function getArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article => {
        return article.id === Number(articleId);
    });
}

module.exports =  {getArticles,getArticleById};