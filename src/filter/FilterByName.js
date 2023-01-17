import React, { Component, createRef } from 'react';
import { Consumer } from '../context/Context';

export default class FilterByName extends Component {
  constructor(props) {
    super(props);
    this.nameRef = createRef();
    this.filter = this.filter.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  filter(list, keyword) {
    return list.filter((item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  }

  filterByName(event, search, dispatch) {
    event.preventDefault();
    // check if input is empty
    if (event.target.value.length > 3) {
      // Scroll down a bit
      window.scrollTo(0, this.nameRef.current.offsetTop - 20);
      // Get the list which is to be filtered
      const listToBeFiltered = this.props.list;
      // save input's value into a state
      dispatch({ type: 'NAMESEARCH', payload: event.target.value });
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
                              ref={this.nameRef}
                              list={value.nameSearch.length > 1 ? 'filter-by-name' : ''}
                              className="search-field name"
                              placeholder="Name..."
                              autoComplete="off"
                              onChange={(event) => this.filterByName(event, value.nameSearch, value.dispatch)}
                              onInput={(event) => value.dispatch({ type: 'NAMESEARCH', payload: event.target.value })}
                            />
                            <datalist id="filter-by-name" >
                              {this.props.list.map((key) => (
                                <option value={key.name.substring(3)} key={key.name}
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
