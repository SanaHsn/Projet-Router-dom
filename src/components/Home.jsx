import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Search() {

    const[data, setData]= useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(all =>setData(all.data))
        .catch(error => console.error(error));
    },[]);

    const [filtre, setFiltre] = useState(data);
    const [input, setInput] =useState('') ;
    
    useEffect(()=>{
        
        const filtrePays = data.filter(pays=> pays.name.common.toUpperCase().startsWith(input.toUpperCase())
        );
        
        setFiltre(filtrePays);
    },[data, input]);
    
    // Fonction appelée lorsque la région sélectionnée change
    const [regionSelect, setRegionSelect] = useState('All');
    const handleRegion =(e)=>{
        setRegionSelect(e.target.value) 
    }


    return (
    <div className='home'>
        <div className='inputSearch'>
            <div className='search'>
                <input type="search" placeholder='Search for a country'
                onChange={(e)=>setInput(e.target.value)}
                />
            </div>
         {/* Seclectionner la region */}
            <div className='select'>
                <select value={regionSelect} onChange={handleRegion} >
                    <option value='All'>All regions</option>
                    <option  value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>

                </select>
            </div>
        </div>
        <div className='bigHome'>
            {filtre.filter(item =>regionSelect ==='All' || item.region === regionSelect).map((item, index)=>{ 
            return(
                    <Link style={{textDecoration:'none', color:'black'}} to={`${item.cca3}`} key={index}>
                <div key={index} className='card'>
                    <img className='imgPays' src={item.flags.png} alt="" />
                    <div className='infos'>
                    <h2> {item.name.common} </h2>
                    <p><b>Population :</b> {item.population} </p>
                    <p><b>Region : </b>{item.region} </p>
                    <p> <b>Capital :</b> {item.capital} </p>
                    </div>
                </div>
                    </Link>
            )})}
            
        </div>
        </div>
    );
}

export default Search;