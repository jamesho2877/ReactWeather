var React = require('react');

var About = React.createClass({
   render: function(){
      return (
         <div className="text-center">
            <h1 className="page-title">About</h1>
            <p>This is a weather application build on React.</p>
         </div>
      );
   }
});

module.exports = About;
