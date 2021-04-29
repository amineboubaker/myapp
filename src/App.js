import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/navbar/navbar';

import Footer from './components/footer/footer';
import Suggestion from './components/suggestion/suggestion';
import Comments from './components/comments/Comments';
import {MainVideo} from './components/mainvideo/MainVideo';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <MainVideo/>
      <Suggestion />
      <Comments />
      <Footer />

      
      
      

      
      


    
    </div>
  );
}

export default App;
