import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderFood } from '../app/features/CustomerSlice';
import { RootState } from '../app/store';

interface CustomerProps {
  name: string;
}

function CustomerCard({ name }: CustomerProps) {
  const [orders, setOrders] = useState('');
  const food = useSelector((state: RootState) => state.customers.food);
  const dispatch = useDispatch();

  const addOrder = () => dispatch(orderFood(orders));

  return (
    <div>
      <div className='customer-food-card-container'>
        <p>{name}</p>
        <div className='customer-foods-container'>
          {food.map((foo: string) => (
            <div className='customer-food'>{foo}</div>
          ))}
          <div className='customer-food-input-container'>
            <input
              value={orders}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setOrders(event.target.value)
              }
            />
            <button onClick={addOrder}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
