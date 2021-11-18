import React from 'react';
import './SongTable.css'

const SongTable = (props) => {
    return ( 
        <div className="outterbox">
            <div className="innerbox4">
                <table>
                    {props.songs.map(song =>
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                    </tr>
                    )}
                </table>
            </div>
        </div>
    );
}

export default SongTable;