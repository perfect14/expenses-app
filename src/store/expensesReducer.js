const initialState ={
  expenses:[{
      day:"Monday",
      item:"Provisions",
      description:"Biscuit,Milk,Milo,Drink",
      amount:"50"
    },
    {
      day:"Tuesday",
      item:"Accesories",
      description:"Laptop",
      amount:"120"
   },

    ],
    day:"",
    item:"",
    descrption:"",
    amount:""
  };





const expensesReducer = (state=initialState , action) => {
  switch (action.type) {
      case "ADD_EXPENSE":
          const newExpense= {
              day:action.payload.day,
              item:action.payload.item,
              description:action.payload.description,
              amount:action.payload.amount,
            }
            return {...state , expenses:[...this.state.expenses,newExpense]};
      
  
      default:
          return state;
  }
}



export default expensesReducer;
