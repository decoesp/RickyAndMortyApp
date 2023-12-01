import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}

a{
    text-decoration: none;
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


.navLinks ul {
  list-style: none;
  display: flex;
}

.navLinks ul li {
  margin: 0 35px;
}

.link a {
  text-decoration: none;
  font-size: 14px;
  color: #525f7f;
}

.link a:hover {
  border-bottom: 1px solid #525f7f;
  color: black;
}


.mobNavLinks{
  height: auto;
  padding: 10px 5%;
  background-color: #fff;
  box-shadow: 0px 7px 7px rgb(50 50 93 / 10%), 0px 0px 0px 0px rgb(0 0 0 / 8%);
  display: none;
  transition:  height 1s linear;
}

.mobNavLinks ul{
  list-style: none;
}

.mobNavLinks ul li{
  padding: 7px 0;
  font-weight: bold;
}

.mobNavLinks ul li a:hover{
  border-bottom: 1px solid #525f7f;
}
.showNo{
  display: none;
}



/* Repo Container holds are the child element */
.repoContainer {
  width: 300px;
  margin: 1rem;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}
.repositoryName{
    max-width: 55%;
}

.repoContainer img {
  width: 100%;
  height: auto;
}

.repoContainer-info {
  color: #eee;    
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
}

.repoContainer-info h3 {
  color: #c71961;
  margin-top: 0;
  font-size: 15px;
  word-break: break-all;
  white-space: pre-wrap;
}

.repoContainer-info span {
  background-color: #c71961;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
  font-size: 12px;
}

.repoContainer-info span.green {
  color: #fff;
}

.repoContainer-info span.orange {
  color: orange;
}

.repoContainer-info span.red {
  color: red;
}

/* Overview Container */


.containerTiles{
    display: flex;
    flex-wrap: wrap;
    max-width: 1270px;
    margin: 0 auto;
  }

.overview {
  background-color: #fff;
  padding: 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  transform: translateY(101%);
  transition: transform 0.3s ease-in;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overview h4 {
  font-size: 15px;
  font-weight: bold;
  color: #000;
}

.repoLinkBtn {
  border-radius: 5px;
  border: none;
  font-size: 14px;
  color: white;
  background-color: #22254b;
  text-decoration: none;
  padding: 5px 10px;
}
.repoLinkBtn:hover {
  background-color: black;
  color: white;
}

.repoContainer:hover .overview {
  transform: translateY(0);
}

/* .serviceContainer{
  padding: 0 5%;
} */

.serviceContainer h1{
  margin: 20px 0;
}
.serviceContainer p{
  line-height: 27px;
  margin-bottom: 50px;
}


.paginationBtns{
    display: flex;
    justify-content: center;
}

.buttons{
    padding: 7px 15px;
    margin: 20px 50px;
    background-color: green;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 15px;
}

.buttons[disabled]{
    background-color: gray;
}

.buttons:hover{
    background-color: transparent;
    color: black;
    outline: 2px solid black;
}

.statusSpan{
    margin-left: 5px;
}

.footer{
  text-align: center;
  margin:10px auto 5px;
  font-size: 12px;
}
.serviceBox{
  margin: auto 5%;
}

.actorBox {
    display: flex;
    max-width: 768px;
    margin: 50px auto;
    justify-content: space-around;
    align-items: stretch;
    gap: 20px; 
  }
  

.imgSide{
  text-align: center;
}
.detailSide{
  min-width: 50%;
  display: flex;
  justify-content: center;
  background-color: #fae5e5;
  padding: 10px 10px;
  color: #525f7f;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}

#root {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.detailSide h3{
  margin: 10px 0;
}

.detailSide h4{
  margin: 8px 0;
}


.detailSide h5{
  margin: 7px 0;
}

.imgSide img{
  border-radius: 50%;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.serviceBox h1{
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .navLinks,
  .logInButton {
    display: none;
  }
  .hamMenu {
    display: block;
  }
  .mobNavLinks{
    display: block;
  }
  .actorBox{
    flex-direction: column;
  }
}
`;
