function SignInPopup({ open, close }) {
  return (
    <div
      className={`popup-overlay ${open ? "active" : ""}`}
      onClick={close}
    >
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="popup-close" onClick={close}>
          &times;
        </span>

        <h2 className="popup-title">Sign In</h2>

        <form
          className="popup-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Sign-in successful!");
            close();
          }}
        >
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" required />
          </div>

          <button className="popup-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPopup;
