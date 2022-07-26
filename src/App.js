import './App.css';
import Song from './Song'
import Playlist from './Playlist'
function App() {
  return (
    <div>
      <Playlist>
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
      </Playlist>
    </div>
  )
}
export default App;