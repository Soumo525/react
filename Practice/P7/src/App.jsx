import React, { useState } from 'react';
import './App.css'
function App() {
  const countries = [
    {
      name: "A",
      states: [
        {
          name: "1",
          cities: ["A1", "A2"]
        },
        {
          name: "2",
          cities: ["A3", "A4"]
        },
      ],
    },
    {
      name: "B",
      states: [
        {
          name: "5",
          cities: ["B2", "A9"]
        },
        {
          name: "3",
          cities: ["A6", "A5"]
        },
      ]
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);

  const changeCountry = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    const selectedCountryData = countries.find(ctr => ctr.name === selectedCountry);
    setStates(selectedCountryData ? selectedCountryData.states : []);
    setSelectedState("");
    setSelectedCity("");
  };

  return (
    <div className='justify-content-center d-flex w-100 vh-100 bg-dark text-black'>
      <div className='w-50 mt-5'>
        <select className='form-control' value={selectedCountry} onChange={changeCountry}>
          <option value="">Country</option>
          {countries.map(ctr => (
            <option key={ctr.name} value={ctr.name}>{ctr.name}</option>
          ))}
        </select>
        <br />
        <select className='form-control' value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
          <option value="">State</option>
          {states.map(state => (
            <option key={state.name} value={state.name}>{state.name}</option>
          ))}
        </select>
        <br />
        <select className='form-control' value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">City</option>
          {states
            .filter(state => state.name === selectedState)
            .map(state => state.cities.map(city => (
              <option key={city} value={city}>{city}</option>
            )))
          }
        </select>
        <br />
      </div>
    </div>
  );
}

export default App;
