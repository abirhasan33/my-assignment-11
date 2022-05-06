import React from "react";
import useServices from "../Hooks/useServices";

const AllInventory = () => {
  const [services, setServices] = useServices();

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `http://localhost:5000/service/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);
        })
    }
}


  return (
    <div className="container">
      <h1 className="serivces-titels mb-4">My All Items</h1>
      {services.map((service) => (
        <div className="container">
          <table class="table table table-striped table-hover rounded-3">
            <tbody>
              <tr>
                <th>
                    <div className="services">
                    <img className="services-img" src={service.image} alt="" />
                    </div>
                </th>
                <td>$ {service.price}</td>
                <td>{service.brand}</td>
                <td>{service.supplier_name}</td>
                <td><button className="delete-btn" onClick={() => handleDelete(service._id)}>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AllInventory;
