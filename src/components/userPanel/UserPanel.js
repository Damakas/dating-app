import React from "react";
import { Box } from "@mui/material";
import SearchButton from "../ui/buttons/SearchBtn";
import NotificationBell from "../ui/notificationBell/NotificationBell";
import UserAvatar from "../userBtnProfile/UserBtnProfile";
import LoginedUserBreadCrumbs from "./LoginedUserBreadCrumbs";

const UserPanel = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'row-reverse', lg: 'row' }, gap: { xs: '30px', sm: '50px' }, alignItems: 'center' }}>
            <Box sx={{ marginRight: { sm: '0', md: '50px', lg: '100px', } }}>
                <LoginedUserBreadCrumbs />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SearchButton />
                <NotificationBell />
            </Box>
            <UserAvatar />
        </Box>
    )
}

export default UserPanel;