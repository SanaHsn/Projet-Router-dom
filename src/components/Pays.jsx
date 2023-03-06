import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Pays({data}) {
    // const [language, setLangague] = useState([]);
    
// useNavigate: Retour a la page suivante
    const navigate = useNavigate();
// useParams: Recuperrer
    const {id} = useParams();
    // let paysID =""
    // for (const atri in id) {
    //     console.log(atri);
    //     console.log(id[atri]);
    //     paysID +=id[atri];
        
    // }
    const pays = data.find((e)=>e.cca3===id)
    
    if (!pays) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bigPays' >
            <div className='back'>
            <button onClick={() => navigate(-1)}>Back</button> 
            </div>

            <div className='pays'>
                <div>
                    <img className='imgInfos' src={pays.flags.png} alt="" />
                </div>
                <div className='allInfos' >
                    <h2> {pays.name.common} </h2>
                    <div className='FullInfos'>
                        <div>
                            <p> <b>Native name :</b> {pays.name.common} </p>
                            <p> <b>Population :</b> {pays.population} </p>
                            <p> <b>Region :</b> {pays.region} </p>
                            <p> <b>Sub Region :</b> {pays.subregion} </p>
                            <p> <b> Capital :</b> {pays.capital} </p>
                        
                        </div>
                        <div>
                            <p> <b> Top Level Domain :</b> {pays.tld} </p>
                            <p> <b> Currencies:</b> </p>
                            <p> <b> Languages:</b>  {Object.keys(pays.languages).map((index)=>{
                                return(
                                <span style={{padding: '5px'}} key={index}>{pays.languages[index]}</span>
                            )})}</p>
                        
                            
                            
                        </div>
                        <div className='contries'>
                                <p><b> Border contries:</b></p>
                                    {pays.borders ? pays.borders.map((e,i)=>(
                                    <Link to={`/${e}`}>
                                        <button className='btnContries' key={i}>{e}</button>
                                        </Link>
                                        )):null}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Pays;