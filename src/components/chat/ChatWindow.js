import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, List, ListItem, Container, IconButton, useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { setShowChat, setSelectedUser, } from "./chatSlice";

import Message from "./Message";
import InputBox from "./InputBox";

const ChatWindow = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const users = useSelector((state) => state.usersProfiles.users);
    const currentUserId = useSelector((state) => state.auth.userId)


    const showChat = useSelector((state) => state.chat.showChat)
    const selectedUser = useSelector((state) => state.chat.selectedUser);
    const messagesEndRef = useRef(null);

    const dispatch = useDispatch();

    const handleUserSelect = (userId) => {
        dispatch(setSelectedUser(userId));
        if (isMobile) {
            dispatch(setShowChat(true));
        }
    };

    const handleBackToUsers = () => {
        dispatch(setShowChat(false));
    };


    const [messages, setMessages] = useState([]);
    const handleSendMessage = (text) => {
        if (text.trim() && selectedUser) {
            const user = users.find((u) => u.id === selectedUser);
            setMessages((prevMessages) => ({
                ...prevMessages,
                [selectedUser]: [
                    ...(prevMessages[selectedUser] || []),
                    {
                        text,
                        id: Date.now(),
                        avatar: user.avatar,
                        userId: currentUserId
                    },
                ],
            }));
        }
    };


    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages[selectedUser]]);

    const selectedUserData = users.find(user => user.id === selectedUser);

    return (
        <Container
            maxWidth='lg'
            sx={{
                padding: { xs: '10px', },
                marginTop: { xs: '10px', sm: '20px' }
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '10px', md: '20px' },
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                height: { xs: 'calc(100vh - 100px)', md: '70vh' },
            }}>
                {/* Users List - Hidden on mobile when chat is shown */}

                <Box
                    sx={{
                        width: { xs: '100%', md: '250px' },
                        display: { xs: (showChat ? 'none' : 'block'), md: 'block' },
                        backgroundColor: "transparent",
                        color: "white",
                        height: '100%',
                        overflowY: "auto",
                        direction: "rtl",

                        "&::-webkit-scrollbar": {
                            width: "0px",
                        },
                        "&:hover::-webkit-scrollbar": {
                            width: "1px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#6A1B9A",
                            borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#8E44AD",
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#2A1332",
                            borderRadius: "4px",
                        },
                    }}
                >
                    <List>
                        {users.map((user) => (
                            <ListItem
                                key={user.id}
                                sx={{
                                    cursor: "pointer",
                                    backgroundColor: selectedUser === user.id ? "#6A1B9A" : "inherit",
                                    borderRadius: "4px",
                                    marginBottom: "8px",
                                    padding: { xs: '12px', md: '8px' },
                                    direction: "ltr",

                                }}
                                onClick={() => handleUserSelect(user.id)}
                            >
                                <Box
                                    component='img'
                                    src={user.photo}
                                    alt={user.name}
                                    sx={{
                                        width: { xs: '50px', md: '40px' },
                                        height: { xs: '50px', md: '40px' },
                                        objectFit: 'cover',
                                        borderRadius: "50%",
                                        marginRight: "8px",
                                    }}
                                />
                                <Typography sx={{ fontSize: { xs: '16px', md: '14px' } }}>
                                    {user.name}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Chat Area - Hidden on mobile when users list is shown */}
                <Box
                    sx={{
                        display: { xs: (showChat ? 'flex' : 'none'), md: 'flex' },
                        flexDirection: 'column',
                        flex: 1,
                        gap: '20px',
                    }}
                >
                    {/* Chat Header with Back Button on Mobile */}
                    {isMobile && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px',
                            backgroundColor: 'transparent',
                            borderRadius: '10px',
                        }}>
                            <IconButton
                                onClick={handleBackToUsers}
                                sx={{ color: 'white' }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            {selectedUserData && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Box
                                        component="img"
                                        src={selectedUserData.photo}
                                        alt={selectedUserData.name}
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Typography color="white">
                                        {selectedUserData.name}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    )}

                    {/* Messages Area */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            padding: { xs: '12px', md: '16px' },
                            overflowY: "auto",
                            maxHeight: '60vh',
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                padding: { xs: '12px', md: '16px' },
                                overflowY: "auto",
                                maxHeight: '60vh',
                                "&::-webkit-scrollbar": {
                                    width: "0px",
                                },
                                "&:hover::-webkit-scrollbar": {
                                    width: "6px",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#6A1B9A",
                                    borderRadius: "4px",
                                },
                                "&::-webkit-scrollbar-thumb:hover": {
                                    backgroundColor: "#8E44AD",
                                },
                                "&::-webkit-scrollbar-track": {
                                    backgroundColor: "#2A1332",
                                    borderRadius: "4px",
                                },
                            }}
                        >

                            {(messages[selectedUser] || []).map((msg) => (
                                <Message
                                    key={msg.id}
                                    text={msg.text}
                                    avatar={msg.photo}
                                    isCurrentUser={msg.userId === currentUserId}
                                />
                            ))}
                            <div ref={messagesEndRef} />
                        </Box>
                    </Box>

                    {/* Input Box */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <InputBox onSendMessage={handleSendMessage} />
                    </Box>
                </Box>
            </Box>
        </Container >
    );
};

export default ChatWindow;