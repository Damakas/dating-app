import React from "react";

import { ReactComponent as WavingHand } from '../../../assets/images/icons/wavingHand.svg';
import ButtonBasic from "./ButtonBasic";

const HelloButton = ({ onClick, padding }) => {

    return (
        <>
            <ButtonBasic
                name={'Попривествовать'}
                img={<WavingHand />}
                onClick={onClick}
                padding={padding}
            />
        </>
    );
};

export default HelloButton;