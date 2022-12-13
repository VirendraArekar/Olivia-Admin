// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
  
import ProtectedRoute from "./utils/protectedRoute";
import PrivateRoutes from "./route/PrivateRoutes";
import Protect from "./pages/Protect/index.js";
import SignIn from "./layouts/SignInLayout";
import SignUp from "./layouts/SignUpLayout";
import Invite from "./pages/Invite";
import TermsAndCondition from "./pages/Terms/index";
import Payment from "./pages/Payment/payment";
import Method from "./pages/Payment/method";
import Profile from "./pages/Profile/index";
import Home from "./pages/Home";
import Question from "./pages/Question";




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
         <Route exact path="/quiz" element={ <Question/>} />
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
