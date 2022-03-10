import React from 'react';

import * as s from './style';
import { Logo } from "../../../../shared/components/Logo";
import {Profile} from "../Profile";
import {GoToConsole} from "../GoToConsole";
import {LanguageSelector} from "../LanguageSelector";

export const Menu = () => {
    return (
        <s.Menu>
            <Logo />
            <LanguageSelector default="Português..." />
            <GoToConsole />
            <Profile />
        </s.Menu>
    )
}