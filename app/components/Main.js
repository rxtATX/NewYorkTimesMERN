var React = require("react");

var Main = React.createClass({
    render: function() {
        return(
            <div className="jumbotron jumbotron-fluid">
                <h1>New York Times Search</h1>
                <button className="btn btn-primary">
                    <a href="#">Search</a>
                </button>
                <button className="btn btn-success">
                    <a href="#">Save</a>
                </button>
            </div>
        );
    }
});

module.exports = Main;