const UNFOLLOW = `UNFOLLOW`;
const FOLLOW = `FOLLOW`;
const SET_USERS = `SET_USERS`;


let initialState = {
    users: [
        { id: 1, photoUrl: `https://biografii.net/wp-content/uploads/2018/12/1442831684-dmitrij-nagiev.jpg`, followed: true, fullName: `Dmitry`, status: `I am a boss`, location: { city: `Minsk`, country: `Belarus` } },
        { id: 2, photoUrl: `https://ruskino.ru/media/photo/11431/7Vs1ORKJB9bGgaTBz3hrlGCedc0.jpg`, followed: true, fullName: `Roman`, status: `Учусь`, location: { city: `Kazan`, country: `Russia` } },
        { id: 3, photoUrl: `https://www.syl.ru/misc/i/ni/2/1/2/8/6/6/6/i/2128666.jpg`, followed: false, fullName: `Yana`, status: `Все нормально`, location: { city: `Moscow`, country: `Russia` } },
        { id: 4, photoUrl: `https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/4fcf04a8-023e-4cdc-9b04-7c75cee902c2/960x960`, followed: true, fullName: `Matvey`, status: `I am Shufleman`, location: { city: `California`, country: `USA` } },
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
            return { ...state, users: [...state.users, ...action.users] }


        default:
            return state

    }

}






export const followAC = (userId) => ({ type: FOLLOW, userId }) //если только return то записывать можно и так,
//в одну строку

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (userId) => ({ type: SET_USERS, userId })


export default usersReducer