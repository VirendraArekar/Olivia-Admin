// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
  
import ProtectedRoute from "./utils/protectedRoute";
import PrivateRoutes from "./route/PrivateRoutes";
import Protect from "./pages/Protect/index.js";
import SignIn from "./layouts/SignInLayout";
import SignUp from "./layouts/SignUpLayout";
import Invite from "./allComponents/Invite";
import TermsAndCondition from "./allComponents/Terms/index";
import Payment from "./allComponents/Payment/payment";
import Method from "./allComponents/Payment/method";
import Profile from "./allComponents/Profile/index";
import Home from "./pages/Home";




function App() {
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
         <Route exact path="/login" element={<SignIn/>} />
         <Route exact path="/signup" element={<SignUp/>} />
         <Route exact path="/termsAndCondition" element={ <TermsAndCondition />} />
         <Route exact path="/invite" element={ <Invite />} />
         <Route exact path="/payment" element={ <Payment/>} />
         <Route exact path="/paymentmethod" element={ <Method/>} />
         <Route exact path="/profile" element={ <Profile/>} />
         {/* <Route element={<PrivateRoutes />}> */}
          {/* <Route exact path="/" element={<ProtectedRoute ><Dashboard/></ProtectedRoute>} /> */}
          {/* <Route exact path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} /> */}
          
         {/* </Route> */}
         {/* <Route exact path="/protect" element={<Protect />}/> */}
        </Routes>
      </Router>
   
  );
}

export default App;
