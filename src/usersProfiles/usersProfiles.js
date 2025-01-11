import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: {
        topDating: [
            {
                id: uuidv4(),
                name: 'Виктор',
                prename: 'Иванов',
                age: 25,
                photo: require('../assets/profilesPhoto/topman1.png'),
                country: "Россия",
            },
            {
                id: uuidv4(),
                name: 'Марина',
                prename: 'Иванов',
                age: 19,
                photo: require('../assets/profilesPhoto/topwoman1.png'),
                country: "Россия",
            },
            {
                id: uuidv4(),
                name: 'Алексей',
                prename: 'Иванов',
                age: 25,
                photo: require('../assets/profilesPhoto/topman2.png'),
                country: "Россия",
            },
            {
                id: uuidv4(),
                name: 'Виктория',
                prename: 'Иванов',
                age: 18,
                photo: require('../assets/profilesPhoto/topwoman2.png'),
                country: "Россия",
            },
            {
                id: uuidv4(),
                name: 'Максим',
                prename: 'Иванов',
                age: 24,
                photo: require('../assets/profilesPhoto/topman3.png'),
                country: "Россия",
            },
        ],
        lookingForBoyfriend: [
            {
                id: uuidv4(),
                name: 'Марина',
                prename: 'Смирнова',
                age: 25,
                photo: require('../assets/profilesPhoto/lfb1.png'),
                country: "Украина",
            },
            {
                id: uuidv4(),
                name: 'Алёна',
                prename: 'Смирнова',
                age: 20,
                photo: require('../assets/profilesPhoto/lfb2.png'),
                country: "Украина",
            },
            {
                id: uuidv4(),
                name: 'Марина',
                prename: 'Смирнова',
                age: 19,
                photo: require('../assets/profilesPhoto/topwoman1.png'),
                country: "Украина",
            },
            {
                id: uuidv4(),
                name: 'Виктория',
                prename: 'Смирнова',
                age: 18,
                photo: require('../assets/profilesPhoto/topwoman2.png'),
                country: "Украина",
            },
            {
                id: uuidv4(),
                name: 'Маргарита',
                prename: 'Смирнова',
                age: 26,
                photo: require('../assets/profilesPhoto/lfb3.png'),
                country: "Украина",
            },
        ],
        lookingForGirlfriend: [
            {
                id: uuidv4(),
                name: 'Виктор',
                prename: 'Петров',
                age: 30,
                photo: require('../assets/profilesPhoto/man1.png'),
                country: "США",
            },
            {
                id: uuidv4(),
                name: 'Андрей',
                prename: 'Петров',
                age: 22,
                photo: require('../assets/profilesPhoto/man2.png'),
                country: "США",
            },
            {
                id: uuidv4(),
                name: 'Саша',
                prename: 'Петров',
                age: 38,
                photo: require('../assets/profilesPhoto/man3.png'),
                country: "США",
            },
            {
                id: uuidv4(),
                name: 'Максим',
                prename: 'Петров',
                age: 19,
                photo: require('../assets/profilesPhoto/man4.png'),
                country: "США",
            },
            {
                id: uuidv4(),
                name: 'Игорь',
                prename: 'Петров',
                age: 24,
                photo: require('../assets/profilesPhoto/man5.png'),
                country: "США",
            },
        ]
    },

}

const usersProfiles = createSlice({
    name: 'usersProfiles',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = state.payload
        },
        addUserToCategory: (state, action) => {
            const { category, user } = action.payload;
            if (state.users[category]) {
                state.users[category].push(user)
            } else {
                state.users[category] = [user]
            }
        }
    },
});

export const { setUsers, addUser } = usersProfiles.actions;
export default usersProfiles.reducer;