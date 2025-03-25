import './App.css'
import NavbarComponent from './components/navbar'
import SecondaryNav from './components/secondaryBar'
import CarouselComponent from './components/carousel'
import CardComponent from './components/cards'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <NavbarComponent />
      <SecondaryNav />
      <CarouselComponent />
      <div class="container-sm cards">
        <CardComponent title="Empuran" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg"/>
        <CardComponent title="The Diplomat" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
        <CardComponent title="Chaava" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
        <CardComponent title="Empuran" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/court-state-vs-a-nobody-et00432575-1738825828.jpg"/>
        <CardComponent title="The Diplomat" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg"/>
        <CardComponent title="Card 2" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
        <CardComponent title="Card 3" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />      
        <CardComponent title="Card 1" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg"/>
        <CardComponent title="Card 2" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-diplomat-2025-et00363454-1738924848.jpg" />
        <CardComponent title="Card 3" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg" />
        <CardComponent title="Card 4" text="This is card 2" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/court-state-vs-a-nobody-et00432575-1738825828.jpg"/>
        <CardComponent title="Card 1" text="This is card 1" imagesource="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/l2-empuraan-et00305698-1742451391.jpg"/>
      </div>
      <Footer />
    </div>
  )
}

export default App
