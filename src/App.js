import React, { useEffect, useState } from "react";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const prize = ['₹ 250 Cashback', '₹ 72 cashback + surprise gift', '₹ 500 Cashback', '₹ 50 Cashback + surprise gift', '₹ 150 Cashback', '₹ 65 cashback + surprise gift'];
  const spinning = selectedItem !== null ? 'spinning' : '';
  const wheelVars = { '--nb-item': prize.length, '--selected-item': selectedItem };

  const startSpin = () => {
    if (selectedItem === null) {
      const roundSelected = Math.floor(Math.random() * prize.length);
      setSelectedItem(roundSelected);
    } else {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    if (selectedItem) {
      setTimeout(() => {
        alert('You have won PRIZE ' + parseInt(selectedItem + 1));
        window.$('#Modal-thanks').modal('show')
      }, 1500);
    }
  }, [selectedItem])

  return (
    <div className="App">
      <section className="row bg-republic-day py-5 py-md-5">
        <div className="col-12 px-0 pb-lg-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 text-center text-lg-left">
                    <div className="republic-day-Heading">GYFTR <br/>WHEEL OF <br/>FORTUNE</div>
                    <div className="py-3">
                      <img src="images/rep.png" alt="" className="d-none d-lg-inline-block"></img>
                      <img src="images/rep-mobile.png" alt="" className="d-inline-block d-lg-none"></img>
                    </div>
                </div>
                <div className="col-12 col-lg-6 text-center text-lg-right pt-2 pt-lg-0">
                    <div className="wheel-container">
                      <div className={`wheel ${spinning}`} style={wheelVars}>
                        {prize.map((item, index) => (
                          <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button id="spin_button" onClick={() => startSpin()}>
                      <span>TAP TO</span> SPIN
                    </button>
                </div>

                <div className="col-12 text-center text-lg-left pt-3 pt-lg-0">
                  <ul className="list-inline m-0 btn-list">
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-danger px-lg-4" data-toggle="modal" data-target="#Modal-tc">Terms & Conditions</button>
                    </li>
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-danger px-lg-4" data-toggle="modal" data-target="#Modal-hp">How to Participate</button>
                    </li>
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-danger px-lg-4" data-toggle="modal" data-target="#Modal-hr">How to Redeem</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
