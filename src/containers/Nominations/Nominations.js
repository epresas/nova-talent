import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import NominationsTable from './NominationsTable/NominationsTable';
import Button from '../../components/UI/Button/Button';

const Container = styled.div`
  height: 100%;
  padding: 60px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h2 {
    color: var(--color-white);
    letter-spacing: .7px;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;

const Nominations = (props) => {
  const apiUrl = 'http://localhost:3001';
  const [nominations, setNominations] = useState(null);
  const history = useHistory();
  let nominationEl = null;

  useEffect(() => {
    const getNominations = async () => {
      const result = await axios.get(`${apiUrl}/nominations`);
      setNominations(result.data.data);
    }
    getNominations();
  }, []);

  const onRedirect = () => {
    history.push('/nominate');
  };

  if (nominations) {
    const approvedOnlyNominations = nominations.filter(nomination => nomination.status === 'APPROVED');
    nominationEl = <NominationsTable info={approvedOnlyNominations} />;
    return (
      <Container>
        <h2>Nominations</h2>
        {nominationEl}
        <Button label='Add candidate' clicked={onRedirect} />
      </Container>
    )
  }

  // We want to render someting only when the services brings data
  // this will save useless rerenders
  return null;
}

export default Nominations;
