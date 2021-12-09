import axios from 'axios';
import react from 'react';
import styles from './users.module.css';
import userPhoto from '../../accets/images/user.png'


let Users = (props) => {

    if (props.users.length === 0) {
axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
   
    props.setUsers(response.data.items)
})

        // props.setUsers(
        //     [
        //         {
        //             id: 1,
        //             photoUrl: `https://biografii.net/wp-content/uploads/2018/12/1442831684-dmitrij-nagiev.jpg`,
        //             followed: true,
        //             fullName: `Dmitry`,
        //             status: `I am a boss`,
        //             location: { city: `Minsk`, country: `Belarus` }
        //         },
        //         { id: 2, photoUrl: `https://ruskino.ru/media/photo/11431/7Vs1ORKJB9bGgaTBz3hrlGCedc0.jpg`, followed: true, fullName: `Roman`, status: `Учусь`, location: { city: `Kazan`, country: `Russia` } },
        //         { id: 3, photoUrl: `https://www.syl.ru/misc/i/ni/2/1/2/8/6/6/6/i/2128666.jpg`, followed: false, fullName: `Yana`, status: `Все нормально`, location: { city: `Moscow`, country: `Russia` } },
        //         { id: 4, photoUrl: `https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/4fcf04a8-023e-4cdc-9b04-7c75cee902c2/960x960`, followed: true, fullName: `Matvey`, status: `I am Shufleman`, location: { city: `California`, country: `USA` } },


        //     ]
        // )
    }


    return <div>
        {props.users.map(u => <div >
            <span>
                <div>
                    <img src={u.photos.small !=null? u.photos.small: userPhoto } className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>


        </div>)}


    </div>
}

export default Users;