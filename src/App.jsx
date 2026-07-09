
import './App.css'
import TotalCards from "./TotalCards"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"
import { useState , useEffect } from 'react'

function App() {
  let [expense , setExpense] = useState(()=>{
    let saved = localStorage.getItem('expense');
    return saved ? JSON.parse(saved) : [];
  });
   
  const [currentExpense, setCurrentExpense] = useState(null);
  const [search, setSearch] = useState("");

  

  function addExpense(expenses){
    setExpense((prev)=> [...prev , expenses])
  }
  
   useEffect(()=>{
      localStorage.setItem('expense' , JSON.stringify(expense))
    } , [expense])

   function editData(id){
    setCurrentExpense({
        ...expense[id],
        index: id
    });
    console.log(currentExpense);
}

function updateExpense(updatedExpense) {
    setExpense((prev) =>
        prev.map((item, index) =>
            index === updatedExpense.index
                ? updatedExpense
                : item
        )
    );
    setCurrentExpense(null)
}
    
function daleteData(id){
      setExpense((prev) => prev.filter((item , index) => index != id ))
}



let totalExpense = expense.reduce((sum , item) => sum + Number(item.price) , 0);

const filteredExpense = expense.filter((item) => {
    const query = search.toLowerCase();

    return (
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.date.toLowerCase().includes(query) ||
        item.price.toString().includes(query)
    );
});

function searchQuery(value){
      setSearch(value);   
}

return (
    <>
      <div className="wrap">
        <h1>💰 Expense Tracker</h1>
        <TotalCards expenseTotal={totalExpense} />

        <div className="grid">
          <ExpenseForm updateExpense={updateExpense} currentval={currentExpense}  addExpense={addExpense} />

          <ExpenseList searchQuery={searchQuery} editFun={editData}  deleteItem={daleteData}  data={filteredExpense} />
        </div></div>
    </>
  )
}

export default App
