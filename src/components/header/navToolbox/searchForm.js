import classes from './searchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={classes.searchForm}>
      <input className={classes.searchInput} type="text" placeholder="What are you searching for?" />
      <input className={classes.searchBtn} type="submit" value="Go" />
      </form>
  );
}

export default SearchForm;