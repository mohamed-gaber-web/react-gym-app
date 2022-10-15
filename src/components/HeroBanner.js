import React from 'react'

import { Stack, Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ 
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px'}
     }} position="relative" p="20px">
      <Typography color='#ff2625' fontWeight={'600'} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography mt={3} mb={3} fontWeight={700} sx={{ fontSize: { lg: '44px', sm: '40px' } }}>
        Sweet, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={'22px'} lineHeight="35px">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#FF2625', mt: '10px', padding: '10px'}}> Explore Exercises </Button>
      <Typography fontWeight={600} color="#FF2625" fontSize={'150px'} sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="heroBannerImage" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner