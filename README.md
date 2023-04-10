# Customizing Chrome Default Page

In this Pen, I am going to be customizing the Chrome's default page.

A Pen by Shubh Khandelwal on CodePen.
Original Url:
[https://codepen.io/ShubhKhandelwal69/pen/ZEMRwMx](https://codepen.io/ShubhKhandelwal69/pen/ZEMRwMx)

[License](https://codepen.io/license/pen/ZEMRwMx).

style.css
Original Url:
[https://github.com/ShubhKhandelwal69/mithididimobile#stylecss](https://github.com/ShubhKhandelwal69/mithididimobile#stylecss)

# index.html

```html
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <meta name="viewport">
  <title>Mithi Didi Mobile</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"><link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
<!-- partial:index.partial.html -->

  <div id="main-wrapper" class="fancy-scrollbar">
    <div id="main">
      <div id="content">
        <div id="links-container"  style="padding-left: 30%; padding-right: 30%;">
          <a href="https://gmail.com">Gmail</a>
   <a href="https://www.theanimecentreindia.tech">My site</a>
   <a href="https://codepen.io/ShubhKhandelwal69/pen/ZEMRwMx">Code of This Project</a>
        </div>
      <div class="mycontainer" style="padding-left: 30%; padding-right: 30%; padding-top: 1%;">
        <div id="header-container">
          <div class='parent'>
            <div class='child'><main>
              <div class="atom">
                  <div class="electron"></div>
                  <div class="electron-alpha"></div>
                  <div class="electron-omega"></div>
              </div>
          </main></div>
            <div class="social-buttons">
  
              <a href="mailto:" class="social-button--mail" aria-label="Mail">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/" class="social-button social-button--instagram" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/" class="social-button social-button--youtube" aria-label="YouTube">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/" class="social-button social-button--facebook" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://web.whatsapp.com/" class="social-button social-button--whatsapp" aria-label="Whatsapp">
                <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              <a href="https://t.me/TheAnimeCentreDiscussions" class="social-button social-button--telegram" aria-label="Telegram">
                <i class="fa-brands fa-telegram"></i>
                </a>
              <a href="https://www.twitter.com/" class="social-button social-button--twitter" aria-label="Twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.bilibili.tv/en/space/1678321485" class="social-button social-button--bilibili" aria-label="Bilibili">
              <i class="fa-brands fa-bilibili" aria-hidden="true"></i>
              </a>
            </div></div>
            </div>
        
          
        
 


        
<div id="search-container" style="margin-top: 5%;">
          <div id="search-input-container">
            <img src="https://assets.codepen.io/1468070/Google+G+Icon.png" alt="" />
            <input type="text" placeholder="Search anything" id="search" />
          </div>

          <button id="image-button" onclick="googleSearch();" type="button">
            <i class="fa-regular fa-search"></i>
          </button>

          <button id="mic-button" type="button">
            <i class="fa-regular fa-microphone"></i>
          </button>

     
      
          </div>
          
          
 



        <div id="apps-container">
          <a href="https://123series.net/home">
            <img src="https://iili.io/HXL1c4p.png" style="height: 24px; width: 24px;">
            <div class="label">
              <span class="name">123series</span>
              <span class="url">123series.net</span>
            </div>
          </a>

          <a href="https://chat.openai.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="671.194" height="680.2487" viewBox="0 0 671.194 680.2487"><path d="M626.9464,278.4037a169.4492,169.4492,0,0,0-14.5642-139.187A171.3828,171.3828,0,0,0,427.7883,56.9841,169.45,169.45,0,0,0,299.9746.0034,171.3985,171.3985,0,0,0,136.4751,118.6719,169.5077,169.5077,0,0,0,23.1574,200.8775,171.41,171.41,0,0,0,44.2385,401.845,169.4564,169.4564,0,0,0,58.8021,541.0325a171.4,171.4,0,0,0,184.5945,82.2318A169.4474,169.4474,0,0,0,371.21,680.2454,171.4,171.4,0,0,0,534.7642,561.51a169.504,169.504,0,0,0,113.3175-82.2063,171.4116,171.4116,0,0,0-21.1353-200.9ZM371.2647,635.7758a127.1077,127.1077,0,0,1-81.6027-29.5024c1.0323-.5629,2.8435-1.556,4.0237-2.2788L429.13,525.7575a22.0226,22.0226,0,0,0,11.1306-19.27V315.5368l57.25,33.0567a2.0332,2.0332,0,0,1,1.1122,1.568V508.2972A127.64,127.64,0,0,1,371.2647,635.7758ZM97.3705,518.7985a127.0536,127.0536,0,0,1-15.2074-85.4256c1.0057.6037,2.7624,1.6768,4.0231,2.4012L221.63,514.01a22.04,22.04,0,0,0,22.2492,0L409.243,418.5281v66.1134a2.0529,2.0529,0,0,1-.818,1.7568l-136.92,79.0534a127.6145,127.6145,0,0,1-174.134-46.6532ZM61.7391,223.1114a127.0146,127.0146,0,0,1,66.3545-55.8944c0,1.1667-.067,3.2329-.067,4.6665V328.3561a22.0038,22.0038,0,0,0,11.1173,19.2578l165.3629,95.4695-57.2481,33.055a2.0549,2.0549,0,0,1-1.9319.1752l-136.933-79.1215A127.6139,127.6139,0,0,1,61.7391,223.1114ZM532.0959,332.5668,366.7308,237.0854l57.25-33.0431a2.0455,2.0455,0,0,1,1.93-.1735l136.934,79.0535a127.5047,127.5047,0,0,1-19.7,230.055V351.8247a21.9961,21.9961,0,0,0-11.0489-19.2579Zm56.9793-85.7589c-1.0051-.6174-2.7618-1.6769-4.0219-2.4L449.6072,166.1712a22.07,22.07,0,0,0-22.2475,0L261.9963,261.6543V195.5409a2.0529,2.0529,0,0,1,.818-1.7567l136.9205-78.988a127.4923,127.4923,0,0,1,189.34,132.0117ZM230.8716,364.6456,173.6082,331.589a2.0321,2.0321,0,0,1-1.1122-1.57V171.8835A127.4926,127.4926,0,0,1,381.5636,73.9884c-1.0322.5633-2.83,1.5558-4.0236,2.28L242.0957,154.5044a22.0025,22.0025,0,0,0-11.1306,19.2566Zm31.0975-67.0521L335.62,255.0559l73.6488,42.51v85.0481L335.62,425.1266l-73.6506-42.5122Z"/></svg>
            <div class="label">
              <span class="name">Chat GPT</span>
              <span class="url">chat.openai.com</span>
            </div>
          </a>

          <a href="https://rewards.microsoft.com">
            <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32_16-microsoft"><g><rect height="215.65" style="fill:#F25022;" width="215.648" x="30.905" y="30.904"/><rect height="215.65" style="fill:#7FBA00;" width="215.648" x="265.446" y="30.904"/><rect height="215.651" style="fill:#00A4EF;" width="215.648" x="30.905" y="265.444"/><rect height="215.651" style="fill:#FFB900;" width="215.648" x="265.446" y="265.444"/></g></g><g id="Layer_1"/></svg>
            <div class="label">
              <span class="name">Microsoft Rewards</span>
              <span class="url">rewards.microsoft.com/</span>
            </div>
          </a>
          <a href="https://youtube.com">
            <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x33_95-youtube"><g><path d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z" style="fill:#FF0000;"/><polygon points="208.954,324.723 208.954,187.93 329.18,256.328   " style="fill:#FFFFFF;"/></g></g><g id="Layer_1"/></svg>
            <div class="label">
              <span class="name">YouTube</span>
              <span class="url">youtube.com/</span>
            </div>
          </a>
          <a href="https://spotify.com">
            <?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0 0 48 48" version="1.1"><title>Spotify-color</title><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Color-" transform="translate(-200.000000, -460.000000)" fill="#00DA5A"><path d="M238.16 481.36c-7.68-4.56-20.52-5.04-27.84-2.76-1.2.36-2.4-.36-2.76-1.44-.36-1.2.36-2.4 1.44-2.76 8.52-2.52 22.56-2.04 31.44 3.24 1.08.6 1.44 2.04.84 3.12-.6.84-2.04 1.2-3.12.6m-.24 6.72c-.6.84-1.68 1.2-2.52.6-6.48-3.96-16.32-5.16-23.88-2.76-.96.24-2.04-.24-2.28-1.2-.24-.96.24-2.04 1.2-2.28 8.76-2.64 19.56-1.32 27 3.24.72.36 1.08 1.56.48 2.4m-2.88 6.6c-.48.72-1.32.96-2.04.48-5.64-3.48-12.72-4.2-21.12-2.28-.84.24-1.56-.36-1.8-1.08-.24-.84.36-1.56 1.08-1.8 9.12-2.04 17.04-1.2 23.28 2.64.84.36.96 1.32.6 2.04M224 460c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.68-24-24-24" id="Spotify"/></g></g><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="spotify,color" dc:description="spotify,color" dc:publisher="Iconscout" dc:date="2017-09-14" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Alexis Doreau</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>
            <div class="label">
              <span class="name">Spotify</span>
              <span class="url">spotify.com</span>
            </div>
          </a>
         
          <a href="https://netflix.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#AD080F" d="m10.17 13.46-.01 5.06c0 4.81-.01 5.08-.06 5.08-.18 0-1.7.1-2.21.15-.33.03-1 .1-1.48.16-.49.06-.89.1-.9.09 0-.01-.01-5.41-.01-12.01V0l4.67 13.46zM18.49.01h-4.63l-.01 5.31v5.329l4.63 13.341c.02-.01.02-5.42.02-12.01L18.49.01z"/><path fill="#DF0D12" d="M18.48 23.99h-.04c-.08 0-.24-.01-.43-.03-1.07-.13-2.48-.26-3.62-.31-.37-.02-.68-.04-.69-.04 0 0-.29-.84-.84-2.41-.53-1.53-1.31-3.77-2.32-6.68l-.37-1.06L5.5 0h4.65l.2.57.88 2.53 7.25 20.89z"/></svg>
            <div class="label">
              <span class="name">Netflix</span>
              <span class="url">netflix.com</span>
            </div>
          </a>
        
          <a href="#">
            <i class="fa-brands fa-github"></i>
            <div class="label">
              <span class="name">Github</span>
              <span class="url">github.com</span>
            </div>
          </a>
          <a href="#">
            <i class="fa-brands fa-xbox"></i>
            <div class="label">
              <span class="name">Xbox</span>
              <span class="url">xbox.com</span>
            </div>
          </a>
        </div>
      </div>
  </div>
  </div>
</div>
<!-- partial -->
  <script>
    function googleSearch()
    {
        var text=document.getElementById("search").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='http://www.google.com/search?q='+cleanQuery;
    
        window.location.href=url;
    }
    </script>
  <script src='https://codepen.io/Hyperplexed/pen/xxYJYjM/54407644e24173ad6019b766443bf2a6.js'></script>
</body>
<!-- partial -->
  
</body>
</html>```

# style.css
```css
@import url('https://fonts.googleapis.com/css?family=Pacifico');
:root {
  --body-color: 48 48 58;
  
  --font-color: 255 255 255;
  --highlight-color: 0 0 0;
  
  --theme-background: 20 20 20;
  
  --theme-light: 0 0 0;
  --theme-medium: 0 0 0;
  --theme-dark: 0 0 0;
}

body {
  background-color: rgb(var(--body-color));
  margin: 0px;
}

body::-webkit-scrollbar {
  width: 4px;
}

body::-webkit-scrollbar-track {
  background-color: rgb(var(--theme-background));
}

body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, input, select, button, span, a, p {
  color: rgb(var(--font-color));
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 0px;
}

button, a, input {  
  outline: none;
}

.highlight {
  color: rgb(var(--highlight-color));
}

.fancy-scrollbar::-webkit-scrollbar {
  height: 4px;
  width: 4px;
}

.fancy-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}

.fancy-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
}

.no-scrollbar::-webkit-scrollbar {
  height: 0px;
  width: 0px;
}

#phone {
  background-color: rgb(var(--theme-background));
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  height: 851px;
  width: 393px;  
  margin: 100px auto;
  position: relative;
  overflow: hidden;
}

#main-wrapper {
  height: 100%;
  overflow: auto;
}

#main {
  height: 100%;
}

#content {
  padding: 1rem;
}

#links-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.75rem;
}

#links-container > a {
  color: rgb(255 255 255 / 80%);
  font-size: 0.75rem;
  text-decoration: none;
}

#links-container > a:is(:hover, :focus) {
  text-decoration: underline; 
}

#header-container {
  width: 100%;
  position: relative;
  margin-top: 1rem;
}

#logo {
  display: flex;
  width: 100%; 
  border-radius: 0.5rem;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

#user-menu-button {
  height: 47%;
  position: absolute;
  right: 0rem;
  bottom: 0rem;
  background-color: transparent;
  margin-right: 3.52%;
  margin-bottom: 2.70%;
  padding: 0rem;
  border: none;
  border-radius: 100%;
}

#user-menu-button > img {
  display: flex;
  height: 100%;
  border-radius: inherit;
}

#search-container {
  display: flex;
  gap: 0.2rem;
  margin-top: 0.2rem;  
}

#search-input-container > input,
#search-container > button {
  background-color: rgb(255 255 255 / 10%);
  color: rgb(255 255 255 / 80%);
  font-size: 1rem;
  border: none;
}

#search-input-container:has(input:focus),
#search-container > button:focus {
  background-color: rgb(255 255 255 / 16%);
}

#search-container > button {
  width: 3.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
}

#search-container > #image-button {  
  border-bottom-right-radius: 0.5rem;
}

#search-input-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgb(255 255 255 / 10%);
  padding-left: 1rem;
  border-radius: 0.2rem;
  border-bottom-left-radius: 0.5rem;
}

#search-input-container > img {
  height: 1.5rem;
}

#search-input-container > input {
  width: 100%;
  height: 3.25rem;
  background-color: transparent;
  padding: 1rem;  
  padding-left: 0rem;
}

#apps-container {
  display: grid;
  gap: 0.2rem;
  grid-template-columns: repeat(2, 50%);  
  margin: 3rem 0rem;
}

#apps-container > a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgb(255 255 255 / 10%);
  padding: 1rem 0.75rem;
  border-radius: 0.2rem;
  text-decoration: none;
}

#apps-container > a > i {
  height: 2rem; 
  width: 2rem; 
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 2rem; 
  text-align: center;
}

#apps-container > a > .label {
  width: calc(100% - 2.5rem);
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  overflow: hidden;
}

#apps-container > a > .label > :is(.name, .url) {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#apps-container > a > .label > .name {
  font-size: 0.8rem;
}

#apps-container > a > .label > .url {
  font-size: 0.7rem;
  color: rgb(255 255 255 / 50%);
}

#apps-container > a:is(:hover, :focus) {
  background-color: rgb(255 255 255 / 16%);
}

#apps-container > a:first-child {
  border-top-left-radius: 0.5rem;
}

#apps-container > a:nth-child(2) {  
  color: rgb(255, 0, 0);
  border-top-right-radius: 0.5rem;
}

#apps-container > a:nth-child(3) {  
  color: rgb(28, 204, 91);
}

#apps-container > a:nth-child(4) {  
  color: rgb(28, 147, 228);
}

#apps-container > a:nth-child(5) {  
  color: rgb(242, 85, 90);
}

#apps-container > a:nth-child(7) {  
  border-bottom-left-radius: 0.5rem;
}

#apps-container > a:last-child {
  color: rgb(15, 118, 14);
  border-bottom-right-radius: 0.5rem; 
}

#discover-container {
  width: 100%;
}

#discover-toggles {
  width: 80%;
  display: flex; 
  background-color: rgb(255 255 255 / 7.5%);
  margin: auto;
  border-radius: 0.5rem;
}

#discover-toggles > button {
  flex-grow: 1;
  background-color: transparent;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  font-size: 0.8rem;
  cursor: pointer;
}

#discover-toggles > button:first-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: rgb(255 255 255 / 10%);
}

#discover-toggles > button:last-child {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

#discover-feed {
  margin-top: 0.5rem;
}

.discover-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-decoration: none;
}

.discover-card > img {
  width: 100%;
  aspect-ratio: 1.6 / 1;
  object-fit: cover;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.discover-card > .discover-card-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: rgb(255 255 255 / 10%);
  padding: 0.75rem;
  border-radius: 0.5rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.discover-card > .discover-card-info > .title {
  font-size: 0.8rem;
}

.discover-card > .discover-card-info > .desc {
  font-size: 0.7rem;
  color: rgb(255 255 255 / 50%);
}

@media(max-width: 500px) {
  body {
    overflow: auto;  
  }
  
  #phone {
    height: 100vh;
    display: flex;
    width: 100%;
    margin: 0px auto;
  }
  
  #main-wrapper {
    width: 100%;
    flex-grow: 1;
  }
}

.social-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  gap: 8px;

}
.social-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 30px;
  height: 30px;
  text-decoration: none;
  border-radius: 100%;
  background: #fff;
  text-align: center;
}
.social-button::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  display: block;
  width: 0;
  height: 0;
  border-radius: 100%;
  transition: 0.3s;
}
.social-button:focus, .social-button:hover {
  color: #fff;
}
.social-button:focus::after, .social-button:hover::after {
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  margin-left: calc(-50% - 1px);
}
.social-button i, .social-button svg {
  position: relative;
  z-index: 1;
  transition: 0.3s;
}
.social-button i {
  font-size: 20px;
}
.social-button svg {
  height: 40%;
  width: 40%;
}
.social-button--instagram {
  color: #3f729b; /* adjust the color to match your design */
  background-color: white;
  border: none;
  padding: 0;
  margin: 0 5px;
  font-size: 24px; /* adjust the font size to match the other icons */
}
.social-button--youtube {
  color: #ff0000; /* adjust the color to match your design */
  background-color: white;
  border: none;
  padding: 0;
  margin: 0 5px;
  font-size: 24px; /* adjust the font size to match the other icons */
}
.social-button--mail {
  color: #0072c6;
}
.social-button--mail::after {
  background: #0072c6;
}
.social-button--facebook {
  color: #3b5999;
}
.social-button--facebook::after {
  background: #3b5999;
}
.social-button--telegram {
  color: #0088cc;
}
.social-button--telegram::after {
  background: #0088cc;
}
.social-button--linkedin {
  color: #0077b5;
}
.social-button--linkedin::after {
  background: #0077b5;
}
.social-button--twitter {
  color: #55acee;
}
.social-button--twitter::after {
  background: #55acee;
}
.social-button--instagram {
  color: #e4405f;
}
.social-button--instagram::after {
  background: #e4405f;
}
.social-button--npmjs {
  color: #c12127;
}
.social-button--npmjs::after {
  background: #c12127;
}

/* animated logo effect */

:root {
  --atom-size: 180px;
  --atom-color-hex: #00d8ff;
  --atom-color-rgb: 0, 216, 255;
  --nucleus-size: calc(var(--atom-size) / 5);
  --electron-color-hex: #99f8ff;
  --electron-size : calc(var(--atom-size) / 25);
  --electron-orbit-size : calc(var(--atom-size) / 2.5);
  --electron-speed : 1.2s;
  --electron-speed-alpha : 1s;
  --electron-speed-omega : .8s;
}


*, *:before, *::after { box-sizing: border-box; }


/* Atom */
.atom {
  position: relative;
  width: var(--atom-size);
  height: var(--atom-size);
  animation: 8s atom infinite cubic-bezier(1, .25, 0, .75);
}
@keyframes atom {
  0% {    transform: rotate(0deg) scale(1); }
  12.5% { transform: rotate(-45deg) scale(.9); }
  25% {   transform: rotate(-90deg) scale(1); }
  37.5% { transform: rotate(-135deg) scale(.9); }
  50% {   transform: rotate(-180deg) scale(1); }
  62.5% { transform: rotate(-225deg) scale(.9); }
  75% {   transform: rotate(-270deg) scale(1); }
  87.5% { transform: rotate(-315deg) scale(.9); }
  100% {  transform: rotate(-360deg) scale(1); }
}

/* Nucleus */
.atom::before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--nucleus-size);
  height: var(--nucleus-size);
  margin-top: calc(var(--nucleus-size) / -2);
  margin-left: calc(var(--nucleus-size) / -2);
  background: var(--electron-color-hex); /* var(--atom-color-hex); */
  border-radius: 100%;
  box-shadow: 0 0 3px 0 var(--atom-color-hex);
  animation: 2s nucleus infinite cubic-bezier(.65, 0, .35, 1);
}
@keyframes nucleus {
  0% { transform: scale(1); }
  25% { transform: scale(.9); }
  50% { transform: scale(1); }
  75% { transform: scale(.85); }
  100% { transform: scale(1); }
}

/* Electron Orbit */
.atom > [class^="electron"] {
  border-top: solid rgba(var(--atom-color-rgb), .5) 1px;
  border-right: solid rgba(var(--atom-color-rgb), .35) 2px;
  border-bottom: solid rgba(var(--atom-color-rgb), .2) 4px;
  border-left: solid rgba(var(--atom-color-rgb), 0) 2px;
  border-radius: 100%;
  width: 100%;
  height: var(--electron-orbit-size);
  position: absolute;
  top: 50%;
  margin-top: calc(var(--electron-orbit-size) / -2);
  animation: var(--electron-speed) electron-orbit infinite linear;
}
.atom > .electron-alpha {
  transform: rotate(60deg);
  animation: var(--electron-speed-alpha) electron-orbit infinite linear;
}
.atom > .electron-omega {
  transform: rotate(-60deg);
  animation: var(--electron-speed-omega) electron-orbit infinite linear;
}
@keyframes electron-orbit {
  0% {
      border-top: solid rgba(var(--atom-color-rgb), .5) 1px;
      border-right: solid rgba(var(--atom-color-rgb), .35) 2px;
      border-bottom: solid rgba(var(--atom-color-rgb), .2) 4px;
      border-left: solid rgba(var(--atom-color-rgb), 0) 2px;
  }
  25% {
      border-top: solid rgba(var(--atom-color-rgb), .35) 1px;
      border-right: solid rgba(var(--atom-color-rgb), .2) 2px;
      border-bottom: solid rgba(var(--atom-color-rgb), 0) 4px;
      border-left: solid rgba(var(--atom-color-rgb), .5) 2px;
  }
  50% {
      border-top: solid rgba(var(--atom-color-rgb), .2) 1px;
      border-right: solid rgba(var(--atom-color-rgb), 0) 2px;
      border-bottom: solid rgba(var(--atom-color-rgb), .5) 4px;
      border-left: solid rgba(var(--atom-color-rgb), .35) 2px;
  }
  75% {
      border-top: solid rgba(var(--atom-color-rgb), 0) 1px;
      border-right: solid rgba(var(--atom-color-rgb), .5) 2px;
      border-bottom: solid rgba(var(--atom-color-rgb), .35) 4px;
      border-left: solid rgba(var(--atom-color-rgb), .2) 2px;
  }
  100% {
      border-top: solid rgba(var(--atom-color-rgb), .5) 1px;
      border-right: solid rgba(var(--atom-color-rgb), .35) 2px;
      border-bottom: solid rgba(var(--atom-color-rgb), .2) 4px;
      border-left: solid rgba(var(--atom-color-rgb), 0) 2px;
  }
}

/* Electron Unit */
.atom [class^="electron"]::after {
  content: '';
  display: block;
  width: var(--electron-size);
  height: var(--electron-size);
  background: var(--electron-color-hex);
  border-radius: 50%;
  margin-top: calc(var(--electron-size) / -2);
  position: absolute;
  top: 50%;
  left: calc(var(--electron-size) / -1);
  transform: scale(1);
  animation: calc(var(--electron-speed) * 2) electron infinite ease-in-out;
}
.atom .electron-alpha::after { animation: calc(var(--electron-speed-alpha) * 2) electron infinite ease-in-out; }
.atom .electron-omega::after { animation: calc(var(--electron-speed-omega) * 2) electron infinite ease-in-out; }
@keyframes electron {
  0% {
      left: calc(var(--electron-size) / -1);
      transform: scale(1);
  }
  12.5% {
      top: 100%;
      transform: scale(1.5);
  }
  25% {
      left: 100%;
      transform: scale(1);
  }
  37.5% {
      top: 0%;
      transform: scale(.25);
  }
  50% {
      left: calc(var(--electron-size) / -1);
      transform: scale(1);
  }
  62.5% {
      top: 100%;
      transform: scale(1.5);
  }
  75% {
      left: 100%;
      transform: scale(1);
  }
  87.5% {
      top: 0%;
      transform: scale(.25);
  }
  100% {
      left: calc(var(--electron-size) / -1);
      transform: scale(1);
  }
}

/* Shadow */
main { position: relative; }
main::after {
  content: '';
  display: block;
  position: absolute;
  top: 115%;
  left: 0;
  width: var(--atom-size);
  height: var(--nucleus-size);
  background-image: radial-gradient(closest-side, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  border-radius: 100%;
  transform: scale(1, .8);
  animation: 8s shadow infinite cubic-bezier(1, .25, 0, .75);
}
@keyframes shadow {
  0% {    transform: scale(1, .8) translateY(0); }
  12.5% { transform: scale(.7, .7) translateY(-20px); }
  25% {   transform: scale(1, .8) translateY(0); }
  37.5% { transform: scale(.7, .7) translateY(-20px); }
  50% {   transform: scale(1, .8) translateY(0); }
  62.5% { transform: scale(.7, .7) translateY(-20px); }
  75% {   transform: scale(1, .8) translateY(0); }
  87.5% { transform: scale(.7, .7) translateY(-20px); }
  100% {  transform: scale(1, .8) translateY(0); }
}

/* Credits */
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: grid;
  place-items: center;
}
a {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Droid Sans", "Helvetica Neue", Arial, sans-serif;;
  font-size: smaller;
  font-weight: lighter;
  text-decoration: none;
  padding: .6rem .8rem;
  border-radius: .3rem;
  color: rgba(255, 255, 255, .25);
  background: rgba(0, 0, 0, 0);
  transition: all .35s ease-in-out;
}
a:hover {
  color: rgba(255, 255, 255, 1);
  background: rgba(0, 0, 0, .5);
}
.parent {
  border: 1px solid black;
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
}
.child {
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
}


button {
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
}

svg {
  height: 1.6rem;
  width: 1.6rem;
}

.text-truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.dropdown-container {
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 34rem;
}

.dropdown-title-icon,
.dropdown-arrow {
  display: inline-flex;
}

.dropdown-title {
  margin: 0 auto 0 1.8rem;
  text-transform: capitalize;
}

.dropdown-button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
}

.dropdown-button svg {
  transition: all var(--transition-time) var(--transition-timing);
  fill: var(--text-color);
}

.dropdown-button svg,
.dropdown-button span {
  pointer-events: none;
}

.dropdown-button:hover,
.dropdown-button:focus {
  color: var(--text-active);
}

.dropdown-button:hover svg,
.dropdown-button:focus svg {
  fill: var(--text-active);
}

.main-button {
  height: 5.2rem;
  border-radius: var(--border-radius);
  color: var(--text-color);
  background-color: var(--primary-bg-color);
  border: 0.1rem solid var(--border-color);
  transition: all var(--transition-time) var(--transition-timing);
}

.main-button:focus {
  border: 0.1rem solid var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(44, 98, 246, 0.4);
}

.main-button .dropdown-arrow {
  transition: transform var(--transition-time) var(--transition-timing);
  transform: rotate(var(--rotate-arrow));
  margin-left: 1.8rem;
}

.list-button {
  height: var(--list-button-height);
  transition: color var(--transition-time) var(--transition-timing);
  color: var(--text-color);
  overflow: hidden;
  cursor: none;
}

.dropdown-list-container {
  overflow: hidden;
  max-height: var(--dropdown-height);
  transition: max-height var(--transition-time) var(--transition-timing);
}

.dropdown-list-wrapper {
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--primary-bg-color);
  border-radius: var(--border-radius);
  border: 0.1rem solid var(--border-color);
  position: relative;
}

ul.dropdown-list {
  position: relative;
  list-style-type: none;
}

ul.dropdown-list::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  height: var(--list-button-height);
  background-color: var(--button-hover-bg-color);
  transition: all var(--transition-time) linear;
  transform: translateY(var(--translate-value));
  border-radius: var(--border-radius);
  pointer-events: none;
}
ul.dropdown-list:hover::before,
ul.dropdown-list:hover ~ .floating-icon {
  opacity: 1;
}

li.dropdown-list-item {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  opacity: var(--list-opacity);
  transition: opacity 0.8s var(--transition-timing);
}

.floating-icon {
  height: calc(var(--floating-icon-size) * 1px);
  width: calc(var(--floating-icon-size) * 1px);
  position: absolute;
  top: var(--floating-icon-top);
  left: var(--floating-icon-left);
  background-color: var(--border-color);
  border-radius: 1rem;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--transition-time) var(--transition-timing);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.floating-icon svg {
  fill: var(--text-active);
}

@-webkit-keyframes blinkH1 {
  0%   {
      color: #fff;
    text-shadow: 0px 0px 20px #00aad4;
  }
  19%   {
      color: #fff;
    text-shadow: 0px 0px 20px #00aad4;
  }
  20% {
      color: #9E9E9E;
    text-shadow: none;  
  }
  21% {
      color: #fff;
    text-shadow: 0px 0px 20px #00aad4;  
  }
  60% {
      color: #fff;
    text-shadow: 0px 0px 20px #00aad4;  
  }
  61% {
      color: #9E9E9E;
    text-shadow: none;  
  }
  62% {
      color: #fff;
    text-shadow: 0px 0px 20px #00aad4;  
  }
  63% {
      color: #9E9E9E;
    text-shadow: none;  
  }
  64% {
      color: #fff;
    text-shadow: 0px 0px 20px #00aad4;  
  }
  100% {
      color: #fff;
    text-shadow: 0px 0px 20px #00aad4;  
  }
}

@-webkit-keyframes blinkH1After {
  0%   {
      color: #00aad4;
  }
  19%   {
      color: #00aad4;
  }
  20% {
      color: transparent; 
  }
  21% {
      color: #00aad4;  
  }
  60% {
      color: #00aad4;  
  }
  61% {
      color: transparent; 
  }
  62% {
      color: #00aad4;  
  }
  63% {
      color: transparent; 
  }
  64% {
      color: #00aad4;  
  }
  100% {
      color: #00aad4;  
  }
}

@-webkit-keyframes blinkH1Before {
  0%   {
      background: #00aad4;
  }
  19%   {
      background: #00aad4;
  }
  20% {
      background: transparent; 
  }
  21% {
      background: #00aad4;  
  }
  60% {
      background: #00aad4;  
  }
  61% {
      background: transparent; 
  }
  62% {
      background: #00aad4;  
  }
  63% {
      background: transparent; 
  }
  64% {
      background: #00aad4;  
  }
  100% {
      background: #00aad4;  
  }
}

.searchContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.box {
  width: 45%;
  height: 200px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
```
