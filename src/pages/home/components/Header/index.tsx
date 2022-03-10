import React from 'react';

import * as s from './style';
import { Menu } from "../Menu";

export const Header = () => {
    return (
        <s.Header>
            <Menu/>
        </s.Header>
    );
}