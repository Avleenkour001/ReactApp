import Newbookform from "../components/Books/Newbookform";
import { useNavigate } from "react-router-dom";
function Newbookspage(){
    const navigate=useNavigate();
    function Addbookhandler(bookData){
    fetch(//'https://react-demo-e1aab-default-rtdb.firebaseio.com/books.json',
    'http://localhost:8080/addBook',
    {
        method:'POST',
        body:JSON.stringify(bookData),
        headers:{
            'Content-Type':'application/json'
        }
    }
    ).then(()=>{
        navigate("/");
    });
    }
    return (
        <section>
            <h1>Add new book</h1>
            <Newbookform OnAddBook={Addbookhandler}/>
        </section>
    )
    
}
export default Newbookspage;
