/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-20 15:30:15
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-20 22:20:03
 * @ 文件解释: styled-components
 */


import styled from 'styled-components';

// <div></div>用于display: flex;（含宽高）
export const StyleDivFlex = styled.div`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  display: flex;
  justify-content: start;
  align-items: start;
  
`;

// <div></div>用于display: flex;（不含宽高）
export const StyleDivFlex2 = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
`

// <div></div>用于小框
export const StyleDiv = styled.div`
  width: 250px;
  height: 100%;
  margin-right: 50px;
`;

// <span></span>
export const StyleSpan = styled.span`
  display: inline-block;
  white-space: normal;
  width: 200px;
  padding-left: 15px;
  height: 100px;
`;

