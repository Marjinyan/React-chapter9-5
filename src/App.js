import './App.css';
import Song from './Song'
function App() {
  return (
    <div className="App">
      <h1>Playlist</h1>
      
      <Song
          title    = "I have Nothing"
          singer   = "Whitney Houston"
          duration = "3" 
      />
      <Song
           title    = "Imagine"
           singer   = "John Lennon"
           duration = "5.3"
      />
      <Song
          title    = "Yesterday"
          singer   = "The Beatles"
          duration = "4.2" 
      />
    </div>
  )
}
export default App