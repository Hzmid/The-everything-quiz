import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #e6eaea;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`
//props for red and green
type ButtonWrapperProps = {
  correct: boolean
  userClicked: boolean
}

//<ButtonWrapperProps> to use props in styled component
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #00ab4e, #155432)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #940000)'
        : 'linear-gradient(90deg, #87ff, #298aae)'};
    border: 3px solid #e6eaea;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #e6eaea;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`
