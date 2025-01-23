import React from "react";
import { Box, Typography } from "@mui/material";


const Message = ({ text, avatar, isCurrentUser }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isCurrentUser ? "row-reverse" : "row",
                alignItems: "center",
                marginBottom: "12px",
            }}
        >
            {/* User Avatar */}

            <Box
                component="img"
                src={avatar}
                alt="User Avatar"
                sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginLeft: isCurrentUser ? "8px" : "0",
                    marginRight: isCurrentUser ? "0" : "8px",
                }}
            />

            {/* Message Text */}

            <Box
                sx={{
                    maxWidth: "60%",
                    padding: "10px",
                    borderRadius: "16px",
                    backgroundColor: isCurrentUser ? "#6A1B9A" : "#333",
                    color: isCurrentUser ? "white" : "white",
                    wordWrap: "break-word",
                }}
            >
                <Typography variant="body1">{text}</Typography>
            </Box>
        </Box>
    );
};

export default Message;
