import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ContactUs } from "./components/pages/ContactUs";
import Footer from './components/pages/Footer';
import  Home from "./components/pages/Home";
import Pricing from './components/pages/Pricing';
import ScrollToTop from './components/ScrollToTop';
import Notfound from './components/pages/Notfound'
import Adm_login from './components/pages/Admin/Adm_login';
import { Adm_Registration } from "./components/pages/Admin/Adm_Registration";
import { Stud_Registration } from "./components/pages/Student/Stud_Registration";
import { Stud_login } from "./components/pages/Student/Stud_login";
 import { Features } from "./components/pages/Features";
 import { Services } from "./components/pages/Services";
import TestSelection from './components/pages/Student/TestSelection';
import Instructions from './components/pages/Student/Instructions';
import ExamPage from './components/pages/Student/ExamPage';
import AdminMain from './components/pages/Admin/AdminMain';
import UserMgt from './components/pages/Admin/UserMgt';
import QuestionEdit from './components/pages/Admin/QuestionEdit';
import AddSubjects from './components/pages/Admin/AddSubjects';
import DisplayQuestions from './components/pages/Admin/DisplayQuestions';
import Results from './components/pages/Student/Results';

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Switch>

        <Route path='/' exact component={Home} ></Route>
         <Route path='/features' component={Features}></Route>  
        <Route path='/services' component={Services}></Route>   
        <Route path='/pricing' component={Pricing}></Route>  
        <Route path='/ContactUs' component={ContactUs} ></Route>  
        <Route path='/admin-log' component={Adm_login}></Route>  
        <Route path='/student-log' component={Stud_login}></Route>  
        <Route path='/admin-register' component={Adm_Registration}></Route>
        <Route path='/student-register' component={Stud_Registration}></Route>
        <Route path="/TestSelection" component={TestSelection}></Route>
        <Route path="/Instructions" component={Instructions}></Route>
        <Route path="/ExamPage" component={ExamPage}></Route>
        <Route exact path="/AdminMain" component={AdminMain}></Route>

        <Route exact path='/AdminMain/usermgt'  component={UserMgt}></Route>
        <Route exact path='/AdminMain/questionedit'  component={QuestionEdit}>
          </Route>
          <Route exact path="/AdminMain/addsubjects" component={AddSubjects}></Route>
          <Route exact path="/AdminMain/displayquestions" component={DisplayQuestions}></Route>
          <Route exact path="/results" component={Results}/>

        <Route component={Notfound} />
        </Switch>
        <Footer></Footer>
    </Router>
  );
}

export default App;
