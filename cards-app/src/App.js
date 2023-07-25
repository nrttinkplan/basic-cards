
import './App.css';
import Card from './Card.js'

function App() {
  return (
    <div className="wrapper">
      <Card 
        img='https://w0.peakpx.com/wallpaper/5/254/HD-wallpaper-batman-rebirth-art-comics-cover-dc.jpg'
        title="Batman"
        description="Batman's origin story features him swearing vengeance against criminals after witnessing the murder of his parents Thomas and Martha as a child, a vendetta tempered with the ideal of justice. He trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night."
      
      />
       <Card 
        img='https://wallpaperaccess.com/full/3869984.jpg'
        title="Superman"
        description="Superman was born on the fictional planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville."
        />
        
        <Card 
        img='https://w0.peakpx.com/wallpaper/439/607/HD-wallpaper-wonder-woman-dc-comics-jim-lee-ww.jpg'
        title='Wonder Woman'
        description="In Wonder Woman, the Amazon princess Diana sets out to stop World War I, believing the conflict was started by the longtime enemy of the Amazons, Ares, after American pilot and spy Steve Trevor crash-lands on their island Themyscira and informs her about it."
        />
    </div>
  );
}

export default App;
