import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';
import Background from '../components/Background';


var settings = {
  images: [
    { url: require('../assets/images/background/bg01.jpg'), position: 'center' },
    { url: require('../assets/images/background/bg02.jpg'), position: 'center' },
    { url: require('../assets/images/background/bg03.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>

    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
    <Background />
  </Layout>
);

export default IndexPage;
