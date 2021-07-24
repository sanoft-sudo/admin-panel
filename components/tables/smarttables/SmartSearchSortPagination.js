import React, { useEffect, useState, useGlobalFilters } from "react";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
} from "react-table";
import styled from "styled-components";

const Styles = styled.div`
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
  table {
    position: relative;
  }
  table,
  table-hover {
    color: #fff;
    text-align: left;
  }
  table > thead > tr > th {
    border-bottom: none !important;
    border-style: transparent !important;
    border-color: transparent !important;
    border-width: 0 !important;
    background: rgba(0, 251, 71, 0.2);
  }
  /* .table-striped > tbody > tr:nth-of-type(even) {
    --bs-table-accent-bg: rgba(0, 251, 71, 0.2);
    color: #fff;
    --bs-table-hover-color: #fff;
    --bs-table-hover-bg: rgba(0, 251, 71, 0.2);
  } */
  .table-hover > tbody > tr {
    --bs-table-hover-color: #fff;
    --bs-table-hover-bg: rgba(0, 251, 71, 0.2);
    color: #fff;
  }

  .basic-table1,
  .basic-table1 > tr {
  }
  .sort-icons {
    float: right;
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
    .chart-box {
      overflow-x: scroll;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button-group {
    display: flex;
    justify-content: space-evenly;
    border-radius: 50px;
    overflow: hidden;
    min-width: 100px;
  }
  .pagination-button {
    width: 30px;
    height: 30px;
    border: none;
  }
  .search-box {
    position: absolute;
    z-index: 3;
    top: -35px;
    left: 0px;
    display: flex;
  }
  .search-box input[type="text"] {
    width: 200px;
    height: 30px;
    outline: none;
    background: transparent;
    padding: 3px 8px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.18);
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #ccc;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #ccc;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #ccc;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #ccc;
    }
  }
  .pagination-box span {
    color: #fff;
  }
  .pagination-box select {
    outline: none;
    background: transparent !important;
    padding: 3px 8px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  input[type="number"] {
    outline: none;
    background: transparent;
    padding: 3px 8px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  select option {
    background-color: #00a78e !important;
    background: #00a78e;
  }
  .searching-column input {
    outline: none;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: transparent;
  }
`;

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

const SmartSortSearchPagination = ({ data, columns }) => {
  // const [filteredData, setFilteredData] = useState([]);

  // const globalSearch = (e) => {
  //   let searchInput = e.target.value;
  //   console.log("ser", searchInput);

  //   let filterData = data.filter((value) => {
  //     console.log(">>>", value.name.toLowerCase());
  //     console.log(">>>e", value.email.toLowerCase());
  //     console.log(">>>ph", value.phone.toLowerCase());

  //     return (
  //       value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  //       value.email.toLowerCase().includes(searchInput.toLowerCase()) ||
  //       value.phone.toString().toLowerCase().includes(searchInput.toLowerCase())
  //     );
  //   });
  //   setFilteredData({ filterData });
  // };
  // let personal = filteredData && filteredData.length ? filteredData : data;
  const [filterInput, setFilterInput] = useState("");

  // Update the state when input changes
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterInput(value);
  };

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    page,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    setFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>Smart table(react-table)</h1>
        </div>
        <table className="table table-hover mt-5" {...getTableProps()}>
          {/* <span className="search-box">
            <input
              value={filterInput}
              onChange={handleFilterChange}
              placeholder={"Search name"}
            />
          </span> */}
          <thead className="basic-table1">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="d-flex">
                        {column.render("Header")}

                        <span className="sort-icons">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <i class="fas fa-sort-alpha-up"></i>
                            ) : (
                              <i className="fas fa-sort-alpha-down"></i>
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>

                      <div className="searching-column">
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
            <tr>
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: "left",
                }}
              >
                {/* <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                /> */}
              </th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <div className="pagination-box">
            <div className="button-group">
              <button
                className="pagination-button"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <i className="fas fa-angle-double-left"></i>
              </button>
              <button
                className="pagination-button"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <i className="fas fa-angle-left"></i>
              </button>
              <button
                className="pagination-button"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <i className="fas fa-angle-right"></i>
              </button>{" "}
              <button
                className="pagination-button"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <i className="fas fa-angle-double-right"></i>
              </button>
            </div>
            <span className="mx-1">
              Page
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span className="mx-1">
              | Go to page:
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[3, 5, 10].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default SmartSortSearchPagination;
