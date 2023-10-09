import React from 'react'
import styled from "styled-components";

const Faq = styled.section`
   padding: 60px 0;
   margin-top: 50px;
`;
const FaL = styled.ul`
   padding: 0;
   list-style: none;
`;
const Li = styled.li`
  border-bottom: 1px solid #d4e5fc;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
const Quest = styled.div`
  display: block;
  position: relative;
  font-family: #106eea;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  padding-left: 25px;
  cursor: pointer;
  color: #0d58ba;
  transition: 0.3s;
`;
const Par = styled.p`
  margin-bottom: 0;
  padding: 10px 0 0 25px;
`;
const SecT = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;
const Head1 = styled.h3`
  font-size: 35px;
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0;
  color: #000;
  display: inline-block;
  text-transform: capitalize;
`;
const Par1 = styled.p`
  margin: 15px auto 0 auto;
  font-weight: 600;
  @media (min-width: 1024px) {
      width: 50%;
  }
`;

function Faqs02() {
  return (
    <Faq id="faqscomp2" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <SecT className="section-title">
          <Head1>Frequently Asked <span>Questions</span></Head1>
          <Par1>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</Par1>
        </SecT>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <FaL className="faq-list">
              <Li>
                <Quest data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></Quest>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <Par>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </Par>
                </div>
              </Li>
              <Li>
                <Quest data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></Quest>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <Par>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </Par>
                </div>
              </Li>
              <Li>
                <Quest data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></Quest>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <Par>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </Par>
                </div>
              </Li>
              <Li>
                <Quest data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></Quest>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <Par>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </Par>
                </div>
              </Li>
              <Li>
                <Quest data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></Quest>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <Par>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </Par>
                </div>
              </Li>
              <Li>
                <Quest data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></Quest>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <Par>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                  </Par>
                </div>
              </Li>
            </FaL>
          </div>
        </div>
      </div>
    </Faq>
  );
}

export default Faqs02;
