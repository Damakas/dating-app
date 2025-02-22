import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { ReactComponent as SendIcon } from '../../assets/images/icons/send_message.svg';

const InputBox = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        onSendMessage(inputValue);
        setInputValue('');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: { xs: '430px', sm: 'none' },
                width: '100%',
                backgroundColor: '#42204E',
                position: 'relative',
                border: 'none',
                borderRadius: '50px',

            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Написать сообщение..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                sx={{
                    padding: '0 60px 0 30px',
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "& .MuiOutlinedInput-root": {
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                    },
                    "& .MuiInputBase-input::placeholder": {
                        color: "#8B5D9A",
                        opacity: 1,
                    },
                }}
            />

            <IconButton sx={{ position: "absolute", right: '20px', }}
                onClick={handleSend}>
                <SendIcon />
            </IconButton>
        </Box>
    )
};

export default InputBox;