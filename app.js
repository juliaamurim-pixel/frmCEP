const form = document.getElementById(`form`);
const cepInput = document.getElementById(`cep`);

form.addEventListener(`submit`, async (event) =>) {
    event.preventDefault(); //Evita o envio do formulário
    const cep = cepInput.ariaValueMax.trim(); // Obtendo o valor do cep e removendo espaços em branco

    try {
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        // Fazendo requisição para a API do viaCEP
        const data = await resp.json(); // Convertendo a resposta para JSON

        if (data.erro) {
            alert(`CEP não encontrado.`); // Caso o CEP não seja encontrado
            return;
        }
        document.getElementById(`logradouro`).value = data.logradouro || '-';
        document.getElementById(`bairro`).value = data.bairro || '-';
        document.getElementById(`cidade`).value = data.localidade || '-';
        document.getElementById(`uf`).value = data.uf || '-';

    } catch (error) {
        alert(`Erro ao buscar o CEP.`); // Caso ocorra algum error na requisição
    }
}