import './App.css';
import React, {Component} from 'react';
import { addExpense } from './store/expensesAction';
import { connect } from 'react-redux'
import ExpensesForm from './components/ExpensesForm';
import ExpensesInfo from './components/ExpensesInfo';

 class App extends Component {
   




addNewExpense=(newExpense) => {
     this.props.addExpense(newExpense)
   }

   


  render() {
    return (
      <div className="App">
        <ExpensesForm  addExpense ={this.addNewExpense} />
        {this.props.expenses.map((expense, index) => {
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

const mapStateToProps=(state) =>({
  expenses:state.expenses
});

const mapDispatchToProps={
  addExpense:addExpense
}

export default connect(mapStateToProps ,mapDispatchToProps)(App);