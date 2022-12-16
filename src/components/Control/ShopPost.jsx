import React from 'react'

const ShopPost = () => {
  return (
    <>
    <section className="conba">
        <form action="/shop-post"
        method='POST'
        encType='multipart/form-data'
        id='shop-post-form'>
            <div className='my-4'>
                <h3>Painting</h3>
                <input type="file" name='new-shop-post' id='new-shop-post' />
            </div>
            <div className='my-4'>
                <h3>Measures</h3>
                <input type="text" name='measures' />
            </div>
            <input className='btn btn-primary' type="submit" value="Upload Painting" />
        </form>
    </section>
    <section className='conba'>
        <h1>Shop</h1>
    </section>
    </>
  )
}

export default ShopPost