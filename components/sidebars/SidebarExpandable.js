import React from 'react';
import styled from "styled-components";
import Link from 'next/link';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DnsIcon from '@material-ui/icons/Dns';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import BorderAll from '@material-ui/icons/BorderAll';

// const DIV = styled.div`
// margin: 0;
// padding: 0;
// width: 50px;
// background-color: #0D2538;
// position: fixed;
// height: 100vh;
// overflow: auto;
// `;

const UL = styled.ul`
list-style: none;
background-color: #0D2538;
display: inline-block;
padding: 20px;


svg {
    color: gray;
}
li :hover {
    cursor: pointer;
}
li :hover svg{
    cursor: pointer;
    fill: white;

    svg:hover{
        fill: white;
    }
}
svg:hover & {
    cursor: pointer;
    
}
@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(60)' : 'translateX(-150%)'};
    top: 0;
    left: 60px;
    height: 100vh;
    width: 275px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      /* padding: 10px 0; */
    }
  }
  h1{
      font-size: 15px;
      margin-bottom: 0;
      color: gray;
  }
  h1:hover{
      color: white;
  }



`;

const SidebarExpandable = ({open}) => {

    return (
        // <DIV>
            <UL open={open}>
                <li>
                    <Link href="#">
                        <h1>Dashboard</h1>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <h1>Menus</h1>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <h1>Inputs/Buttons</h1>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <h1>Cards/Avatars</h1> 
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <h1>Carousels</h1> 
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <h1>Accardions</h1> 
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <h1>Notifications/Badges</h1> 
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <h1>Tables</h1>
                    </Link>
                </li>
            </UL>
            
        // </DIV>
    )
}

export default SidebarExpandable
