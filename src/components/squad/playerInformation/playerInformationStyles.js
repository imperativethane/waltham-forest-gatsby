import styled from "styled-components";

export const Form = styled.form`
    margin-top: 100px;
    padding: 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactDetailsWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 451.73px;
`

export const ContactDetailsContainerOne = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const ContactDetailsContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    justify-content: flex-end;
`

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`

export const Label = styled.label`
    color: ${props => props.theme.colors.dark};
    font-size: ${props => props.theme.fontSize.p};
    font-family: ${props => props.theme.fontFamily.regular};
    font-weight: ${props => props.theme.fontWeight.bold};
`

export const Input = styled.input`
    width: 250px;
    font-size: ${props => props.theme.fontSize.p};
    font-family: ${props => props.theme.fontFamily.regular};
    margin-bottom: 1rem;
`

export const Textarea = styled.textarea`
    width: 600px;
    height: 200px;
    font-size: ${props => props.theme.fontSize.p};
    font-family: ${props => props.theme.fontFamily.regular};
`

export const Header = styled.h1`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: left;
    width: 100%;
`

export const Divider = styled.img`
    margin-bottom: 1rem;
`

export const EmergencyContactsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`