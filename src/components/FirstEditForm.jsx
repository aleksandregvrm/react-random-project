import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItemDone } from "../features/firstSlice";
import randomColor from "randomcolor";

const FirstEditForm = () => {
  const dispatch = useDispatch();
  const { editingInfo } = useSelector((store) => store.first);
  const { name, company, background, id } = editingInfo;
  const [values, setValues] = useState({ name, company, background, id });

  useEffect(() => {
    setValues({ name, company, background, id });
  }, [editingInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editItemDone({ ...values }));
    // After editing, reset the state and clear the editingInfo
    setValues({ name: "", company: "liddy", background: "", id: "" });
    dispatch(editItem({})); // Clear the editingInfo
  };

  const generateHandler = () => {
    const color = randomColor();
    setValues((prevValues) => {
      return { ...prevValues, background: color };
    });
  };

  const handleChange = (e) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <select name="company" onChange={handleChange} value={values.company}>
          <option value="sircxvilia">sircxvilia</option>
          <option value="ikea">ikea</option>
          <option value="liddy">liddy</option>
        </select>
        <button type="submit">Edit</button>
      </form>
      <button className="generator" onClick={generateHandler}>
        Generate Random Color
      </button>
    </>
  );
};

export default FirstEditForm;
