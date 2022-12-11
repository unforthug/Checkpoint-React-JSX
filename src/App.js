import React from 'react';
import './App.css';
import Navbarmenu from './Components/Navbarmenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recherche from './Components/Recherche';
import Prod from './Components/Prod';
import im1 from './Components/apple-iphone.jpg' 
import im2 from '../src/sumsung.jpg'
import im3 from './Components/tshirt.jpg'
import im4 from './Components/bmw.jpg'
import im5 from './Components/ball.jpg'
import im6 from './Components/pc.jpg'
import im7 from './Components/chaise.jpg'
import im8 from './Components/micro.jpg' 
import Footer from './Components/Footer';



function App() {

  let produits = [{name : "iPhone" , price : 1100 , description : "The iPhone is a smartphone made by Apple"},
{name : "Samsung" , price : 800 , description : "Samsung,one of the world's largest producers of electronic devices"},
{name : "T-Shirt" , price : 60 , description : " made of a stretchy, light, and inexpensive fabric and are easy to clean."},
{name : "BMW" , price : 33000 , description : " the world's leading manufacturer of premium automobiles and motorcycles"},
{name : "BasketBall" , price : 25 , description : "This is a Good BasketBall"},
{name : "PC" , price : 3200 , description : "used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings."},
{name : "Chaise Gamer" , price : 350 , description : "Chaise Gamer, Gaming Chair au meilleur prix en Tunisie."},
{name : "Micro" , price : 30 , description : "Enjoy Streaming"}] 

  return (
    <div className="App">
     <Navbarmenu></Navbarmenu>
     <div className='flex'>
      <div className='Rech'>< Recherche></Recherche></div>
      <div className='produit'>
      <div className='item'><img src={im1}/><Prod name={produits[0].name} price={produits[0].price} description={produits[0].description}/></div>
      <div className='item'><img src={im2}/><Prod name={produits[1].name} price={produits[1].price} description={produits[1].description}/></div>
      <div className='item'><img src={im3}/><Prod name={produits[2].name} price={produits[2].price} description={produits[2].description}/></div>
      <div className='item'><img src={im4}/><Prod name={produits[3].name} price={produits[3].price} description={produits[3].description}/></div>
      <div className='item'><img src={im5}/><Prod name={produits[4].name} price={produits[4].price} description={produits[4].description}/></div>
      <div className='item'><img src={im6}/><Prod name={produits[5].name} price={produits[5].price} description={produits[5].description}/></div>
      <div className='item'><img src={im7}/><Prod name={produits[6].name} price={produits[6].price} description={produits[6].description}/></div>
      <div className='item'><img src={im8}/><Prod name={produits[7].name} price={produits[7].price} description={produits[7].description}/></div>
     </div>
    </div>
    <div className='footer'><Footer></Footer></div>
    </div>
  );
}

export default App;
