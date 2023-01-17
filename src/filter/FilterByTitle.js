import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context/Context';

class FilterByTitle extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.filterByTitle = this.filterByTitle.bind(this);
    this.titleRef = createRef();
  }

  filter(list, keyword) {
    return list.filter((item) => item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  }

  filterByTitle(event, search, dispatch) {
    event.preventDefault();
    // check if input is empty
    if (event.target.value.length > 1) {
      // Scroll down a bit
      window.scrollTo(0, this.titleRef.current.offsetTop - 20);
      // Get the list which is to be filtered
      const listToBeFiltered = this.props.list;
      // save input's value into a state
      dispatch({ type: 'TITLESEARCH', payload: event.target.value });
      // filter the list
      const results = this.filter(listToBeFiltered, search);
      // update state with filtered list
      return dispatch({ type: this.props.dispatchType, payload: results });
    }
    // Scroll back up a bit when input is empty
    window.scrollTo(0, 0);
    // restore state if input is empty
    return this.props.getList();
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <>
                            <input
                              type="text"
                              ref={this.titleRef}
                              list={value.titleSearch.length > 2 ? 'filter-by-title' : ''}
                              className="search-field name"
                              placeholder="Title..."
                              autoComplete="off"
                              onChange={(event) => this.filterByTitle(event, value.titleSearch, value.dispatch)}
                              onInput={(event) => value.dispatch({ type: 'TITLESEARCH', payload: event.target.value })}
                            />
                            <datalist id="filter-by-title" >
                              {this.props.list.map((key) => (
                                <option value={key.title} key={key.id}
                                ></option>
                              ))}
                            </datalist>
                        </>
                  );
                }}
            </Consumer>
    );
  }
}

FilterByTitle.propTypes = {
  dispatchType: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired
};

export default FilterByTitle;
