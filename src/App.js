import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Steps from './components/Steps';
import Preview from './components/Preview';
import Reviews from './components/Reviews';
import Info from './components/Info';
import Quotation from './components/Quotation';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             menu: [
                 {
                     id: 1,
                     title: 'eBook Purchase',
                     link: '#steps'
                 },
                 {
                     id: 2,
                     title: 'eBook Preview',
                     link: '#preview'
                 },
                 {
                     id: 3,
                     title: 'Reviews',
                     link: '#reviews'
                 },
                 {
                     id: 4,
                     title: 'Author',
                     link: '#author'
                 },
                 {
                     id: 5,
                     title: 'Contact',
                     link: '#contact'
                 },
             ]
         }
     }

     render() {
         return(
             <div className="App">
                 <div className="container">
                      <Header menu={this.state.menu}/>
                      <Main/>
                      <Steps/>
                      <Preview/>
                      <Reviews/>
                      <Info/>
                      <Quotation/>
                      <Contact/>
                      <Footer menu={this.state.menu}/>
                 </div>
             </div>
         );
     }
 }

 export default App;
