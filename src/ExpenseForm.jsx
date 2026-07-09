
import { useState , useEffect } from "react"

function ExpenseForm({ addExpense  , currentval , updateExpense}) {
    let [formdata, setFormdata] = useState({
        title:'',
        price:'',
        category:'',
        date:''
    });
    // console.log(currentval);
    
    useEffect(()=>{
        if(currentval){
            setFormdata(currentval)
        }
    } , [currentval])

    function handleChange(e){
        setFormdata({
            ...formdata,
            [e.target.name] :e.target.value 
        })
    }

    function submitForm(e){
        e.preventDefault();

        if(formdata.title == '' || formdata.price == '' || formdata.category == '' || formdata.date == ''){
            alert('Please fill all fields');
            return;
        }

        if(currentval){
            updateExpense(formdata)
        }else{
            addExpense(formdata);
        }
        

        setFormdata({
            title:'',
            price:'',
            category:'',
            date:''
        });

    }
    return (
        <div className="panel">
            <h2>Add Expense</h2>
            <form onSubmit={submitForm}>
                <label>Title</label>
                <input onChange={handleChange} value={formdata.title} name='title' placeholder="Expense title" />
                <label>Amount</label>
                <input onChange={handleChange} value={formdata.price} name='price' placeholder="$0.00" />
                <label>Category</label>
                <select onChange={handleChange} value={formdata.category} name='category'> 
                    <option>Food</option>
                    <option>Transport</option>
                    <option>Shopping</option>
                    <option>Bills</option>
                </select>
                <label>Date</label>
                <input onChange={handleChange} value={formdata.date} name='date' type="date" />
                <button>{currentval ? 'Update Expense' : 'Add Expense'}</button>
            </form>
        </div>
    )
}
export default ExpenseForm