import {Stack} from '@mui/material'
import {Link} from 'react-router-dom' 

import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () =>(

  <Stack direction='row' alignItems='center'  sx={{position:'sticky', background:'#000', top:0, justifyContent:'space-between' ,width:'100%', padding:'10px 20px 10px 10px'}}>
    <Link to='/' style={{display:'flex', alignItems:'center'}}>
      <img src={logo} alt="Logo" height={45} />
    </Link>
  <SearchBar />
  </Stack>      

)

export default Navbar