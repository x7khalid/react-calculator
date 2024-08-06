import {
  useState,
  useRef
} from "react"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    if(inputRef.current.value == 0){
      setResult((result) => 0); 
    }else{
      setResult((result) => result / Number(inputRef.current.value)); 
    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="container-fluid text-light w-100 h-100 d-flex justify-content-center align-items-center text-center">
      <div className="row">
        <div className="col-12"> 
          <h1>Simplest Working Calculator</h1> 
        </div>
        <div className="col-12">    
          <form className="row align-items-center justfiy-content-center">
            <div className="col-12 mb-5">
              <p ref={resultRef} className="output-re"> 
                {result} 
              </p> 
            </div>
            <div className="col-12 mb-3">
              <div className="input-group mb-3 mx-auto">
                  <input
                    className="form-control"
                    pattern="[0-9]" 
                    ref={inputRef} 
                    type="number" 
                    placeholder="Type a number" 
                  /> 
                  <button className="btn btn-outline-light" type="button" id="button-addon2" onClick={resetInput}>Reset</button>
              </div>
            </div>
            <div className="col-12 d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-primary" onClick={plus}>Add</button> 
                <button className="btn btn-primary" onClick={minus}>Subtract</button> 
                <button className="btn btn-primary" onClick={times}>Multiply</button> 
                <button className="btn btn-primary" onClick={divide}>Divide</button> 
                <button className="btn btn-warning" onClick={resetResult}>Reset Result</button>
            </div>
          </form> 
        </div>

      </div>
    </div> 
  ); 
} 
 
export default App; 
