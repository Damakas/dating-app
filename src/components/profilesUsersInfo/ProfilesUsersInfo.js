import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';

import additionalExmp from '../../assets/addi_exemp.png';
import { ReactComponent as OnlinePoint } from '../../assets/images/icons/online_point.svg';

import LikeButton from "../ui/buttons/LikeButton";
import HelloButton from "../ui/buttons/HelloButton";
import BookMarkBtn from "../ui/buttons/BookMarkBtn";
import NextButton from "../ui/buttons/NextButton";
import PrevButton from "../ui/buttons/PrevButton";

import ProfilesUsersInfoField from "./ProfilesUserInfoField";

import { Box, Typography, Container, CircularProgress } from "@mui/material";

const ProfilesUsersInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const users = useSelector((state) => state.usersProfiles.users);
    const user = useSelector((state) =>
        state.usersProfiles.users.find((user) => user.id === id)
    );

    useEffect(() => {
        if (!user && users.length > 0) {
            navigate(`/datingProfiles`);
        }
    }, [user, users, navigate]);

    const handleNext = () => {
        const currentCategory = user.category;
        const filteredUsers = users.filter((user) => user.category === currentCategory);
        const currentIndex = filteredUsers.findIndex((user) => user.id === id);
        const nextUser = filteredUsers[(currentIndex + 1) % filteredUsers.length];
        navigate(`/user/${nextUser.id}`);
    };

    const handlePrev = () => {
        const currentCategory = user.category;
        const filteredUsers = users.filter((user) => user.category === currentCategory);
        const currentIndex = filteredUsers.findIndex((user) => user.id === id);
        const prevUser = filteredUsers[(currentIndex - 1 + filteredUsers.length) % filteredUsers.length];
        navigate(`/user/${prevUser.id}`);
    };


    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    if (!user) {
        return (
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
            }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
            gap: '30px',
        }} {...handlers}>
            <Box sx={{ alignSelf: 'center', display: { xs: 'none', md: 'block' } }}>
                <PrevButton onClick={() => handlePrev()} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: { xs: 'center', lg: 'normal' },
                justifyContent: 'center',
                gap: { lg: '50px', xs: '30px' },
            }}>

                <Box>
                    {/* Main Photo  */}
                    <Box sx={{
                        position: 'relative',
                        width: "100%",
                        minWidth: "380px",
                        height: "100%",
                        maxHeight: "500px",
                        borderRadius: "10%",
                        overflow: 'hidden',
                    }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={user.photo}
                            alt="avatar user"
                        />
                        <Box sx={{ position: 'absolute', bottom: '30px', left: '160px' }}>
                            <LikeButton />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px'
                        }}>
                            <BookMarkBtn />
                        </Box>
                    </Box>

                    {/* Additional Photos */}
                    <Box sx={{
                        display: 'flex',
                        gap: '8px',
                        marginTop: 2,
                        justifyContent: 'center',
                        overflowX: { xs: 'auto', sm: 'visible' },
                        padding: { xs: '10px', sm: 0 },
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}>
                        {[1, 2, 3, 4].map((index) => (
                            <Box
                                key={index}
                                component='img'
                                src={user.photo}
                                alt="exemp img"
                                sx={{
                                    minWidth: { xs: '60px', xxs: '70px', sm: '90px' },
                                    height: { xs: '80px', sm: '90px' },
                                    borderRadius: '20px',
                                    flexShrink: 0,
                                    objectFit: 'cover',
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Info About User */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', lg: 'normal' },
                    maxWidth: '550px',
                    textWrap: 'nowrap',
                    color: 'white',
                }}>

                    {/* Info About User Header */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', lg: 'normal' },
                        gap: '10px',
                        marginBottom: '30px',
                        maxWidth: '250px',
                        width: '100%',
                        position: 'relative',
                    }}>
                        <Box display={'flex'} gap={'10px'}>
                            <Typography variant="h4" color="white">
                                {user.name} {user.age}
                            </Typography>
                            <OnlinePoint />
                        </Box>
                        <HelloButton />
                    </Box>

                    {/* Info about User Table Middle */}
                    <ProfilesUsersInfoField
                        label={'Рост'}
                        user={user.height} />
                    <ProfilesUsersInfoField
                        label={'Вес'}
                        user={user.weight} />
                    <ProfilesUsersInfoField
                        label={'Цвет глаз'}
                        user={user.eyeColor} />
                    <ProfilesUsersInfoField
                        label={'Цвет волос'}
                        user={user.hairColor} />
                    <ProfilesUsersInfoField
                        label={'Цель знакомства'}
                        user={user.goal} />

                    {/* About me */}

                    <Box marginTop={3} sx={{
                        width: { xs: '300px', md: '550px' },
                        justifyContent: 'center',
                    }}>
                        <Typography variant="h6">
                            О себе
                        </Typography>

                        <Typography sx={{ textWrap: 'wrap', marginBottom: '1rem' }} component={'p'}>
                            {user.about}
                        </Typography>
                    </Box>

                    {/* Registration Date */}

                    <Typography sx={{
                        marginTop: '20px',
                        color: '#8B5D9A',
                        fontSize: '14px'
                    }}>
                        На сайте с 21.08.2021
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ alignSelf: 'center', display: { xs: 'none', md: 'block' } }}>
                <NextButton onClick={() => handleNext()} />
            </Box>
        </Container>
    );
};

export default ProfilesUsersInfo;
