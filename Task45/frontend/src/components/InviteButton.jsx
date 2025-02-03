import React from 'react';

const InviteButton = ({ friends }) => {
    const handleInvite = () => {
        if (friends.length > 0) {
            alert('Invitation sent to your friends!');
        } else {
            alert('No friends to invite.');
        }
    };

    return (
        <div className="invite-button">
            <button onClick={handleInvite}>Invite Friends</button>
        </div>
    );
};

export default InviteButton;
