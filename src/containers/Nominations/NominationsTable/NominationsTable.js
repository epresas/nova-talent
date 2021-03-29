import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  background: var(--color-white);
  text-align: center;

  td, th {
    padding: 8px;
  }

  td {
    max-width: 250px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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

  if (info) {
    tableInfo = <Table>
      <Thead>
        <tr>
          <th>Email</th>
          <th>Description</th>
          <th>Score</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </Thead>
        <tbody>
          {renderTableData()}
      </tbody>
    </Table>;
  return tableInfo
  }

  return null;
}

export default NominationsTable;
