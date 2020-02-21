import React , {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import CharCard from "./charCard";


const Charstyle = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;

`;


const Characters = () => {
    const [char,setchar] = useState([]);

    useEffect(() => {


        axios
        .get("https://swapi.co/api/people")
        .then(res => {
            console.log(res.data.results);
            setchar(res.data.results);
        })
        .catch(err => console.log(err));
    },[]);

return(
    <Charstyle>
        {char.map(chars => (
            <CharCard char={chars} key={chars.name} />
        ))}
    </Charstyle>
);

};

export default Characters;