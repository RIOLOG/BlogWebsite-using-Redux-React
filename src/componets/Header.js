// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../componets/component.css'

// const Header = () => {
//     return (
//         <header className="header-container">
//             <div className="logo">
//                 <h1 className="logo-text">Redux Blog</h1>
//             </div>
//             <nav className="nav-menu">
//                 <ul className="nav-list">
//                     <li className="nav-item">
//                         <Link to="/" className="nav-link">Home</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/add-post" className="nav-link">Add Post</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/view-all-blogs" className="nav-link">View All Blogs</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;



import { Link } from "react-router-dom"
import '../componets/component.css'

const Header = () => {
    return (
        <>
        <header className="Header">
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Add New Post</Link></li>
                    <li><Link to="view-all-blogs">View all Blogs</Link></li>
                </ul>
            </nav>
        </header>


        
        </>
    )
}

export default Header