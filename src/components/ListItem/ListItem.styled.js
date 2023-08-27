import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 4px;

  margin-bottom: 8px;

  color: #efefef;
`;

export const ContactItem = styled.p`
  font-size: 20px;
  color: #4e4e4e;
`;

export const DeleteContactItem = styled.div`
  margin-left: 10px;
  cursor: pointer;

  color: #4e4e4e;
`;

export const DeleteButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 20px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
