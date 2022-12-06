import React, {useState} from 'react'
import './Shop.css'
import pic1 from './../../assets/img/pic1.jpg'
import pic2 from './../../assets/img/pic2.jpg'
import pic3 from './../../assets/img/pic3.jpg'
import pic4 from './../../assets/img/pic4.jpg'
import pic5 from './../../assets/img/pic5.jpg'

const Shop = () => {
  let paintings = [
    {
      id:1,
      srcImg: pic1,
      met: '100x120cm'
    },
    {
      id:2,
      srcImg: pic2,
      met: '80x120cm'
    },
    {
      id:3,
      srcImg: pic3,
      met: '90x110cm'
    },
    {
      id:4,
      srcImg: pic4,
      met: '85x140cm'
    },
    {
      id:5,
      srcImg: pic5,
      met: '98x100cm'
    }
  ]
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempimgSrc] = useState('')
  const getImg = (imgSrc) =>{
    setTempimgSrc(imgSrc)
    setModel(true)
  }
  return (
    <>
      <div className={model?'model open':'model'}>
        <img src={tempimgSrc} onClick={()=>{setModel(false)}}/>
      </div>
      <section className='my--shop'>
          <h2 className='text-center mt-5 pt-4 mb-5'>Have a look of my paintings</h2>
          <div className='shop'>
          {paintings.map((item , index) =>{
            return(
              <div className='paint' key={index} onClick={()=>{getImg(item.srcImg)}}>
                <img src={item.srcImg} style={{width: '100%'}}/>
                <h3>{item.met}</h3>
              </div>
            )
          })}
          </div>
      </section>
    </>
  )
}

export default Shop