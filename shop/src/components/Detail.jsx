import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCart } from '../store';

export default function Detail({ shoes }) {
    const { num } = useParams();
    const [sale, setSale] = useState(true);
    const [tab, setTab] = useState(0);
    const found = shoes.find((shoe) => num == (shoe.id + 1));
    console.log(found);
    useEffect(() => {
        setTimeout(() => {setSale(false)}, 3000);
    }, []);
    const dispatch = useDispatch();

    return (
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${num}.jpg`} alt='상품 이미지' width="100%" />
    </div>
    {sale ? <div>3초 안에 사시면 할인해 드립니다.</div> : <div>할인 끝</div>}
    <div className="col-md-6">
      <h4 className="pt-5">{found.title}</h4>
      <p>{found.content}</p>
      <p>{found.price}</p>
      <button className="btn btn-danger" onClick={()=>dispatch(addCart({id: found.id, name: found.title, count: 1}))}>장바구니에 담기</button> 
    </div>
  </div>
  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>setTab(0)}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>setTab(1)}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>setTab(2)}>버튼2</Nav.Link>
    </Nav.Item>
  </Nav>
  <Tab tab={tab}/>
</div> 
  )
}

function Tab({tab}) {
    const [fade, setFade] = useState('');
    
    useEffect(() => {
        setTimeout(()=>{setFade('end')}, 10)
        return () => {
            setFade('')
        }
    }, [tab]);
    return (
        <div className={`start ${fade}`}>
            { [<h1>내용0</h1>, <h1>내용1</h1>, <h1>내용2</h1>][tab] }
        </div>
    )
}
