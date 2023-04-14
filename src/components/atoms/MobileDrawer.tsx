import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

interface DrawerProps {
  open: boolean
}

const Drawer = styled(Box)<DrawerProps>(({ open }) => {
  const vhRelativeToScroll = (window.scrollY / window.innerHeight) * 100
  return {
    background: '#E9E6E1',
    position: 'absolute',
    top: '56px',
    left: 0,
    width: '100%',
    padding: '0 !important',
    margin: 0,
    zIndex: 0,
    transform: open
      ? `translateY(${vhRelativeToScroll}vh)`
      : 'translateY(-100%)',
    transition: 'transform 0.3s'
  }
})

interface Props {
  children: React.ReactNode
  open: boolean
}

const MobileDrawer: React.FC<Props> = ({ children, open }): JSX.Element => {
  return <Drawer open={open}>{children}</Drawer>
}

export default MobileDrawer
