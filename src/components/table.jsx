import React from 'react'

const FlightGraphs = () => {
  return (
    <div
      className="flight-graphs-container"
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="header" style={{ display: 'flex' }}>
        <h2>Flight Graphs</h2>
      </div>
      <div
        className="window-buttons"
        style={{ display: 'flex', flexDirection: 'row-reverse' }}
      >
        <button className="window-button close">&#x2716;</button>
        <button className="window-button minimize">&#x2501;</button>
        <button className="window-button maximize">&#x2751;</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td
              style={{
                width: '50%',
                padding: '10px',
                borderBottom: '1px solid #ccc',
              }}
            >
              <div className="header button-container">
                <div className="search-bar" style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label
                      htmlFor="searchInput"
                      style={{ marginRight: '10px' }}
                    >
                      Search:
                    </label>
                    <input
                      type="text"
                      id="searchInput"
                      style={{
                        border: '1px solid #ccc',
                        padding: '5px',
                        borderRadius: '3px',
                        marginRight: '10px',
                      }}
                    />
                    <select
                      style={{
                        border: '1px solid #ccc',
                        padding: '5px',
                        borderRadius: '3px',
                        marginRight: '10px',
                      }}
                    >
                      <option value="">Select Item</option>
                    </select>
                    <button
                      style={{
                        border: '1px solid #ccc',
                        padding: '5px',
                        borderRadius: '3px',
                      }}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td
              style={{
                width: '50%',
                padding: '10px',
                borderBottom: '1px solid #ccc',
              }}
            >
              <div className="favorites">
                <label>Favorites:</label>
              </div>
            </td>
          </tr>
          <tr>
            <td
              style={{
                width: '50%',
                padding: '10px',
                borderBottom: '1px solid #ccc',
              }}
            >
              <div
                className="flight-graphs-table"
                style={{ overflow: 'auto', maxHeight: '300px' }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          padding: '5px',
                          borderBottom: '1px solid #ccc',
                        }}
                      ></th>
                      <th
                        style={{
                          padding: '5px',
                          borderBottom: '1px solid #ccc',
                        }}
                      >
                        Item
                      </th>
                      <th
                        style={{
                          padding: '5px',
                          borderBottom: '1px solid #ccc',
                        }}
                      >
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(20)].map((_, index) => (
                      <tr
                        key={index}
                        style={{ borderBottom: '1px solid #ccc' }}
                      >
                        <td style={{ padding: '5px' }}>
                          <input type="checkbox" />
                        </td>
                        <td style={{ padding: '5px' }}>aileron Input</td>
                        <td style={{ padding: '5px' }}>RCServoInf</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
            <td
              style={{
                width: '50%',
                padding: '10px',
                verticalAlign: 'top',
                borderBottom: '1px solid #ccc',
              }}
            >
              <div
                className="empty-screen-div"
                style={{ height: '200px', overflow: 'auto' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td style={{ width: '50%', padding: '10px' }}>
              <div className="footer button-container">
                <button
                  style={{
                    padding: '10px',
                    marginRight: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  Create
                </button>
                <input type="checkbox" style={{ margin: '0 5px' }} />
                <label htmlFor="checkbox" style={{ marginRight: '5px' }}>
                  Make Favorite
                </label>
              </div>
            </td>
            <td style={{ width: '50%', padding: '10px' }}>
              <div className="buton-favorites">
                <button
                  style={{
                    padding: '10px',
                    marginRight: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  Delete Favorite
                </button>
                <button
                  style={{
                    padding: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  Reset Favorites
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FlightGraphs
