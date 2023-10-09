import { useState } from 'react';
import './app.css'
const App = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const plus = () => {
    setTotal(number + number2)
  }
  const minus = () => {
    setTotal1(number3 - number4)
  }
  const multiplication = () => {
    setTotal2(5 * number6)
  }
  const division = () => {
    setTotal3(number7 / number8)
  }
  return (
    <div>
      <div className='head text-danger m-2'>
        <h1>Mathametical Operation</h1>
      </div>
      <div className='row m-5 math' >
        <div className='col-2 border1 m-5'>
          <input type='number' className="form-control mb-2" placeholder='Number1' value={number} onChange={e => setNumber(+e.target.value)} />
          <input type='number' className="form-control mb-2" placeholder='Number2' value={number2} onChange={e => setNumber2(+e.target.value)} />
          <div className='button'>
            <button className='btn btn-info w-100 mb-2' onClick={() => plus()}>SUM</button>
            <p>Total:{total || ""}</p>
          </div>
        </div>
        <div className='col-2 m-5 border2'>
          <input type='number' className="form-control mb-2" placeholder='Number1' value={number3} onChange={e => setNumber3(+e.target.value)} />
          <input type='number' className="form-control mb-2" placeholder='Number2' value={number4} onChange={e => setNumber4(+e.target.value)} />
          <div className='button'>
            <button className='btn btn-secondary w-100 mb-2' onClick={() => minus()}>MINUS</button>
            <p>Total:{total1 || ""}</p>
          </div>
        </div>
        <div className='col-2 m-5 border3'>
          <input type='number' className="form-control mb-2" placeholder='Number1' value={number5} onChange={e => setNumber5(+e.target.value)} />
          <input type='number' className="form-control mb-2" placeholder='Number2' value={number6} onChange={e => setNumber6(+e.target.value)} />
          <div className='button'>
            <button className='btn btn-warning w-100 mb-2' onClick={() => multiplication()}>Multiplication</button>
            <p>Total:{total2 || ""}</p>
          </div>
        </div>
        <div className='col-2 m-5 border4'>
          <input type='number' className="form-control mb-2" placeholder='Number1' value={number7} onChange={e => setNumber7(+e.target.value)} />
          <input type='number' className="form-control mb-2" placeholder='Number2' value={number8} onChange={e => setNumber8(+e.target.value)} />
          <div className='button'>
            <button className='btn btn-danger w-100 mb-2' onClick={() => division()}>Division</button>
            <p>Total:{total3 || ""}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default App