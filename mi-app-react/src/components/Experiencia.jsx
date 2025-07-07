import React from 'react';

const experiencias = [
  { cargo: "Desarrollador Front-End", empresa: "TechSoft", año: "2022", descripcion: "Desarrollé interfaces web modernas con React." },
  { cargo: "Practicante TI", empresa: "SENA", año: "2021", descripcion: "Apoyé en mantenimiento de sistemas internos." },
  { cargo: "Freelancer Web", empresa: "Independiente", año: "2023", descripcion: "Diseño y desarrollo de landing pages." },
  { cargo: "Soporte Técnico", empresa: "PC Soluciones", año: "2020", descripcion: "Atención al usuario y configuración de equipos." },
  { cargo: "Desarrollador Jr.", empresa: "Codex", año: "2024", descripcion: "Colaboración en proyectos con JavaScript y Node.js." },
  { cargo: "Becario Web", empresa: "Digital School", año: "2023", descripcion: "Creación de ejercicios con HTML y CSS." },
  { cargo: "Tutor Virtual", empresa: "Educavirtual", año: "2022", descripcion: "Capacitación en herramientas ofimáticas." },
  { cargo: "Tester QA", empresa: "SoftQA", año: "2023", descripcion: "Revisión y reporte de errores funcionales." },
  { cargo: "Líder de Proyecto", empresa: "Univ. Virtual", año: "2024", descripcion: "Dirección de equipo en proyectos de formación." },
  { cargo: "Desarrollador Backend", empresa: "CloudApp", año: "2025", descripcion: "API REST con Express y MongoDB." },
];

const Experiencia = () => {
  return (
    <section>
      <h2>Experiencia Laboral y Proyectos</h2>
      {experiencias.map((exp, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <h3>{exp.cargo} - {exp.empresa}</h3>
          <p><strong>Año:</strong> {exp.año}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
};

export default Experiencia;

