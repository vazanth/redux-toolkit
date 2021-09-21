import React from 'react';

interface ReservationProps {
  name: string;
  index: number;
  removeReservation(index: number): void;
  arrived({ id, name }: any): void;
}

function ReservationCard({
  name,
  index,
  removeReservation,
  arrived,
}: ReservationProps) {
  return (
    <div className='reservation-card-container'>
      {name}
      <div
        onClick={() => removeReservation(index)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <div style={{ textDecoration: 'underline', color: 'red' }}>X</div>
        <div
          style={{ textDecoration: 'underline' }}
          onClick={() => arrived({ id: index, name: name })}
        >
          Arrived
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
