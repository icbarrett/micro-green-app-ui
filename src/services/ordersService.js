import axios from "axios";

const ORDERS_BASE_REST_API_URL = 'http://localhost:8080/orders';

class ordersService{

    getAllOrders(){
        return axios.get(ORDERS_BASE_REST_API_URL)
    }

    createOrder(customerOrder){
        return axios.post(ORDERS_BASE_REST_API_URL, customerOrder)
    }

    getOrderById(orderId){
        return axios.get(ORDERS_BASE_REST_API_URL+'/'+ orderId)
    }

    updateOrder(orderId, customerOrder){
        return axios.put(ORDERS_BASE_REST_API_URL+'/ + Update + /' + orderId, customerOrder)
    }

    deleteOrder(orderId){
        return axios.delete(ORDERS_BASE_REST_API_URL+'/'+ orderId)
    }
}

export default new ordersService();