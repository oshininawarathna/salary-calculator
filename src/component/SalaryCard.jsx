import React, { useState } from "react";

const SalaryCard = () => {
  //state
  const [name, setName] = useState("");
  const [basic, setBasic] = useState(0);
  // const [medical, setMedical] = useState(0);
  // const [house, setHouse] = useState(0);
  const [OT, setOT] = useState(0);
  const [total, setTotal] = useState(0);

  const calcSalary = (event) => {
    event.preventDefault();
    if (basic === " " || name === "") {
      alert("enter values");
    } else {
      const otCount = 200 * 1.5 * OT;
      const house = (basic * 15) / 100;
      const medical = (basic * 12) / 100;
      const tax = (basic * 3) / 100;
      var total =
        parseInt(basic) +
        parseInt(otCount) +
        parseInt(house) +
        parseInt(medical) -
        parseInt(tax);

      setTotal(total.toFixed(2));
    }
  };

  return (
    <div className=" d-flex justify-content-center mt-5">
      <div
        className="card text-white bg-dark mb-3 mt-5 "
        style={{ maxWidth: "25rem" }}
      >
        <div className="card-header">
          <h3>Salary Calculator</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {" "}
            <label>
              {" "}
              <h6>Employee Name :</h6>
            </label>{" "}
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </h5>
          <p>
            <label>Basic Salary :</label>
            <input
              className="form-control"
              value={basic}
              onChange={(event) => setBasic(event.target.value)}
            />
          </p>

          <p>
            {" "}
            <label>Hours of OT :</label>
            <input
              type="number"
              className="form-control w-25"
              value={OT}
              onChange={(event) => setOT(event.target.value)}
            />
          </p>
          <br />
          <button className="btn btn-light mb-3 ml-5 w-75" onClick={calcSalary}>
            <b>Submit</b>{" "}
          </button>
          <div className="card-footer">
            <div>
              <h5>Employee Name :- {name}</h5>
              <br />
              <h5>Net Salary :- Rs : {total}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCard;
