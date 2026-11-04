// Base de datos de docentes con su respectivo correo
const docentesDB = [
    { nombre: "ROMEL LUIS JIMENEZ MONTES DE OCA", correo: "rjimenezm@unsa.edu.pe" },
    { nombre: "AUGUSTO HESIQUIO ARCE MEDINA", correo: "augusto.he@unsa.edu.pe" },
    { nombre: "ALBERTH RONAL TAMO CALLA", correo: "atamo@unsa.edu.pe" },
    { nombre: "NANCY IVON ORIHUELA ORDOÑEZ", correo: "norihuelao@unsa.edu.pe" },
    { nombre: "EBERT GABRIEL SAN ROMAN CASTILLO", correo: "esanroman@unsa.edu.pe" },
    { nombre: "HUGO CESAR RUCANO ALVAREZ", correo: "hrucano@unsa.edu.pe" },
    { nombre: "ALEX GABINO MAMANI ORTIZ", correo: "amamaniorti@unsa.edu.pe" },
    { nombre: "Por definir", correo: "sin.asignar@unsa.edu.pe" }
];

// Lista oficial de cursos disponibles para selección
const listaCursosOficiales = [
    "Perspectiva de la investigación cientifica",
    "Telecomunicaciones 1",
    "Practica Teleco 2",
    "Smart Cities (E)",
    "Campos Electromagneticos",
    "Instrumentacion 1",
    "Lab Instrumentacion 1",
    "Sistemas de Telefonia",
    "Lab Sistemas de Telefonia",
    "Economia y Politica",
    "LLMs",
    "CCNA 1",
    "CCNA 2",
    "CCNA 3"
];

