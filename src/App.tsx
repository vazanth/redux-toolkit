import { Thing } from 'button-test-lib';
import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { addCustomer } from './app/features/CustomerSlice';
import {
  addReservation,
  removeReservation,
} from './app/features/ReservationSlice';
import { RootState } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';

function App() {
  const [reservedFor, setReservedFor] = useState('');
  const dispatch = useDispatch();

  const reservation = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.name);

  const handleResevations = () => {
    if (!reservedFor) return;

    dispatch(addReservation(reservedFor));
    setReservedFor('');
  };

  const removeNameFromStore = (index: number) => {
    dispatch(removeReservation(index));
  };

  const customerArrived = ({ id, name }: any) => {
    dispatch(addCustomer({ id, name }));
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div style={{ height: '60vh' }}>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              <Thing
                label={'Submit'}
                size={{ width: '10', height: '20' }}
                type={'button'}
                variant={{ type: 'dotted', color: 'red', border: 'none' }}
                color={'red'}
                bgColor={'yellow'}
                rounded={5}
                className='test'
                font={{ size: 12, weight: 'bold' }}
                onClick={(e: any) => console.log('am ddclicked', e)}
                shadow={'5px 10px #888888'}
              />
              {reservation.map((name: string, index: number) => (
                <ReservationCard
                  name={name}
                  index={index}
                  removeReservation={removeNameFromStore}
                  arrived={customerArrived}
                />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservedFor}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setReservedFor(event.target.value)
              }
            />
            <button onClick={handleResevations}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          {customers.map((obj) => (
            <CustomerCard name={obj.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
