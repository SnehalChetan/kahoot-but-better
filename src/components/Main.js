import { useEffect, useState } from 'react';/*using useEffect and useState react hooks */
import Category from './Category';
import FetchForApi from '../helpers/FetchForApi';/** importing components here*/
import DisplayQuestionAnswer from './DisplayQuestionAnswer';

 function Main(){
    const [selectedCategory,setSelectedCategory] = useState(0);
   // console.log("selected Category = ");
//console.log(selectedCategory);
    var apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&category=15";
 
    /**createing an empty array with to store json data of questions from api */
    const [quizData, setQuizData] = useState([]); //array
   // console.log("quizData = ", quizData);
    const [apiCalled,setApiCalled] = useState(false); //boolean
    const [questionCounter, setQuestionCounter] = useState(0);
    let [score, setScore] = useState(0);
    let [userMessage,setUserMessage] = useState('');
    
   /**   * Fetch data from api url with the help of FetchForAPi helper   */
    //assign api result data to an array
    const getQuizData = () => { 
        // url = url+selectedCategory;
        // console.log("url = ", apiUrl);
        FetchForApi(apiUrl).then( data => {
        setQuizData(data.results);
        setApiCalled(true);
    }).catch(err => console.log(err));
}

    useEffect(() => { //Call the api only once
    if(!apiCalled){
        getQuizData(); 
    }
    // if(!selectedCategory){ handleCategorySelection(); }
    }, []);

    
   //display all the available categories

    const handleCategorySelection = (num) =>{
       // console.log("data = ",event.target);
        setSelectedCategory(num);
    }
    // going to the next question
  function nextQuestion(){
    const interval = setInterval(() => {
      if(questionCounter > 10){
        setQuestionCounter(`you scored ${score} out of 10, great job!`);
        return;
      }else{
        console.log(questionCounter)
        setQuestionCounter(questionCounter +=1)
      }

      console.log('Inside next question function');
      clearInterval(interval);
      emptyUserMessage();
      return;
    }, 1000);
  }
    //adding and substracting points
    function increaseScore() {
        setScore(score += 1);
      }
    
      // checking if the clicked answer is right or not
      function checkAnswer(answer){
        if (answer === quizData[questionCounter].correct_answer){
          setUserMessage(`correct, ${quizData[questionCounter].correct_answer} is the right answer`)
          increaseScore();
          nextQuestion();
        }else{
          setUserMessage(`incorrect, ${quizData[questionCounter].correct_answer} is the right answer`)
          nextQuestion();
        }
      }
    
      /**empty user message div */
      function emptyUserMessage(){
        setUserMessage('');
      }
  /* */
    if(apiCalled && quizData.length){
    return(
        <div className="App">
            <Category  handleCategorySelection={handleCategorySelection} />
            <h2>selectedCategory: {selectedCategory}</h2>
            <DisplayQuestionAnswer quizData={quizData} questionCounter={questionCounter} apiCalled={apiCalled}/>{/*passing quizdata as a property value to the another compon*/ } 
            <div>{userMessage}</div>
        </div>
    );
    }

    return(<div>
            TEst
      </div>);
 }

 export default Main;