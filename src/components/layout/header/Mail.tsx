import { styled } from '@mui/material/styles'

const StyledMail = styled('svg')(({ theme }) => {
  return {
    verticalAlign: 'middle',
    '& path': {
      fill: theme.palette.text.primary
    }
  }
})

const Mail: React.FC = (): JSX.Element => {
  return (
    <StyledMail
      xmlns='http://www.w3.org/2000/svg'
      width='24.552'
      height='19.855'
    >
      <defs>
        <clipPath>
          <rect
            id='Rectángulo_18314'
            data-name='Rectángulo 18314'
            width='24.536'
            height='9.309'
            fill='none'
          />
        </clipPath>
      </defs>
      <g id='Grupo_12040' data-name='Grupo 12040' transform=''>
        <g id='Icon_feather-calendar' data-name='Icon feather-calendar'>
          <g
            id='Grupo_11782'
            data-name='Grupo 11782'
            transform='translate(0 9.878)'
          >
            <path
              id='Trazado_11752'
              data-name='Trazado 11752'
              d='M2114.562,1390.8h-18.8a2.87,2.87,0,0,1-2.867-2.867v-7.11h1.615v7.11a1.254,1.254,0,0,0,1.252,1.252h18.8a1.253,1.253,0,0,0,1.251-1.252v-7.11h1.615v7.11A2.87,2.87,0,0,1,2114.562,1390.8Z'
              transform='translate(-2092.898 -1380.818)'
              fill='#e9e6e1'
            />
          </g>
          <g id='Grupo_11783' data-name='Grupo 11783'>
            <path
              id='Trazado_11753'
              data-name='Trazado 11753'
              d='M2117.429,1367.6h-1.615v-3.854a1.253,1.253,0,0,0-1.251-1.252h-18.8a1.254,1.254,0,0,0-1.252,1.252v3.854H2092.9v-3.854a2.87,2.87,0,0,1,2.867-2.867h18.8a2.87,2.87,0,0,1,2.867,2.867Z'
              transform='translate(-2092.898 -1360.881)'
              fill='#e9e6e1'
            />
          </g>
        </g>
        <g
          id='Grupo_11786'
          data-name='Grupo 11786'
          transform='translate(0 3.848)'
        >
          <g id='Grupo_11785' data-name='Grupo 11785'>
            <g
              id='Grupo_11784'
              data-name='Grupo 11784'
              transform='translate(-0.16 1.167)'
            >
              <path
                id='Trazado_11754'
                data-name='Trazado 11754'
                d='M2104.991,1379.25l-12.458-6.609.87-1.639,11.594,6.151L2116.74,1371l.86,1.643Z'
                transform='translate(-2092.532 -1371.002)'
                fill='#e9e6e1'
              />
            </g>
          </g>
        </g>
      </g>
    </StyledMail>
  )
}

export default Mail
