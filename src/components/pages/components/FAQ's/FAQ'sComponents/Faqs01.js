import React from 'react'
import { FaQuestion } from 'react-icons/fa';
import styled from "styled-components";

const MainC = styled.section`
    background: #fff;
	font-family: "Roboto", sans-serif;
    padding-top: 100px;
	padding-bottom: 100px;
`;
const FlexC = styled.div`
    align-items: center;
`;
const But = styled.button`
    margin-bottom: 10px;
    &:not(.collapsed){
        border: 0px!important;
	    color: #0c63e4;
        background-color: #ffffff;
        box-shadow: inset 0 0px 0 rgb(0 0 0 / 13%);
    }
`;
const AccB = styled.div`
    margin-top: 15px;
	padding: 25px;
	background: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 25px -3px rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
`;
const Icon = styled.div`
    height: 30px;
	width: 30px;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #2b4eff;
    border: 5px solid #b2bfff;
	color: #fff;
	margin-left: -5px;
	margin-right: 10px;
	transform: scale(1.2);
`;


function Faqs01() {
  return (
<MainC id='faqscomp1' className="main-content">
  <div className="container">
    <h2 className="text-center text-Capitalize mb-3">Frequently Asked Questions</h2>
    <br />
    <br />
    <FlexC className="row flex-center">
      <div className="col-sm-10 offset-sm-2">
        <div className="accordion accordion-flush" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <But className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                <Icon className="circle-icon"> 
                   <FaQuestion /> 
                </Icon>
                <span>How to Create FAQ Section</span>
              </But>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <AccB className="accordion-body"> <strong>This is the first item's accordion body.</strong> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. 
              </AccB>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <But className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <Icon className="circle-icon"> 
                   <FaQuestion /> 
                </Icon>
                <span>What jQuery do I need?</span>
              </But>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <AccB className="accordion-body"> <strong>This is the second item's accordion body.</strong> Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              </AccB>
              </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <But className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <Icon className="circle-icon"> 
                   <FaQuestion /> 
                </Icon>
                <span>HTML CSS FAQ Design With jQuery Accordion</span>
              </But>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <AccB className="accordion-body"> <strong>This is the third item's accordion body.</strong> At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis 
              </AccB>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <But className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <Icon className="circle-icon"> 
                   <FaQuestion /> 
                </Icon>
                <span>HTML CSS FAQ Design With jQuery Accordion</span>
              </But>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample">
              <AccB className="accordion-body"> <strong>This is the third item's accordion body.</strong> At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis 
              </AccB>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <But className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <Icon className="circle-icon"> 
                   <FaQuestion /> 
                </Icon>
                <span>HTML CSS FAQ Design With jQuery Accordion</span>
              </But>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
              data-bs-parent="#accordionExample">
              <AccB className="accordion-body"> <strong>This is the third item's accordion body.</strong> At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis 
              </AccB>
            </div>
          </div>
        </div>
      </div>
    </FlexC>
  </div>
</MainC>
  )
}

export default Faqs01;
