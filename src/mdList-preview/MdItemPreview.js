import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class MdItemPreview extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push({
      pathname: `/mental-disorders/${this.props.mentalDisorder.id}/${this.props.mentalDisorder.title}`,
      state: {
        md: this.props.mentalDisorder
      }
    });
  }

  render() {
    const { mentalDisorder, mdList } = this.props;
    return (
        <>
            {mdList.indexOf(mentalDisorder) < 6 ? (
                <li className="md-item-prev" onClick={this.handleClick}>
                    <div className="title">
                      <h5 className="small-heading">{mentalDisorder.title}</h5>
                    </div>
                    <div className="short-des small-text">{mentalDisorder.description}</div>
                    <button className="plain-btn right small-heading">Learn More</button>
                </li>
            ) : (<span></span>)}
        </>
    );
  }
}

MdItemPreview.propTypes = {
  mentalDisorder: PropTypes.object.isRequired,
  mdList: PropTypes.array.isRequired
};

export default withRouter(MdItemPreview);
