import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import MdList from './MdList';
import Filter from '../filter/Filter';

export default class MdMain extends Component {
  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <div className="md-wrapper">
                            <Filter
                                list={value.mentalDisorders}
                                getList={value.getMdlist}
                                titleFilter={true}
                                dispatchType="FILTERMDLIST"
                            />
                            <MdList mdList={value.mentalDisorders} getMdList={value.getMdlist}/>
                        </div>
                  );
                }}
            </Consumer>
    );
  }
}
