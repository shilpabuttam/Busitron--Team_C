import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age > 18) {
      navigate('/home'); // Redirect to the Home page
    } else {
      alert('Access Denied: Age must be greater than 18.');
    }
  };

  return (
    <div className="main" style={{border:'2px solid black',width:'400px',marginLeft:'auto',marginRight:'auto',marginTop:'200px',padding:'20px',textAlign:'center',backgroundColor:'orange',border:'none'}}>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br/>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label><br/>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{backgroundColor:'green',borderRadius:'5px',border:'none',marginTop:'30px'}}>Submit</button>
      </form>
    </div>
  );
}

export default Main;
