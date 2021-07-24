import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`

#menu, #menu ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#menu {
		width: 960px;
		margin: 60px auto;
		border: 1px solid #222;
		background-color: #111;
		background-image: linear-gradient(#444, #111);
		border-radius: 6px;
		box-shadow: 0 1px 1px #777, 0 1px 0 #666 inset;
	}
	
	#menu:before,
	#menu:after {
		content: "";
		display: table;
	}
	
	#menu:after {
		clear: both;
	}
	
	#menu {
		zoom:1;
	}
	
	#menu li {
		float: left;
		border-right: 1px solid #222;
		box-shadow: 1px 0 0 #444;
		position: relative;
	}
	
	#menu a {
		float: left;
		padding: 12px 30px;
		color: #999;
		text-transform: uppercase;
		font: bold 12px Arial, Helvetica;
		text-decoration: none;
		text-shadow: 0 1px 0 #000;
	}
	
	#menu li:hover > a {
		color: #fafafa;
	}
	
	*html #menu li a:hover { /* IE6 only */
		color: #fafafa;
	}
	
	#menu ul {
		margin: 20px 0 0 0;
		_margin: 0; /*IE6 only*/
		opacity: 0;
		visibility: hidden;
		position: absolute;
		top: 38px;
		left: 0;
		z-index: 1;    
		background: #444;
		background: linear-gradient(#444, #111);
		box-shadow: 0 -1px 0 rgba(255,255,255,.3);	
		border-radius: 3px;
		transition: all .2s ease-in-out;  
	}

	#menu li:hover > ul {
		opacity: 1;
		visibility: visible;
		margin: 0;
	}
	
	#menu ul ul {
		top: 0;
		left: 100%;
		margin: 0 0 0 20px;
		_margin: 0; /*IE6 only*/
		box-shadow: -1px 0 0 rgba(255,255,255,.3);		
	}
	
	#menu ul li {
		float: none;
		display: block;
		border: 0;
		_line-height: 0; /*IE6 only*/
		box-shadow: 0 1px 0 #111, 0 2px 0 #666;
	}
	
	#menu ul li:last-child {   
		-moz-box-shadow: none;
		-webkit-box-shadow: none;
		box-shadow: none;    
	}
	
	#menu ul a {    
		padding: 10px;
		width: 130px;
		_height: 10px; /*IE6 only*/
		display: block;
		white-space: nowrap;
		float: none;
		text-transform: none;
	}
	
	#menu ul a:hover {
		background-color: #0186ba;
		background-image: linear-gradient(#04acec, #0186ba);
	}
	
	#menu ul li:first-child > a {
		border-radius: 3px 3px 0 0;
	}
	
	#menu ul li:first-child > a:after {
		content: '';
		position: absolute;
		left: 40px;
		top: -6px;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 6px solid #444;
	}
	
	#menu ul ul li:first-child a:after {
		left: -6px;
		top: 50%;
		margin-top: -6px;
		border-left: 0;	
		border-bottom: 6px solid transparent;
		border-top: 6px solid transparent;
		border-right: 6px solid #3b3b3b;
	}
	
	#menu ul li:first-child a:hover:after {
		border-bottom-color: #04acec; 
	}
	
	#menu ul ul li:first-child a:hover:after {
		border-right-color: #0299d3; 
		border-bottom-color: transparent; 	
	}
	
	#menu ul li:last-child > a {
		-moz-border-radius: 0 0 3px 3px;
		-webkit-border-radius: 0 0 3px 3px;
		border-radius: 0 0 3px 3px;
	}
	
	/* Mobile */
	#menu-trigger {
		display: none;
	}

	@media  (max-width: 600px) {

		/* nav-wrap */
		#menu-wrap {
			position: relative;
		}

		#menu-wrap * {
			-moz-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
		}

		/* menu icon */
		#menu-trigger {
			display: block; /* show menu icon */
			height: 40px;
			line-height: 40px;
			cursor: pointer;		
			padding: 0 0 0 35px;
			border: 1px solid #222;
			color: #fafafa;
			font-weight: bold;
			background-color: #111;
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAMAAADeWG8gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2QjAxNjRDOUNEOTExRTE4RTNFRkI1RDQ2MUYxOTQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2QjAxNjREOUNEOTExRTE4RTNFRkI1RDQ2MUYxOTQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTZCMDE2NEE5Q0Q5MTFFMThFM0VGQjVENDYxRjE5NDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTZCMDE2NEI5Q0Q5MTFFMThFM0VGQjVENDYxRjE5NDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz42AEtnAAAABlBMVEX///////9VfPVsAAAAAnRSTlP/AOW3MEoAAAAWSURBVHjaYmAgFzBiACKFho6NAAEGAD07AG1pn932AAAAAElFTkSuQmCC) no-repeat 10px center, linear-gradient(#444, #111);
			border-radius: 6px;
			box-shadow: 0 1px 1px #777, 0 1px 0 #666 inset;
		}
		
		/* main nav */
		#menu {
			margin: 0; padding: 10px;
			position: absolute;
			top: 40px;
			width: 100%;
			z-index: 1;
			background-color: #444;
			display: none;
			box-shadow: none;		
		}

		#menu:after {
			content: '';
			position: absolute;
			left: 25px;
			top: -8px;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 8px solid #444;
		}	

		#menu ul {
			position: static;
			visibility: visible;
			opacity: 1;
			margin: 0;
			background: none;
			box-shadow: none;				
		}

		#menu ul ul {
			margin: 0 0 0 20px !important;
			box-shadow: none;		
		}

		#menu li {
			position: static;
			display: block;
			float: none;
			border: 0;
			margin: 5px;
			box-shadow: none;			
		}

		#menu ul li{
			margin-left: 20px;
			box-shadow: none;		
		}

		#menu a{
			display: block;
			float: none;
			padding: 0;
			color: #999;
		}

		#menu a:hover{
			color: #fafafa;
		}	

		#menu ul a{
			padding: 0;
			width: auto;		
		}

		#menu ul a:hover{
			background: none;	
		}

		#menu ul li:first-child a:after,
		#menu ul ul li:first-child a:after {
			border: 0;
		}		

	}

	@media (min-width: 600px) {
		#menu {
			display: block !important;
		}
	}	

	/* iPad */
	.no-transition {
		transition: none;
		opacity: 1;
		visibility: visible;
		display: none;  		
	}

	#menu li:hover > .no-transition {
		display: block;
	}
    

`;

