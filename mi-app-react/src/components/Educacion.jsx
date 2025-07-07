import React from 'react';

const formacion = [
  { institucion: "SENA", curso: "Tecnólogo en Análisis y Desarrollo de Software", año: "2025" },
  { institucion: "Platzi", curso: "Curso Profesional de React", año: "2024" },
  { institucion: "FreeCodeCamp", curso: "Responsive Web Design", año: "2023" },
  { institucion: "Coursera", curso: "Fundamentos de UX/UI", año: "2022" },
  { institucion: "Alura Latam", curso: "React + Hooks", año: "2023" },
  { institucion: "Google Actívate", curso: "Marketing Digital", año: "2021" },
];

const Educacion = () => {
  return (
    <section>
      <h2>Formación Académica</h2>
      <ul>
        {formacion.map((edu, index) => (
          <li key={index}>
            <strong>{edu.institucion}</strong> - {edu.curso} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Educacion;
