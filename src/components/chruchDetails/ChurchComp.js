import { useEffect,useState } from "react";



const Details = (props) => {

  // useEffect(() => {
    async function changeData() {
      const data = await fetch("http://localhost:3100/listings/:id", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: props.id })
      }
      ).then(response => response.json())

    }
  // }, [])

  const changeStatus = (e) => {
    e.preventDefault();
    changeData()
    console.log(props.id)
  }

  return (
    <div>
      <h2>{props.title}</h2>

      <img
        width={343}
        height={201}
        src={props.churchImg}
        alt={props.churchImg}
      />
      <h4>{props.location}</h4>
      <form onSubmit={changeStatus}>
        <label for="start">
          Enter the Date:
        </label>
        <input type="submit" value="Submit" />
      </form>


      {/* time and date implementation
      useState to update what the user is donating */}
    </div>
  );
};

export default Details;
