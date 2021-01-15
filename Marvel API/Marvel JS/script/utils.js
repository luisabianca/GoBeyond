function setElementContent(id, content) {
    const el = document.getElementById(id);

    el.innerHTML = content;
}

function appIsLoading(is) {
    document.getElementById('loading-view').style.display = is ? 'flex' : 'none';
}

