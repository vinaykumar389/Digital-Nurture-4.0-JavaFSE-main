import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const officeSpaces = [
  {
    name: "Alpha Tower",
    address: "Hitech City, Hyderabad",
    rent: 55000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cyber Pearl",
    address: "Kavuri Hills, Hyderabad",
    rent: 78000,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Gamma Heights",
    address: "Madhapur, Hyderabad",
    rent: 65000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKP7B9IT0Ah_dwBeIbWzZiOnF9MxB75M0fA&s"
  }
];

function Home() {
  return (
    <div className="App home-bg">
      <h1 className="home-title">🏢 Office Space Rental Listings</h1>
      <h3 className="home-subtitle">Click any location to view full details</h3>

      <div className="card-container">
        {officeSpaces.map((office, index) => {
          const rentClass = office.rent <= 60000 ? 'textRed' : 'textGreen';
          return (
            <div key={index} className="card">
              <Link to={`/office/${office.name}`} state={office} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={office.image} alt={office.name} />
                <h2>{office.name}</h2>
              </Link>
              <p><strong>Address:</strong> {office.address}</p>
              <p className={rentClass}><strong>Rent:</strong> ₹{office.rent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
