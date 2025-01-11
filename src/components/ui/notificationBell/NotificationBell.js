import React, { useState } from 'react';
import { IconButton, Badge, Popover, List, ListItem, ListItemText, Box } from '@mui/material';
import { ReactComponent as BellIcon } from '../../../assets/images/icons/bell.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from './notificationsSlice';

const NotificationBell = () => {


    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notifications.notifications);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationClick = (id) => {
        dispatch(removeNotification(id));
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const unreadNotifications = notifications.length;

    return (
        <Box sx={{ position: 'relative' }}>
            <IconButton
                onClick={handleClick}
                color="inherit"
                sx={{
                    backgroundColor: 'trasparent',
                    '&:hover': {
                        backgroundColor: '#6E447B',
                    },
                }}
            >
                <Badge badgeContent={unreadNotifications} sx={{
                    '& .MuiBadge-badge': {
                        background: 'linear-gradient(45deg, #FF6A00, #EE0979)',
                        color: 'white',
                    },
                }}>
                    <BellIcon />
                </Badge>
            </IconButton>


            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box sx={{
                    padding: '10px',
                    backgroundColor: '#1B0522'
                }}>
                    <List>
                        {notifications.map((notification) => (
                            <ListItem button='true' onClick={() => handleNotificationClick(notification.id)} key={notification.id}>
                                <ListItemText primary={notification.message} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Popover>
        </Box>
    );
};

export default NotificationBell;
