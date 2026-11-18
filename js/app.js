import { calcularTerminoPA, calcularTerminoPG, calcularSumaPA, calcularSumaPG } from './modules/progresiones.js';
import {
    calcularFactorial,
    calcularCombinacion,
    calcularVariacion,
    calcularCombinacionConRepeticion,
    calcularVariacionConRepeticion
} from './modules/combinatoria.js';

const MODULES_CONFIG = {
    mod1: {
        title: 'Módulo 1: Término n-ésimo de una Progresión Aritmética',
        formula: 'aₙ = a₁ + (n - 1) · d',
        description: 'Calcula el valor del término ubicado en la posición n dentro de una sucesión con diferencia constante d.',
        fields: [
            { id: 'a1', label: 'Primer término (a₁)', placeholder: 'Ej. 3', hint: 'Número real inicial' },
            { id: 'd', label: 'Diferencia común (d)', placeholder: 'Ej. 5', hint: 'Constante que se suma' },
            { id: 'n', label: 'Posición del término (n)', placeholder: 'Ej. 10', hint: 'Entero positivo (n ≥ 1)' }
        ],
        execute: (vals) => calcularTerminoPA(vals.a1, vals.d, vals.n)
    },
    mod2: {
        title: 'Módulo 2: Término n-ésimo de una Progresión Geométrica',
        formula: 'aₙ = a₁ · r^(n - 1)',
        description: 'Determina el término en la posición n multiplicando el primer término por la razón elevada a (n - 1).',
        fields: [
            { id: 'a1', label: 'Primer término (a₁)', placeholder: 'Ej. 2', hint: 'Número real inicial' },
            { id: 'r', label: 'Razón común (r)', placeholder: 'Ej. 3', hint: 'Factor multiplicativo' },
            { id: 'n', label: 'Posición del término (n)', placeholder: 'Ej. 5', hint: 'Entero positivo (n ≥ 1)' }
        ],
        execute: (vals) => calcularTerminoPG(vals.a1, vals.r, vals.n)
    },
    mod3: {
        title: 'Módulo 3: Suma de n términos de una Progresión Aritmética',
        formula: 'Sₙ = (n / 2) · [2a₁ + (n - 1) · d]',
        description: 'Calcula la serie aritmética finita correspondiente a la suma de los primeros n términos.',
        fields: [
            { id: 'a1', label: 'Primer término (a₁)', placeholder: 'Ej. 4', hint: 'Número real inicial' },
            { id: 'd', label: 'Diferencia común (d)', placeholder: 'Ej. 2', hint: 'Diferencia entre términos' },
            { id: 'n', label: 'Cantidad de términos (n)', placeholder: 'Ej. 8', hint: 'Entero positivo (n ≥ 1)' }
        ],
        execute: (vals) => calcularSumaPA(vals.a1, vals.d, vals.n)
    },
    mod4: {
        title: 'Módulo 4: Suma de n términos de una Progresión Geométrica',
        formula: 'Sₙ = a₁ · (rⁿ - 1) / (r - 1)  [Si r = 1 ⇒ Sₙ = n · a₁]',
        description: 'Calcula la suma de los primeros n términos de una progresión geométrica, evaluando casos especiales como r = 1.',
        fields: [
            { id: 'a1', label: 'Primer término (a₁)', placeholder: 'Ej. 5', hint: 'Número real inicial' },
            { id: 'r', label: 'Razón común (r)', placeholder: 'Ej. 2', hint: 'Acepta r = 1 y r ≠ 1' },
            { id: 'n', label: 'Cantidad de términos (n)', placeholder: 'Ej. 6', hint: 'Entero positivo (n ≥ 1)' }
        ],
        execute: (vals) => calcularSumaPG(vals.a1, vals.r, vals.n)
    },
    mod5: {
        title: 'Módulo 5: Número Factorial (n!)',
        formula: 'n! = n · (n - 1) · (n - 2) · ... · 1',
        description: 'Calcula el producto de todos los enteros positivos desde 1 hasta n, considerando 0! = 1.',
        fields: [
            { id: 'n', label: 'Número entero (n)', placeholder: 'Ej. 6', hint: 'Entero no negativo (0 ≤ n ≤ 170)' }
        ],
        execute: (vals) => calcularFactorial(vals.n)
    },
    mod6: {
        hasRepetitionToggle: true,
        variants: {
            sin: {
                title: 'Módulo 6: Combinación sin Repetición C(n, r)',
                formula: 'C(n, r) = n! / [r! · (n - r)!]',
                description: 'Calcula el número de subconjuntos de r elementos elegidos de un conjunto de n elementos sin importar el orden.',
                fields: [
                    { id: 'n', label: 'Total de elementos (n)', placeholder: 'Ej. 10', hint: 'Entero no negativo (n ≥ 0)' },
                    { id: 'r', label: 'Elementos seleccionados (r)', placeholder: 'Ej. 3', hint: 'Entero con 0 ≤ r ≤ n' }
                ],
                execute: (vals) => calcularCombinacion(vals.n, vals.r)
            },
            con: {
                title: 'Módulo 6: Combinación con Repetición CR(n, r)',
                formula: 'CR(n, r) = (n + r - 1)! / [r! · (n - 1)!]',
                description: 'Calcula el número de grupos de r elementos elegidos de un conjunto de n elementos permitiendo repetir y sin importar el orden.',
                fields: [
                    { id: 'n', label: 'Total de elementos (n)', placeholder: 'Ej. 5', hint: 'Entero positivo (n ≥ 1)' },
                    { id: 'r', label: 'Elementos seleccionados (r)', placeholder: 'Ej. 3', hint: 'Entero no negativo (r ≥ 0)' }
                ],
                execute: (vals) => calcularCombinacionConRepeticion(vals.n, vals.r)
            }
        }
    },
    mod7: {
        hasRepetitionToggle: true,
        variants: {
            sin: {
                title: 'Módulo 7: Variación sin Repetición V(n, r)',
                formula: 'V(n, r) = n! / (n - r)!',
                description: 'Calcula el número de arreglos ordenados de r elementos tomados de un conjunto de n elementos distintos.',
                fields: [
                    { id: 'n', label: 'Total de elementos (n)', placeholder: 'Ej. 8', hint: 'Entero no negativo (n ≥ 0)' },
                    { id: 'r', label: 'Elementos ordenados (r)', placeholder: 'Ej. 3', hint: 'Entero con 0 ≤ r ≤ n' }
                ],
                execute: (vals) => calcularVariacion(vals.n, vals.r)
            },
            con: {
                title: 'Módulo 7: Variación con Repetición VR(n, r)',
                formula: 'VR(n, r) = nʳ',
                description: 'Calcula el número de arreglos ordenados de r elementos tomados de n elementos disponibles, permitiendo repetir elementos.',
                fields: [
                    { id: 'n', label: 'Total de elementos (n)', placeholder: 'Ej. 4', hint: 'Entero no negativo (n ≥ 0)' },
                    { id: 'r', label: 'Elementos ordenados (r)', placeholder: 'Ej. 3', hint: 'Entero no negativo (r ≥ 0)' }
                ],
                execute: (vals) => calcularVariacionConRepeticion(vals.n, vals.r)
            }
        }
    }
};

