import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(storedUser);
  const [avatar, setAvatar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("userAvatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("userAvatar", reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUser(storedUser);
    setIsEditing(false);
  };

  return (
    <div className="page profile-page">
      <div className="card profile-card">
        <h1 className="profile-title">Your Profile</h1>
        <div className="avatar-container">
          <img
            src={avatar || "/default-avatar.png"}
            alt="Avatar"
            className="profile-avatar"
          />

          {isEditing && (
            <label className="upload-btn">
              Change Avatar
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarUpload}
              />
            </label>
          )}
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={user?.name || ""}
                onChange={handleChange}
                className="profile-input"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                onChange={handleChange}
                className="profile-input"
                placeholder="Email"
              />
            </>
          ) : (
            <>
              <p className="profile-text">Name: {user?.name}</p>
              <p className="profile-text">Email: {user?.email}</p>
            </>
          )}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button className="button" onClick={handleSave}>
                Save
              </button>
              <button className="auth-button" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <button
                className="auth-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;