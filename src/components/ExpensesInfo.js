import React from 'react'

function ExpensesInfo({day,item,description,amount}) {
    return (
        <div className="info">
              <h3>Day:{day}</h3>
              <h3>Item:{item}</h3>
              <p>Description:{description}</p>
              <h3>Amount:{amount}</h3>
        </div>
    )
}


export default ExpensesInfo;