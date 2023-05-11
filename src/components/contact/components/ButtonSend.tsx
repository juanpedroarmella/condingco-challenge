import { styled } from '@mui/material/styles'

const ButtonSend = styled('button')(() => {
  return {
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    color: '#707070',
    border: '1px solid #707070',
    fontWeight: '700',
    outline: '1px solid #707070',
    padding: '15px 50px',
    marginTop: 20,
    '&:hover': {
      transition: '0.3s',
      color: '#E9E6E1',
      borderColor: '#000000',
      backgroundColor: '#707070'
    }
  }
})

export default ButtonSend
