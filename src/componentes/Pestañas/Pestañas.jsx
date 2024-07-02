import React, { useState } from "react";

const Pestañas = ({ pestañas }) => {
  const [pestañaActiva, setPestañaActiva] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-headers">
        {pestañas.map((pestaña, index) => (
          <button
            key={index}
            className={`tab-header ${index === pestañaActiva ? 'active' : ''}`}
            onClick={() => setPestañaActiva(index)}
          >
            {pestaña.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {pestañas[pestañaActiva].content}
      </div>
    </div>
  );
};

export default Pestañas;
