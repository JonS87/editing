import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteService } from '../actions/serviceActions';
import ServiceItem from './ServiceItem';
import { Service } from '../types/serviceTypes';
import { RootState } from '../store/store';

const ServiceList: React.FC<{ onEdit: (service: Service) => void }> = ({ onEdit }) => {
  const services = useSelector((state: RootState) => state.services);
  const dispatch = useDispatch();
  
  return (
    <ul>
      {services.map((service: Service) => (
        <ServiceItem
          key={service.id}
          service={service}
          onEdit={ () => onEdit(service) }
          onDelete={() => dispatch(deleteService(service.id))}
        />
      ))}
    </ul>
  );
};

export default ServiceList;
