import { useState } from 'react';
import { BtnSearch, Input, Form } from './Movies.styled';
import { useQueryParams } from 'components/hooks/useQueryParams';
import { MovieList } from './MoviesList';
import { Loader } from 'components/loader/Loader';
import { Toaster } from 'react-hot-toast';

export const SearchMovie = ({ movies }) => {
  const { updateQuery, handleFormSubmit } = useQueryParams(movies);
  const [loading] = useState(false);

  return (
    <>
      <div>
        {loading && <Loader />}

        <Form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="query"
            onChange={updateQuery}
            placeholder="Search movies"
          />
          <BtnSearch type="submit">Search</BtnSearch>
        </Form>
      </div>

      <MovieList movies={movies} />
      <Toaster />
    </>
  );
};
