const Details = (props) => {
  return (
    <div>
         <h2>{props.title}</h2>
         
         <img
         width={343}
         height={201}
          src={props.churchImg}
          alt={props.churchImg}
          />
<label for="start">
        Enter the Date:
    </label>
  
    <input type="date" name="begin" 
        placeholder="dd-mm-yyyy" value=""
        min="1997-01-01" max="2030-12-31">
</input>
      
      
      {/* time and date implementation
      useState to update what the user is donating */}
    </div>
  );
};

export default Details;
