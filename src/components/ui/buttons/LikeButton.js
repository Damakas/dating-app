import React, { useState } from "react";
import { Button } from "@mui/material";
import { ReactComponent as LikeIcon } from '../../../assets/images/icons/like-icon.svg';

const LikeButton = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <Button sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: clicked ? 'linear-gradient(45deg, #EC008C, #FC6767)' : 'linear-gradient(45deg, #EE0979, #FF6A00)',
                '&:hover': {
                    transform: 'scale(1.095)'
                },
                '&:active': {
                    transform: 'scale(1)'
                }
            }}
                onClick={handleClick} >
                <LikeIcon />
            </Button>
        </>
    );
};

export default LikeButton;