appIsLoading(true);

fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=20&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af')
    .then(resp => resp.json())
    .then(json => renderHeroes(json.data.results))
    .finally(() => appIsLoading(false));
    
function renderHeroes(heroes) {
    const div = document.getElementById('marvel-row');

    heroes.forEach(function(item) { 
        div.innerHTML += `
            <div class="item">
                <a href="${item.urls[0].url}" target="_blank">
                    <img src="${item.thumbnail.path}.${item.thumbnail.extension}">
                </a>
                <h3 class="title">${item.name}</h3>
            </div>
        `;
    });
}