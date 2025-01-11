import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ButtonBasic from "../ui/buttons/ButtonBasic";
import { ReactComponent as WavingHand } from '../../assets/images/icons/wavingHand.svg';
import { ReactComponent as OnlinePoint } from '../../assets/images/icons/online_point.svg';

const ProfilesCard = ({ photo, name, age, country }) => {

    return (
        <Link href='#'
            sx={{
                '&:hover': {
                    transform: 'scale(0.99)'
                }
            }}>
            <Box
                sx={{
                    width: "220px",
                    borderRadius: '30px',
                    position: "relative"
                }}>
                <Box>
                    <img src={photo} alt="user avatar" />
                </Box>
                <Box sx={{ position: 'absolute', width: '100%', bottom: '0' }}>
                    <ButtonBasic
                        name={'Попривествовать'}
                        img={<WavingHand />} />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1px',
                    bottom: '80px',
                    left: '25px',
                    color: 'white'
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                    }}>
                        <Typography sx={{ position: 'relative' }}>
                            {name} {age}
                        </Typography>
                        <OnlinePoint />
                    </Box>
                    <Typography
                        component="div" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                        }}>
                        {country}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default ProfilesCard;