function mostrarCarritoDesktop() {
    var carritoContainer = document.getElementById("carrito-container-desktop");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "{% url 'carrito' %}", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            carritoContainer.innerHTML = xhr.responseText;
            // Mostrar el contenedor del carrito
            carritoContainer.style.display = "block";
        }
    };
    xhr.send();
}

function mostrarCarritoMobile() {
    var carritoContainer = document.getElementById("carrito-container-mobile");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "{% url 'carrito' %}", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            carritoContainer.innerHTML = xhr.responseText;
            // Mostrar el contenedor del carrito
            carritoContainer.style.display = "block";
        }
    };
    xhr.send();
}
        