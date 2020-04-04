export const addExpense =(expense) => {
    return(
        {
            type:'ADD_EXPENSE',
            payload:expense
        }

    )
}