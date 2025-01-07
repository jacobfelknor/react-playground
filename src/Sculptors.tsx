import { useState } from 'react';

let nextId = 0;

interface Artist {
    id: number,
    name: string,
}

export default function Sculptors() {
    const [name, setName] = useState('');
    const [artists, setArtists]: [Array<Artist>, Function] = useState([]);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            &nbsp;
            <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
            }}>Add</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}
                        &nbsp;
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
