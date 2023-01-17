import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import SpecialistsList from './SpecialistsList';
import Filter from '../filter/Filter';

export default class Specialists extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { getSpecialists, specialists } = value;
          return (
            <div>
              <Filter
              list={specialists}
              getList={getSpecialists}
              dispatchType="FILTERSPECIALISTS"
              cityFilter={true}
              nameFilter={true} />
              <SpecialistsList specialists={specialists} getSpecialists={() => getSpecialists()} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
