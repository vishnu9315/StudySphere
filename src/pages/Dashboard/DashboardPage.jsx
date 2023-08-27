import { useState, useEffect } from "react"
import { DashboardCart } from "./components/DashboardCart"
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../services"
import { toast } from 'react-toastify'
import { useTitle } from "../../hooks/useTitle"


export const DashboardPage = () => {
    const [orders, setOrders] = useState([])
    useTitle("Dashboard")
    
    useEffect(() => {

        //getting the product and displaying it on the dashboard
        async function getProducts() {
           try{
            const data = await getUserOrders();
            //setting the order
            setOrders(data)
           }catch(error){
            toast.error(error.message, { closeButton: true, position: "bottom-center" });
           }
        }
        getProducts()
    }, [])

  return (
    <main>
    <section>
      <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
    </section>

    <section>
      { orders.length && orders.map((order) => (
        <DashboardCart key={order.id} order={order} />
      )) }
    </section>

    <section>
      { !orders.length && <DashboardEmpty /> }
    </section>

  </main>
  )
}

 
