import React from "react";
import PropTypes from "prop-types";
import style from 'styled-components';

const Table = style.table`
  margin:auto;
  width:80%
`;
const Th = style.th`
  font-size:20px;
  text-align:center;
  color:black;
`;
const Tr = style.tr`
  font-size:16px;
  text-align:left;
  color:gray;
`

const PassageList = ({ passages }) => (

  <Table className="table">
    <thead>
      <tr>
        <Th>Title</Th>
        <Th>Note</Th>
        <Th>Summary</Th>
      </tr>
    </thead>
    <tbody>
      {passages.map(passage => {
        return (
          <Tr key={passage.id}>
            <td>
              {passage.title}
            </td>
            <td>{passage.notes}</td>
            <td>{passage.text}</td>
          </Tr>
        );
      })}
    </tbody>
  </Table>
);

PassageList.propTypes = {
  passages: PropTypes.array.isRequired
};

export default PassageList;
