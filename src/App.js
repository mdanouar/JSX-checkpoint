import logo from './logo.svg';
import './App.css';
import './Style.css'
import anouar from './Anonymous-child-748192.jpg'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

<h1 classname="title red">anouar</h1>

<br />

<img src={anouar} />

<br/>

<img src="/2IxPQ1iF_400x400.jpg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App ;
