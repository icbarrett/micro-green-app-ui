import axios from "axios";
const CUSTOMERS_BASE_REST_API_URL = 'http://localhost:8080/customers';

class CustomerService{

    getAllCustomers(){
        return axios.get(CUSTOMERS_BASE_REST_API_URL)
    }

    createCustomer(customer, add){
        return axios.post(CUSTOMERS_BASE_REST_API_URL + '/' + 'add', customer)
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMERS_BASE_REST_API_URL+'/'+ customerId)
    }

    updateCustomer(customerId, customer){
        return axios.put(CUSTOMERS_BASE_REST_API_URL+'/ + Update + /' + customerId, customer)
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTOMERS_BASE_REST_API_URL+'/'+ customerId)
    }
}

export default new CustomerService();