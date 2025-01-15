import React from "react";

import avatarUser from '../../assets/avatar-examp.png';
import additionalExmp from '../../assets/addi_exemp.png';

import LikeButton from "../ui/buttons/LikeButton";
import HelloButton from "../ui/buttons/HelloButton";
import BookMarkBtn from "../ui/buttons/BookMarkBtn";


import { Box, Typography, Container, Grid } from "@mui/material";

const ProfilesUsersInfo = () => {

    return (
        <Container sx={{
            display: 'flex',
            marginTop: '30px',
            gap: '50px',
        }}>

            {/* Main Photo  */}

            <Box>
                <Box sx={{ position: 'relative' }}>
                    <img src={avatarUser} alt="avatar user" />

                    <Box sx={{ position: 'absolute', bottom: '30px', left: '160px' }}>
                        <LikeButton />
                    </Box>
                    <Box sx={{ position: 'absolute', top: '30px', left: '30px' }}>
                        <BookMarkBtn />
                    </Box>
                </Box>


                {/* Additional Photos */}

                <Box display={'flex'} gap={'8px'}>
                    <Box
                        component='img'
                        src={additionalExmp}
                        alt="exemp img"
                        sx={{
                            maxWidth: '90px',
                            maxHeight: '90px',
                            borderRadius: '20px',
                        }}
                    />
                    <Box
                        component='img'
                        src={additionalExmp}
                        alt="exemp img"
                        sx={{
                            maxWidth: '90px',
                            maxHeight: '90px',
                            borderRadius: '20px',
                        }}
                    />
                    <Box
                        component='img'
                        src={additionalExmp}
                        alt="exemp img"
                        sx={{
                            maxWidth: '90px',
                            maxHeight: '90px',
                            borderRadius: '20px',
                        }}
                    />
                    <Box
                        component='img'
                        src={additionalExmp}
                        alt="exemp img"
                        sx={{
                            maxWidth: '90px',
                            maxHeight: '90px',
                            borderRadius: '20px',
                        }}
                    />
                </Box>
            </Box>

            {/* Info About User */}

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: '550px',
                textWrap: 'nowrap',
                color: 'white',
            }}>

                {/* Info About User Header */}

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '30px',
                    maxWidth: '250px',
                    width: '100%',
                }}>
                    <Typography variant="h4" color="white">
                        Виктор 22
                    </Typography>
                    <HelloButton />
                </Box>

                {/* Info about User Table Middle */}

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '550px',
                    marginBottom: '20px',
                }}>
                    <Box>
                        <Typography variant="h6">Ставка</Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            borderBottom: '2px dashed #4A2956',
                        }}
                    />
                    <Typography variant="h6">15 654 руб</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '550px',
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '18px',
                            color: 'white'
                        }}>Рост</Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            borderBottom: '2px dashed #4A2956',
                            width: '100%'
                        }}
                    />
                    <Typography>186см</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '550px',
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '18px',
                            color: 'white'
                        }}>Вес</Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            borderBottom: '2px dashed #4A2956',
                            width: '100%'
                        }}
                    />
                    <Typography>80 кг</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '550px',
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '18px',
                            color: 'white'
                        }}>Цвет глаз</Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            borderBottom: '2px dashed #4A2956',
                            width: '100%'
                        }}
                    />
                    <Typography>Карие</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '550px',
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '18px',
                            color: 'white'
                        }}>
                            Цвет волос
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            borderBottom: '2px dashed #4A2956',
                            width: '100%'
                        }}
                    />
                    <Typography>Светлые</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '550px',
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '18px',
                            color: 'white'
                        }}>
                            Цель знакмоства
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            borderBottom: '2px dashed #4A2956',
                            width: '100%'
                        }}
                    />
                    <Typography>Пока не знаю</Typography>
                </Box>

                {/* About me */}

                <Box marginTop={3}>
                    <Typography variant="h6">
                        О себе
                    </Typography>

                    <Typography sx={{ textWrap: 'wrap', marginBottom: '1rem' }} component={'p'}>
                        Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки модели развития.
                    </Typography>

                    <Typography sx={{ textWrap: 'wrap' }} component={'p'}>
                        Задача организации, в особенности же постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.
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
        </Container>
    );
};

export default ProfilesUsersInfo;