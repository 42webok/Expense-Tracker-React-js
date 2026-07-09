

function ExpenseList({data , deleteItem , editFun , searchQuery}) {
   
    // if(!data || data == ''){
    //     return(
    //          <div className="panel">
    //              <div className="top"><h2>No Expense Found</h2></div>
    //          </div>
    //     )
    // }

    

    function deleteData(index){
        alert('Are you really want to delete ? ')
        deleteItem(index)
    }

    function editData(index){
        editFun(index)
    }

    function getInputValue(e){
        searchQuery(e.target.value)
    }

    

    return (
        <div className="panel">
            <div className="top"><h2>Expense List</h2>
            <input className="search" onChange={getInputValue}  placeholder="Search by title..." />
            </div>
            {data.length === 0 ? (
            <h3>No Expense Found</h3>
            ) : (
            <table>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                {data.map((item , index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td><span className="badge">{item.category}</span></td>
                        <td>{item.date}</td>
                        <td>{item.price}</td>
                        <td> 
                            <button onClick={()=> editData(index)}  >Edit</button>
                            <button onClick={()=> deleteData(index)}  >Delete</button>
                        </td>
                    </tr>
                ))}
               
               
            </table>
            )}
        </div>
    )
}

export default ExpenseList