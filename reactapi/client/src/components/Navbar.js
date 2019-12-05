import React, { Component } from 'react';

const Navbar = () =>  {

    
        return ( 

            <nav className = "nav-wrapper red-darken-3">
                <div className = "container">
    
                     <ul className = 'right'>
 
                    <li><a href = "/">Home</a></li>
                    <li><a href ="/signin">Signin</a></li>
                    <li><a href ="/questions">Questions</a></li>
                
                </ul>
            </div>
         </nav>
         );
    }


       
export default Navbar;