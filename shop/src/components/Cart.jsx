import React from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, addCount, minusCount } from '../store';

export default function Cart() {
  const item = useSelector((state) => {return state.item});
  const user = useSelector((state) => {return state.user});
  const dispatch = useDispatch();

  return (
<Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>수량추가</th>
    </tr>
  </thead>
  <tbody>
    {item.map((item, i)=>
    <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.count}</td>
    <td>
      <button onClick={()=>{ dispatch(addCount(item.id)) }} className='add_btn' style={{margin:"5px"}}>+</button>
      <button onClick={()=>{ dispatch(minusCount(item.id)) }} className='minus_btn' style={{margin:"5px"}}>-</button>
    </td>
  </tr>
    )}
  </tbody>
</Table> 
  )
}
