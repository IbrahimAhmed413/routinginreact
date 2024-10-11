import { useParams } from "react-router-dom";

export default function Details() {
    const {id} = useParams();
    
  return (
    <>
      <h2 style={{textAlign:'center'}}>This is details page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et
        perferendis at laborum veniam dolorem veritatis a beatae rem mollitia
        tempora dicta repellendus expedita unde, odit hic iste maiores ad.
      </p>
      <p>
        {id}
      </p>
    </>
  );
}
