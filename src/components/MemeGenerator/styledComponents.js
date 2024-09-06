// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  order: 2;
  @media screen and (min-width: 768px) {
    width: 50%;
    order: 1;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  order: 1;
  width: 100%;
  height: 50vh;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    order: 2;
    flex-direction: column;
    width: 50%;
    height: 70vh;
  }
`
export const Heading = styled.h1`
  color: #0b69ff;
`

export const TopBottomHeading = styled.h1`
  font-size: ${props => props.fs}px;
`

export const Label = styled.label`
  color: #7e858e;
  width: 100%;
  font-weight: bold;
`

export const InputElement = styled.input`
  width: 100%;
  cursor: pointer;
  outline: none;
  margin: 10px 0px 10px 0px;
  height: 40px;
  padding: 10px;
  border: none;
  background-color: #d7dfe9;
  border-radius: 8px;
  font-weight: bold;
`

export const SelectElement = styled.select`
  width: 100%;
  cursor: pointer;
  outline: none;
  margin: 10px 0px 10px 0px;
  height: 40px;
  padding: 10px;
  border: none;
  background-color: #d7dfe9;
  border-radius: 8px;
  font-weight: bold;
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  background: linear-gradient(to right, skyblue, dodgerblue);
  margin: 10px 0px 10px 0px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
`
