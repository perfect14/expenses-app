import './App.css';
import React, { Component } from 'react'

 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       expense:[
       
      {
        day:"Monday",
        item:"provisions",
        description:"milo,sardine,nido,biscuit",
        amount:"30"
      }

       ],
       day:"",
       item:"",
       description:"",
       amount:""
     };

   }




   handleSubmit=(e) => {
     e.preventDefault();
     const newExpense= {
       day:this.state.day,
       item:this.state.item,
       description:this.state.description,
       amount:this.state.amount
     }
     this.setState({
       expense:[...this.state.expense,newExpense],
       day:"",
       item:"",
       description:"",
       amount:""
       
     })
   }

   handleChange=(e) =>{
     this.setState({
       [e.target.name]:e.target.value
     });
   }


  render() {
    return (
      <div className="App">
        <form onSubmit ={this.handleSubmit}className="form" >
          <div className="form-input">
            <label>Day</label>
            <input type="text" name="day" value={this.state.day} onChange={this.handleChange} />
          </div>
          <div className="form-input">
            <label>Item</label>
            <input type="text" name="item"value={this.state.item} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <label>Description</label>
            <input type="text" name="description"value={this.state.description} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <label>Amount(Gh)</label>
            <input type="number" name="amount" value={this.state.amount}onChange={this.handleChange}/>
          </div>
            <button type="submit">Add Expense</button>
        </form>
        {this.state.expense.map(expense=>{
          return(
            <div className="info">
              <h4>Day:{expense.day}</h4>
              <h3>item:{expense.item}</h3>
              <h3>Description:{expense.description}</h3>
              <h4>Amount:{expense.amount}</h4>
            </div>
          );
        })}
      </div>
    )
  }
}
export default App;