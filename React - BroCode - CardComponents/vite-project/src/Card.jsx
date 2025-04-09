import profilePic from './assets/MysoreDC.jpg'

function Card(){
     return(
        <div className="card">

           <img className="card-image"
           src={profilePic}
           alt="Profile Picture">
           </img>

           <h2 className="card-title">Shivendra Pratap Singh</h2>
           <p className="card-text">I work in Infosys and currently learning React</p>
        </div>
     );
}

export default Card