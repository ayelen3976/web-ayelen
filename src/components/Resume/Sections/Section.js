import React from "react";
function Section(props) {
  return (
    <div >
      {props.checkBox ? (
        <div>
          <h4>{props.data.title}</h4>
          <h6 style={{fontWeight:'600'}}>{props.data.job}</h6>

          <p>{props.data.yearES}</p>
        </div>
      ) : (
        <div>
         <h4>{props.data.title}</h4>
          <p>{props.data.yearEN}</p>
        </div>
      )}
      {props.checkBox ? (   <p>
    {props.data.descripcionES}
      </p>
    ) : ( <p>
        {props.data.descriptionEN}
          </p>)}
   </div>
  );
}
export default Section;
