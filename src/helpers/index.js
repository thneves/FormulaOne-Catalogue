import Image from '../assets/images/card-image.png';
import Image2 from '../assets/images/card-image2.png';
import Image3 from '../assets/images/card-image3.png';
import Image4 from '../assets/images/card-image4.png';
import Image5 from '../assets/images/card-image5.png';
import Image6 from '../assets/images/card-image6.png';
import Image7 from '../assets/images/card-image7.png';
import Image8 from '../assets/images/card-image8.png';
import Image9 from '../assets/images/card-image9.png';
import Image10 from '../assets/images/card-image10.png';
import Image11 from '../assets/images/card-image11.png';
import Image12 from '../assets/images/card-image12.png';
import Image13 from '../assets/images/card-image13.png';
import Image14 from '../assets/images/card-image14.png';
import Image15 from '../assets/images/card-image15.png';
import Image16 from '../assets/images/card-image16.png';

const randomImage = [
  Image, Image2, Image3, Image4, Image5,
  Image6, Image7, Image8, Image9, Image10,
  Image11, Image12, Image13, Image14, Image15, Image16,
];

const RandomIndex = () => randomImage[Math.floor(Math.random() * randomImage.length)];

export default RandomIndex;
