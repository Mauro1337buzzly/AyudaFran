import React, { useEffect, useState } from 'react';
import itemDetail from '../itemDetail/itemDetail';
import productos from '../productos';


export const itemDetailContainer = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise (resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
      
      getData.then(res => setData(res));
     }, [])

  return (
    <itemDetail data={data}></itemDetail>


  )
}
 ;
export default itemDetailContainer;