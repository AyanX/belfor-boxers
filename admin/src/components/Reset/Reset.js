import { useState, useCallback, useMemo } from "react";
import { Key, Mail, Lock, Shield, Check } from "lucide-react";
import { updateCredentials as apiUpdateCredentials } from "../api/api";

import "./Reset.scss";

function Reset({data}) {
 
  const [credentials, setCredentials] = useState({
    adminEmail: data || "admin@uncleboxing.com",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = useCallback((field, value) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  }, []);

  const isPasswordValid = useMemo(() => {
    if (!credentials.newPassword && !credentials.confirmPassword) return true;
    return (
      credentials.newPassword === credentials.confirmPassword &&
      credentials.newPassword.length >= 6
    );
  }, [credentials.newPassword, credentials.confirmPassword]);

  const hasChanges = useMemo(() => {
    return credentials.newPassword !== "" || credentials.confirmPassword !== "";
  }, [credentials]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!isPasswordValid) {
      setMessage({
        type: "error",
        text: "Passwords must match and be at least 8 characters.",
      });
      return;
    }

    setLoading(true);

    try {
      await apiUpdateCredentials(credentials);
      setMessage({
        type: "success",
        text: "Credentials updated successfully!",
      });
      setCredentials({
        adminEmail: credentials.adminEmail,
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };


  

  return (
    <div className="reset reset-section">
      <div className="head">
        <Key />
        <h2>Reset Email/Password</h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <div className="field">
            <label>Admin Email Address</label>
            <Mail aria-hidden />
            <input
              type="email"
              value={credentials.adminEmail}
              onChange={(e) => handleChange("adminEmail", e.target.value)}
              className="input"
            />
            <p>Current login email address</p>
          </div>

          <div className="field">
            <label>New Password</label>
            <Lock aria-hidden />
            <input
              type="password"
              value={credentials.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
              placeholder="••••••••"
              className="input"
            />
            <p>Leave blank to keep current password</p>
          </div>

          <div className="field">
            <label>Confirm New Password</label>
            <Check aria-hidden />
            <input
              type="password"
              value={credentials.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="••••••••"
              className="input"
            />
          </div>
        </div>

        {message.text && (
          <div role="status" data-type={message.type}>
            {message.text}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={loading || !hasChanges || !isPasswordValid}
            className="btn"
          >
            <Shield size={16} />
            {loading ? "Updating..." : "Update Credentials"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reset;
