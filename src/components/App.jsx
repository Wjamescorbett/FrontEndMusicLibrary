import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';



class App extends Component {

    state = {
    firstName: 'Reggie',
    lastName: 'White'
    };

    state2 = {
    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }

    constructor(props) {
        super(props);
        this.superheroes = [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondaryAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondaryAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondaryAbility: 'Shoots web'
            }
        ];
    }

    AlertUserFunction = (event) => {
        event.preventDefault();
        alert('devCodeCamp')
        }

    render() {
        return(
            <form onSubmit={(event) => this.AlertUserFunction(event)}>
                <div className='container-fluid'>
                    <TitleBar />
                </div>
            </form>
        )
    }
}

export default App;






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