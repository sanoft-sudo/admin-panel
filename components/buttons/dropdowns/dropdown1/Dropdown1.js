import React from 'react'
import styled from 'styled-components';

const DIV =styled.div`
ul{
    list-style: none;
}
.wrapper-dropdown {
    /* Size and position */
    position: relative; /* Enable absolute positioning for children and pseudo elements */
    width: 200px;
    padding: 10px;
    margin: 0 auto;

    /* Styles */
    background: #9bc7de;
    color: #fff;
    outline: none;
    cursor: pointer;

    /* Font settings */
    font-weight: bold;

    .wrapper-dropdown:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 16px;
    top: 50%;
    margin-top: -6px;
    border-width: 6px 0 6px 6px;
    border-style: solid;
    border-color: transparent #fff;    
}

.wrapper-dropdown-1 .dropdown {
	/* Size & position */
    position: absolute;
    top: 100%;
    left: 0; /* Size */
    right: 0; /* Size */

    /* Styles */
    background: #fff;
    font-weight: normal; /* Overwrites previous font-weight: bold; */

    /* Hiding */
    opacity: 0;
    pointer-events: none;
}

.wrapper-dropdown-1 .dropdown li a {
    display: block;
    text-decoration: none;
    color: #9e9e9e;
    padding: 10px 20px;
}

/* Hover state */
.wrapper-dropdown-1 .dropdown li:hover a {
    background: #f3f8f8;
}

.wrapper-dropdown-1:ctive .dropdown {
    opacity: 1;
    pointer-events: auto;
}

.wrapper-dropdown-1:active:after {
    border-color: #9bc7de transparent;
    border-width: 6px 6px 0 6px ;
    margin-top: -3px;
}

.wrapper-dropdown-1:active {
  background: #9bc7de;
  background: linear-gradient(to right, #9bc7de 0%, #9bc7de 78%, #ffffff 78%, #ffffff 100%);
}			

}

`;

const Dropdown1 = () => {

    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;
    
            obj.dd.on('click', function(event){
                $(this).toggleclassName('active');
                return false;
            });
    
            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text('Gender: ' + obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    }
    return (
        <DIV>
            <div id="dd" className="wrapper-dropdown-1" tabindex="1">
                <span>Gender</span>
                <ul className="dropdown">
                    <li><a href="#">Male</a></li>
                    <li><a href="#">Female</a></li>
                </ul>
            </div>
        </DIV>
    )
}

export default Dropdown1
