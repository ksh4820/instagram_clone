import React from 'react';
import './App.css'
import Header from './components/Header/index'
import Post from './components/Post/index'
import Side from './components/Side/Side'

class App extends React.Component {
  render() {
    return <div className="App">
        <Header />
        <main className="App-main">
          <section className="App-section">
            {/* post */}
            <div className="App-container">
              <Post nickname="Kang" avatar="https://i.redd.it/aythl3gfx1q31.jpg" caption="Hello" image="https://i.redd.it/tvmdd5hsy1q31.jpg"/>
              <Post nickname="Sang" avatar="https://i.redd.it/aythl3gfx1q31.jpg" caption="Hello2" image="https://i.redd.it/tvmdd5hsy1q31.jpg"/>
            </div>
            {/* side */}
            {/* <div className="App-side"> */}
            <Side avatar="https://i.redd.it/aythl3gfx1q31.jpg"/>
            {/* </div> */}
          </section>
        </main>
      </div>
  }
}

export default App;
