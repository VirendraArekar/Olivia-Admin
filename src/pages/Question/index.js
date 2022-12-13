import Skeleton from "../../layouts/Skeleton";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import {TfiAlarmClock} from 'react-icons/tfi'
import { useState} from "react";
import {IoCaretBackOutline, IoCaretForwardOutline, IoPlayForwardSharp} from 'react-icons/io5'


const Question = (props) => {
    const [load, setLoad] = useState(false)
    const [start, setStart] = useState(1)
    const [id, setId] = useState(1)
    const [questions , setQuestions] = useState([
      {id : 1 , question : 'Who was the first man?', options : [
        {id : 'A', answer : 'Abraham' , checked : false},
        {id : 'B', answer : 'Adam' , checked : false},
        {id : 'C', answer : 'John' , checked : false}
      ]},
      {id : 2 , question : 'Shatrapati Shivaji Terminal airport situated in?', options : [
        {id : 'A', answer : 'Maharashtra' , checked : false},
        {id : 'B', answer : 'Gujarat' , checked : false},
        {id : 'C', answer : 'Banglore' , checked : false}
      ]},
    ])

    const selectAnswer = (id, answer) => {
        setQuestions(current =>
            current.map(obj => {
                if (obj.id === id) {
                  var options = obj.options;
                  var newOptions = [];
                  for(var i = 0 ; i < options.length;i++){
                     if(answer === options[i].id){
                        let obj  = {...options[i], checked : true};
                        newOptions.push(obj)
                     }
                     else{
                        let obj  = {...options[i], checked : false};
                        newOptions.push(obj)
                     }
                  }
                  return {...obj, options : newOptions};
                }
                else{
                  return obj;
                }
            }),
        );
    }

    return(
        <Skeleton>
            <Loader loader={load} />
            <div className="py-12 w-100">
                <div className="flex flex-col justify-center items-center">
                  <div className="inline-block relative flex flex-col justify-center items-center">
                   <TfiAlarmClock className="text-5xl text-[#3D5890]"/>
                   <span className="absolute mt-2 font-bold px-1 bg-white">90</span>
                  </div>
                  <h3 className="text-center text-3xl my-8">Questions {start.toString().length === 1 ? `0${start}` : start}/60</h3>
                </div>
                <div className="w-100 px-28 py-16 h-48 bg-[#3D5890] mt-4 flex flex-col">
                    <div className="inline-block text-3xl">
                        <div className="bg-white w-16 h-16 inline-block p-4 border rounded-full">
                            <span className="text-[#3D5890] mx-2">{start}</span>
                        </div>
                        <span className="mx-24 text-white">{questions[start - 1].question}</span>
                    </div>
                </div>
                <div class="h-56 grid grid-cols-3 gap-44 content-center my-12 mx-32">
                    {
                        questions[start-1].options.map((item, index) => (
                            <div className={`${item.checked ? 'bg-gray-600' : 'bg-[#E0E0E0]'} p-5 text-xl font-bold cursor-pointer ${item.checked ? 'text-white' : ''}`} onClick={() => selectAnswer(id , item.id)} >{item.id}. &nbsp;&nbsp;&nbsp;&nbsp;{item.answer}</div>
                        ))
                    }

                </div>
                <div className="mx-52 pt-6 pb-10">
                    {
                        start !== 1 &&
                        <button className="bg-[#E0E0E0] text-grey-darkest py-3 px-4 rounded inline-flex items-center" onClick={() => {
                            setId(start - 1)
                            setStart(start - 1)
                        }}>
                            <IoCaretBackOutline className="w-4 h-4 mr-2"/>
                            <span className="text-[#7C7C7C]">Previous</span>
                        </button>
                    }

                    <span className="float-right">
                        {
                            questions.length >= start &&
                            <button className="bg-[#3D5890] text-white py-3 px-4 rounded inline-flex items-center mx-8" onClick={() => {
                                setId(start + 1)
                                setStart(start + 1)
                            }}>
                                <span className="text-white">Next</span>
                                <IoCaretForwardOutline className="w-4 h-4 ml-2"/>
                            </button>
                        }

                        {
                            questions.length >= start &&
                            <button className="bg-white text-[#3D5890] border border-[#3D5890] py-3 px-4 rounded inline-flex items-center">
                                <span className="text-[#3D5890]">Skip</span>
                                <IoPlayForwardSharp className="w-4 h-4 ml-2"/>
                            </button>
                        }

                        
                    </span>
                </div>
            </div>
        </Skeleton>
    )
}


export default Question;