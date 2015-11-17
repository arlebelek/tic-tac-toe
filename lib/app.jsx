'use strict';

var React = require('react');

//step 3
var boxStyle = {
  'height':'100px',
  'width':'100px'
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={boxStyle}>{this.props.value}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);
