const teste = document.getElementById('teste');
const veiculos = document.getElementById('veiculos');
const API_URL = `https://realtimevehicletracking-w5rz.onrender.com/`;
const teste_res = document.getElementById('teste_res');
const marcaInput = document.getElementById('marca');
const veiculos_res = document.getElementById('veiculos_res');
const modelInput = document.getElementById('modelo');
const vehicleYearInput = document.getElementById('ano');

teste.addEventListener('click', () => {
    teste_res.textContent = 'Enviando requisição para o servidor... LINK DO SERVIDOR: ' + API_URL;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            teste_res.innerHTML = 'Dados recebidos do servidor: <br>' + JSON.stringify(data);
        })
        .catch(error => {
            teste_res.textContent = ' Erro ao buscar dados: ' + error.message;
        });
});

veiculos.addEventListener('click', () => {
    veiculos_res.textContent = 'Enviando requisição para o servidor... LINK DO SERVIDOR: ' + API_URL + 'veiculos';

    if (!marcaInput.value) {
        veiculos_res.textContent = ' Por favor, insira a marca do veículo.';
        return;
    }else{
        fetch(API_URL + 'veiculos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            plate: marcaInput.value,
            model: modelInput.value,
            vehicle_year: vehicleYearInput.value
        })
        })
        .then(response => response.json())
        .then(data => {
            veiculos_res.textContent = 'Dados recebidos do servidor!' + JSON.stringify(data);
        })
        .catch(error => {
            veiculos_res.textContent = ' Erro ao buscar dados: ' + error.message;
        });
    }
});
