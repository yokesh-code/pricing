import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <section className='pricing'>
        {/* FREE */}
        <div className='card'>
                      <h5 className='card-title'>Free</h5>
                      <h6 className='card-price'>$0<span className='period'>/month</span></h6>
                         <hr />
                            <ul>
                                  <li>  Single User</li>
                                  <li>  5GB Storage</li>
                                  <li>  Unlimited Public Projects</li>
                                  <li>  Community Access</li>
                                  <li className='text-muted'>  Unlimited Private Projects</li>
                                  <li className='text-muted'>  Dedicated Phone Support</li>
                                  <li className='text-muted'>  Free Subdomain</li>
                                  <li className='text-muted'>  Monthly Status Reports</li>
                            </ul>
                            <div>
                            <button className="custom-btn">Button</button>
                            </div>
        </div>
        {/* PLUS */}
        <div className='card'>
                      <h5 className='card-title' >PLUS</h5>
                      <h6 className='card-price'>$9<span className='period'>/month</span></h6>
                         <hr />
                            <ul>
                                 <b> <li>  5 User</li></b>
                                  <li>  5GB Storage</li>
                                  <li>  Unlimited Public Projects</li>
                                  <li>  Community Access</li>
                                  <li>  Unlimited Private Projects</li>
                                  <li>  Dedicated Phone Support</li>
                                  <li>  Free Subdomain</li>
                                  <li className='text-muted'>  Monthly Status Reports</li>
                            </ul>
                            <div>
                            <button className="custom-btn">Button</button>

                            </div>
        </div>
        {/* PRO */}
        <div className='card'>
                      <h5 className='card-title'>PRO</h5>
                      <h6 className='card-price'>$49<span className='period'>/month</span></h6>
                         <hr />
                            <ul>
                                  <b><li>  5 User</li></b>
                                  <li>  5GB Storage</li>
                                  <li>  Unlimited Public Projects</li>
                                  <li>  Community Access</li>
                                  <li>  Unlimited Private Projects</li>
                                  <li>  Dedicated Phone Support</li>
                                  <b><li>  Unlimited Free Subdomain</li></b>
                                  <li>  Monthly Status Reports</li>
                            </ul>
                            <div>
                            <button className="custom-btn">Button</button>
                            </div>
        </div>
      </section>
    </div>
  )
}

export default App