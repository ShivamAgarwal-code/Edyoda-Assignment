import React, { useState } from 'react';
import "./Home.css";
import clock from "../Assets/Clock.svg";
import icon1 from "../Assets/Icon-1.svg";
import icon2 from "../Assets/Icon-2.svg";
import icon3 from "../Assets/Icon-3.svg";
import icon4 from "../Assets/Icon-4.svg";
import icon5 from "../Assets/Icon.svg";
import razorpay from "../Assets/Frame 12537.svg"


const Home = () => {

  const [tweMonth, setTweMonth] = useState(179);
  const [sixMonth, setSixMonth] = useState(149);
  const [threeMonth, setThreeMonth] = useState(99);
  const [result, setResult] = useState(0);

  const tweMonthHandler = (e) => {
    e.preventDefault();
    setResult(tweMonth);
  }
  const sixMonthHandler = (e) => {
    e.preventDefault();
    setResult(sixMonth);
  }
  const threeMonthHandler = (e) => {
    e.preventDefault();
    setResult(threeMonth);
  }
  

  return (
    <div className="home">
      <div className='home-left'>
        <div className='home-heading'>
          <h1>Access Curated Courses worth</h1>
          <h1><strike 
          style={{ textDecorationLine: 'line-through', textDecorationColor: '#FF0000'}}>
            ₹ 18,500</strike> at just <span>₹ 99</span> per year!</h1>
        </div>
        <div className='home-list'>
          <img src={icon5} alt='clock' />
          <p><span>100+ </span> Job relevant courses</p>
        </div>
        <div className='home-list'>
          <img src={icon1} alt='clock' />
          <p><span>20,000+ </span> Hours of content</p>
        </div>
        <div className='home-list'>
          <img src={icon2} alt='clock' />
          <p><span>Exclusive</span> webinar access</p>
        </div>
        <div className='home-list'>
          <img src={icon3} alt='clock' />
          <p>Scholarship worth <span>₹94,500</span></p>
        </div>
        <div className='home-list'>
          <img src={icon4} alt='clock' />
          <p><span>Ad Free</span> learning experience</p>
        </div>
      </div>
      <div className='home-right'>
        <form>
          <div className='form-upper'>
            <div>
              <div className='blue'>1</div>
              <div>Sign Up</div>
            </div>
            <div>
              <div className='blue'>2</div>
              <div>Subscribe</div>
            </div>
          </div>
          <div>
            <h2 className='form-heading'>Select your subscription plan</h2>
          </div>
          <div className='form-lower'>
                <p className='expired-p'>Offer expired</p>
            <div className='expired'>
            <input type="radio" id="specifyColor" name="radio1" />
              <div>
              <h5>12 Months Subscription</h5>
              </div>
              <div className='expired-right'>
                <div>Total <b>₹99</b></div>
                <div>₹5/mo</div>
              </div>
            </div>
                <p className='recomend-p'>Recomended</p>
            <div onClick={tweMonthHandler} className='recomend'>
            <input type="radio" id="specifyColor" name="radio1" />
              <div>
              <h5>12 Months Subscription</h5> 
              </div>
              <div className='recomend-right'>
                <div>Total <b>₹{tweMonth}</b></div>
                <div>₹15/mo</div>
              </div>
            </div>
            <div onClick={sixMonthHandler}  className='formList-34'>
            <input type="radio" id="specifyColor" name="radio1" />
              <h5>6 Months Subscription</h5>
              <div className='formList-right'>
                <div>Total <b>₹{sixMonth}</b></div>
                <div>₹25/mo</div>
              </div>
            </div>
            <div onClick={threeMonthHandler} className='formList-34'>
            <input type="radio" id="specifyColor" name="radio1" />
              <h5>3 Months Subscription</h5>
              <div className='formList-right'>
                <div>Total <b>₹{threeMonth}</b></div>
                <div>₹33/mo</div>
              </div>
            </div>
            <div className='division'></div>
            <div className='subscription'>
              <p>Subscription Fee</p>
              <p>₹18,500</p>
            </div>
            <div className='limited-time'>
              <div className='limited-time-offer'>
                <h4>Limited time offer</h4>
                <p>-{18500 - result}</p>
              </div>
              <div className='validity'>
                <img src={clock} alt='clock'/>
                <p>Offer valid till 25th March 2023</p>
              </div>
            </div>
            <div className='total'>
              <span><b>Total</b>(Incl. of 18% GST)</span>
              <h2>{result}</h2>
            </div>
            <div className='btn'>
              <button className='cancel-btn'>Cancel</button>
              <button className='procees-btn'>Proceed To PAY</button>
            </div>
          </div> 
          <img src={razorpay} alt='clock' className='razorpay-icon'/>
        </form>
        <div>
    </div>
      </div>
    </div>
  )
}

export default Home;