import { useState } from 'react';
import {ActivityIndicator} from 'react-native'
import SearchScreen from './SearchScreen'

const CitySearchScreen = ({navigation}) => {
  const[loading, setLoading] = useState(false)
  /**
   * Fetches cities from the GeoNames api, filters to only find an exact match 
   * and then navigates to the result screen. 
   * 
   * @param {string} searchPrompt text from the input field
   */
  function getCity(searchPrompt){
    setLoading(true);
    fetch(`http://api.geonames.org/searchJSON?q=${searchPrompt}&maxRows=100&orderby=population&username=weknowit`)
      .then((response) => response.json())
      .then((json) => {
        const resultArr = json.geonames.filter(x => x.name === searchPrompt).map(x => [x.name, x.population])[0];
        if(resultArr != undefined){
          navigation.navigate('Results', {"cityName":resultArr[0], "population":resultArr[1]})
          setLoading(false);
        } else {
          setLoading(false);
          alert("Could not find this city")
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <SearchScreen searchQuery="city" searchFuntion={getCity}>
      {loading && <ActivityIndicator color = '#bc2b78' size = "large"/>}
    </SearchScreen>
  );
};

export default CitySearchScreen;