import React, { useState } from 'react';
// import axios, {isCancel, AxiosError} from 'axios';

function Table2(props) {

  return (
    <div className="container" style={{display:"flex", justifyContent:"center"}}>
      <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Quote</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {console.log(props.tableData.quotes)}
            {/* {console.log(props.tableData.todos[0].completed)} */}
            {props.tableData.quotes.map(item => (
              <tr key={item.id}>
                <td className="w-5">{item.id}</td>
                <td className="w-20">{item.quote}</td>
                <td className="w-55">{item.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    // <h1>hello</h1>
  )
}

export default Table2;