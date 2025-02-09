import './Navbar.css';
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
  const lightDark=()=>{
    
  }
  return <>

    <nav>
        <div className="container">
          <h2>Notes</h2>
          <button className='btn' onClick={lightDark}><BsMoonStars size={30} /></button>
        </div>
    </nav>

        </>;
};

export default Navbar;

// import './Navbar.css';
// import { BsMoonStars } from "react-icons/bs";

// const Navbar = ({ isDarkMode, toggleTheme }) => {
//   return (
//     <>
//       <nav>
//         <div className="container">
//           <h2>Notes</h2>
//           <button className='btn' onClick={toggleTheme}>
//             <BsMoonStars size={30} />
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
