import React, { Component } from 'react';
import AddCustomerInfo from './AddCustomerInfo';
import AddSeedInfo from './AddSeedInfo';
import AddOrderInfo from './AddOrderInfo.js';
import AddTrayInfo from './AddTrayInfo';
import Confirm from './Confirm';
import axios from 'axios';


// function OrderForm() {
//     //state for steps
//     const [step, setstep] = useState(1);
  
//     //state for form data
//     const [formData, setFormData] = useState({
//         customerId:null,
//         orderDate: '',
//         deliveryDate: '',
//         orderDetails: [ 
//           {
//           qty: "",
//         seed: {
//           seedName: ""
//         },
//         tray:{
//           trayType:""
//         }
//           }
//         ],
//         customer:{
//           customerName:''
//         }
//     })
  
//     // function for going to next step by increasing step state by 1
//     const nextStep = () => {
//       setstep(step + 1);
//     };
  
//     // function for going to previous step by decreasing step state by 1
//     const prevStep = () => {
//       setstep(step - 1);
//     };
  
//     // handling form input data by taking onchange value and updating our previous form data state
//     const handleInputData = input => e => {
//       // input value from the form
//       const {value } = e.target;
  
//       //updating for data state taking previous state and then adding new value to create new object
//       setFormData(prevState => ({
//         ...prevState,
//         [input]: value
//     }));
//     }
  
  
//   // javascript switch case to show different form in each step
//     switch (step) {
//       // case 1 to show AddCustomerInfo form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
//       case 1:
//         return (
//           <div className="OrderForm">
//             <Container>
//               <Row>
//                 <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
//                   <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         );
//       // case 2 to show AddOrderInfo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
//       case 2:
//         return (
//           <div className="OrderForm">
//             <Container>
//               <Row>
//                 <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
//                   <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         );
//         // case 2 to show AddSeedInfo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
//       case 3:
//         return (
//           <div className="OrderForm">
//             <Container>
//               <Row>
//                 <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
//                   <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         );
//         // case 2 to show AddTrayInfo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
//       case 4:
//         return (
//           <div className="OrderForm">
//             <Container>
//               <Row>
//                 <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
//                   <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         );
//         // Only formData is passed as prop to show the final value at form submit
//       case 3:
//         return (
//           <div className="OrderForm">
//             <Container>
//               <Row>
//                 <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
//                   <Final values={formData}  />
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         );
//       // default case to show nothing
//       default:
//         return (
//           <div className="OrderForm">
//           </div>
//         );
//     }
//   }
  
//   export default OrderForm;
class OrderForm extends Component {
    constructor(props){
        super(props);
    

this.state = {
    step: 1,
    order: {
    orderDate: '',
    deliveryDate: '',
    orderDetails: [ 
      {
      qty: "",
    seed: {
      seedName: ""
    },
    tray:{
      trayType:""
    }
      }
    ],
    customer:{
      customerName:''
    }
}
}
  };
  
  nextStep = () => {
    const { step } = this.state
    this.setState({
        step : step + 1
    })
}

prevStep = () => {
    const { step } = this.state
    this.setState({
        step : step - 1
    })
}

handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
}



handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/orders/create')
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/orders" //This line of code will redirect you once the submission is succeed
      })
  }

handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
}

    render(){
        const{step, orderDate, deliveryDate}= this.state;
        const{qty} = this.state.orderDetails;
        const{seedName} = this.state.orderDetails.seed;
        const{trayType}= this.state.orderDetails.tray;
        const{customerName} = this.state.customer;
        const inputValues = {orderDate, deliveryDate,qty, seedName,trayType,customerName};
        
        
    switch (step) {
      case 1:
        return (
          <AddCustomerInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            inputValues={inputValues}
          />
        );
        case 2:
        return (
          <AddOrderInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            inputValues={inputValues}
          />
        );
      case 3:
        return (
          <AddSeedInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            inputValues={inputValues}
          />
        );
          case 4:
        return (
          <AddTrayInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            inputValues={inputValues}
          />
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputValues={inputValues}
          />
        );
    }
  }
}

export default OrderForm;