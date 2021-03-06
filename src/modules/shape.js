import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui shape';

const Shap = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClassName(defaultClassName)} ref="shape">
        {this.props.children}
      </div>
    );
  },

  componentDidMount: function () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.shape).shape();
      } else {
        $(this.refs.shape).shape(this.props.init);
      }
    }
  }
});

export default Shap;
