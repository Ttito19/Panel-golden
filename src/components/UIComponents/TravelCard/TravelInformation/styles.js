import styled from 'styled-components';

const ListInformation = styled.ul`
  list-style: none;
`;

const ListItemInformation = styled.li``;

const TextInformation = styled.span`
  color: ${p => p.light ? '#A1A1A1' : '#8F8F8F'};
  font-size: 12px;
`;

export {
  TextInformation,
  ListInformation,
  ListItemInformation
}