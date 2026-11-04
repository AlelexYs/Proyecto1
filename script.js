// Cursos por defecto basados en tu reporte y los 4 adicionales en rojo
const inicialCursos = [
    { obs: "Docente Estricto", curso: "Perspectiva de la...", grupos: "Grupo: Cesar, Guillermo, Sivin", docente: "ROMEL LUIS...", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente NO Estricto", curso: "Telecomunicaciones...", grupos: "Grupo: Andre, Kevin, Pablo", docente: "AUGUSTO HE...", estado: "Entregado", fecha: "", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente Practica", curso: "Practica Teleco 2", grupos: "Grupo: Andre, Kevin, Pablo", docente: "ALBERTH RO...", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente Practica", curso: "Smart Cities (E)", grupos: "Grupo: Lucero, Pedro, Alexis", docente: "NANCY IVON...", estado: "Con Tarea", fecha: "", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente MUY Estricto", curso: "Campos Electrom...", grupos: "Grupo: SN", docente: "EBERT GABRI...", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente Chill", curso: "Instrumentacion 1", grupos: "Grupo: Cesar, Sivincha, Alanni", docente: "HUGO CESAR...", estado: "Tarea en curso", fecha: "", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente Chill", curso: "Lab Instrumentac...", grupos: "Grupo: Guillermo, Dayanara, F", docente: "HUGO CESAR...", estado: "Tarea en curso", fecha: "", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente NO Estricto", curso: "Sistemas de Telef...", grupos: "Grupo: Pedro, Sivincha, Alvarc", docente: "AUGUSTO HE...", estado: "Entregado", fecha: "2026-09-11", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente Practica", curso: "Lab Sistemas de ...", grupos: "Grupo: Andre, Adrian", docente: "ALBERTH RO...", estado: "pa estudiar", fecha: "2026-09-06", silabo: "", cuaderno: "", queHace: "" },
    { obs: "Docente NO Estricto", curso: "Economia y Politi...", grupos: "Grupo: Dayanara, Kevin, Rodri", docente: "ALEX GABINO...", estado: "Con Tarea", fecha: "2026-09-08", silabo: "", cuaderno: "https://docs.google.com/document/d/...", queHace: "" },
    
    // Cursos adicionales identificados en el horario (En rojo)
    { obs: "Curso Extra", curso: "Investigación Científica", grupos: "Individual", docente: "Por definir", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "", esRed: true },
    { obs: "Curso Extra", curso: "LLMs (6 a 9pm)", grupos: "Individual", docente: "Por definir", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "", esRed: true },
    { obs: "Curso Extra", curso: "CCNA 1 (8 a 11am)", grupos: "Individual", docente: "Por definir", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "", esRed: true },
    { obs: "Curso Extra", curso: "CCNA 2 (12 a 3pm)", grupos: "Individual", docente: "Por definir", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "", esRed: true },
    { obs: "Curso Extra", curso: "CCNA 3 (7 a 10pm)", grupos: "Individual", docente: "Por definir", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "", esRed: true }
];

// Horario sincronizado exactamente con la captura proporcionada
const horarioData = [
    { hora: "07:50 / 08:40", lun: "", mar: "TELECO 2", mie: "SMART CITIES (E) (Aula 201)", jue: "", vie: "", sab: "CCNA 1 (8 a 11am)", dom: "CCNA 1 (8 a 11am)" },
    { hora: "08:50 / 09:40", lun: "INSTRUM 1 (Aula 201)", mar: "TELECO 2", mie: "", jue: "", vie: "", sab: "CCNA 1 (8 a 11am)", dom: "CCNA 1 (8 a 11am)" },
    { hora: "09:40 / 10:30", lun: "INSTRUM 1 (Aula 201)", mar: "LAB SIS TELEF", mie: "", jue: "", vie: "", sab: "CCNA 1 (8 a 11am)", dom: "CCNA 1 (8 a 11am)" },
    { hora: "10:40 / 11:30", lun: "LAB INSTRUM 1", mar: "LAB SIS TELEF", mie: "INVEST CIENTIF (Aula 201)", jue: "", vie: "", sab: "", dom: "" },
    { hora: "11:30 / 12:20", lun: "LAB INSTRUM 1", mar: "INVEST CIENTIF (Aula 201)", mie: "INVEST CIENTIF (Aula 201)", jue: "SMART CITIES (E) (Aula 201)", vie: "CAMPOS ELEC (Aula 201)", sab: "", dom: "" },
    { hora: "12:20 / 13:10", lun: "", mar: "", mie: "", jue: "", vie: "", sab: "CCNA 2 (12 a 3pm)", dom: "CCNA 2 (12 a 3pm)" },
    { hora: "14:00 / 14:50", lun: "", mar: "", mie: "TELECO 2 (Aula 103)", jue: "", vie: "", sab: "CCNA 2 (12 a 3pm)", dom: "CCNA 2 (12 a 3pm)" },
    { hora: "14:50 / 15:40", lun: "", mar: "", mie: "", jue: "ECO Y POLÍ (Aula 202)", vie: "SIS TELEF (Aula 103)", sab: "CCNA 2 (12 a 3pm)", dom: "CCNA 2 (12 a 3pm)" },
    { hora: "15:50 / 16:40", lun: "ECO Y POLÍ (Aula 202)", mar: "", mie: "", jue: "", vie: "", sab: "", dom: "" },
    { hora: "16:40 / 17:30", lun: "ECO Y POLÍ (Aula 202)", mar: "", mie: "", jue: "", vie: "", sab: "", dom: "" },
    { hora: "17:40 / 18:30", lun: "LLMs (6 a 9pm)", mar: "", mie: "LLMs (6 a 9pm)", jue: "CAMPOS ELEC (Aula 201)", vie: "LLMs (6 a 9pm)", sab: "", dom: "" },
    { hora: "18:30 / 19:20", lun: "LLMs (6 a 9pm)", mar: "CCNA 3 (7 a 10pm)", mie: "LLMs (6 a 9pm)", jue: "", vie: "LLMs (6 a 9pm)", sab: "", dom: "" },
    { hora: "19:20 / 20:10", lun: "LLMs (6 a 9pm)", mar: "CCNA 3 (7 a 10pm)", mie: "LLMs (6 a 9pm)", jue: "CCNA 3 (7 a 10pm)", vie: "LLMs (6 a 9pm)", sab: "", dom: "" }
];

