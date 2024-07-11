function Category() {
  // const [genereIdValue, setGenreIdValue] = useState(
  //     location?.state !== null ? location?.state?.id : 28
  //   );
  // const { dataGenres } = useFetchCalls();
  // const { MoviesListHandlerWithParams } = lazyHandlers;
  // const { handlers: lazyHandlers } = useLazyCalls();

  // const handleGenreChange = async (value) => {
  //     setGenreIdValue(value);
  //     const updatedMovieListData = await MoviesListHandlerWithParams(value);
  //     const firstMovieObjId = updatedMovieListData?.results
  //       ?.slice(0, 1)
  //       .find((elem) => elem?.id);
  //     if (movieDataId) {
  //       setMovieDataId(firstMovieObjId?.id);
  //     } else {
  //       setMovieDataId(0);
  //     }
  //     setVariable(updatedMovieListData);
  //   };

  // const genreIds = dataGenres?.genres?.map((item) => {
  //     const copyObj = { ...item };
  //     copyObj.value = item.id;
  //     copyObj.label = item.name;
  //     delete copyObj.id;
  //     delete copyObj.name;
  //     return copyObj;
  //   });

  return (
    <>
      {/* <div className={styles.selectCategory}>
      <Select
        defaultValue="Action"
        style={{
          width: 120,
        }}
        onChange={(value) => handleGenreChange(value)}
        options={genreIds || []}
      />
    </div> */}
      {/* first movies sections */}
      {/* <Spin size="large" spinning={moviesListLoadinglazy}>
      <Lists
        data={moviesListData?.results || []}
        onChangeHandler={onChangeHandler}
      />
    </Spin> */}
    </>
  );
}
export { Category };
