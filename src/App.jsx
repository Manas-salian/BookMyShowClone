import './App.css'
import NavbarComponent from './components/navbar'
import SecondaryNav from './components/secondaryBar'
import CarouselComponent from './components/carousel'
import CardComponent from './components/cards'
import Footer from './components/footer'
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <NavbarComponent />
      <SecondaryNav />
      <CarouselComponent />
      <div class="container-sm cards">
        <CardComponent title="Empuran" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
        <CardComponent title="The Diplomat" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
        <CardComponent title="Chaava" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
        <CardComponent title="Empuran" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/court-state-vs-a-nobody-et00432575-1738825828.jpg" />
        <CardComponent title="The Diplomat" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
        <CardComponent title="Card 2" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
        <CardComponent title="Card 3" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
        <CardComponent title="Card 1" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
        <CardComponent title="Card 2" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
        <CardComponent title="Card 3" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
        <CardComponent title="Card 4" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/court-state-vs-a-nobody-et00432575-1738825828.jpg" />
        <CardComponent title="Card 1" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
      </div>
      <div className="banner-section">
        <Container>
          <Image
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
            className="banner-image"
            alt="Stream banner"
            fluid
          />
        </Container>
      </div>
      <h2>The Best of Live Events</h2>
      <div class="container-sm cards">
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTYwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/amusement-parks-banner-desktop-collection-202503251132.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NzArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MzArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/kids-banner-desktop-collection-202503251132.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjAwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/adventure-fun-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTA1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjE1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/upskill-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/interactive-games-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MzcwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png" />
        <CardComponent imagesource="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/food-drinks-collection-202211140440.png" />
      </div>

      <div className="premiere-section" style={{ backgroundColor: 'rgb(43, 49, 72)', padding: '40px 0', color: 'white' }}>
        <Container>
          <Image
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
            className="banner-image"
            alt="Stream banner"
            fluid
          />
          <h3 className="mt-4">Premier Shows</h3>
          <h5 className="mb-4">Brand new releases every Friday</h5>
          <div className="container-sm cards">
            <CardComponent title="Empuran" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
            <CardComponent title="The Diplomat" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
            <CardComponent title="Chaava" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
            <CardComponent title="Empuran" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/court-state-vs-a-nobody-et00432575-1738825828.jpg" />
            <CardComponent title="The Diplomat" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
            <CardComponent title="Card 2" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
            <CardComponent title="Card 3" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
            <CardComponent title="Card 1" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
            <CardComponent title="Card 2" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
            <CardComponent title="Card 3" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
            <CardComponent title="Card 4" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/court-state-vs-a-nobody-et00432575-1738825828.jpg" />
            <CardComponent title="Card 1" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg" />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default App
