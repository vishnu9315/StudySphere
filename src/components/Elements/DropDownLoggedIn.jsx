import { Link, useNavigate } from "react-router-dom"
import { getUser, logout } from "../../services"
import { useEffect, useState } from "react"
import {toast} from 'react-toastify'

export const DropDownLoggedIn = ({setDropDown}) => {
    const [user, setUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData(){
            try{
            const data = await getUser();
            //if there is email that means it logged in but if email is undefined or null empty that means user is logged out so we are calling handlelogout function
            data.email ? setUser(data) : handleLogout();
            }catch(error){
                toast.error(error.message, { closeButton: true, position: "bottom-center" });
            }
        }
        fetchData()
    }, [])
    //if clicked on logout button we will clear the session storage that is token and id and redirect user to homepage
    const handleLogout = () => {
        logout();
        setDropDown(false);
        navigate('/');
    }
  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropDown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropDown(false)} to = "/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout}  className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
}

 