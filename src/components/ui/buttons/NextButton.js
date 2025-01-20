import React from "react";
import { Button } from "@mui/material";
import { ReactComponent as ArrowNavRight } from '../../../assets/images/icons/arrow-right.svg';

const NextButton = ({ onClick }) => {
    return (
        <Button
            sx={{
                position: 'relative',
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                padding: 0,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    padding: '2px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #EE0979, #FF6A00)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                },
                '&:hover': {
                    background: 'linear-gradient(45deg, #FF6A00, #EE0979)',
                    '&::before': {
                        background: 'linear-gradient(45deg, #FF6A00, #EE0979)',
                    }
                },
                '&:active': {
                    transform: 'scale(0.95)'
                }
            }}
            onClick={onClick}
        >
            <ArrowNavRight />
        </Button>
    );
};

export default NextButton;