import { Text, View } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useEffect,useState} from "react";


export default function busca(){


    const route = useRoute();
    const [pesquisarFilmes, setPesquisarFilmes] = useState([]);

    useEffect(()=>{





      async function buscarFilmes() {
        const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.buscar}&include_adult=false&language=pt-BR&page=1'`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmI3MGU5MDllNThhZWIyZGI5Mzc5OGNiNzRkMDgxYyIsIm5iZiI6MTc1NjIyNjQyNy45ODMsInN1YiI6IjY4YWRlMzdiNDZhOWM4OTNlZDZjZWZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GzonJtTsIHwsW8_XIXieydVCAJY5Si2roEa7IasT_5E'
  }
};


const response = await fetch(url,options);
const data = await response.json();


console.log(data.results);


      }
      buscarFilmes();
},[])
 return(




<View>
   

 <Text>{data.results}</Text>


</View>



 )

}