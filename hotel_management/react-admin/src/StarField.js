import React from 'react';

const StarField = ({ record, source }) => {
    if (!record || !record[source]) return null; // Retorna vazio se não houver dados
    const value = record[source];
    const clampedValue = Math.max(1, Math.min(value, 6)); // Limita de 1 a 6
    const stars = Array.from({ length: clampedValue }, (_, i) => (
        <span key={i}>⭐</span>
    ));
    return <div>{stars}</div>;
};

export default StarField;