const historyRecords = [];
const moduleContainer = document.getElementById('moduleContainer');
const moduleTitle = document.getElementById('moduleTitle');
const initialWelcomeHTML = moduleContainer.innerHTML;

// Renderiza dinámicamente el módulo seleccionado (y la variante si aplica)
window.selectModule = function(modKey, variantKey = 'sin') {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.module === modKey);
    });

    document.getElementById('sidebar').classList.remove('open');

    if (modKey === 'inicio') {
        moduleTitle.textContent = 'Panel Principal del Sistema';
        moduleContainer.innerHTML = initialWelcomeHTML;
        return;
    }

    const baseConfig = MODULES_CONFIG[modKey];
    const config = baseConfig.hasRepetitionToggle ? baseConfig.variants[variantKey] : baseConfig;

    moduleTitle.textContent = config.title;

    // Botón de cambio Sin Repetición / Con Repetición para Módulo 6 y 7
    const toggleHTML = baseConfig.hasRepetitionToggle ? `
        <div class="variant-switch" role="group" aria-label="Tipo de operación">
            <button type="button" class="variant-btn ${variantKey === 'sin' ? 'active' : ''}" data-variant="sin">
                Sin Repetición
            </button>
            <button type="button" class="variant-btn ${variantKey === 'con' ? 'active' : ''}" data-variant="con">
                Con Repetición
            </button>
        </div>
    ` : '';

    const fieldsHTML = config.fields.map(f => `
        <div class="form-group">
            <label for="input_${f.id}">${f.label}</label>
            <input type="number" step="any" id="input_${f.id}" placeholder="${f.placeholder}" required>
            <small>${f.hint}</small>
        </div>
    `).join('');

    moduleContainer.innerHTML = `
        <div class="module-card">
            <div class="module-card-header">
                <div>
                    <h3>${config.title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.92rem; margin-top: 0.35rem;">${config.description}</p>
                </div>
                ${toggleHTML}
            </div>
            <div class="formula-banner">
                <span>Fórmula Matemática Aplicada</span>
                <code>${config.formula}</code>
            </div>
            <form id="calcForm" novalidate>
                <div class="form-grid">${fieldsHTML}</div>
                <div class="btn-group">
                    <button type="submit" class="btn-primary">Calcular Operación</button>
                    <button type="button" class="btn-secondary" id="clearFormBtn">Limpiar Campos</button>
                </div>
            </form>
            <div id="feedbackArea"></div>
        </div>
    `;

    // Eventos del botón de cambio Sin / Con Repetición
    if (baseConfig.hasRepetitionToggle) {
        document.querySelectorAll('.variant-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.dataset.variant !== variantKey) {
                    selectModule(modKey, btn.dataset.variant);
                }
            });
        });
    }

    const form = document.getElementById('calcForm');
    const feedbackArea = document.getElementById('feedbackArea');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const values = {};
        config.fields.forEach(f => {
            values[f.id] = document.getElementById(`input_${f.id}`).value.trim();
        });

        try {
            const output = config.execute(values);
            const stepsHTML = output.pasos.map(p => `<li>${p}</li>`).join('');
            feedbackArea.innerHTML = `
                <div class="result-box">
                    <div class="result-header">Resultado Matemático Verificado</div>
                    <div class="result-value">${output.resultado}</div>
                    <div class="steps-box">
                        <h4>Desarrollo Paso a Paso (${output.formula})</h4>
                        <ul class="steps-list">${stepsHTML}</ul>
                    </div>
                </div>
            `;
            const etiquetaHistorial = baseConfig.hasRepetitionToggle
                ? `${config.title.split(':')[0]} (${variantKey === 'con' ? 'Con Rep.' : 'Sin Rep.'})`
                : config.title.split(':')[0];
            addHistory(etiquetaHistorial, values, output.resultado);
        } catch (err) {
            feedbackArea.innerHTML = `
                <div class="alert-error">
                    <strong>Validación de Datos:</strong> ${err.message}
                </div>
            `;
        }
    });

    document.getElementById('clearFormBtn').addEventListener('click', () => {
        form.reset();
        feedbackArea.innerHTML = '';
    });
};

function addHistory(modName, inputs, result) {
    const paramsStr = Object.entries(inputs).map(([k, v]) => `${k}=${v}`).join(', ');
    historyRecords.unshift({
        modulo: modName,
        params: paramsStr,
        resultado: result,
        hora: new Date().toLocaleTimeString()
    });
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('historyList');
    const count = document.getElementById('historyCount');
    count.textContent = historyRecords.length;

    if (historyRecords.length === 0) {
        list.innerHTML = '<p class="empty-msg">Aún no se han realizado operaciones.</p>';
        return;
    }

    list.innerHTML = historyRecords.map(item => `
        <div class="history-item">
            <strong>${item.modulo} <span style="float:right; font-weight:400; color:#64748b;">${item.hora}</span></strong>
            <div>Entrada: ${item.params}</div>
            <div>Resultado: <code>${item.resultado}</code></div>
        </div>
    `).join('');
}

// Eventos de navegación y controles globales
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => selectModule(btn.dataset.module));
});

document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    historyRecords.length = 0;
    renderHistory();
});

document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
});

document.getElementById('closeSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
});

document.getElementById('toggleHistoryBtn').addEventListener('click', () => {
    document.getElementById('historyPanel').classList.toggle('open');
});