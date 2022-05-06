import { useEffect, useState } from "react";

const useServiceDetail = serviceId =>{
    const [service, setService] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data));

    }, [serviceId]);
    return [service]
}

export default useServiceDetail;