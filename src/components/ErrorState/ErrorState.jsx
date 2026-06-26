import "./ErrorState.css";

function ErrorState({
  title = "Terjadi Kesalahan",
  message = "Data gagal dimuat. Silakan coba lagi.",
  onRetry,
}) {
  return (
    <div className="error-container">
      <div className="error-glass">

        <div className="error-icon">
          !
        </div>

        <h3>{title}</h3>

        <p>{message}</p>

        {onRetry && (
          <button
            className="retry-button"
            onClick={onRetry}
          >
            Coba Lagi
          </button>
        )}

      </div>
    </div>
  );
}

export default ErrorState;