import React from "react";
import { useSelector } from "react-redux";
import ProfilesCard from "../profilesCard/ProfilesCard";
import CountryWithFlag from './CountryWithFlag';

import { Box, Typography, Container } from "@mui/material";

const DatingProfiles = () => {
    const usersTopDating = useSelector((state) => state.usersProfiles.users.topDating);
    const lookingForBoyfriend = useSelector((state) => state.usersProfiles.users.lookingForBoyfriend);
    const lookingForGirlfriend = useSelector((state) => state.usersProfiles.users.lookingForGirlfriend);

    return (
        <Container maxWidth='xl'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '30px', md: "50px" },
                padding: '20px',
            }}>

            {/* Top Dating */}
            <Box sx={{
                maxWidth: '1200px',
                width: '100%',
            }}>
                <Typography variant="h4" sx={{
                    color: 'white',
                    margin: '20px 0',
                    fontSize: { xs: '24px', md: '32px' },
                }}>
                    Топ для знакомств
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '20px',
                    overflowX: 'auto',
                }}>
                    {usersTopDating.map((user) => (
                        <ProfilesCard
                            key={user.id}
                            photo={user.photo}
                            name={user.name}
                            country={<CountryWithFlag country={user.country} />}
                            age={user.age}
                        />
                    ))}
                </Box>
            </Box>

            {/* Looking for Boyfriend */}
            <Box sx={{
                maxWidth: '1200px',
                width: '100%',
            }}>
                <Typography variant="h4" sx={{
                    color: 'white',
                    margin: '20px 0',
                    fontSize: { xs: '24px', md: '32px' },
                }}>
                    Ищу Парня
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '20px',
                    justifyContent: 'flex-start',
                    overflowX: 'auto',
                }}>
                    {lookingForBoyfriend.map((user) => (
                        <ProfilesCard
                            key={user.id}
                            photo={user.photo}
                            name={user.name}
                            country={<CountryWithFlag country={user.country} />}
                            age={user.age}
                        />
                    ))}
                </Box>
            </Box>

            {/* Looking for Girlfriend */}
            <Box sx={{
                maxWidth: '1200px',
                width: '100%',
            }}>
                <Typography variant="h4" sx={{
                    color: 'white',
                    margin: '20px 0',
                    fontSize: { xs: '24px', md: '32px' },
                }}>
                    Ищу Девушку
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '20px',
                    justifyContent: 'flex-start',
                    overflowX: 'auto',
                }}>
                    {lookingForGirlfriend.map((user) => (
                        <ProfilesCard
                            key={user.id}
                            photo={user.photo}
                            name={user.name}
                            country={<CountryWithFlag country={user.country} />}
                            age={user.age}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default DatingProfiles;