let cursos = JSON.parse(localStorage.getItem("cursosData")) || inicialCursos;

// Renderizar Tabla de Cursos
function renderCursos() {
    const tbody = document.getElementById("cursos-body");
    tbody.innerHTML = "";

    cursos.forEach((c, i) => {
        const tr = document.createElement("tr");
        if(c.esRed) tr.classList.add("badge-red");

        tr.innerHTML = `
            <td><input type="text" value="${c.obs}" onchange="updateCurso(${i}, 'obs', this.value)"></td>
            <td><input type="text" value="${c.curso}" onchange="updateCurso(${i}, 'curso', this.value)"></td>
            <td><input type="text" value="${c.grupos}" onchange="updateCurso(${i}, 'grupos', this.value)"></td>
            <td><input type="text" value="${c.docente}" onchange="updateCurso(${i}, 'docente', this.value)"></td>
            <td>
                <select onchange="updateCurso(${i}, 'estado', this.value)">
                    <option value="pa estudiar" ${c.estado === 'pa estudiar' ? 'selected' : ''}>pa estudiar</option>
                    <option value="Con Tarea" ${c.estado === 'Con Tarea' ? 'selected' : ''}>Con Tarea</option>
                    <option value="Tarea en curso" ${c.estado === 'Tarea en curso' ? 'selected' : ''}>Tarea en curso</option>
                    <option value="Entregado" ${c.estado === 'Entregado' ? 'selected' : ''}>Entregado</option>
                    <option value="Examen" ${c.estado === 'Examen' ? 'selected' : ''}>Examen</option>
                </select>
            </td>
            <td><input type="date" value="${c.fecha}" onchange="updateCurso(${i}, 'fecha', this.value)"></td>
            <td><input type="text" placeholder="URL Sílabo" value="${c.silabo}" onchange="updateCurso(${i}, 'silabo', this.value)"></td>
            <td><input type="text" placeholder="Link Docs/Cuaderno" value="${c.cuaderno}" onchange="updateCurso(${i}, 'cuaderno', this.value)"></td>
            <td><input type="text" value="${c.queHace}" onchange="updateCurso(${i}, 'queHace', this.value)"></td>
            <td><button onclick="eliminarCurso(${i})" style="color:var(--accent-red); background:none; border:none; cursor:pointer;">X</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function updateCurso(index, field, value) {
    cursos[index][field] = value;
    saveData();
}

function agregarCurso() {
    cursos.push({ obs: "", curso: "Nuevo Curso", grupos: "", docente: "", estado: "pa estudiar", fecha: "", silabo: "", cuaderno: "", queHace: "" });
    saveData();
    renderCursos();
}

function eliminarCurso(index) {
    cursos.splice(index, 1);
    saveData();
    renderCursos();
}

function saveData() {
    localStorage.setItem("cursosData", JSON.stringify(cursos));
}

// Renderizar Horario
function renderHorario() {
    const tbody = document.getElementById("horario-body");
    tbody.innerHTML = "";

    horarioData.forEach(h => {
        const tr = document.createElement("tr");
        const dias = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'];
        
        let celdas = `<td><strong>${h.hora}</strong></td>`;
        dias.forEach(d => {
            const val = h[d];
            const isRedClass = val.includes("CCNA") || val.includes("INVEST") || val.includes("LLMs");
            celdas += `<td>${val ? `<div class="class-cell ${isRedClass ? 'class-red' : ''}">${val}</div>` : ''}</td>`;
        });
        
        tr.innerHTML = celdas;
        tbody.appendChild(tr);
    });
}

// Control de Pestañas
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));

    if (tabId === 'seguimiento') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('seguimiento-section').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('horario-section').classList.add('active');
    }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderCursos();
    renderHorario();
});