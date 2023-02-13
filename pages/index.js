import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]}/>
      <div className='products-heading'>
        <p className='important-text'>*** IMPORTANT ***</p>
        <p className='important-text'>This is a mock ecommerce website. The products on this site are fake. To simulate a transaction please the following card information: </p>
        <p className='important-text'> Number: 4242 4242 4242 4242  Date: 04/24  CVC: 424 </p>
        <h2> Keyboard Selection </h2>
      </div>
      <div className='products-container'>
        {products?.map(
          (product) => <Product key = {product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}

export default Home