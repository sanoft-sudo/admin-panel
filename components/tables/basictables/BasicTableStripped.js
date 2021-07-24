import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  .chartBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 10px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 2px;
  }
  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head h1 {
    color: #fff;
    text-align: center;
  }
  table,
  table-striped {
    color: #fff;
    text-align: left;
  }
  table > thead > tr > th {
    border-bottom: none !important;
    border-style: transparent !important;
    border-color: transparent !important;
    border-width: 0 !important;
  }
  .table-striped > tbody > tr:nth-of-type(even) {
    --bs-table-accent-bg: rgba(0, 251, 71, 0.2);
    color: #fff;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    color: #fff;
  }
  .basic-table1 {
    background: rgba(0, 251, 71, 0.3);
  }
  .basic-table1,
  .basic-table1 > tr {
  }

  @media (max-width: 337px) {
    .container-head h1 {
      font-size: 20px;
    }
  }
  @media (min-width: 768px) {
    .chartBox {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .chartBox {
      overflow-x: scrol;
    }
  }
`;

const BasicTabelStripped = ({ data }) => {
  let personal = data;

  return (
    <DIV>
      <div className="chartBox">
        <div className="container-head">
          <h1>Basic stripped</h1>
        </div>
        <table className="table table-striped mt-3">
          <thead className="basic-table1">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Profession</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {personal.map((person, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.occupation}</td>
                  <td>{person.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DIV>
  );
};

export default BasicTabelStripped;
