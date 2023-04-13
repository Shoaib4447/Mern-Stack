function liStyle(){
    var style = document.querySelectorAll('li');
    style.forEach(function (key) {
        key.addEventListener('click', function () {
            key.style.textDecoration = 'line-through';
        })
    });
    style.forEach(function (key) {
        key.addEventListener('mouseover', function () {
            key.style.backgroundColor = 'Blue';
            key.style.color = 'white';
        })
    });
    style.forEach(function (key) {
        key.addEventListener('mouseout', function () {
            key.style.backgroundColor = 'white';
            key.style.color = 'black';
        })
    });
}

    liStyle();
    var button = document.getElementById('btn');
    button.addEventListener('click', function(){
        var inpField = document.querySelector('#inpAdd').value;
        var node = document.createElement('li');
        var data = document.createTextNode(inpField);
        node.appendChild(data);
        document.getElementById('list').appendChild(node);
        liStyle();
}); 
