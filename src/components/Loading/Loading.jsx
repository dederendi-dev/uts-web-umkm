import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-glass">
        <div className="loading-spinner"></div>

        <h3>Memuat Konten</h3>

        <p>Mohon tunggu sebentar...</p>
      </div>
    </div>
  );
}

export default Loading;