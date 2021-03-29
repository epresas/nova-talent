import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  background: var(--color-white);
  border-collapse: collapse;
  font-size: 1.2rem;
  text-align: center;

  td, th {
    padding: 8px;
  }

  td {
    max-width: 250px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  tr:nth-of-type(even) {
    background: var(--color-grey-light);
  }

  tbody tr {
    border-top: 2px solid var(--color-grey-medium-3);
  }

/* Visualize table like data list on moile and small tablets */
  @media only screen and (max-width: 760px) {
  font-size: 1.1rem;

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid var(--color-grey-medium-3); }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid var(--color-grey-medium-3); 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "Email"; }
	td:nth-of-type(2):before { content: "Description"; }
	td:nth-of-type(3):before { content: "Score (I | T)"; }
	td:nth-of-type(4):before { content: "Status"; }
	td:nth-of-type(5):before { content: "Date"; }
  }
`;

const TableContainer = styled.div`
  margin-bottom: 40px;
  
  @media only screen and (max-width: 760px) {
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const Thead = styled.thead`
  background: var(--color-grey-light);
  color: var(--color-grey-medium);
`;

const NominationsTable = ({ info }) => {
  const renderTableData = () => {
    return info.map(nomination => {
      const { id, email, description, score, status, dateReferred } = nomination;

      return(
        <tr key={id}>
          <td>{email}</td>
          <td>{description}</td>
          <td>{score.involvement} | {score.talent}</td>
          <td>{status}</td>
          <td>{new Date(dateReferred).toLocaleDateString()}</td>
        </tr>
      );
    })

  };
  let tableInfo = null;

  if (info.length) {
    tableInfo = <TableContainer>
      <Table>
        <Thead>
          <tr>
            <th>Email</th>
            <th>Description</th>
            <th>Score (I | T)</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </Thead>
          <tbody>
            {renderTableData()}
        </tbody>
      </Table>
    </TableContainer>;
  return tableInfo
  }

  return null;
}

export default NominationsTable;
