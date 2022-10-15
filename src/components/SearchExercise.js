import { useState, useEffect } from 'react';

import HorizontalScrollBar from './HorizontalScrollBar';

import { Box, Button, Stack, Typography, TextField } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/FetchData';

const SearchExercise = () => {

  const [searchInput, setSearchInput] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exercisesCategory, setExercisesCategory] = useState([]);

    // get exercise categories
    useEffect(() => {
      const getCategories = async() => {
        const exercisesCategoryItems = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setExercisesCategory(['all', ...exercisesCategoryItems])
      }
      // getCategories();
  
      console.log(getCategories())
    }, [])
  
  // search input handler
  function searchInputHandler(e) {
    setSearchInput(e.target.value.toLowerCase())
  }

  // handle search exercise
  async function handleSearchExercise() {
    if (searchInput) {
      // fetch data 
      const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercises)

      const exerciseSearch = exercises.filter(
        exercise =>
          exercise.name.toLowerCase().includes(searchInput) ||
          exercise.equipment.toLowerCase().includes(searchInput) ||
          exercise.bodyPart.toLowerCase().includes(searchInput)

      );
      setSearchInput(''); // reset input 
      setExercises(exerciseSearch); // upated data
    }
  }


  return (
    <Stack alignItems='center' justifyContent="center" p="20px" mt="40px">
      <Typography fontWeight="700" mb="50px" textAlign={'center'} sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          value={searchInput}
          height="70px"
          onChange={ searchInputHandler }
          placeholder="Search Exercise"
          type={'text'}
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
        />
        <Button
          sx={{
            backgroundColor: '#ff2625',
            color: '#fff',
            width: { lg: '170px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          className='search-btn' onClick={handleSearchExercise}>
          Search 
        </Button>
      </Box>

      <Box sx={{ position: 'relative', p: '20px', width: '100%' }}>
          <HorizontalScrollBar data={exercisesCategory} />
      </Box>
    </Stack>
  )
}

export default SearchExercise