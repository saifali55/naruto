import React from 'react'
import collection1 from '../images/collection1.png' 
// import collection2 from '../images/collection2.png' 
// import collection3 from '../images/collection3.png' 
// import collection4 from '../images/collection4.png' 
// import collection5 from '../images/collection5.png' 
// import collection from '../images/collection6.png' 

function Collections() {
  return (
    <div className='content-container whole-content'>
      <div className='focused_collection'>
        <p>Focused Collections</p>
        <span></span>
      </div>
    <div className='collections'>
      <div className='collection_item'>
        <img className='collect-img' src={collection1}/>
        <div className='specifications'>
        <li>MB MSI B450 A PRO MAX</li>
        <li>CPU RYZEN 5 2400G</li>
        <li>PS 550W Thermaltake</li>
        <li>GPU RTX 3080Ti </li>
        <li>MSI MAG Vampiric 100R Mid-Tower Case</li>
        <p><span>1,300$</span> - <s>1,400$</s></p>
        <button className='button'>Show details</button>
        </div>
      </div>
      <div className='collection_item'>
        <img className='collect-img' src={collection1}/>
        <div className='specifications'>
        <li>MB MSI B450 A PRO MAX</li>
        <li>CPU RYZEN 5 2400G</li>
        <li>PS 550W Thermaltake</li>
        <li>GPU RTX 3080Ti </li>
        <li>MSI MAG Vampiric 100R Mid-Tower Case</li>
        <p><span>1,300$</span> - <s>1,400$</s></p>
        <button className='button'>Show details</button>
        </div>
      </div>
      <div className='collection_item'>
        <img className='collect-img' src={collection1}/>
        <div className='specifications'>
        <li>MB MSI B450 A PRO MAX</li>
        <li>CPU RYZEN 5 2400G</li>
        <li>PS 550W Thermaltake</li>
        <li>GPU RTX 3080Ti </li>
        <li>MSI MAG Vampiric 100R Mid-Tower Case</li>
        <p><span>1,300$</span> - <s>1,400$</s></p>
        <button className='button'>Show details</button>
        </div>
      </div>
    </div>
    <div className='collect'>
    <h4>Build your own collection</h4>
    <h4>Our collections</h4>
    </div>
  </div>
  )
}

export default Collections