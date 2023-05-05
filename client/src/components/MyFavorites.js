// import React, {useState, useEffect} from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const MyFavorites = (props) => {
//     const {id} = useParams()
//     const [storeData, setStoreData] = useState({});
//     const navigate = useNavigate();
    
//     useEffect(() => {
        
//         axios.get(`http://localhost:8000/api/allMovieSchema/${id}`)
//             .then((res) => {
//                 console.log(res)
//                 console.log(res.data.shop)
//                 setStoreData(res.data.shop)
//             })
//             .catch((err) => console.log(err))
//     }, [])

    
//     return(
//         <div className="osmain">
//           <div>
//           </div>
//           <div className="myFav">
//             <h2>My Favorites</h2>
//             <br/>
//             <Link to={`/place/${id}`}><button>Edit Store Details</button></Link>
//           </div>
//           <Link to='/' className="homelink">go back home</Link>
//         </div>
//       )
      
//     }
// export default MyFavorites;