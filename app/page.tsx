import StationDistribution from '@/components/StationDistribution'
import Footer from '@/components/Footer'
import MapLayout from '@/components/MapLayout'
import Navbar from '@/components/Navbar'
import PageIntro from '@/components/PageIntro'

export default function Home() {
  return (
    <>  
        <Navbar />
        <PageIntro />
        <MapLayout >
          <StationDistribution />
        </MapLayout>
        <Footer />
    </>
  )
};