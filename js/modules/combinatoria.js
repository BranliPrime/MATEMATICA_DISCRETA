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

// MÓDULO 8: Combinación con repetición CR(n, r)
export function calcularCombinacionConRepeticion(nRaw, rRaw) {
    if (!isNonNegativeInteger(nRaw) || !isNonNegativeInteger(rRaw)) {
        throw new Error('Tanto n como r deben ser números enteros no negativos (≥ 0).');
    }

    const n = Number(nRaw);
    const r = Number(rRaw);

    if (n === 0 && r > 0) {
        throw new Error('Error matemático: Si n = 0, no se pueden seleccionar r > 0 elementos.');
    }
    if (n + r - 1 > 170) {
        throw new Error('Por legibilidad y rendimiento web, la suma (n + r - 1) debe ser ≤ 170.');
    }

    if (n === 0 && r === 0) {
        return {
            resultado: '1',
            formula: 'CR(n, r) = (n + r - 1)! / [r! · (n - 1)!]',
            pasos: [
                'Datos ingresados: n = 0, r = 0',
                '1. Por convención combinatoria, CR(0, 0) = 1',
                '2. Resultado final: CR(0, 0) = 1'
            ]
        };
    }

    const numVal = n + r - 1;
    const denVal = n - 1;

    const numFact = factorialBigInt(numVal);
    const rFact = factorialBigInt(r);
    const denFact = factorialBigInt(denVal);
    const denominador = rFact * denFact;
    const combRep = numFact / denominador;

    return {
        resultado: combRep.toString(),
        formula: 'CR(n, r) = (n + r - 1)! / [r! · (n - 1)!]',
        pasos: [
            `Datos ingresados: n = ${n}, r = ${r} (Se permite repetición, r puede ser mayor que n)`,
            `1. Sustituir en la fórmula: CR(${n}, ${r}) = (${n} + ${r} - 1)! / [${r}! · (${n} - 1)!] = ${numVal}! / [${r}! · ${denVal}!]`,
            `2. Calcular factoriales: ${numVal}! = ${numFact}, ${r}! = ${rFact}, ${denVal}! = ${denFact}`,
            `3. Dividir: CR(${n}, ${r}) = ${numFact} / (${rFact} × ${denFact}) = ${numFact} / ${denominador}`,
            `4. Resultado final: CR(${n}, ${r}) = ${combRep.toString()}`
        ]
    };
}

// MÓDULO 9: Variación con repetición VR(n, r)
export function calcularVariacionConRepeticion(nRaw, rRaw) {
    if (!isNonNegativeInteger(nRaw) || !isNonNegativeInteger(rRaw)) {
        throw new Error('Tanto n como r deben ser números enteros no negativos (≥ 0).');
    }

    const n = Number(nRaw);
    const r = Number(rRaw);

    if (n > 1000 || r > 500) {
        throw new Error('Por legibilidad y rendimiento web, ingrese n ≤ 1000 y r ≤ 500.');
    }

    const varRep = BigInt(n) ** BigInt(r);

    return {
        resultado: varRep.toString(),
        formula: 'VR(n, r) = nʳ',
        pasos: [
            `Datos ingresados: n = ${n}, r = ${r} (Importa el orden y se permite repetición)`,
            `1. Sustituir en la fórmula: VR(${n}, ${r}) = ${n}^${r}`,
            `2. Calcular potencia: multiplicar ${n} por sí mismo ${r} ${r === 1 ? 'vez' : 'veces'}`,
            `3. Resultado final: VR(${n}, ${r}) = ${varRep.toString()}`
        ]
    };
}