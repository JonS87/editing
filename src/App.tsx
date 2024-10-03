import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddServiceForm from './components/AddServiceForm';
import ServiceList from './components/ServiceList';
import { Service } from './types/serviceTypes';

const App: React.FC = () => {
  const [editingService, setEditService] = useState<Service | undefined>(undefined);

  const handleEdit = (service: Service) => {
    setEditService(service);
  };

  const handleCancel = () => {
    setEditService(undefined);
  };

  return (
    <Provider store={store}>
      <>
        <AddServiceForm editingService={editingService} onCancel={handleCancel}/>
        <ServiceList onEdit={handleEdit}/>
      </>
    </Provider>
  );
};

export default App;