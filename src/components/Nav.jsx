import * as React from 'react';
import './Nav.css';
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
        console.log(list)
        for(let i=0; i<list.length; i++)
        {
            list[i].style.display = 'block';
        }
        menu.target.style.display = 'none';
        document.getElementById('close').style.display = 'block';

    }
    closeMenu(menu) 
    {
        let list=document.getElementsByClassName('li');
        console.log(list)
        for(let i=0; i<list.length; i++)
        {
            list[i].style.display = 'none';
        }
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
                        <li className='li'><a href="#">Home</a></li>
                        <li className='li'><a href="#">Skills</a></li>
                        <li className='li'><a href="#">Services</a></li>
                        <li className='li'><a href="#">CV/Resume</a></li>
                        <li className='li'><a href="#">Contact</a></li>
                    </ul>
                </div>
            </>
        );
    }
}