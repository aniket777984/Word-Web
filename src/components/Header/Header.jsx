import "./Header.css"
import React from 'react';
import { MenuItem, TextField } from "@material-ui/core";
// import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import categories from "../../data/category";
import { createTheme } from "@material-ui/core";
const Header = ({category,setCategory , word,setWord,LightMode}) => {

  const darkTheme = createTheme({
      palette : {
          primary : {
            main :LightMode? "#000" : "#fff" ,
          },
          type :LightMode? "light"  : "dark",
      }
  })

   const  handleChange = (language)=>{
      setCategory(language);
      setWord("")
   }

  return (
    <div className='header'>
        <span className='title'>{word? word : "Word Hunt"}</span>
        <div className="inputs">
            <ThemeProvider theme={darkTheme}>
            <TextField 
            className="search"
            label="Search a word"
            value={word}
            onChange={(e)=>setWord(e.target.value)}
            / >
            <TextField  
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e)=> handleChange(e.target.value)}
            >
                {categories.map((option) => {
                       return <MenuItem key={option.value} value={option.label} >
                            {option.value}
                        </MenuItem>
                    })}

            </TextField>
            </ThemeProvider>
            
        </div>
    </div>
  )
}

export default Header
