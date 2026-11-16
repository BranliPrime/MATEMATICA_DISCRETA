import { isNonNegativeInteger } from '../utils/validators.js';

function factorialBigInt(num) {
    let res = 1n;
    for (let i = 2n; i <= BigInt(num); i++) {
        res *= i;
    }
    return res;
}

// MÓDULO 5: Número Factorial
export function calcularFactorial(nRaw) {
    if (!isNonNegativeInteger(nRaw)) {
        throw new Error('El número (n) debe ser un entero no negativo (n ≥ 0).');
    }

    const n = Number(nRaw);
    if (n > 170) {
        throw new Error('Por legibilidad y rendimiento web, ingrese un valor n ≤ 170.');
    }

    const resultado = factorialBigInt(n);
    let desarrollo = '';

    if (n === 0 || n === 1) {
        desarrollo = `Por definición matemática: ${n}! = 1`;
    } else if (n <= 10) {
        const factores = [];
        for (let i = n; i >= 1; i--) factores.push(i);
        desarrollo = `${n}! = ${factores.join(' × ')} = ${resultado.toString()}`;
    } else {
        desarrollo = `${n}! = ${n} × ${n - 1} × ${n - 2} × ... × 2 × 1`;
    }

    return {
        resultado: resultado.toString(),
        formula: 'n! = n · (n - 1) · (n - 2) · ... · 1  (con 0! = 1)',
        pasos: [
            `Dato ingresado: n = ${n}`,
            `1. Aplicar definición de factorial para n = ${n}`,
            `2. Desarrollo: ${desarrollo}`,
            `3. Resultado final: ${n}! = ${resultado.toString()}`
        ]
    };
}

// MÓDULO 6: Combinación sin repetición C(n, r)
export function calcularCombinacion(nRaw, rRaw) {
    if (!isNonNegativeInteger(nRaw) || !isNonNegativeInteger(rRaw)) {
        throw new Error('Tanto n como r deben ser números enteros no negativos (≥ 0).');
    }

    const n = Number(nRaw);
    const r = Number(rRaw);

    if (r > n) {
        throw new Error('Error matemático: El subconjunto (r) no puede ser mayor que el total de elementos (n). Debe cumplirse 0 ≤ r ≤ n.');
    }
    if (n > 170) {
        throw new Error('Ingrese un valor de n ≤ 170.');
    }

    const nFact = factorialBigInt(n);
    const rFact = factorialBigInt(r);
    const nMenosRFact = factorialBigInt(n - r);
    const denominador = rFact * nMenosRFact;
    const comb = nFact / denominador;

    return {
        resultado: comb.toString(),
        formula: 'C(n, r) = n! / [r! · (n - r)!]',
        pasos: [
            `Datos ingresados: n = ${n}, r = ${r} (Validado: 0 ≤ ${r} ≤ ${n})`,
            `1. Sustituir en la fórmula: C(${n}, ${r}) = ${n}! / [${r}! · (${n} - ${r})!]`,
            `2. Calcular factoriales: ${n}! = ${nFact}, ${r}! = ${rFact}, (${n - r})! = ${nMenosRFact}`,
            `3. Dividir: C(${n}, ${r}) = ${nFact} / (${rFact} × ${nMenosRFact}) = ${nFact} / ${denominador}`,
            `4. Resultado final: C(${n}, ${r}) = ${comb.toString()}`
        ]
    };
}

// MÓDULO 7: Variación sin repetición V(n, r)
export function calcularVariacion(nRaw, rRaw) {
    if (!isNonNegativeInteger(nRaw) || !isNonNegativeInteger(rRaw)) {
        throw new Error('Tanto n como r deben ser números enteros no negativos (≥ 0).');
    }

    const n = Number(nRaw);
    const r = Number(rRaw);

    if (r > n) {
        throw new Error('Error matemático: El número de elementos seleccionados (r) no puede ser mayor que el total (n). Debe cumplirse 0 ≤ r ≤ n.');
    }
    if (n > 170) {
        throw new Error('Ingrese un valor de n ≤ 170.');
    }

    const nFact = factorialBigInt(n);
    const nMenosRFact = factorialBigInt(n - r);
    const variacion = nFact / nMenosRFact;

    return {
        resultado: variacion.toString(),
        formula: 'V(n, r) = n! / (n - r)!',
        pasos: [
            `Datos ingresados: n = ${n}, r = ${r} (Validado: 0 ≤ ${r} ≤ ${n})`,
            `1. Sustituir en la fórmula: V(${n}, ${r}) = ${n}! / (${n} - ${r})!`,
            `2. Calcular factoriales: ${n}! = ${nFact} y (${n - r})! = ${nMenosRFact}`,
            `3. Dividir: V(${n}, ${r}) = ${nFact} / ${nMenosRFact}`,
            `4. Resultado final: V(${n}, ${r}) = ${variacion.toString()}`
        ]
    };
}
