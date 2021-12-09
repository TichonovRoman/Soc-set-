const UNFOLLOW = `UNFOLLOW`;
const FOLLOW = `FOLLOW`;
const SET_USERS = `SET_USERS`;


let initialState = {
    users: [
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
        case SET_USERS:
            
            return { ...state, users: [...state.users, ...action.userId] }


        default:
            return state

    }

}






export const followAC = (userId) => ({ type: FOLLOW, userId }) //если только return то записывать можно и так,
//в одну строку

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (userId) => ({ type: SET_USERS, userId })


export default usersReducer