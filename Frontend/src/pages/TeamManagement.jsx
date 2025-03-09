import { useState } from "react";
import "../styles/TeamManagement.css"; // Import CSS file
import Hower from '../components/Hower.jsx'

const dummyPlayers = [
  { id: 1, name: "John Silva", team: "University A", price: 1200000 },
  { id: 2, name: "Arjun Perera", team: "University B", price: 900000 },
  { id: 3, name: "Ravi Fernando", team: "University C", price: 1500000 },
  { id: 4, name: "Sahan Jayasuriya", team: "University D", price: 1100000 },
  {id: 5, name: "Nadun Sasanga", team: "University E", price: 1350000},
];

export default function TeamManagement() {
  const [team, setTeam] = useState([]);
  const [budget, setBudget] = useState(9000000);

  const addToTeam = (player) => {
    if (budget - player.price >= 0 && !team.find((p) => p.id === player.id)) {
      setTeam([...team, player]);
      setBudget(budget - player.price);
    } else {
      alert("Not enough budget or player already added!");
    }
  };

  const removeFromTeam = (player) => {
    setTeam(team.filter((p) => p.id !== player.id));
    setBudget(budget + player.price);
  };

  return (
    <div className="team-container">
      <h2>Manage Your Team</h2>
      <p>Budget: Rs.{budget}</p>
      
      <h3>Available Players:</h3>
      <ul>
        {dummyPlayers.map((player) => (
            <li key={player.id} className="player-card">
                <div className="player-image"></div> {/* Blank Image Placeholder */}
                <p>{player.name}  Rs.{player.price}</p>
                <button onClick={() => addToTeam(player)}>Add</button>
            </li>
        ))}
        </ul>


      <h3>Your Team:</h3>
      <ul className="team-list">
              {team.length > 0 ? (
                team.map((player) => (
                  <li key={player.id} className="team-player">
                    <Hower player={player} />
                    <button className="remove-btn" onClick={() => removeFromTeam(player)}>Remove</button>
                  </li>
                ))
              ) : (
                <p>No players selected.</p>
              )}
            </ul>
    </div>
  );
}
