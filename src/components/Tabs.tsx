import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material'; // Add ThemeProvider import
import GridCard from './GridCard';
import ListCard from './ListCard';

function CustomTabs({data}:any ) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#50C878"
      }
    }
  });
  
  
  

  return (
    <ThemeProvider theme={theme}>  {/* Wrap your component with ThemeProvider */}
      <div className='bg-[var(--black)] text-[var(--white)]'>
        <TabContext value={value}>
          <div className=''>
            <TabList onChange={handleChange}variant='fullWidth' aria-label="lab API tabs example">
              <Tab sx={{color:"var(--white)"}} label="grid" value="grid" />
              <Tab sx={{color:"var(--white)"}} label="list" value="list" />
            </TabList>
          </div>
          <TabPanel value="grid">
            <div className='flex flex-wrap  justify-between gap-5 sm:mx-[80px] mx-[20px] '>
            {data.map((element:any,index:number)=>{
                return (
                    <div key={index}>
                        <GridCard value={element} index={index}></GridCard>
                        
                    </div>
                    

                )
            })}
            </div>
          </TabPanel>
          <TabPanel value="list">
            <div className='flex flex-col  xl:mx-[50px] sm:mx-[30px] mx-[5px]'>
            {data.map((element:any,index:number)=>{
                return (
                    <div key={index}>
                        <ListCard value={element} index={index}> </ListCard>
                        
                    </div>
                    

                )
            })}

            </div>
           
          </TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
}

export default CustomTabs