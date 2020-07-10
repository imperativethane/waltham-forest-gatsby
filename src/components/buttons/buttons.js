import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  width: 250px;
  margin-top: ${props => props.theme.spacers.indent};
  padding: 0 ${props => props.theme.spacers.indent};

  border: none;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.action};

  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fontFamily.regular};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-align: center;

  cursor: pointer;
`

export default Button;