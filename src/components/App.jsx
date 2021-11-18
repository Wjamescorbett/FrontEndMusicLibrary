import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import SongTable from './SongTable/SongTable';
import TitleBar from './TitleBar/TitleBar';
import CreateSong from './CreateSong/CreateSong';


class App extends Component {

    state = {
        songs: []
    };

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            });
        }   
        catch (ex) {
            console.log('Error in API call')
        }
    }


    // CreateSong 

    CreateSongFunction = (event) => {
        event.preventDefault();
        
        }

    render() {
        console.log("Render Happened!!!!!!!!!!!!")
        return(
            <form onSubmit={(event) => this.CreateSongFunction(event)}>
                <div className='container-fluid'>
                    <TitleBar />
                    <SongTable songs = {this.state.songs} />
                    <div className = 'outterbox'>
                        <div className = 'innerbox3'>
                            <button type="submit">Add Song To Database</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default App;



// axio.post = 


// <form onSubmit={(event) => this.AlertUserFunction(event)}>
// <div className='container-fluid'>
//     <TitleBar />
//     <FnameLname fname = {this.state.firstName} lname = {this.state.lastName}/>
//     <NamesList names = {this.state2.names}/>
//     <div className="outterbox">
//         <div className="innerbox3">
//             <button type="submit">Click Me</button>
//         </div>
//     </div>
//     <SuperheroTable heros = {this.superheroes}/>
// </div>
// </form>