function print(id, result) {
    const element = document.getElementById(id);
    if (Array.isArray(result)) {
        element.innerHTML = "<ul><li>" + result.join("</li><li>") + "</li></ul>";
    } else {
        element.innerHTML = result;
    }
}