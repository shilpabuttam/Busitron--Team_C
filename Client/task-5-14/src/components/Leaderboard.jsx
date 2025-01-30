
import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../api';

const Leaderboard = ({ filters }) => {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLeaderboard(filters);
            setPlayers(data);
        };
        fetchData();
    }, [filters]);

    const filteredPlayers = players.filter(player => 
        player.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search by username..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className='mb-4 p-2 border border-gray-400 rounded'
            />
            <table className='border-collapse border border-slate-500'>
                <thead>
                    <tr>
                        <th className='text-3xl border border-slate-600'>Rank</th>
                        <th className='text-3xl border border-slate-600'>Username</th>
                        <th className='text-3xl border border-slate-600'>Score</th>
                        <th className='text-3xl border border-slate-600'>Kills</th>
                        <th className='text-3xl border border-slate-600'>Game Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayers.map((player, index) => (
                        <tr key={player._id}>
                            <td className=' border border-slate-700'>{index + 1}</td>
                            <td className=' border border-slate-700'>{player.username}</td>
                            <td className=' border border-slate-700'>{player.score}</td>
                            <td className='border border-slate-700'>{player.kills}</td>
                            <td className='border border-slate-700'>{player.gameType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
