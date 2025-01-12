import React from 'react';

// Mapeamento entre nomes de países e seus códigos ISO 3166-1 alpha-2
const countryCodeMap = {
    Brazil: 'br',
    'United States': 'us',
    Portugal: 'pt',
    Spain: 'es',
    France: 'fr',
    Germany: 'de',
    Italy: 'it',
    Canada: 'ca',
    Mexico: 'mx',
    // Adicione mais países aqui conforme necessário
};

const FlagField = ({ source, record = {} }) => {
    // Garante que o campo source tenha um valor
    if (!record[source]) return null;

    // Obtém o código do país do mapeamento
    const countryName = record[source];
    const countryCode = countryCodeMap[countryName];

    // Caso o código não seja encontrado, exibe apenas o nome do país
    if (!countryCode) return <span>{countryName}</span>;

    // URL da bandeira usando o código do país
    const flagUrl = `https://flagcdn.com/w40/${countryCode}.png`;

    // Renderiza a imagem da bandeira
    return (
        <img
            src={flagUrl}
            alt={`${countryName} flag`}
            style={{ width: '24px', height: '16px' }}
        />
    );
};

export default FlagField;
