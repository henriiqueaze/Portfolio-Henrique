import React, { useEffect } from "react";

const KnowledgeModal = ({ selected, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [show]);

  return (
    <div
      id="knowledge-modal"
      className={`modal ${show ? "show" : "hide"}`}
      onClick={(e) => {
        if (e.target.id === "knowledge-modal") onClose();
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {selected && <div id="modal-icon">{selected.icon}</div>}
        <h3 id="modal-title">{selected ? selected.title : ""}</h3>
        <p id="modal-desc">{selected ? selected.desc : ""}</p>
      </div>
    </div>
  );
};

export default KnowledgeModal;
