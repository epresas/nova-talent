import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import NominationsTable from './NominationsTable/NominationsTable';

const Container = styled.div`
  height: 100%;
  padding: 60px 10px;
`;

const Nominations = (props) => {
  const apiUrl = 'http://localhost:3001';
  const [nominations, setNominations] = useState(null);
  let nominationEl = null;

  useEffect(() => {
    const getNominations = async () => {
      const result = await axios.get(`${apiUrl}/nominations`);
      setNominations(result.data.data);
    }
    getNominations();
  }, []);

  if (nominations) {
    const approvedOnlyNominations = nominations.filter(nomination => nomination.status === 'APPROVED');
    nominationEl = <NominationsTable info={approvedOnlyNominations} />;
    return (
      <Container>
        {nominationEl}
      </Container>
    )
  }

  // We want to render someting only when the services brings data
  // this will save useless rerenders
  return null;
}

export default Nominations;
