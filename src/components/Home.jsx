import * as React from 'react';
import './Home.css';
import dp from '../images/dp.png';
import Typewriter from "typewriter-effect";
export default class Nav extends React.Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        const array =['Frontend Developer','Backend Engineer','Database Engineer','Full Stack Developer']
        
        return (
                <div className='body'>
                    <div>
                        <h3 className='hi'>Hola, I am</h3>
                        <div className='title'>
                            <span>Priyanshu Koley</span>
                            <Typewriter
                                options={{
                                    strings: array,
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 100,
                                }}
                            />
                        </div>
                        <div className='para'>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quaerat odio temporibus ut reprehenderit quidem dolore impedit harum non labore! Repellendus est nam earum, consequuntur ipsa iste ex aliquam qui!
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quaerat odio temporibus ut reprehenderit quidem dolore impedit harum non labore! Repellendus est nam earum, consequuntur ipsa iste ex aliquam qui!
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quaerat odio temporibus ut reprehenderit quidem dolore impedit harum non labore! Repellendus est nam earum, consequuntur ipsa iste ex aliquam qui!
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quaerat odio temporibus ut reprehenderit quidem dolore impedit harum non labore! Repellendus est nam earum, consequuntur ipsa iste ex aliquam qui!
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quaerat odio temporibus ut reprehenderit quidem dolore impedit harum non labore! Repellendus est nam earum, consequuntur ipsa iste ex aliquam qui!
                            </p>
                            

                        
                        </div>
                    </div>
                    <div className='dp'>
                        <img src={dp} alt="" />
                    </div>
                </div>
        );
    }
}