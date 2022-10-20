import React from 'react';
import '../index.css';

function Listing() {
  function Row(props) {
    return (
      <div className='single_row'>
        <div className='container mx-auto md:max-w-screen-xl max-w-screen-md'>
          <div className='row_inner grid grid-cols-6 md:grid-cols-5 gap-4'>
            
            <div className='row_head col-span-full'>{props.heading}</div>

            {props.data.map((e) => (
              <span key={e} className='md:col-auto col-span-3'>{e}</span>
            ))}
  
          </div>
        </div>
      </div>
    );
  }
  
  function renderRow(heading, data) {
    return (
      <Row heading={heading} data={data}></Row>
    )
  }

  return (
    <div className='listing'>

      <div className='row_list'>
        {renderRow('A', ['Adam Blackstone', 'Alex Neely', 'Alessandro', 'Ana Karina', 'Angie Swan', 'Arthur Menezes', 'Angelino'])}
        {renderRow('B', ['Bob Dylan', 'Bobby Wooten II', 'Brian Frasier-Moore'])}
        {renderRow('C', ['Calvin Rodgers', 'Camilla Charlesworth', 'Cory Wong'])}
        {renderRow('D', ['Daniel Bailey', 'Daru Jones', 'David Elfson', 'Doug Winson'])}
        {renderRow('E', ['Elevation Workshop'])}
        {renderRow('F', ['Frank Bello'])}
        {renderRow('J', ['James Bay', 'Jame Iha', 'Janek Gwizdala', 'Jeremy Zucker', 'Joe Satriana', 'John Taylor', 'Jon Calor', 'Joss Stone', 'Jude Smith'])}
        {renderRow('K', ['Keith McPhee'])}
      </div>
    
    </div>
  );
}

export default Listing;