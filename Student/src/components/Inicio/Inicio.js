import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


const Inicio = () => (
    <div>
    <Jumbotron className="Inicio">
    <h1 className="display-3">Videos</h1>
    <p className="lead">One of the most recognizable figures in contemporary music, Beyoncé rose to fame as the central
        member of pop-R&B group Destiny's Child before embarking on a multi-platinum, record-breaking solo
         career in 2001. Booming record sales, Grammy awards, movie roles, and marriage to rapper/CEO Jay-Z
          combined to heighten her profile in the 2000s. Billboard named her female artist of the decade, while
          the RIAA acknowledged that, through 64 gold and platinum certifications, she was the decade's top-selling
          artist. Once she released her fifth solo album in 2013, it was evident that the singer, songwriter,
          and dancer wasn't merely an entertainer but a progressive artist as well.</p>
    <hr className="my-2" />
    <p>Source: Spotify</p>
    <p className="lead">
      <Button color="primary">Learn More</Button>
    </p>
  </Jumbotron>

</div>

);

export default Inicio;