import * as React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import dp from '../images/dp.png';
import logoP from'../images/logo.png';
import logoK from'../images/logo1.png';
import menu from'../images/menu.png';
import close from'../images/close.png';

export default class Nav extends React.Component 
{
    constructor(props) {
        super(props);
    }
    showMenu(menu) 
    {
        let list=document.getElementsByClassName('li');
        let download=document.getElementsByClassName('li-download');
        let navdp=document.getElementsByClassName('nav-dp');
        console.log(list)
        for(let i=0; i<list.length; i++)
        {
            list[i].style.display = 'block';
        }
        download[0].style.display = 'block';
        navdp[0].style.display = 'block';
        menu.target.style.display = 'none';
        document.getElementById('close').style.display = 'block';

    }
    closeMenu(menu) 
    {
        let list=document.getElementsByClassName('li');
        let download=document.getElementsByClassName('li-download');
        let navdp=document.getElementsByClassName('nav-dp');
        console.log(list)
        for(let i=0; i<list.length; i++)
        {
            list[i].style.display = 'none';
        }
        download[0].style.display = 'none';
        navdp[0].style.display = 'none';
        menu.target.style.display = 'none';
        document.getElementById('menu').style.display = 'block';

    }
    render() {
        return (
            <>
                <div className='nav-container'>
                    <ul id='ul'>
                        <li className='li-container'>
                            <div className='li-logo-container'>
                                <li className='li-logo'><a href=""><img src={logoP} alt="Logo" className='logo'/></a></li>
                                <li className='li-logo'><a href=""><img src={logoK} alt="Logo" className='logo'/></a></li>                    
                            </div>
                            <div className='li-menu'>
                                <li ><input type="image" src={menu} alt="" className='menu' id='menu' onClick={this.showMenu}/></li>
                                <li ><input type="image" src={close} alt="" className='close' id='close' onClick={this.closeMenu}/></li>
                            </div>
                        </li>
                        <li className='li'><Link to='/'><a href="#">Home</a></Link></li>
                        <li className='li'><Link to='skills'><a href="#">Skills</a></Link></li>
                        <li className='li'><Link to='/services'><a href="#">Services</a></Link></li>
                        <li className='li'><Link to='/contact'><a href="#">Contact</a></Link></li>
                        <button className='li-download '>Download CV</button>
                    </ul>
                    <div className='nav-dp'>
                        <img src={dp} alt="" />
                    </div>
                </div>
            </>
        );
    }
}