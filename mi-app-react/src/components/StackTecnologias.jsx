import React from 'react';

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "Vite", "Tailwind", "Figma"];

const getColor = (tecnologia) => {
  switch (tecnologia) {
    case "JavaScript": return "#f7df1e";
    case "React": return "#61dafb";
    case "Node.js": return "#68a063";
    case "MongoDB": return "#4db33d";
    case "Git": return "#f34f29";
    case "Vite": return "#646cff";
    case "Tailwind": return "#38bdf8";
    case "HTML": return "#e34c26";
    case "CSS": return "#264de4";
    case "Figma": return "#a259ff";
    default: return "#ccc";
  }
};

const StackTecnologias = () => {
  return (
    <section>
      <h2>Stack de Tecnologías</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            style={{
              backgroundColor: getColor(tech),
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '10px',
              fontWeight: 'bold',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default StackTecnologias;
