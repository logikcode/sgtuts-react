import './App.css'
import axios from "axios"
import { useState } from 'react';

import CommentComponet from './components/CommentComponet';
import {faker} from "@faker-js/faker"
import ApprovalCardComp from "./components/ApprovalCardComp"
import LocationFinder from './components/LocationFinder';
import ShowTime from './components/TimeComponent';
import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash';


function App() {
 
  const msg1 = "You have such a great post guy";
    const msg2 = "Hey man, your content is awesome";

    const [data, setData] = useState([]);

     const  formSubmitHandler = async (searchWord) => {
      // axios
      const response = await unsplash.get( "/search/photos",
      {
        params: {query: searchWord}
        
      });
      

      console.log(response.data.results);
      setData(response.data.results);
      // console.log(data);


    } 
  return (
    <div>
    {//<LocationFinder />
    }
    <div className="ui container" style={{margin: "30px"}}>
      <SearchBar formSubmit={formSubmitHandler}/>
      Found: {data.length +" "+ "images"}
    </div>
    
    </div>
  );
}

export default App
