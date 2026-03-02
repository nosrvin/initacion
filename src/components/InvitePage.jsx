function Invitacion() {
  return (
    <div
      style={{
        backgroundImage: "url('https://copilot.microsoft.com/th/id/BCO.96813f0f-d7af-46cb-bdcb-ba3da1c4c53c.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Quicksand', sans-serif"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          borderRadius: "12px",
          padding: "20px",
          textAlign: "center",
          maxWidth: "400px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ color: "#d36ba0" }}>✨ Invitación ✨</h2>
        <p>¡Estás cordialmente invitado a nuestra celebración!</p>
        <p>📅 19 de septiembre - 19h</p>
        <p>📍 Buffet das Flores</p>
        <button
          style={{
            backgroundColor: "#f8c8dc",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#333"
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default Invitacion;