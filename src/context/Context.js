import React, { useEffect, useState } from "react";
import { getTestimonial,getLanguages } from "../services";

const Context = React.createContext();

export default function MainContext({children}){
    const [testimonials ,setTestimonials]=useState();
    const [Listlanguages,setListLanguages]=useState();
    const [page,setPage]=useState(1);
    const[language,setlanguage]=useState('');
    const[exercise,setExercise]=useState('');
    const[order,setOrder] =useState('');
    const [loading,setLoading] = useState(false);
    const [displayMenu,setDisplayMenu]=useState(false)
    const [displayMobileMenu,setDisplayMobileMenu]=useState(false)

   async function getTestimonialData(){
    setTestimonials()
    const URL =`https://test-admin-api.gozem.co/hiring/api/v1/testimonials?${page?'&page='+page:''}${language&&'&language='+language}${exercise?'&exercise='+exercise:''}${order?'&order='+order:''}`
    setLoading(true);
    console.log(URL);
    const response = await getTestimonial(URL);
    const jsonData = await response.json();
    setTestimonials(jsonData)
    setLoading(false) 
    }

    async function getLanguageList(){
        const responseLanguages = await getLanguages();
        const jsonData = await responseLanguages.json();
        setListLanguages(jsonData)
    }

   function getExerciseValue(exerciceValue){
     setExercise(()=>(exerciceValue))
   }
   
   function getLanguageValue(languageValue){
       setlanguage(()=>(languageValue))
   }

   function getPageValue (pageValue){
     setPage(()=>(pageValue))
   }

   function getOrderValue(orderValue){
    setOrder(()=>(orderValue))
   }

   function display(){
    setDisplayMenu(prevDisplayMenu=>!prevDisplayMenu)
   }

   function displayMenuMob(){
     setDisplayMobileMenu(prevDisplayMobileMenu=>!prevDisplayMobileMenu)
   }

   function next(){
     console.log(page)
     setPage(prevPage=>++prevPage)
   }

   function previous(){
     setPage(prevPage=>prevPage-1)
   }

   function upDatePageNumber(value){
     setPage(value)
   }

    useEffect(()=>{
        setLoading(true)
        getTestimonialData()
        setLoading(false)
    },[exercise,order,page,language])

    useEffect(()=>{
        getLanguageList()
    }, [])

      return (
          <Context.Provider
              value={
                  {
                      testimonials,
                      Listlanguages,
                      getExerciseValue,
                      getLanguageValue,
                      getPageValue,
                      getOrderValue,
                      page,
                      display,
                      next,
                      previous,
                      upDatePageNumber,
                      displayMenu,
                      displayMobileMenu,
                      displayMenuMob,
                      loading
                  }
              }>
              {children}
          </Context.Provider>
      )
}

export { Context }