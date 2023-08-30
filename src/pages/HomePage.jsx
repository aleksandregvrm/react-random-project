import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination";
import styled from "styled-components";
import FirstForm from "../components/FirstForm";
import { deleteItem, editItem, clearAllItems } from "../features/firstSlice";
import { FirstEditForm } from "../components";

const Wrapper = styled.div`
  div {
    display: grid;
    place-items: center;
  }
  input {
    border: none;
    background: #328080;
    height: 1.5rem;
    color: wheat;
  }
  select {
    background: #7ebbbb;
    width: 150px;
    color: white;
  }
`;

const HomePage = () => {
  const { products,editing } = useSelector((store) => store.first);
  const dispatch = useDispatch();

  // if (products.length < 1) {
  //   return <div>There is nothing to display</div>;
  // }

  return (
    <>
      <Wrapper>
        {editing ? <FirstEditForm /> : <FirstForm />}
        <div className="container">
          <div>
            {products.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    background: `${item?.background}`,
                    width: "300px",
                    margin: "3rem",
                    color: `${item?.color ? item?.color : "black"}`,
                  }}
                >
                  <h3>{item?.name}</h3>
                  <br />
                  <br />
                  <h2>{item?.company}</h2>
                  <button onClick={() => dispatch(deleteItem(item?.id))}>
                    Delete
                  </button>
                  <button onClick={() => dispatch(editItem({id:item?.id,name:item?.name,company:item?.company}))}>
                    Edit
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
      <Pagination />
    </>
  );
};

export default HomePage;
