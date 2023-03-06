
import { Link } from "react-router-dom";

function Home({data}) {

    return (
        <div className='bigHome'>
            {data.map((item, index)=>{ 
            return(
                    <Link to={`/${item.cca3}`} key={index}>
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
    );
}

export default Home;