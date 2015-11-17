'use strict';

var React = require('react');

//step 3
var boxStyle = {
  'height':'100px',
  'width':'100px'
};

var timerValue=300;

var Box = React.createClass({
    //step 4
    'getInitialState': function onGetInitialState(){
        return {
            'value':this.props.initialValue
        };
    },
    
    //step 6
    handleClick: function(){
        var old = this.state.value;
        var newV = oldValue === 'X' ? 'O': 'X';
        this.setState({
        value: newV
        });
 
    
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={boxStyle} onClick={this.handleClick}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue={'X'}/>, document.body);

