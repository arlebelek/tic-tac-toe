'use strict';

var React = require('react');

//step 3
var boxStyle = {
  'height':'100px',
  'width':'100px'
};



var Box = React.createClass({
    //step 4
    'getInitialState': function onGetInitialState(){
        return {
            'value':this.props.initialValue
        };
    },
    
    //step 5 
    componentWillMount: function(){
       var oldthis = this;
       this.timer = setInterval(function(){
       
       var old = oldthis.state.value;
       var newV = old === 'X' ? 'O': 'X';
       oldthis.setState({
       value: newV
       });
       }, 300);
       },
           
       componentWillUnmount: function(){
   clearInterval(this.timer);},
    
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue={'X'}/>, document.body);

