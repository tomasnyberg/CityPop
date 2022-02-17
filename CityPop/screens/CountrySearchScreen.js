import SearchScreen from './SearchScreen'
import { useState } from 'react';
import {ActivityIndicator} from 'react-native'

const CountrySearchScreen = ({navigation}) => {
  const[loading, setLoading] = useState(false)
  /**
   * Fetches the 3 largest cities from the searched country, and navigates to the
   * city selection screen.
   * 
   * @param {string} searchPrompt text from the input field
   */

  function getCountry(searchPrompt) {
    setLoading(true);
    fetch(`http://api.geonames.org/searchJSON?q=${searchPrompt}&maxRows=200&orderby=population&username=weknowit`)
      .then((response) => response.json())
      .then((json) => {
        const resultArr = json.geonames
        .filter(x => x.countryName === searchPrompt)
        .filter(x => x.fclName.startsWith("city")).map(x => [x.name, x.population]).slice(0,3);
        if(resultArr != undefined && resultArr.length !== 0){
          let sendArr = [];
          for(let city of resultArr){
            sendArr.push({name:city[0], population: city[1]});
          }
          navigation.navigate('CityChoose', {"cities":sendArr, "countryName":searchPrompt})
          setLoading(false);
        } else {
          setLoading(false);
          alert("Could not find any cities")
        }
        console.log(resultArr);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };


  return (
    <SearchScreen searchQuery="country" searchFuntion={getCountry}>
      {loading && <ActivityIndicator color = '#bc2b78' size = "large"/>}
    </SearchScreen>
  );
};

export default CountrySearchScreen;
