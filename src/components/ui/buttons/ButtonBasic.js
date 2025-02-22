import React from "react";
import { Button } from "@mui/material";



const ButtonBasic = ({ type, name, img, onClick, padding, isDisabled }) => {

    return (
        <Button
            type={type}
            onClick={onClick}
            variant="contained"
            color="primary"
            disabled={isDisabled}
            sx={{
                padding: { xs: '12px', sm: padding },
                marginTop: '5px',
                borderRadius: '40px',
                fontWeight: '400',
                width: '100%',
                maxWidth: '380px',
                minWidth: '200px',
                gap: '10px',
                background: 'linear-gradient(45deg, #EE0979, #FF6A00)',
                textTransform: 'none',
                '&:hover': {
                    background: 'linear-gradient(45deg, #FF6A00, #EE0979)',
                },
                fontSize: { xs: '14px', sm: '16px' },
                '&.Mui-disabled': {
                    background: '#3B2143',
                    color: '#694B73',
                },
            }}
        >
            {name}
            {img}
        </Button>
    )
};

export default ButtonBasic;