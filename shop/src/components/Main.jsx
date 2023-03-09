import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Main( {shoes, changeShoes} ) {
    const [word, setWord] = useState('');
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (isNaN(word)) {
            alert("숫자 외 입력금지");
        }
    }, [word]);

    const showMore = async() => {
        try {
        if (count === 0) {
        await axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((response) => {
            changeShoes(response.data);
            setCount((prev)=>prev+1);
            })
        }
        if (count === 1) {
            await axios.get('https://codingapple1.github.io/shop/data3.json')
            .then((response) => {
                changeShoes(response.data);
                setCount((prev)=>prev+1);
                })
            }
      }
        catch (error) {
            console.log(error);
        }
    }

    return (
    <>
    <input className="search_input" value={word} placeholder="상품명 입력" onChange={(e) => setWord(e.target.value)}/>
    <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          {shoes.map((shoe) => {
            return (
              <Card
              shoe={shoe}
              onClick={()=>navigate(`/detail/${shoe.id+1}`)}
              />
            );
          })}
        </div>
      </div>
      {count < 2 ? <button className='show_more' onClick={showMore}>더보기</button> : null}
    </>
  )
}
