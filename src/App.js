import './App.css';
import React, {Component} from 'react';
import ExpensesForm from './components/ExpensesForm';
import ExpensesInfo from './components/ExpensesInfo';

 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       expenses:[{
        day:"Monday",
        item:"Provisions",
        description:"Biscuit,Milk,Milo,Drink",
        amount:50
       },
       {
        day:"Tuesday",
      item:"Accesories",
      description:"Laptop",
      amount:120
      },
      {
        day:"Tuesday",
      item:"Accesories",
      description:"Laptop",
      amount:120
      }
      

      

       ],
       day:"",
    item:"",
    descrption:"",
    amount:""
     };

   }




addNewExpense=(newExpense) => {
     this.setState({
       expenses:[...this.state.expenses,newExpense],
       
     })
   }

   


  render() {
    return (
      <div className="App">
        <ExpensesForm  addExpense ={this.addNewExpense} />
        {this.state.expenses.map((expense, index) => {
          return(
            <ExpensesInfo 
              key={index}
              day={expense.day}
              item={expense.item}
              description={expense.description}
              amount={expense.amount}
            
            />
          );
        })}
      </div>
    )
  }
}
export default App;