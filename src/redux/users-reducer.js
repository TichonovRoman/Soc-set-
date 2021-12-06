

const UNFOLLOW = `UNFOLLOW`;
const FOLLOW = `FOLLOW`;

let initialState = {
    users: [
        { id: 1, followed: true, fullName: `Dmitry`, status: `I am a boss`, location: { city: `Minsk`, country: `Belarus` } },
        { id: 2, followed: true, fullName: `Roman`, status: `Учусь`, location: { city: `Kazan`, country: `Russia` } },
        { id: 3, followed: false, fullName: `Yana`, status: `Все нормально`, location: { city: `Moscow`, country: `Russia` } },
        { id: 4, followed: true, fullName: `Matvey`, status: `I am Shufleman`, location: { city: `California`, country: `USA` } },
    ],
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;


                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;


                })
            }

        default:
            return state

    }

}






export const followAC = () => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = () => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export default usersReducer