/* $(function () {
  if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
    $("li")
      .has("ul")
      .mouseover(function () {
        $(this).children("ul").css("visibility", "visible");
      })
      .mouseout(function () {
        $(this).children("ul").css("visibility", "hidden");
      });
  } */

  /* Mobile */
  /* $("#menu-wrap").prepend('<div id="menu-trigger">Menu</div>');
  $("#menu-trigger").on("click", function () {
    $("#menu").slideToggle();
  }); */

  // iPad
  /* var isiPad = navigator.userAgent.match(/iPad/i) != null;
  if (isiPad) $("#menu ul").addClass("no-transition");
});  */


const Navbar7 = () => {
    return (
        <DIV>
            <nav id="menu-wrap">    
                <ul id="menu">
                    <li><a href="/">Home</a></li>
                    <li>
                        <a href="">Categories</a>
                        <ul>
                            <li>
                                <a href="">CSS</a>
                                <ul>
                                    <li><a href="">Item 11</a></li>
                                    <li><a href="">Item 12</a></li>
                                    <li><a href="">Item 13</a></li>
                                    <li><a href="">Item 14</a></li>
                                </ul>				
                            </li>
                            <li>
                                <a href="">Graphic design</a>
                                <ul>
                                    <li><a href="">Item 21</a></li>
                                    <li><a href="">Item 22</a></li>
                                    <li><a href="">Item 23</a></li>
                                    <li><a href="">Item 24</a></li>
                                </ul>				
                            </li>
                            <li>
                                <a href="">Development tools</a>
                                <ul>
                                    <li><a href="">Item 31</a></li>
                                    <li><a href="">Item 32</a></li>
                                    <li><a href="">Item 33</a></li>
                                    <li><a href="">Item 34</a></li>
                                </ul>				
                            </li>
                            <li>
                                <a href="">Web design</a>				
                                <ul>
                                    <li><a href="">Item 41</a></li>
                                    <li><a href="">Item 42</a></li>
                                    <li><a href="">Item 43</a></li>
                                    <li><a href="">Item 44</a></li>
                                </ul>	
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Work</a>
                        <ul>
                            <li>
                                <a href="">Work 1</a>
                                <ul>
                                    <li>
                                        <a href="">Work 11</a>		
                                        <ul>
                                            <li><a href="">Work 111</a></li>
                                            <li><a href="">Work 112</a></li>
                                            <li><a href="">Work 113</a></li>
                                        </ul>							
                                    </li>
                                    <li>
                                        <a href="">Work 12</a>
                                        <ul>
                                            <li><a href="">Work 121</a></li>
                                            <li><a href="">Work 122</a></li>
                                            <li><a href="">Work 123</a></li>
                                        </ul>							
                                    </li>
                                    <li>
                                        <a href="">Work 13</a>
                                        <ul>
                                            <li><a href="">Work 131</a></li>
                                            <li><a href="">Work 132</a></li>
                                            <li><a href="">Work 133</a></li>
                                        </ul>							
                                    </li>
                                </ul>					
                            </li>
                            <li>
                                <a href="">Work 2</a>
                                <ul>
                                    <li>
                                        <a href="">Work 21</a>
                                        <ul>
                                            <li><a href="">Work 211</a></li>
                                            <li><a href="">Work 212</a></li>
                                            <li><a href="">Work 213</a></li>
                                        </ul>							
                                    </li>
                                    <li>
                                        <a href="">Work 22</a>
                                        <ul>
                                            <li><a href="">Work 221</a></li>
                                            <li><a href="">Work 222</a></li>
                                            <li><a href="">Work 223</a></li>
                                        </ul>							
                                    </li>
                                    <li>
                                        <a href="">Work 23</a>
                                        <ul>
                                            <li><a href="">Work 231</a></li>
                                            <li><a href="">Work 232</a></li>
                                            <li><a href="">Work 233</a></li>
                                        </ul>							
                                    </li>
                                </ul>					
                            </li>
                            <li>
                                <a href="">Work 3</a>
                                <ul>
                                    <li>
                                        <a href="">Work 31</a>
                                        <ul>
                                            <li><a href="">Work 311</a></li>
                                            <li><a href="">Work 312</a></li>
                                            <li><a href="">Work 313</a></li>
                                        </ul>							
                                    </li>
                                    <li>
                                        <a href="">Work 32</a>
                                        <ul>
                                            <li><a href="">Work 321</a></li>
                                            <li><a href="">Work 322</a></li>
                                            <li><a href="">Work 323</a></li>
                                        </ul>							
                                    </li>
                                    <li>
                                        <a href="">Work 33</a>
                                        <ul>
                                            <li><a href="">Work 331</a></li>
                                            <li><a href="">Work 332</a></li>
                                            <li><a href="">Work 333</a></li>
                                        </ul>							
                                    </li>
                                </ul>					
                            </li>
                        </ul>		
                    </li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </DIV>
    )
}

export default Navbar7
