import axios from "axios"
import "./SearchBar.scss"
import { useEffect, useState } from "react"
import SearchBarResult from "../SearchBarResults/SearchBarResult"


const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState(null);


  const clearTheInput = () => {
     setSearchQuery("")
  }

  async function searchTMDB(query) {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/multi',
      params: {
        query: query ,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMwYmE1NjY1Y2FkNWIwZTE3MDliODQ4M2FhMDhhZCIsInN1YiI6IjY0YmQ1NTU1YWQ1MGYwMDEzYjEyNjdlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uOUtjy6YhYhp4ZFDlsPsG8dwt-l8zSOjntSpT2n4_l4'
      },
    };

    try {
      const response = await axios(options);
      if (response.status === 200) {
      setSearchData(response.data.results);
      }
      

    } catch (error) {
      console.error('Error:', error);
    }
  }



  useEffect(() => {

    if (searchQuery.trim() !== '') {
      searchTMDB(searchQuery);
    }

  }, [searchQuery]);



 return (

    <div className="search-bar">
      <i className="icon fa fa-search"></i>
      <input
        className="input-text"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search IMDB"
      />
      {  searchQuery && searchData && searchData.length > 0 
      ? <SearchBarResult movies={searchData} clearTheInput={clearTheInput} /> 
      :"" }
      
    </div>
  );
}

export default SearchBar;