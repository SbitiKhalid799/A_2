import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikingPost } from '../ReduxComopsant/action';
import { useParams } from "react-router-dom";

export default function Post(props){
    const [display, setDisplay] = useState('none');
    const Users = useSelector(state => state.Users)
    const Publications = useSelector(state => state.Publications)
    const {id} = useParams()
    const {ev,Dis,dd,HandlerCommantes,setIdPost} = props
    const user = Users.find((e)=> e.id === parseInt(ev.userId))
    const Public = Publications.find((e)=> e.id === parseInt(ev.id))
    const dispatch = useDispatch()
    const [backgroundColor,setBackgroundColor] = useState('white')
    let exists = Publications.find((e) => e.userId === parseInt(ev.userId)).usersLike.find(e => e === parseInt(id));
    const Handler = () => {
        dispatch(LikingPost(parseInt(id), parseInt(ev.id)))
        if (exists !== parseInt(id)) {
          setBackgroundColor('blue');
        } else {
          setBackgroundColor('white');
        }
    }
    const v = () => {
        setIdPost(ev)
        HandlerCommantes()
    }
    const Chemin = user ? `${process.env.PUBLIC_URL}/imageProfile/${user.imageProfile}` : '';
    const Chemin2 = Public ? `${process.env.PUBLIC_URL}/imagePost/${Public.name}` : '';
    return(
        <div className="col-lg-5 col-lg-7 col-md-9 col-12">
        <div className="Post my-3">
            <div className="d-flex justify-content-left align-items-center px-2">
                <div style={{display:dd}} className="imageProfilePost">
                    <img className="img" src={Chemin} alt="" />
                </div>
            <h5 className="text text-light p-3">
                {Users.find(e => e.id === parseInt(ev.userId)).username}
            </h5>
            </div>
            <div className="imagePost d-flex justify-content-center align-items-center" alt="image">
                <img src={Chemin2} alt="" />
            </div>
            <p className="text text-center text-light">{ev.Description}</p>
            <div className="LikePost text text-light flex-column d-flex align-items-center justify-content-center">
                <h5 onClick={() => setDisplay(display === 'none' ? 'block' : 'none')} className="likes">likes : {[...ev.usersLike].length}</h5>
                <div className="PostBorderControle d-flex justify-content-evenly ">
                    <button onClick={Handler} style={{display:Dis,backgroundColor:backgroundColor}} className="Like text text-light mb-2"></button>
                    <button onClick={v} className="commantaire"></button>
                </div>
            </div>
            <div className="N_likes" style={{ display: display }}>
                <ul>
                    {Publications.find((U) => U.id === ev.id).usersLike.map((u, i) => (
                        <li key={i}>{Users.find((r) => r.id === u).username}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )
}