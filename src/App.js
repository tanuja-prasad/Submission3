import React,{useState} from "react"
import Icons from"./Component/Icon"
import { FaTimes,FaRegCircle } from "react-icons/fa"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Button,Container,Card,CardBody,Row,Col} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"


let tictacArray= new Array(9).fill("")
const App = ()=>{
    let [isCross,setIsCross] = useState()
    let [winMessage,setWinMessage] = useState("")

    
    const choiceIcon = ()=>{
        setIsCross(true)
    }

    const choiceIcons = ()=>{
        setIsCross(false)
    }
   
    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictacArray.fill("")
    }



    const findWinner=()=>{
        if(tictacArray[0]== tictacArray[1] && tictacArray[0]==tictacArray[2] && tictacArray[0]!=""){
           setWinMessage(tictacArray[0]+" has won")
        }
        else if(tictacArray[3]== tictacArray[4] && tictacArray[3]==tictacArray[5] && tictacArray[3]!=""){
            setWinMessage(tictacArray[3]+" has won")
        }
        else if(tictacArray[6]== tictacArray[7] && tictacArray[6]==tictacArray[8] && tictacArray[6]!=""){
            setWinMessage(tictacArray[6]+" has won")
        }
        else if(tictacArray[0]== tictacArray[3] && tictacArray[0]==tictacArray[6] && tictacArray[0]){
            setWinMessage(tictacArray[0]+" has won")
        }
        else if(tictacArray[1]== tictacArray[4] && tictacArray[1]==tictacArray[7] && tictacArray[1]){
            setWinMessage(tictacArray[1]+" has won")
        }
        else if(tictacArray[2]== tictacArray[5] && tictacArray[2]==tictacArray[8] && tictacArray[2]){
            setWinMessage(tictacArray[2]+" has won")
        }
        else if(tictacArray[2]== tictacArray[4] && tictacArray[2]==tictacArray[6] && tictacArray[2]){
            setWinMessage(tictacArray[2]+" has won")
        }
        else if(tictacArray[0]== tictacArray[4] && tictacArray[0]==tictacArray[8] && tictacArray[0]){
            setWinMessage(tictacArray[0]+" has won")
        }



        let MatchTie = !tictacArray.includes("")
        if(MatchTie){
            setWinMessage("'Draw,Try Again..!'")
            return toast( "Its A Tie..!!",{type:"dark"})
        }
    }
    

    const changeItem = (index)=>{
        if(winMessage){
            return toast("Game Over",{type:"success"})
        }
        if(tictacArray[index] ==""){
            tictacArray[index] = isCross? "cross" : "circle"  
            setIsCross(!isCross)
        }
        else{
            return toast("Tap On Right Place..",{type:"error"})
        }
        findWinner()
    }

    return(
        <Container className="p-5"> 
          <ToastContainer position="bottom-center" > </ToastContainer>
           <Row> 

              <Col md={6} className="offset-md-3"> 
                 {
                   winMessage? (
                       <div>
                       <h1 className="text-center"> 
                       {winMessage}
                       </h1>
                       <Button onClick={playAgain}> Play Again</Button>
                       </div>
                   ) : (
                       <h1 style={{color:"white"}}>
                           {isCross? "Cross's Turn": "Circle's Turn"}
                       </h1>
                   )

                 } 
                 <br />
                    <div  style={{textAlign: "center",color:"black",fontWeight:"bold"}}>
                        Choose Icons :- 
                        <button className="btn" style={{textAlign: "center"}}  onClick={choiceIcon}><FaTimes /></button>
                        <button className="btn" style={{textAlign: "center"}} onClick={choiceIcons}><FaRegCircle /></button>
                    </div>
                  
                <div className="grid"> 
                      {tictacArray.map((value,index)=>(
                          <Card onClick={()=>changeItem(index)}> 
                              <CardBody className="box"> 
                                <Icons choice={tictacArray[index]}/>
                            </CardBody>
                        </Card>
                    ))}

                </div>


              
            </Col>

           </Row>
            
        </Container>
    )
}

export default App