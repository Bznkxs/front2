// read file from server
function read_file(file_name, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file_name, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    }
    xhr.send(null);
}


// when the page is loaded, read the file and display it
window.onload = function() {
    read_file('some_text', function(text) {
           document.getElementById('file').innerHTML = text;
    });
}