import React from 'react';
import '../index.css';

function Row(props) {
  return (
    <div className='single_row'>
      <div className='container-fluid'>
        <div className='row_inner'>

          <div className='row'>
            
            <div className='row_head col-12'>{props.heading}</div>

            {props.data.map((e) => (
              <span key={e} className='col-lg-2 col-6'>{e}</span>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

class Listing extends React.Component {
  renderRow(heading, data) {
    return (
      <Row heading={heading} data={data}></Row>
    )
  }

  render () {
    return (
      <div className='listing'>

        <div className='row_list'>
          {this.renderRow('A', ['Adam Blackstone', 'Alex Neely', 'Alessandro', 'Ana Karina', 'Angie Swan', 'Arthur Menezes', 'Angelino'])}
          {this.renderRow('B', ['Bob Dylan', 'Bobby Wooten II', 'Brian Frasier-Moore'])}
          {this.renderRow('C', ['Calvin Rodgers', 'Camilla Charlesworth', 'Cory Wong'])}
          {this.renderRow('D', ['Daniel Bailey', 'Daru Jones', 'David Elfson', 'Doug Winson'])}
          {this.renderRow('E', ['Elevation Workshop'])}
          {this.renderRow('F', ['Frank Bello'])}
          {this.renderRow('J', ['James Bay', 'Jame Iha', 'Janek Gwizdala', 'Jeremy Zucker', 'Joe Satriana', 'John Taylor', 'Jon Calor', 'Joss Stone', 'Jude Smith'])}
          {this.renderRow('K', ['Keith McPhee'])}
        </div>
      
      </div>
    );
  }
}

export default Listing;