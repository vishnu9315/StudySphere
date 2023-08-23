import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {

    const navigate = useNavigate();

    const handleForm = async(event) => {
        event.preventDefault();
        const authDetails = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        const requestOptions = {
            
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(authDetails)
            
        }

        const response = await fetch("http://localhost:8000/register", requestOptions);
        const data = await response.json();
        //if we have access token in our data then go to products else give error
        data.accessToken ? navigate("/products") : toast.error(data);
        //if we have accesstoken we are storing it in sessionStorage
        if(data.accessToken){
          sessionStorage.setItem("token", JSON.stringify(data.accessToken))
          sessionStorage.setItem("scid", JSON.stringify(data.user.id))
        }
    }

  return (
    <main>
    <section>
      <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Register</p>
    </section>
      <form onSubmit={handleForm}>
      <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
            <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Vishnu prasad" required autoComplete="off" />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="vspn@example.com" required autoComplete="off" />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required minLength="7" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
      </form>
  </main>
  )
}
