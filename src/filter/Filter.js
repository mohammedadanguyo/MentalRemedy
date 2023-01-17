import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterByName from './FilterByName';
import FilterByCity from './FilterByCity';
import FilterByTitle from './FilterByTitle';

class Filter extends Component {
  render() {
    return (
            <div>
              <form onSubmit={(event) => event.preventDefault()}>
                <h5 className="small-text">Search</h5>
                {/* Filter by name */}
                {this.props.nameFilter ? (
                  <FilterByName
                  getList={this.props.getList}
                  list={this.props.list}
                  dispatchType={this.props.dispatchType}
                 />
                ) : <span></span>}
                {/* Filter by city */}
                {this.props.cityFilter ? (
                  <FilterByCity
                   getList={this.props.getList}
                   list={this.props.list}
                   dispatchType={this.props.dispatchType}
                   />) : <span></span>}
                {/* Filter by name */}
                {this.props.titleFilter ? (
                  <FilterByTitle
                  getList={this.props.getList}
                  list={this.props.list}
                  dispatchType={this.props.dispatchType}
                 />
                ) : <span></span>}
              </form>
            </div>
    );
  }
}

Filter.propTypes = {
  list: PropTypes.array.isRequired,
  dispatchType: PropTypes.string.isRequired,
  getList: PropTypes.func.isRequired
};

export default Filter;
