function filter_list(){

    for(let i = 0; i < filtros.length; i++){
        var cont = 0;
        for(let a = 0; a < imagens.length; a++){
            var image_v1 = parseInt(imagens[a][3]);
            var image_v2 = parseInt(imagens[a][4]);
            var image_v3 = parseInt(imagens[a][5]);
            var filtro_v = parseInt(filtros[i][1]);

            if(image_v1 == filtro_v || image_v2 == filtro_v || image_v3 == filtro_v){
                cont++;
            }
        }

        filters1.innerHTML += `
            <a id="${filtros[i][0]}" onclick="test('${filtros[i][0]}')" class="list d-flex flex-row justify-content-between" href="filter1.html">
                <h6>${filtros[i][0]}</h6>
                ${cont}
            </a>
        `;

    }

}

function test(x){
    localStorage.setItem("filter", x);
}

function filter_page(){

    var filter1 = localStorage.getItem("filter");
    cont.innerHTML = `
        <h6>${filter1}</h6>
        <div id="filters1"></div>
    `
    var filter_code = 0;
    for(let i = 0; i < filtros.length; i++){
        if(filtros[i][0] == filter1){
            filter_code = filtros[i][1];
        }
    }

    var msg = "Sem resultados";
    for(let i = 0; i < imagens.length; i++){
        var image_v1 = parseInt(imagens[i][3]);
        var image_v2 = parseInt(imagens[i][4]);
        var image_v3 = parseInt(imagens[i][5]);

        if(image_v1 == filter_code || image_v2 == filter_code || image_v3 == filter_code){
            if(msg == "Sem resultados"){ msg = 1; }else{ msg++ }
            filters1.innerHTML += `
                <!--<img class="img_vh" src="view/images/Unhas/${imagens[i][2]}" height="250px"> -->

                <div class="card m-2 img_vh">
                    <img src="view/images/Unhas/${imagens[i][2]}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${imagens[i][0]}</h5>
                    <p class="card-text">${imagens[i][1]}</p>
                    </div>
                </div>
            `
        }
    }
    filters1.innerHTML += `
        <h5>Resultados: ${msg}.</h5>
    `
}