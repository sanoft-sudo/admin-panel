import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../../logo/Logo';

const DIV = styled.div`

margin: 25px 0;
input[type='checkbox']{
    display:none;
}
.navbar-nav>li>.nav-link {
    text-transform: uppercase;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.75);
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: 1px;
      transform: scale(1);
    transition: transform 0.5s ease-in-out;
}
.navbar-nav>li>.nav-link :hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
}




.nav-link {
    color: #fff !important
}

.wrapper {
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: #000;
    clip-path: polygon(81% 0, 100% 0, 100% 50%, 100% 100%, 71% 100%);
    transition: 1s all
}


.navbar-nav{
    justify-content: space-evenly;
    width:100%
}
.navbar-red:hover .wrapper {
    clip-path: polygon(81% 0, 100% 0, 100% 50%, 100% 100%, 65% 100%)
}


.navbar-red {
    background: rgba( 48, 46, 46, 0.50 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
    
    color: #fff
}

.all-show {
    z-index: 10
}
.search-me{
    position: relative;
}

.input-search{
  height: 18px;
  width: 10px;

  border-style: none;
  padding: 5px;
  font-size: 14px;
  letter-spacing: 2px;
  outline: none;
  /* border-radius: 25px; */
  transition: all .5s ease-in-out;
  background-color: transparent;
  padding-right: 40px;
  border-bottom:1px solid rgba(255,255,255,.5);
  color:#fff;
}
.input-search::placeholder{
  color:rgba(255,255,255,.5);
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search{
  width: 18px;
  height: 18px;
  border-style: none;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:#ffffff ;
  background-color:transparent;
  pointer-events: painted;  
}
.btn-search:focus ~ .input-search{
  width: 270px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.search-me:focus ~ .input-search{
  width: 270px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 270px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

label {
    display: block;
    cursor: pointer;
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 0 0 4.1666666667vw rgba(0, 0, 0, 0.25),
      0 0 0.8333333333vw rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    margin: 0.5rem;
  }
  path {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    --length: 24;
    --offset: -38;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  circle {
    opacity: 0;
  }

  .cross input:checked + svg .line--1,
  .cross input:checked + svg .line--3 {
    --length: 22.627416998;
  }

  .cross input:checked + svg .line--2 {
    --length: 0;
  }

  .menu--1 .line--1,
  .menu--1 .line--3 {
    --total-length: 126.64183044433594;
  }

  .menu--1 .line--2 {
    --total-length: 70;
  }

  .menu--1 input:checked + svg .line--1,
  .menu--1 input:checked + svg .line--3 {
    --offset: -94.1149185097;
  }

  .menu--1 input:checked + svg .line--2 {
    --offset: -50;
  }

  .navbar-nav>.nav-item>.nav-link:not(:last-child) :hover {
color: #00a78e !important;
}

  @media (min-width: 500px) {
  }
  label {
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
  }
  label svg {
    width: 3rem;
    height: 3rem;
  }
  circle {
    width: 40px;
    height: 40px;
  }
  .navbar-toggler{
      width: 40px;
      height:40px;
  }
  @media (min-width:768px){
      .menu {
          display: none;
      }
  }
  @media (min-width:768px) and (max-width:784px){
.btn-search:focus ~ .input-search{
  width: 100px;
}
.search-me:focus ~ .input-search{
  width: 100px;
}
.input-search:focus{
  width: 100px;
}
.input-search::placeholder{
  font-size: 12px;
  letter-spacing: 1px;
}
  }
  @media (min-width:785px) and (max-width:850px){
.btn-search:focus ~ .input-search{
  width: 160px;
}
.search-me:focus ~ .input-search{
  width: 160px;
}
.input-search:focus{
  width: 160px;
}
.input-search::placeholder{
  font-size: 12px;
  letter-spacing: 1px;
}
  }
  @media (min-width:851px) and (max-width:900px){
.btn-search:focus ~ .input-search{
  width: 200px;
}
.search-me:focus ~ .input-search{
  width: 200px;
}
.input-search:focus{
  width: 200px;
}
.input-search::placeholder{
  font-size: 13px;
  letter-spacing: 1.5px;
}
  }
  @media (min-width:901px) and (max-width:968px){
.btn-search:focus ~ .input-search{
  width: 230px;
}
.search-me:focus ~ .input-search{
  width: 230px;
}
.input-search:focus{
  width: 230px;
}
.input-search::placeholder{
  font-size: 13px;
  letter-spacing: 2px;
}
  }

  .vertical-nav{
      /* display: ${({showMenu}) => (showMenu ? "block" : "none")}; */
      height: ${({showMenu}) => (showMenu ? "350px" : 0)};
      transition: all 2s ease-in-out;
  }
  .vertical-nav .navbar-red{
        height: ${({showMenu}) => (showMenu ? "220px" : 0)};
      transition: all 2s ease-in-out;
  }
  .vertical-nav .navbar-nav{
      width: 50%;
       visibility: ${({showMenu}) => (showMenu ? "visible" : 'hidden')};
      transition: display 2s ease-in-out;
  }
 

  .vertical-nav .input-search{
  width: 270px;
}
.vertical-nav .search-me{
    width:275px;
}
.vertical-nav .wrapper{
width: 100%;
    position: absolute;
    height: 100%;
    background-color: #000;
    clip-path: polygon(71% 0, 100% 0, 100% 50%, 100% 100%, 43% 100%);
    transition: 1s all
}



.vertical-nav .navbar-nav{
    justify-content: space-evenly;
    width:50%
}
.vertical-nav .navbar-red:hover .wrapper {
    clip-path: polygon(71% 0, 100% 0, 100% 45%, 100% 100%, 36% 100%)
}


.vertical-nav .navbar-red {
    background: rgba( 48, 46, 46, 0.50 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
    
    color: #fff
}

.vertical-nav .navbar-nav .nav-item{
padding-left: 10px;
}
.vertical-nav .navbar-nav .nav-item:not(:last-child) :hover{
background: rgba( 48, 46, 46, 0.3 );;
}

@media (min-width:768px){
  .vertical-nav{
      display:none;
  }
}

 @media (max-width:374px){
 .vertical-nav .input-search{
  width: 188px;
}
.vertical-nav .search-me{
    width:190px;
}
 }

 @media (min-width:375px) and (max-width:420px){
 .vertical-nav .input-search{
  width: 213px;
}
.vertical-nav .search-me{
    width:215px;
}
 }

`;