const mesesLiteral = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const inicialCursos = [
    { obs: "Docente Estricto", curso: "Perspectiva de la investigación cientifica", grupos: "Grupo: Cesar, Guillermo, Sivincha, Alvaro, Alexis, Gonzalo", docente: "ROMEL LUIS JIMENEZ MONTES DE OCA", correo: "rjimenezm@unsa.edu.pe", estado: "pa estudiar", mes: "Septiembre", dia: "15", silabo: "", cuaderno: "" },
    { obs: "Docente NO Estricto", curso: "Telecomunicaciones 1", grupos: "Grupo: Andre, Kevin, Pablo", docente: "AUGUSTO HESIQUIO ARCE MEDINA", correo: "aarce1@unsa.edu.pe", estado: "Entregado", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente Practica", curso: "Practica Teleco 2", grupos: "Grupo: Andre, Kevin, Pablo", docente: "ALBERTH RONAL TAMO CALLA", correo: "atamo@unsa.edu.pe", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente Practica", curso: "Smart Cities (E)", grupos: "Grupo: Lucero, Pedro, Alexis", docente: "NANCY IVON ORIHUELA ORDOÑEZ", correo: "norihuelao@unsa.edu.pe", estado: "Con Tarea", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente MUY Estricto", curso: "Campos Electromagneticos", grupos: "Grupo: SN", docente: "EBERT GABRIEL SAN ROMAN CASTILLO", correo: "esanroman@unsa.edu.pe", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente Chill", curso: "Instrumentacion 1", grupos: "Grupo: Cesar, Sivincha, Alannis, Karla", docente: "HUGO CESAR RUCANO ALVAREZ", correo: "hrucano@unsa.edu.pe", estado: "Tarea en curso", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente Chill", curso: "Lab Instrumentacion 1", grupos: "Grupo: Guillermo, Dayanara, Boris", docente: "HUGO CESAR RUCANO ALVAREZ", correo: "hrucano@unsa.edu.pe", estado: "Tarea en curso", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente NO Estricto", curso: "Sistemas de Telefonia", grupos: "Grupo: Pedro, Sivincha, Alvaro", docente: "AUGUSTO HESIQUIO ARCE MEDINA", correo: "aarce1@unsa.edu.pe", estado: "Entregado", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente Practica", curso: "Lab Sistemas de Telefonia", grupos: "Grupo: Andre, Adrian", docente: "ALBERTH RONAL TAMO CALLA", correo: "atamo@unsa.edu.pe", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "" },
    { obs: "Docente NO Estricto", curso: "Economia y Politica", grupos: "Grupo: Dayanara, Kevin, Rodrigo, Alexis. Julian", docente: "ALEX GABINO MAMANI ORTIZ", correo: "amamaniorti@unsa.edu.pe", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "" },

    // Cursos adicionales en rojo
    { obs: "Curso PIT", curso: "LLMs", grupos: "Individual", docente: "Por definir", correo: "", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "", esRed: true },
    { obs: "Curso PIT", curso: "CCNA 1", grupos: "Individual", docente: "Por definir", correo: "", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "", esRed: true },
    { obs: "Curso PIT", curso: "CCNA 2", grupos: "Individual", docente: "Por definir", correo: "", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "", esRed: true },
    { obs: "Curso PIT", curso: "CCNA 3", grupos: "Individual", docente: "Por definir", correo: "", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "", esRed: true }
];

const horarioData = [
    { hora: "07:50 / 08:40", lun: "", mar: "TELECOMUNICACIONES 2", mie: "SMART CITIES (E) (Aula 201)", jue: "", vie: "", sab: "CCNA 1", dom: "CCNA 1" },
    { hora: "08:50 / 09:40", lun: "INSTRUMENTACION 1 (Aula 201)", mar: "TELECOMUNICACIONES 2", mie: "", jue: "", vie: "", sab: "CCNA 1", dom: "CCNA 1" },
    { hora: "09:40 / 10:30", lun: "INSTRUMENTACION 1 (Aula 201)", mar: "LAB SISTEMAS TELEFONIA", mie: "", jue: "", vie: "", sab: "CCNA 1", dom: "CCNA 1" },
    { hora: "10:40 / 11:30", lun: "LAB INSTRUMENTACION 1", mar: "LAB SISTEMAS TELEFONIA", mie: "PERSPECTIVA DE LA INVESTIGACION CIENTIFICA (Aula 201)", jue: "", vie: "", sab: "", dom: "" },
    { hora: "11:30 / 12:20", lun: "LAB INSTRUMENTACION 1", mar: "PERSPECTIVA DE LA INVESTIGACION CIENTIFICA (Aula 201)", mie: "PERSPECTIVA DE LA INVESTIGACION CIENTIFICA (Aula 201)", jue: "SMART CITIES (E) (Aula 201)", vie: "CAMPOS ELECTROMAGNÉTICOS (Aula 201)", sab: "", dom: "" },
    { hora: "12:20 / 13:10", lun: "", mar: "", mie: "", jue: "", vie: "", sab: "CCNA 2", dom: "CCNA 2" },
    { hora: "14:00 / 14:50", lun: "", mar: "", mie: "TELECOMUNICACIONES 2 (Aula 103)", jue: "", vie: "", sab: "CCNA 2", dom: "CCNA 2" },
    { hora: "14:50 / 15:40", lun: "", mar: "", mie: "", jue: "ECONOMIA Y POLÍTICA (Aula 202)", vie: "SIS TELEF (Aula 103)", sab: "CCNA 2", dom: "CCNA 2" },
    { hora: "15:50 / 16:40", lun: "ECONOMIA Y POLÍTICA (Aula 202)", mar: "", mie: "", jue: "", vie: "", sab: "", dom: "" },
    { hora: "16:40 / 17:30", lun: "ECONOMIA Y POLÍTICA (Aula 202)", mar: "", mie: "", jue: "", vie: "", sab: "", dom: "" }, 
    { hora: "17:40 / 18:30", lun: "LLMs", mar: "", mie: "LLMs", jue: "CAMPOS ELECTROMAGNÉTICOS (Aula 201)", vie: "LLMs", sab: "", dom: "" },
    { hora: "18:30 / 19:20", lun: "LLMs", mar: "CCNA 3", mie: "LLMs", jue: "", vie: "LLMs", sab: "", dom: "" },
    { hora: "19:20 / 20:10", lun: "LLMs", mar: "CCNA 3", mie: "LLMs", jue: "CCNA 3", vie: "LLMs", sab: "", dom: "" }
];

let cursos = JSON.parse(localStorage.getItem("cursosData")) || inicialCursos;

function renderCursos() {
    const tbody = document.getElementById("cursos-body");
    tbody.innerHTML = "";

    cursos.forEach((c, i) => {
        const tr = document.createElement("tr");
        if(c.esRed) tr.classList.add("badge-red");

        // Opciones desplegables para Cursos
        let opcionesCursos = listaCursosOficiales.map(cursoName => 
            `<option value="${cursoName}" ${c.curso === cursoName ? 'selected' : ''}>${cursoName}</option>`
        ).join('');

        // Opciones para el selector de docente
        let opcionesDocentes = docentesDB.map(d => `<option value="${d.nombre}" ${c.docente === d.nombre ? 'selected' : ''}>${d.nombre}</option>`).join('');
        
        // Opciones para meses
        let opcionesMeses = `<option value="">Mes</option>` + mesesLiteral.map(m => `<option value="${m}" ${c.mes === m ? 'selected' : ''}>${m}</option>`).join('');

        tr.innerHTML = `
            <td><input type="text" value="${c.obs}" onchange="updateCurso(${i}, 'obs', this.value)"></td>
            <td>
                <select onchange="updateCurso(${i}, 'curso', this.value)">
                    ${opcionesCursos}
                </select>
            </td>
            <td><input type="text" value="${c.grupos}" onchange="updateCurso(${i}, 'grupos', this.value)"></td>
            <td>
                <select onchange="cambiarDocente(${i}, this.value)">
                    ${opcionesDocentes}
                </select>
                <input type="text" style="font-size: 0.75rem; margin-top: 3px; color: var(--text-secondary);" value="${c.correo || ''}" placeholder="Correo institucional" onchange="updateCurso(${i}, 'correo', this.value)">
            </td>
            <td class="col-estado">
                <select onchange="updateCurso(${i}, 'estado', this.value)">
                    <option value="pa estudiar" ${c.estado === 'pa estudiar' ? 'selected' : ''}>pa estudiar</option>
                    <option value="Con Tarea" ${c.estado === 'Con Tarea' ? 'selected' : ''}>Con Tarea</option>
                    <option value="Tarea en curso" ${c.estado === 'Tarea en curso' ? 'selected' : ''}>Tarea en curso</option>
                    <option value="Entregado" ${c.estado === 'Entregado' ? 'selected' : ''}>Entregado</option>
                    <option value="Examen" ${c.estado === 'Examen' ? 'selected' : ''}>Examen</option>
                </select>
            </td>
            <td>
                <div class="date-container">
                    <select onchange="updateCurso(${i}, 'mes', this.value)">${opcionesMeses}</select>
                    <input type="text" placeholder="Día" style="width: 50px; text-align: center;" value="${c.dia || ''}" onchange="updateCurso(${i}, 'dia', this.value)">
                </div>
            </td>
            <td><input type="text" placeholder="Link o ruta de archivo PDF" value="${c.silabo || ''}" onchange="updateCurso(${i}, 'silabo', this.value)"></td>
            <td><input type="text" placeholder="Link Cuaderno (Docs)" value="${c.cuaderno || ''}" onchange="updateCurso(${i}, 'cuaderno', this.value)"></td>
            <td><button onclick="eliminarCurso(${i})" style="color:var(--accent-red); background:none; border:none; cursor:pointer; font-weight:bold;">X</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function cambiarDocente(index, nombreDocente) {
    cursos[index].docente = nombreDocente;
    const found = docentesDB.find(d => d.nombre === nombreDocente);
    if(found) {
        cursos[index].correo = found.correo;
    }
    saveData();
    renderCursos();
}

function updateCurso(index, field, value) {
    cursos[index][field] = value;
    saveData();
}

function agregarCurso() {
    cursos.push({ obs: "", curso: "Perspectiva de la investigación cientifica", grupos: "", docente: "Por definir", correo: "", estado: "pa estudiar", mes: "", dia: "", silabo: "", cuaderno: "" });
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

function renderHorario() {
    const tbody = document.getElementById("horario-body");
    tbody.innerHTML = "";

    horarioData.forEach(h => {
        const tr = document.createElement("tr");
        const dias = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'];
        
        let celdas = `<td><strong>${h.hora}</strong></td>`;
        dias.forEach(d => {
            const val = h[d];
            const isRedClass = val.includes("CCNA") || val.includes("LLMs");
            celdas += `<td>${val ? `<div class="class-cell ${isRedClass ? 'class-red' : ''}">${val}</div>` : ''}</td>`;
        });
        
        tr.innerHTML = celdas;
        tbody.appendChild(tr);
    });
}

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

document.addEventListener("DOMContentLoaded", () => {
    renderCursos();
    renderHorario();
});