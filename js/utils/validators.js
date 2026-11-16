/**
 * Utilidades de validación matemática para el Sistema de Matemática Discreta I
 */

export function isValidNumber(value) {
    return value !== '' && value !== null && !isNaN(Number(value)) && isFinite(Number(value));
}

export function isPositiveInteger(value) {
    if (!isValidNumber(value)) return false;
    const num = Number(value);
    return Number.isInteger(num) && num >= 1;
}

export function isNonNegativeInteger(value) {
    if (!isValidNumber(value)) return false;
    const num = Number(value);
    return Number.isInteger(num) && num >= 0;
}

export function formatNumber(num) {
    if (typeof num === 'bigint') return num.toString();
    if (!isFinite(num)) return 'Infinito (Desbordamiento numérico)';
    return Number.isInteger(num) ? num.toString() : Number(num.toFixed(6)).toString();
}
