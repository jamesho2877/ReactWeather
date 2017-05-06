var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
   render: function(){
      return (
         <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few examples location to try out:</p>
            <ol>
               <li>
                  <Link to="/?location=Vaasa">Vaasa, Finland</Link>
               </li>
               <li>
                  <Link to="/?location=Helsinki">Helsinki, Finland</Link>
               </li>
            </ol>
         </div>
      );
   }
});

module.exports = Examples;
