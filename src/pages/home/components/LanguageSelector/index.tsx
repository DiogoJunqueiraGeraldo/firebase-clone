import React, {useState} from 'react';

import * as s from './style';

type LanguageSelectorProps = {
    default: string
}

export const LanguageSelector = (props: LanguageSelectorProps) => {
    const [language, setLanguage] = useState(props.default);

    return (
        <s.LaguageSelector>
            <s.LanguageSelectorIcon>language</s.LanguageSelectorIcon>
            <p>{language}</p>
            <s.LanguageSelectorIcon>arrow_drop_down</s.LanguageSelectorIcon>
        </s.LaguageSelector>
    )
}