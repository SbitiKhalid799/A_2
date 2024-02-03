import { useState } from "react"
import TableuChoise from "./TableuChois"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Navigat(){
    const{id} = useParams()
    const Users = useSelector(state => state.Users)
    const user = Users.find((e)=> e.id === parseInt(id))
    const[placeNav,setplaceNav]= useState(0)
    const[symbol,setSymbol]= useState('×')
    const[Dis,setDis]= useState('none')
    const [DDD,SetDDD] = useState('')
    const handlerplaceNav = () => {
        if ( placeNav === 0){
            setplaceNav("-250px")
            setSymbol("≡")
        }else{
            setplaceNav(0)
            setSymbol('×')
        }
    }    
    const Disconnect = () =>{
        SetDDD('Bakground')
        setDis('flex')
    }
    const Chemin = user ? `${process.env.PUBLIC_URL}/imageProfile/${user.imageProfile}` : '';
    const [width,setwidth] = useState("")
    const [height,setheight] = useState("")
    const [border,seTborder] = useState(15)
    const [DSP,seTDSP] = useState('flex')
    const [DSP1,seTDSP1] = useState('none')
    const SStyle = {
        zIndex:55,
        width:`${width}`,
        height:`${height}`,
        borderRadius:`${border}px`
    }
    const HandlerStyle = () => {
        setwidth('200px')
        setheight("90px")
        seTborder(0)
        seTDSP('none')
        setTimeout(()=>{seTDSP1('block')},200)
    }
    const HandlerStyleBack = () => {
        setwidth('25px')
        setheight("25px")
        seTborder(15)
        seTDSP('flex')
        seTDSP1('none')
    }
    const [DDSP1,seTDDSP1] = useState('none')

    return(
        <>
        <nav className="NavBar p-2" style={{left:placeNav}}>
            <div onClick={() => seTDDSP1('none')} style={{display:DDSP1}} className="Veiwthphoto align-items-center justify-content-center">
                <img src={Chemin} alt="" />
            </div>
            <div className="w-100 flex-column d-flex align-items-center justify-content-center">
                <div onClick={HandlerStyleBack}  className="imageProfile m-3">
                    <img src={Chemin} alt="" />
                </div>
                <div onClick={HandlerStyle} className="ModifierImageProfile" style={SStyle}>
                    <p style={{display:DSP}} className="w-100 h-100 align-items-center justify-content-center">+</p>
                    <ul style={{display:DSP1}} >
                        <li onClick={() => seTDDSP1('flex')}>view photo</li>
                        <li>change photo</li>
                    </ul>
                </div>
                <h4 className="text text-light">{user.username}</h4>
            </div>
            <hr/>
            <ul>
                <li><Link to={'../SingIn/'+id}>Home</Link></li>
                <li><Link to={"/Profile/"+id}>Profile</Link></li>
                <li><Link to={"/Contact/"+id} >Contact</Link></li>  
            </ul>
            <div className="Disconnect p-3 w-100 d-flex align-items-center justify-content-center">
                <button onClick={Disconnect} className="btn">Disconnect</button>
            </div>
            <button onClick={handlerplaceNav} className="ClosOpenBarNav">{symbol}</button>
        </nav>
        <TableuChoise DDD={DDD} SetDDD={SetDDD} Dis={Dis}/>
        </>
    )
}