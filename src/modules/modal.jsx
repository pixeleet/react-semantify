"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui modal';

  var Modal = React.createClass({

    mixins: [ClassGenerator],

    render: function () {
      return (
        <div className={this.getClassName(defaultClassName)} >
          {this.props.children}
        </div>
      );
    }
  });

  return Modal;
}
