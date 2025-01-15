import React, { useState } from "react";

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const BookMarkBtn = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <IconButton onClick={handleClick}>
            {isActive ? (
                <BookmarkIcon fontSize="large" sx={{ color: '#FF4B55' }} />
            ) : (
                <BookmarkBorderIcon fontSize="large" sx={{ color: '#FF4B55', }} />
            )}
        </IconButton>
    );
};

export default BookMarkBtn;