document.getElementById("calcular").addEventListener("click", () => {

    const usd = parseFloat(document.getElementById("moneda").value);

    if (isNaN(usd) || usd <= 0) {
        document.getElementById("resultado").textContent = "Ingrese un valor válido.";
        return;
    }

    fetch("https://economia.awesomeapi.com.br/json/last/USD-PYG")
        .then(res => res.json())
        .then(data => {
            const tasa = parseFloat(data.USDPYG.bid);
            const resultado = Math.round(usd * tasa);

            document.getElementById("resultado").textContent =
                `USD ${usd} = PYG ${resultado.toLocaleString("es-ES")}`;
        })
        .catch(error => {
            document.getElementById("resultado").textContent =
                "Error al consultar el valor del dólar.";
        });

});