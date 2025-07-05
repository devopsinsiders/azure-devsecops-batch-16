
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Feed from '@/components/Feed';
import Welcome from '@/components/Welcome';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <Welcome onGetStarted={() => setShowWelcome(false)} />;
  }

  return (
    <Layout>
      <Feed />
    </Layout>
  );
};

export default Index;
