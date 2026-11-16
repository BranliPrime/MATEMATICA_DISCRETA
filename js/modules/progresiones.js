import { isValidNumber, isPositiveInteger, formatNumber } from '../utils/validators.js';

// MÓDULO 1: Término n-ésimo de una Progresión Aritmética
export function calcularTerminoPA(a1Raw, dRaw, nRaw) {
    if (!isValidNumber(a1Raw) || !isValidNumber(dRaw)) {
        throw new Error('El primer término (a₁) y la diferencia común (d) deben ser números reales válidos.');
    }
    if (!isPositiveInteger(nRaw)) {
        throw new Error('La posición (n) debe ser un número entero positivo mayor o igual a 1.');
    }

    const a1 = Number(a1Raw);
    const d = Number(dRaw);
    const n = Number(nRaw);

    const nMenos1 = n - 1;
    const producto = nMenos1 * d;
    const an = a1 + producto;

    return {
        resultado: formatNumber(an),
        formula: 'aₙ = a₁ + (n - 1) · d',
        pasos: [
            `Datos ingresados: a₁ = ${a1}, d = ${d}, n = ${n}`,
            `1. Sustituir en la fórmula: a_${n} = ${a1} + (${n} - 1) · (${d})`,
            `2. Resolver el paréntesis: a_${n} = ${a1} + (${nMenos1}) · (${d})`,
            `3. Multiplicar diferencia: a_${n} = ${a1} + (${formatNumber(producto)})`,
            `4. Resultado final: a_${n} = ${formatNumber(an)}`
        ]
    };
}

// MÓDULO 2: Término n-ésimo de una Progresión Geométrica
export function calcularTerminoPG(a1Raw, rRaw, nRaw) {
    if (!isValidNumber(a1Raw) || !isValidNumber(rRaw)) {
        throw new Error('El primer término (a₁) y la razón (r) deben ser números reales válidos.');
    }
    if (!isPositiveInteger(nRaw)) {
        throw new Error('La posición (n) debe ser un número entero positivo mayor o igual a 1.');
    }

    const a1 = Number(a1Raw);
    const r = Number(rRaw);
    const n = Number(nRaw);

    const exponente = n - 1;
    const potencia = Math.pow(r, exponente);
    const an = a1 * potencia;

    if (!isFinite(an)) {
        throw new Error('El resultado excede el límite numérico soportado por JavaScript.');
    }

    return {
        resultado: formatNumber(an),
        formula: 'aₙ = a₁ · r^(n - 1)',
        pasos: [
            `Datos ingresados: a₁ = ${a1}, r = ${r}, n = ${n}`,
            `1. Sustituir en la fórmula: a_${n} = ${a1} · (${r})^(${n} - 1)`,
            `2. Calcular exponente: a_${n} = ${a1} · (${r})^${exponente}`,
            `3. Evaluar potencia: a_${n} = ${a1} · (${formatNumber(potencia)})`,
            `4. Resultado final: a_${n} = ${formatNumber(an)}`
        ]
    };
}

// MÓDULO 3: Suma de n términos de una Progresión Aritmética
export function calcularSumaPA(a1Raw, dRaw, nRaw) {
    if (!isValidNumber(a1Raw) || !isValidNumber(dRaw)) {
        throw new Error('El primer término (a₁) y la diferencia común (d) deben ser números reales válidos.');
    }
    if (!isPositiveInteger(nRaw)) {
        throw new Error('La cantidad de términos (n) debe ser un entero positivo mayor o igual a 1.');
    }

    const a1 = Number(a1Raw);
    const d = Number(dRaw);
    const n = Number(nRaw);

    const dosA1 = 2 * a1;
    const nMenos1PorD = (n - 1) * d;
    const corchete = dosA1 + nMenos1PorD;
    const sn = (n / 2) * corchete;

    return {
        resultado: formatNumber(sn),
        formula: 'Sₙ = (n / 2) · [2a₁ + (n - 1) · d]',
        pasos: [
            `Datos ingresados: a₁ = ${a1}, d = ${d}, n = ${n}`,
            `1. Sustituir valores: S_${n} = (${n} / 2) · [2(${a1}) + (${n} - 1) · (${d})]`,
            `2. Operar interior: S_${n} = ${n / 2} · [${formatNumber(dosA1)} + (${n - 1}) · (${d})]`,
            `3. Sumar corchete: S_${n} = ${n / 2} · [${formatNumber(dosA1)} + (${formatNumber(nMenos1PorD)})] = ${n / 2} · (${formatNumber(corchete)})`,
            `4. Resultado final: S_${n} = ${formatNumber(sn)}`
        ]
    };
}

// MÓDULO 4: Suma de n términos de una Progresión Geométrica (incluye caso especial r = 1)
export function calcularSumaPG(a1Raw, rRaw, nRaw) {
    if (!isValidNumber(a1Raw) || !isValidNumber(rRaw)) {
        throw new Error('El primer término (a₁) y la razón (r) deben ser números reales válidos.');
    }
    if (!isPositiveInteger(nRaw)) {
        throw new Error('La cantidad de términos (n) debe ser un entero positivo mayor o igual a 1.');
    }

    const a1 = Number(a1Raw);
    const r = Number(rRaw);
    const n = Number(nRaw);

    // Caso especial: r = 1 (progresión constante)
    if (r === 1) {
        const sn = n * a1;
        return {
            resultado: formatNumber(sn),
            formula: 'Caso especial (r = 1): Sₙ = n · a₁',
            pasos: [
                `Datos ingresados: a₁ = ${a1}, r = 1, n = ${n}`,
                `1. Detección de caso especial: Como r = 1, el denominador (r - 1) sería 0.`,
                `2. Aplicar fórmula de progresión constante: S_${n} = ${n} · (${a1})`,
                `3. Resultado final: S_${n} = ${formatNumber(sn)}`
            ]
        };
    }

    const rAlaN = Math.pow(r, n);
    const numerador = a1 * (rAlaN - 1);
    const denominador = r - 1;
    const sn = numerador / denominador;

    if (!isFinite(sn)) {
        throw new Error('El resultado excede el límite numérico soportado.');
    }

    return {
        resultado: formatNumber(sn),
        formula: 'Sₙ = a₁ · (rⁿ - 1) / (r - 1), para r ≠ 1',
        pasos: [
            `Datos ingresados: a₁ = ${a1}, r = ${r}, n = ${n}`,
            `1. Sustituir valores: S_${n} = ${a1} · ((${r})^${n} - 1) / (${r} - 1)`,
            `2. Evaluar potencia: S_${n} = ${a1} · (${formatNumber(rAlaN)} - 1) / (${formatNumber(denominador)})`,
            `3. Operar numerador: S_${n} = ${formatNumber(numerador)} / (${formatNumber(denominador)})`,
            `4. Resultado final: S_${n} = ${formatNumber(sn)}`
        ]
    };
}
