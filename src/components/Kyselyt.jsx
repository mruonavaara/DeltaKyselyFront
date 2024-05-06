import { useEffect, useState } from "react"
import { Link} from "react-router-dom";
export default function Kyselyt(){
    const [kyselyt, setKyselyt] = useState([]);

    useEffect(() => {
        fetchKyselyt();
    }, []);

    const fetchKyselyt = async () => {
        try {
            const response = await fetch("http://localhost:8080/kyselyt");
            const data = await response.json();
            setKyselyt(data);
            console.log("Kyselyt haettu:", data);
        } catch (error) {
            console.error("Virhe haettaessa kyselyitä:", error);
        }
    };

    

    return (
        <div>
            <h1>Kyselyt:</h1>
            <ul>
                {kyselyt.map((kysely, index) => (
                    <li key={index} >
                        <Link to={`/kysely/${kysely.kyselyId}`}>
                            {kysely.otsikko}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}