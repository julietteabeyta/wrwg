import { useEffect } from 'react';
import anime from 'animejs';

import Layout from 'layouts/layout';

export default function Home() {
  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.collage',
        translateY: [50,0],
        translateZ: 0,
        opacity: [0,1],
        easing: 'easeInExpo',
        duration: 800,
        delay: (el, i) => 600 + 200 * i
      }, 0);
  });

  return (
    <Layout>
        <div>
          <div className="section section-1">
            <div>
              <p>Creating analog art with a <span>story to tell.</span> Our pieces explore elaborate
                narratives that are great conversation-starters and perfect for compelling home decor.</p>
              <small><span>what rhymes with god</span></small>
            </div>
          </div>
          <div className="section section-2">
            <img src="collage-1.png" alt="Collage 1" className="img-1 collage"></img>
            <img src="collage-2.png" alt="Collage 2" className="img-2 collage"></img>
            <img src="collage-3.png" alt="Collage 3" className="img-3 collage"></img>
          </div>
          <div className="section section-3">
            <div>
              <h1><span >Meet us!</span></h1>
              <p>We are <span >Neek & Junie</span> and we are here to make your super neat-o retro
                art dreams come true. If you'd like to learn more about us and <span>WRWG</span>, check out our {' '}
                <a href="/about">about page</a>. If you wanna talk shop, art, or music recommendations, <a href="/contact">contact us</a>!</p>
            </div>
          </div>
        </div>
    </Layout>
  );
}