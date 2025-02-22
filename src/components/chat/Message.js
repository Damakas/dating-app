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
                    borderRadius: isCurrentUser ? "20px 0 20px 20px" : '0 20px 20px 20px',
                    backgroundImage: isCurrentUser
                        ? "linear-gradient(45deg, rgb(5, 117, 230), rgb(2, 27, 121))"
                        : "linear-gradient(45deg, rgb(236, 0, 140), rgb(252, 103, 103))",
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
