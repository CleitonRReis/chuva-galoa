
function verMais() {

    let verMais = document.getElementById('ver-mais');
    let mais = document.getElementById('mais');
    let paragrafo = document.getElementsByClassName('resumo')[1];

    if (mais.style.display === 'none') {
        mais.style.display = 'inline';
        verMais.style.display = 'none';
        paragrafo.style.height = '530px';
    } else {
        mais.style.display = 'none';
        verMais.style.display = 'inline';
        paragrafo.style.height = '140px';
    };
};

// verMais();

function seeMore() {

    let autor = document.getElementById('autor');
    let autor1 = document.getElementById('autor1');
    let coautor = document.getElementById('coautor');
    let coautor1 = document.getElementById('coautor1');

    let more = document.getElementById('more');
    let discussao = document.getElementById('discussao');
    let pergunta = document.getElementsByClassName('pergunta')[1];
    let ideias = document.getElementsByClassName('ideias')[0];

    let like = document.getElementById('like');
    let res = document.getElementById('res');

    if (more.style.display === 'none'){
        more.style.display = 'inline';
        discussao.style.display = 'none';
        pergunta.style.height = '750px';
        ideias.style.height = '1230px'
        like.innerHTML = '4 likes'
        res.innerHTML = '4 respostas'
        autor.style.display = 'block'
        autor1.style.display = 'block'
        coautor.style.display = 'block'
        coautor1.style.display = 'block'
    } else {
        more.style.display = 'none';
        discussao.style.display = 'inline';
        pergunta.style.height = '145px';
        ideias.style.height = '620px'
        like.innerHTML = '1 like'
        res.innerHTML = '1 resposta'
        autor.style.display = 'none'
        autor1.style.display = 'none'
        coautor.style.display = 'none'
        coautor1.style.display = 'none'
    }
}