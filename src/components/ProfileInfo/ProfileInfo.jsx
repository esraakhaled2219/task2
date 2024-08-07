import "./ProfileInfo.css";
import avatar from '../../assets/avatar.jpeg'

function ProfileInfo (){
    return (
        <div id="profile" >
            <img  src={avatar}/>
            <div id= "info">
            <h1 id="name">Jessica Randall</h1>
            <p id="location">London, United Kingdom</p>
            <p id="pa">"Front-end developer and avid reader." </p>
            </div>
        </div>
    )
}

export default ProfileInfo