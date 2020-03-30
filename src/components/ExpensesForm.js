import React,{ Component} from 'react'

class expensesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          day:"",
          item:"",
          descrption:"",
          amount:""
        }
    }



    handleChange=(e) =>{
        this.setState({
          [e.target.name]:e.target.value
        });
      }



      handleSubmit=(e) => {
        e.preventDefault();
        const newExpense= {
          day:this.state.day,
          item:this.state.item,
          description:this.state.description,
          amount:this.state.amount
        }
        this.props.addExpense(newExpense)
        this.setState({
          day:"",
          item:"",
          description:"",
          amount:""
        })
      }


    render() {
        return (
            <div>
                <form onSubmit ={this.handleSubmit}className="form" >
          <div className="form-input">
            <label>Day</label>
            <input type="text" name="day" value={this.state.day} onChange={this.handleChange} />
          </div>
          <div className="form-input">
            <label>Item</label>
            <input type="item" name="item"value={this.state.item} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <label>Description</label>
            <input type="text" name="description" value={this.state.description}onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <label>Amount</label>
            <input type="number" name="amount" value={this.state.amount}onChange={this.handleChange}/>
          </div>
            <button type="submit">Add Expense</button>
        </form>
            </div>
        )
    }
}

export default expensesForm;