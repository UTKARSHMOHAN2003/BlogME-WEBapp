import React from "react";

//property1=numbering , property2=ranking 
function Question({ numbering, ranking }) {
  return (
    <div>
      <p>question{numbering} and rank{ranking}</p>

    </div>
  );
}

export default Question;
