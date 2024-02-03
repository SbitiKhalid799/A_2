import Navigat from "./BarNavigation";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { useState } from "react";
import {AddCommante} from '../ReduxComopsant/action' 
import { useParams } from "react-router-dom";

export default function UserIntairface() {
    const {id} = useParams()
    const Publications = useSelector(state => state.Publications);
    const Users = useSelector(state => state.Users);
    const Dispatch = useDispatch()
    const [idPost ,setIdPost] = useState(false)
    const [height,setHeight] = useState('0')
    const [height_1,setHeight_1] = useState('0')
    const [MesCom,setMesCom] = useState('')
    const HandlerBack = () => {
        setHeight(0)
        setHeight_1(0)
    }
    const HandlerCommantes = () => {
        setHeight('100vh')
        setHeight_1('80%')
    }
    const HandlerAddCommante = () => {
        if (MesCom !== ''){
            Dispatch(AddCommante(parseInt(id),MesCom,parseInt(idPost.id)))
        }
    }
    return (
        <div className="UserintairfaceBack">
            <h1 className="mt-3 mx-5 TITRE">Home</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {[...Publications].reverse().map((ev, i) => (<Post setIdPost={setIdPost} HandlerCommantes={HandlerCommantes} key={i} ev={ev}/>))}
                </div>
            </div>
            <Navigat/>
            <div onDoubleClick={HandlerBack} style={{height:height}} className="Commant">
                <div className="Comcoc" style={{height:height_1}}>
                        <ul className="tableauCommantaire container">
                        {!idPost ? <h3>There are no comments</h3>:idPost.Commantes.map((e,i)=>(
                            <li key={i}>
                                <section className="CCC m-3" >
                                    <p className="text text-light comm">{e.commantaire}</p>
                                    <h4 className="text text-light">
                                        {Users.find(u => u.id === e.id).username}
                                    </h4>
                                </section>
                            </li>
                        ))}
                        </ul>
                </div>
                <section className="Message1Commant d-flex align-items-center justify-content-center p-3">
                    <input onChange={(e)=>setMesCom(e.target.value)} placeholder="Commante" className="mx-3 px-4 py-1 text text-center text-light" type="text"/>
                    <button onClick={HandlerAddCommante} >Send</button>
                </section>
            </div>
        </div>
    );
}