const ResponsiveNavbars = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = (e) =>{

        setShowMenu(e.target.checked);
    }
    console.log(showMenu);

    return (
        <DIV showMenu={showMenu}>
           <nav className="navbar navbar-expand-md navbar-red navbar-dark">
        <div className="wrapper"> </div>
        <div className="container-fluid all-show"> <Logo />
        <div className="menu cross menu--1">
          <label data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <input type="checkbox" onChange={handleClick}/>
            <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
              {/* <circle cx="50" cy="50" r="40" /> */}
              <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
              <path className="line--2" d="M0 50h70" />
              <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
            </svg>
          </label>
        </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item"> 
              <a className="nav-link active" aria-current="page" href="#">About us</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">Products</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">Services</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">Events</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">contact</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link search-me"  href="#"><i className="fas fa-search btn-search" />
        <input type="text" className="input-search" placeholder="Type to Search..." />
              </a>
              </li>
              
            </ul>
            
            
          </div>
        </div>
      </nav>
      <div className="vertical-nav">
          <nav className="navbar-red">
          <div className="wrapper"> </div>
        <div className="container-fluid all-show">
                 <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item"> 
              <a className="nav-link active" aria-current="page" href="#">About us</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">Products</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">Services</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">Events</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link" href="#">contact</a> 
              </li>
              <li className="nav-item"> 
              <a className="nav-link search-me"  href="#"><i className="fas fa-search btn-search" />
        <input type="text" className="input-search" placeholder="Type to Search..." />
              </a>
              </li>
              
            </ul>
            </div>
            </nav>
            </div>
        </DIV>
    )
}

export default ResponsiveNavbars
