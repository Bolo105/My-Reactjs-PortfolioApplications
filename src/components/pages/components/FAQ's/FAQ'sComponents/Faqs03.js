import React from 'react'
import styled from 'styled-components';
const Sec = styled.section`
   margin-top: 70px;
`;

function Faqs03() {
  return (
    <Sec id = "faqscomp3" className="mb-5">
       <div className = "container">
          <div className = "row">
             <div className = "col-lg-8 offset-lg-2">
                 <h1 className = "text-center mt-5">FAQ's</h1>
                 <p className = "text-center my-4">You can find the truth here...</p>
                 <div className="accordion accordion-flush" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Question # 1?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the 
                        appropriate classes that we use to style each element. These classes control the overall appearance, as well as the 
                        showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default 
                        variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Question # 2?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the
                         appropriate classes that we use to style each element. These classes control the overall appearance, as well as the 
                         showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default 
                         variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                         though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Question # 3?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the 
                        appropriate classes that we use to style each element. These classes control the overall appearance, as well as the 
                        showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default 
                        variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Question # 4?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the 
                        appropriate classes that we use to style each element. These classes control the overall appearance, as well as the 
                        showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default 
                        variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Question # 5?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the fifth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the 
                        appropriate classes that we use to style each element. These classes control the overall appearance, as well as the 
                        showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default 
                        variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Question # 6?
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the sixth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the 
                        appropriate classes that we use to style each element. These classes control the overall appearance, as well as the 
                        showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default 
                        variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </Sec>
  )
}

export default Faqs03;
