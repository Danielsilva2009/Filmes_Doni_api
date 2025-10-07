import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList , ScrollView} from "react-native";
import BannerFilmes from '../../components/bannerFilmes'
import dados from "../../components/data/data.js";
import Header from "../../components/header";
import Search from "../../components/searchbar";
import CardMovies from "../../components/cardMovies";
import { useState,useEffect } from "react";
 









 
export default function Home(){


const [movies,setMovies] = useState([]);

useEffect(()=>{
  
  async function buscarfilmes (){ 
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmI3MGU5MDllNThhZWIyZGI5Mzc5OGNiNzRkMDgxYyIsIm5iZiI6MTc1NjIyNjQyNy45ODMsInN1YiI6IjY4YWRlMzdiNDZhOWM4OTNlZDZjZWZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GzonJtTsIHwsW8_XIXieydVCAJY5Si2roEa7IasT_5E'


      
  }
};

 const response = await fetch(url,options);
 const data = await response.json();

 console.log(data)
 setMovies(data.results);
  }

  buscarfilmes();
  
  },[])


const [moviess,setMoviess] = useState([]);

useEffect(()=>{
  
  async function buscarfilmess (){ 
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmI3MGU5MDllNThhZWIyZGI5Mzc5OGNiNzRkMDgxYyIsIm5iZiI6MTc1NjIyNjQyNy45ODMsInN1YiI6IjY4YWRlMzdiNDZhOWM4OTNlZDZjZWZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GzonJtTsIHwsW8_XIXieydVCAJY5Si2roEa7IasT_5E'


      
  }
};

 const response2 = await fetch(url,options);
 const data2 = await response2.json();

 console.log(data2)
 setMoviess(data2.results);
  }

  buscarfilmess();
  
  },[])


















  return (
    <ScrollView contentContainerStyle={{alignItems:'center',backgroundColor:'#141a29'}}>
      <Header></Header>
      <Search></Search>
      <BannerFilmes></BannerFilmes>
 
      <View style={{width:'90%'}}>
        <FlatList
          data = {movies}
 
          horizontal = {true}
 
          keyExtractor={(item) => item.id}
 
          renderItem= {({item}) => (
           
             <CardMovies titulo = {item.title}  nota = {item.vote_average}  img = {item.poster_path} descricao = {item.overview}>





              
             </CardMovies>
         
         
         
          )
        }
 
        />
 
      </View>


<View style={{width:'90%'}}>
        <FlatList
          data = {moviess}
 
          horizontal = {true}
 
          keyExtractor={(item) => item.id}
 
          renderItem= {({item}) => (
           
             <CardMovies titulo = {item.title}  nota = {item.vote_average}  img = {item.poster_path} descricao = {item.overview}>





              
             </CardMovies>
         
         
         
          )
        }
 
        />
 
      </View>
    </ScrollView>
  )
}

 
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',

 
  }
})
