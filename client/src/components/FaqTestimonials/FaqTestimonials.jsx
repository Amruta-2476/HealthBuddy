import React, { useState } from 'react';
import './FaqTestimonials.css';
import faq_image from '../Assets/faq_pic.png';
import { FaChevronDown } from 'react-icons/fa'; // Import the down arrow icon
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaUserCircle } from "react-icons/fa";

const FAQ_Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first question being expanded

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index); // Toggle between expanded and closed
  };

  return (
    <section className='faq_testimonials'>
      <div className="faq_section">
        <div className="faq_grid">
          <div className="faq_left">
            <img src={faq_image} alt="faq_image" />
          </div>
          <div className="faq_right">
            <h1 className='faqs'>Frequently Asked Questions</h1>
            <hr className='faqs_underline' />

            {/* Accordion Structure */}
            <div className="faq_item" onClick={() => toggleFAQ(0)}>
              <div className="faq_header">
                <h3 className="faq_question">Is there a cost to use this app?</h3>
                <FaChevronDown className={`faq_icon ${activeIndex === 0 ? 'rotate' : ''}`} />
              </div>
              {activeIndex === 0 && (
                <p className="faq_answer">Our basic features are free to use. However, some advanced features or premium content may require a subscription.</p>
              )}
            </div>

            <div className="faq_item" onClick={() => toggleFAQ(1)}>
              <div className="faq_header">
                <h3 className="faq_question">What should I do if I encounter a problem ?</h3>
                <FaChevronDown className={`faq_icon ${activeIndex === 1 ? 'rotate' : ''}`} />
              </div>
              {activeIndex === 1 && (
                <p className="faq_answer">If you experience any issues, contact our support team through the app's help section or email us at [support email]. We're here to help!</p>
              )}
            </div>

            <div className="faq_item" onClick={() => toggleFAQ(2)}>
              <div className="faq_header">
                <h3 className="faq_question">How do I set up my profile and get started?</h3>
                <FaChevronDown className={`faq_icon ${activeIndex === 2 ? 'rotate' : ''}`} />
              </div>
              {activeIndex === 2 && (
                <p className="faq_answer">After signing up,complete your profile by providing basic information about your health needs & preferences to help us tailor features to better serve you.</p>
              )}
            </div>

            <div className="faq_item" onClick={() => toggleFAQ(3)}>
              <div className="faq_header">
                <h3 className="faq_question">What are the chatrooms, and how do I use them?</h3>
                <FaChevronDown className={`faq_icon ${activeIndex === 3 ? 'rotate' : ''}`} />
              </div>
              {activeIndex === 3 && (
                <p className="faq_answer">Our chatrooms are a community where you can connect with others who share similar health concerns or interests. Please note that our chatrooms are actively monitored by an admin. Any users spreading false info, spamming, or being abusive will be banned or removed to maintain a safe and supportive environment.</p>
              )}
            </div>

          </div>
        </div>
      </div>

      <div className="testimonials_section">
        <h1 className='testimonials'>Our Happy Users</h1>
        <hr className='testimonials_underline' />
        <Swiper 
            modules={[Pagination]} 
            spaceBetween={30} 
            slidesPerView={1} 
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,  // Increased spaceBetween
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,  // Increased spaceBetween
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,  // Increased spaceBetween
              }
            }}
          >

          <SwiperSlide>
            <div class="swiper-slide">
              <div class="content">
                <FaUserCircle/>
                <div>
                  <h4>
                    Muhibur Rahman
                  </h4>
                </div>
              </div>
              <p className='testimonial_text'> "I have been using this app for a few weeks now and it has been a great help in managing my diabetes." </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide">
              <div class="content">
                <FaUserCircle/>
                <div>
                  <h4>
                    Jim Halpert
                  </h4>
                </div>
              </div>
              <p className='testimonial_text'> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus qui, id autem tenetur fuga!" </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide">
              <div class="content">
                <FaUserCircle/>
                <div>
                  <h4>
                    Ron Weasley
                  </h4>
                </div>
              </div>
              <p className='testimonial_text'> "I have been using this app for a few weeks now and it has been a great help in managing my diabetes." </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide">
              <div class="content">
                <FaUserCircle/>
                <div>
                  <h4>
                    Hermione Granger
                  </h4>
                </div>
              </div>
              <p className='testimonial_text'> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum ad aut tempora sed labore nihil!" </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide">
              <div class="content">
                <FaUserCircle/>
                <div>
                  <h4>
                    Harry Potter
                  </h4>
                </div>
              </div>
              <p className='testimonial_text'> "I have been using this app for a few weeks now and it has been a great help in managing my diabetes." </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  );
};

export default FAQ_Testimonials;
