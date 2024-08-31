import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { FaCircleArrowRight } from "react-icons/fa6";
import forum_service from '../Assets/forum_service.png';
import store_rec_service from '../Assets/store_rec_service.png';
import set_remind_service from '../Assets/set_remind_service.png';
import doc_cont_service from '../Assets/doc_cont_service.png';
import health_tip_service from '../Assets/health_tip_service.png';
import chatbot_service from '../Assets/chatbot_service.png';

const Services = () => {
    return (
        <section className='services_section'>
            <h1 className='our_services'>Our Services</h1>
            <hr className='our_services_underline'/>
            <div className='services'>
          <div className="service forum-community">
                    <img src={forum_service} alt='forum_service' className='service_logos' />
                    <h3>Forums</h3>
                    <p>Interactive groups for Maternity, Senior Citizens, Working Professionals, and more.</p>
                    <div className="bottom-row">
                        <Link to="/community" className="learn_more_arrow">
                                  Learn more <FaCircleArrowRight className="lm_arrow"/>
                        </Link>
                    </div>
                </div>
          <div className="service store-records">
          <img src={store_rec_service} alt='store_rec_service' className='service_logos' />
                    <h3>Store Records</h3>
                    <p>Store, access, and manage your medical records securely, with easy sharing.</p>
                    <div className="bottom-row">
                        <Link to="/store-records" className="learn_more_arrow">
                                Learn more <FaCircleArrowRight className="lm_arrow"/>
                        </Link>
                    </div>
                </div>
          <div className="service set-reminders">
          <img src={set_remind_service} alt='set_remind_service' className='service_logos' />
                    <h3>Set Reminders</h3>
                    <p>Set medicine reminders, and schedule check-up reminders.</p>
                    <div className="bottom-row">
                        <Link to="/set-reminders" className="learn_more_arrow">
                                Learn more <FaCircleArrowRight className="lm_arrow"/>
                        </Link>
                    </div>
                </div>
          <div className="service doctor-contacts">
            <img src={doc_cont_service} alt='doc_cont_service' className='service_logos' />
                    <h3>My Doctor Contacts</h3>
                    <p>Save contact & address of frequently visited doctors for easier appointment scheduling.</p>
                    <div className="bottom-row">
                        <Link to="/doc-contacts" className="learn_more_arrow">
                                Learn more <FaCircleArrowRight className="lm_arrow"/>
                        </Link>
                    </div>
                </div>
          <div className="service health-tips">
          <img src={health_tip_service} alt='health_tip_service' className='service_logos' />
                    <h3>Health Tips & Articles</h3>
                    <p>Stay informed with the latest health tips & articles on wellness and medical advice.</p>
                    <div className="bottom-row">
                        <Link to="/health-tips" className="learn_more_arrow">
                                Learn more <FaCircleArrowRight className="lm_arrow"/>
                        </Link>
                    </div>
                </div>
          <div className="service chatbot-ai">
          <img src={chatbot_service} alt='chatbot_service' className='service_logos' />
                    <h3>Chatbot OR AI Reports Analysis</h3>
                    <p>Use our AI-powered tools for analyzing reports or accessing more services.</p>
                    <div className="bottom-row">
                        <Link to="/chatbot-ai" className="learn_more_arrow">
                                Learn more <FaCircleArrowRight className="lm_arrow"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
