import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ListGroup, Button, Container, Card } from 'react-bootstrap'; 
import CharacterDetail from './CharacterDetail';


function CharacterList() {
    const [url,setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7c7328547481e4ce2f59080fb4759726&hash=000ec5d29edbda939132c5729db9d8f4")
    const [item,setItem] = useState([]);
    const [search,setSearch] = useState("");
    const [detailToggle, setDetailToggle] = useState(false)
    
    useEffect(()=>{
      const fetch=async()=>{
        const res=await axios.get(url)
        setItem(res.data.data.results);
        console.log(res.data.data.results)
        console.log(res.data.data.results[0]['thumbnail']['path'])
      }
      fetch();
    },[url])  
    
  return (
    <div>
        <Card className="border rounded mx-auto my-4 w-50" defaultActiveKey="#link1">
            
                {item.map( character  => (
                    <Card.Body>
                <Card.Title className="d-flex justify-content-around align-items-center" >
                    {character.name}
                    {/* <Button className='ms-4 w-50' as={Link} to={`../edit-customer/${customer.id}`} variant='outline-success'>Edit</Button> */}
                </Card.Title>
                <Card.Img src={`${character['thumbnail']['path']}.jpg`}/>
                <Button className='w-50' variant='outline-success' onClick={() => setDetailToggle(!detailToggle)}>View Details</Button>
                <div>
                    {(detailToggle) && <CharacterDetail currentChar={character}/>}
                </div>



                </Card.Body>



            ))}
        </Card>

    </div>
  )
}

export default CharacterList
