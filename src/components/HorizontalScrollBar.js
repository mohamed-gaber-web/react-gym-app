import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollBar = ({ data }) => {
  return (
      <div>
          {
            data.map((item) => { 
              return (
                <Box key={item.id || item}  m="0 40px">
                { item }
              </Box>                  
              )
            }    

            )    
          }
      </div>
  )
}

export default HorizontalScrollBar