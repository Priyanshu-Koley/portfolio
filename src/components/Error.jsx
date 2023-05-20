import * as React from 'react';
import './Error.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class Error extends React.Component 
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                    <section class="page_404" id='error'>
                        <div class="container">
                            <div class="row">	
                            <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>                            
                                    </div>
                                    
                                        <div class="contant_box_404">
                                            <h3 class="h2">
                                            Look like you're lost
                                            </h3>
                                            
                                            <p>the page you are looking for is not avaible!</p>
                                            
                                            <a href="/" class="link_404">Go to Home</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </>
        );
    }
}