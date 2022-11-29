import './Layout.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Home from '../home/Home';
import Users from '../users/Users';
import NuevoUser from '../NuevoUser/NuevoUser';
import EditUser from '../EditUser/EditUser';


const Layout = () =>{
    return(
        <>
        <Router>
            <header>
                <nav>
                    <ul>
                        <Link to="/home" className='link'>Home</Link>
                        
                        <Link to="/users" className='link'>User</Link>

                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/newUser" element={<NuevoUser />}></Route>
                    <Route path="/editUser/:id" element={<EditUser />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>           
            </main>

            <footer>
                UAI - 4° NOCHE
            </footer>
        </Router>
        </>
    )
}

export default Layout;