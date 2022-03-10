import React from 'react';

import * as s from './style';

export const Profile = () => {
    return (
        <s.Profile>
            <s.ProfileBtn>
                <svg width="4" height="16" >
                    <path
                        d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z"
                        fill="#5F6368">
                    </path>
                </svg>
            </s.ProfileBtn>
            <s.ProfilePicture
                src="https://lh3.googleusercontent.com/ogw/ADea4I6njfgAA9kIUTM8Ci4Q7WBEDBL-B7mAcQYIb6w_Vw=s32-c-mo"/>
        </s.Profile>
    );
}