
import { useState } from "react";
import axios from "axios";
import "../component/PrivacySettings.css";

export default function PrivacySettings() {
    const [profileVisibility, setProfileVisibility] = useState("public");
    const [videoVisibility, setVideoVisibility] = useState("public");
    const [commentVisibility, setCommentVisibility] = useState("public")
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const handleSaveChanges = async () => {
        const userId = "user-id-here"; // The logged-in user ID

        const updatedSettings = {
            userId,
            profileVisibility,
            videoVisibility,
            commentVisibility,
            twoFactorEnabled,
        };

        try {
            const response = await axios.put(
                "http://localhost:5000/api/privacy-settings/update-privacy-settings",
                updatedSettings
            );

            console.log(response.data.message);
        } catch (error) {
            console.error("Error saving settings:", error);
        }
    };

    return (
        <div className="container">
            <h1 className="heading">Privacy & Security Settings</h1>

            <div className="card">
                <h2 className="subheading">Profile Visibility</h2>
                <select
                    className="dropdown"
                    value={profileVisibility}
                    onChange={(e) => setProfileVisibility(e.target.value)}
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>

            <div className="card">
                <h2 className="subheading">Video Visibility</h2>
                <select
                    className="dropdown"
                    value={videoVisibility}
                    onChange={(e) => setVideoVisibility(e.target.value)}
                >
                    <option value="public">Public</option>
                    <option value="friends">Friends Only</option>
                    <option value="private">Private</option>
                </select>
            </div>
            <div className="card">
                <h2 className="subheading">Comment Visibility</h2>
                <select
                    className="dropdown"
                    value={commentVisibility}
                    onChange={(e) => setCommentVisibility(e.target.value)}
                >
                    <option value="public">Public</option>
                    <option value="friends">Friends Only</option>
                    <option value="private">Private</option>
                </select>
            </div>

            <div className="card">
                <h2 className="subheading">Two-Factor Authentication</h2>
                <div className="switch-container">
                    <label className="switch-label">
                        <input
                            type="checkbox"
                            checked={twoFactorEnabled}
                            onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                        />
                        <span className="switch-slider"></span>
                    </label>
                    <span>{twoFactorEnabled ? "Enabled" : "Disabled"}</span>
                </div>
            </div>

            <button className="save-button" onClick={handleSaveChanges}>
                Save Changes
            </button>
        </div>
    );
}
