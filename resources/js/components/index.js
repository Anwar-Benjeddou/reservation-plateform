import React from 'react';
import ReactDOM from 'react-dom';

function Test() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>

                        <div className="card-body">I'm an example for TEST ANWAR component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;

if (document.getElementById('root')) {
    ReactDOM.render(<Test />, './components/index.html');
}
