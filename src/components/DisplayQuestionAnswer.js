
/* DisplayQuestionAnswer is  a function and qusetionAnswer is a parameter get from the Main.js component */
const DisplayQuestionAnswer = ({quizData,questionCounter,apiCalled}) =>
{
    /**shuffle array of answers */
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
        return array;
    }
    // var arr = ['snehal','snhe','a','n','r'];
    // var test = shuffleArray(arr);
    // console.log(test);


  console.log("QuizDAta from QS = ",quizData);
  if(apiCalled){
    return(
        <div className="DisplayQuestionAnswer">
          <span>Inside Display File</span>
            <div className="container mt-sm-5 my-1">
            <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5"><b>{quizData[questionCounter].question}</b></div>
                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                  <button className='btn btn-success' >
                    {quizData[questionCounter].correct_answer} 
                  </button>
                  <button className='btn btn-success' >
                    {quizData[questionCounter].incorrect_answers[0]} 
                  </button>
                    <button className='btn btn-success' >
                    {quizData[questionCounter].incorrect_answers[1]} 
                  </button>
                  <button className='btn btn-success'>
                    {quizData[questionCounter].incorrect_answers[2]} 
                  </button>
                </div>
            </div>
        </div>
        </div>
        
    );
  }
  return (<div className="DisplayQuestionAnswer">
    inside
  </div>)
}

export default DisplayQuestionAnswer;