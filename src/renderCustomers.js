function CustomerList(props){
    return (
      <div style={{border:'1px solid black',
                  margin:'10px',width:'20%'}}>
        <p> {props.firstName} {props.lastName}</p> 
      </div>
    )
  
  }
  
function App() {

return(

<div id='customers'>
    test
    {Customers.map((customer)=>{
    
    return (
        <CustomerList key={customer.idCustomers} firstName={customer.firstName} lastName={customer.lastName} />
    );
    })}

</div>

);
}
  
  