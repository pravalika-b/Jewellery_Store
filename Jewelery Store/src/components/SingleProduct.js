import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class SingleProduct extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <div className="thankyou">
                        <div class="row">
                            <div className="col-md-8">
                                <h2>Thanks You!</h2>
                                <h4>Order Received</h4>
                                <p>Please check your email for futher details.</p>
                                <div class="get-started"> <a type="" href="/" class="btn btn-warning">Ok</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ); 
    }
}

export default SingleProduct;