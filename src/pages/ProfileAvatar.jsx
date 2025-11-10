import React, { useContext } from 'react';
import { AuthContext } from '../routes/AuthProvider';

const ProfileAvatar = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
           Hello How are you
        </div>
    );
};

export default ProfileAvatar;