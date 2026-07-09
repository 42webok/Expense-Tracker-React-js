
function TotalCards({expenseTotal}){
    return(
        <div className="cards">
            <div className="card"><h3>Total Income</h3><h2>$5,500</h2></div>
            <div className="card"><h3>Total Expense</h3><h2>${parseFloat(expenseTotal)}</h2></div>
            <div className="card"><h3>Balance</h3><h2>$3,650</h2></div>
        </div>
    )
}


export default TotalCards