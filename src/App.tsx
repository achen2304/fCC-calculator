import './App.css';

function App() {
  const buttonPress = (symbol: string) => {
    console.log(symbol);
  };

  return (
    <>
      <div>
        <div id="container">
          <h1>Calculator</h1>
          <div id="calculator">
            <div id="display">
              <div id="answer"></div>
              <div id="expression"></div>
            </div>
            <div id="buttons" className="buttons">
              <button
                onClick={() => buttonPress('clear')}
                className="number-white"
                id="clear"
              >
                AC
              </button>
              <button
                onClick={() => buttonPress('divide')}
                className="number-orange"
                id="divide"
              >
                /
              </button>
              <button
                onClick={() => buttonPress('multiply')}
                className="number-orange"
                id="multiply"
              >
                X
              </button>
              <button
                onClick={() => buttonPress('seven')}
                className="number"
                id="seven"
              >
                7
              </button>
              <button
                onClick={() => buttonPress('eight')}
                className="number"
                id="eight"
              >
                8
              </button>
              <button
                onClick={() => buttonPress('nine')}
                className="number"
                id="nine"
              >
                9
              </button>
              <button
                onClick={() => buttonPress('subtract')}
                className="number-orange"
                id="subtract"
              >
                -
              </button>
              <button
                onClick={() => buttonPress('four')}
                className="number"
                id="four"
              >
                4
              </button>
              <button
                onClick={() => buttonPress('five')}
                className="number"
                id="five"
              >
                5
              </button>
              <button
                onClick={() => buttonPress('six')}
                className="number"
                id="six"
              >
                6
              </button>
              <button
                onClick={() => buttonPress('add')}
                className="number-orange"
                id="add"
              >
                +
              </button>
              <button
                onClick={() => buttonPress('one')}
                className="number"
                id="one"
              >
                1
              </button>
              <button
                onClick={() => buttonPress('two')}
                className="number"
                id="two"
              >
                2
              </button>
              <button
                onClick={() => buttonPress('three')}
                className="number"
                id="three"
              >
                3
              </button>
              <button
                onClick={() => buttonPress('zero')}
                className="number"
                id="zero"
              >
                0
              </button>
              <button
                onClick={() => buttonPress('decimal')}
                className="number-orange"
                id="decimal"
              >
                .
              </button>
              <button
                onClick={() => buttonPress('equals')}
                className="number-orange"
                id="equals"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
