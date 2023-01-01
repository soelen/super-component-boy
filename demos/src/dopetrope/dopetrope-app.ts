import { css, html, } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'
import containerStyle from '../demo/container-style';
import resetStyle from '../demo/reset-style';
import rowStyle from '../demo/row-style';
import dopetropeStyle from './dopetrope-style';
import {
  cogIcon,
  flashIcon,
  starIcon,
  whatsappIcon,
  twitterIcon,
  dribbbleIcon,
  tumblrIcon,
  instagramIcon,
} from '../demo/icons'

@customElement( 'dopetrope-app' )
export class Dopetrope extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    containerStyle,
    rowStyle,
    dopetropeStyle,
    css`
  `, ]

  render() {
    return html`

    	<div id="page-wrapper">

<!-- Header -->
  <section id="header">

    <!-- Logo -->
      <h1><a href="index.html">Dopetrope</a></h1>

    <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current"><a href="index.html">Home</a></li>
          <li>
            <a href="#">Dropdown</a>
            <ul>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Magna phasellus</a></li>
              <li><a href="#">Etiam dolore nisl</a></li>
              <li>
                <a href="#">Phasellus consequat</a>
                <ul>
                  <li><a href="#">Magna phasellus</a></li>
                  <li><a href="#">Etiam dolore nisl</a></li>
                  <li><a href="#">Veroeros feugiat</a></li>
                  <li><a href="#">Nisl sed aliquam</a></li>
                  <li><a href="#">Dolore adipiscing</a></li>
                </ul>
              </li>
              <li><a href="#">Veroeros feugiat</a></li>
            </ul>
          </li>
          <li><a href="left-sidebar.html">Left Sidebar</a></li>
          <li><a href="right-sidebar.html">Right Sidebar</a></li>
          <li><a href="no-sidebar.html">No Sidebar</a></li>
        </ul>
      </nav>

    <!-- Banner -->
      <section id="banner">
        <header>
          <h2>Howdy. This is Dopetrope.</h2>
          <p>A responsive template by HTML5 UP</p>
        </header>
      </section>

    <!-- Intro -->
      <section id="intro" class="container">
        <div class="row">
          <div class="col-4 col-12-medium">
            <section class="first">
              <div class="icon featured">
                ${ cogIcon }
              </div>
              <header>
                <h2>Ipsum consequat</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
            </section>
          </div>
          <div class="col-4 col-12-medium">
            <section class="middle">
              <div class="icon featured alt">
                ${ flashIcon }
              </div>
              <header>
                <h2>Magna etiam dolor</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
            </section>
          </div>
          <div class="col-4 col-12-medium">
            <section class="last">
              <div class="icon featured alt2">
              ${ starIcon }
              </div>
              <header>
                <h2>Tempus adipiscing</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
            </section>
          </div>
        </div>
        <footer>
          <ul class="actions">
            <li><a href="#" class="button large">Get Started</a></li>
            <li><a href="#" class="button alt large">Learn More</a></li>
          </ul>
        </footer>
      </section>

  </section>

<!-- Main -->
  <section id="main">
    <div class="container">
      <div class="row">
        <div class="col-12">

          <!-- Portfolio -->
            <section>
              <header class="major">
                <h2>My Portfolio</h2>
              </header>
              <div class="row">
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/493/300/200" alt="" /></a>
                    <header>
                      <h3>Ipsum feugiat et dolor</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button alt">Find out more</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/429/300/200" alt="" /></a>
                    <header>
                      <h3>Sed etiam lorem nulla</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button alt">Find out more</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/889/300/200" alt="" /></a>
                    <header>
                      <h3>Consequat et tempus</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button alt">Find out more</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/1080/300/200" alt="" /></a>
                    <header>
                      <h3>Blandit sed adipiscing</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button alt">Find out more</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/30/300/200" alt="" /></a>
                    <header>
                      <h3>Etiam nisl consequat</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button alt">Find out more</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/63/300/200" alt="" /></a>
                    <header>
                      <h3>Dolore nisl feugiat</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button alt">Find out more</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
              </div>
            </section>

        </div>
        <div class="col-12">

          <!-- Blog -->
            <section>
              <header class="major">
                <h2>The Blog</h2>
              </header>
              <div class="row">
                <div class="col-6 col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/326/300/200" alt="" /></a>
                    <header>
                      <h3>Magna tempus consequat</h3>
                      <p>Posted 45 minutes ago</p>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button icon solid fa-file-alt">Continue Reading</a></li>
                        <li><a href="#" class="button alt icon solid fa-comment">33 comments</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div class="col-6 col-12-small">
                  <section class="box">
                    <a href="#" class="image featured"><img src="https://picsum.photos/id/431/300/200" alt="" /></a>
                    <header>
                      <h3>Aptent veroeros aliquam</h3>
                      <p>Posted 45 minutes ago</p>
                    </header>
                    <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button icon solid fa-file-alt">Continue Reading</a></li>
                        <li><a href="#" class="button alt icon solid fa-comment">33 comments</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
              </div>
            </section>

        </div>
      </div>
    </div>
  </section>

<!-- Footer -->
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-8 col-12-medium">
          <section>
            <header>
              <h2>Blandit nisl adipiscing</h2>
            </header>
            <ul class="dates">
              <li>
                <span class="date">Jan <strong>27</strong></span>
                <h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
                <p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.</p>
              </li>
              <li>
                <span class="date">Jan <strong>23</strong></span>
                <h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
                <p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>
              </li>
              <li>
                <span class="date">Jan <strong>15</strong></span>
                <h3><a href="#">Magna tempus lorem feugiat</a></h3>
                <p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.</p>
              </li>
              <li>
                <span class="date">Jan <strong>12</strong></span>
                <h3><a href="#">Dolore tempus ipsum feugiat nulla</a></h3>
                <p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.</p>
              </li>
              <li>
                <span class="date">Jan <strong>10</strong></span>
                <h3><a href="#">Blandit tempus aliquam?</a></h3>
                <p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.</p>
              </li>
            </ul>
          </section>
        </div>
        <div class="col-4 col-12-medium">
          <section>
            <header>
              <h2>What's this all about?</h2>
            </header>
            <a href="#" class="image featured"><img src="https://picsum.photos/id/349/300/100" alt="" /></a>
            <p>
              This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by
              <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a> It's released for free under
              the <a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for any personal or commercial project &ndash; just don't forget to credit us!
            </p>
            <footer>
              <ul class="actions">
                <li><a href="#" class="button">Find out more</a></li>
              </ul>
            </footer>
          </section>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <section>
            <header>
              <h2>Tempus consequat</h2>
            </header>
            <ul class="divided">
              <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
              <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
              <li><a href="#">Adipiscing feugiat phasellus sed tempus</a></li>
              <li><a href="#">Hendrerit tortor vitae mattis tempor sapien</a></li>
              <li><a href="#">Sem feugiat sapien id suscipit magna felis nec</a></li>
              <li><a href="#">Elit class aptent taciti sociosqu ad litora</a></li>
            </ul>
          </section>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <section>
            <header>
              <h2>Ipsum et phasellus</h2>
            </header>
            <ul class="divided">
              <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
              <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
              <li><a href="#">Adipiscing feugiat phasellus sed tempus</a></li>
              <li><a href="#">Hendrerit tortor vitae mattis tempor sapien</a></li>
              <li><a href="#">Sem feugiat sapien id suscipit magna felis nec</a></li>
              <li><a href="#">Elit class aptent taciti sociosqu ad litora</a></li>
            </ul>
          </section>
        </div>
        <div class="col-4 col-12-medium">
          <section>
            <header>
              <h2>Vitae tempor lorem</h2>
            </header>
            <ul class="social">
              <li>
                <a class="icon brand fa-facebook" href="#">
                ${ whatsappIcon }
                  <span class="label">Whatsapp</span>
                </a>
              </li>
              <li>
                <a class="icon brand fa-twitter" href="#">
                ${ twitterIcon }
                  <span class="label">Twitter</span>
                </a>
              </li>
              <li>
                <a class="icon brand fa-dribbble" href="#">
                ${ dribbbleIcon }
                  <span class="label">Dribbble</span>
                </a>
              </li>
              <li>
                <a class="icon brand fa-tumblr" href="#">
                ${ tumblrIcon }
                  <span class="label">Tumblr</span>
                </a>
              </li>
              <li>
                <a class="icon brand fa-instagram" href="#">
                ${ instagramIcon }
                  <span class="label">Instagram</span>
                </a>
              </li>
            </ul>
            <ul class="contact">
              <li>
                <h3>Address</h3>
                <p>
                  Untitled Incorporated<br />
                  1234 Somewhere Road Suite<br />
                  Nashville, TN 00000-0000
                </p>
              </li>
              <li>
                <h3>Mail</h3>
                <p><a href="#">someone@untitled.tld</a></p>
              </li>
              <li>
                <h3>Phone</h3>
                <p>(800) 000-0000</p>
              </li>
            </ul>
          </section>
        </div>
        <div class="col-12">

          <!-- Copyright -->
            <div id="copyright">
              <ul class="links">
                <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>

        </div>
      </div>
    </div>
  </section>

</div>


    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dopetrope-app': Dopetrope,
  }
}