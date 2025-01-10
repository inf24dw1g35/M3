import React from 'react';

const countryCodeMap = {
    Brazil: 'br',
    United States: 'us',
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
    if (!record[source]) return null;

    // Obtem o código do país a partir do nome completo
    const countryCode = countryCodeMap[record[source]];
    if (!countryCode) return <span>{record[source]}</span>; // Exibe o nome se não houver código mapeado

    const flagUrl = `https://flagcdn.com/w40/${countryCode}.png`;

    return (
        <img
            src={flagUrl}
            alt={`${record[source]} flag`}
            style={{ width: '24px', height: '16px' }}
        />
    );
};

export default FlagField;
