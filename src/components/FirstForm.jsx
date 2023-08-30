import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearAllItems } from "../features/firstSlice";
import randomColor from "randomcolor";


const initialState = {
  name:'',
  company:'liddy',
  background:'',
}

const FirstForm = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((store) => store.first);
  const [values,setValues] = useState(initialState);

  
  

  const submitHandler = (e) => {
    console.log(values);
   e.preventDefault();
   dispatch(addItem({values}))
  }
  const generateHandler = () => {
    const color = randomColor();
      setValues((prevValues)=>{
        return { ...prevValues, background: color};
      })
  }
  const handleChange = (e) => {
    setValues((prevValues)=>{
      return {...prevValues,[e.target.name]:e.target.value}
    })
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" onChange={handleChange}/>
        <select name="company" onChange={handleChange} value={values.company}>
          <option value="sircxvilia">sircxvilia</option>
          <option value="ikea">ikea</option>
          <option value="liddy">liddy</option>
        </select>
        <button type="submit">Submit</button>
      </form>
        <button className="generator" onClick={generateHandler}>Generate Random Color</button>
        <button onClick={()=>dispatch(clearAllItems())}>Clear All</button>
    </>
  );
};

export default FirstForm;
