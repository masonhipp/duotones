<template>
  <div class="columns">
    <div class="column is-3 controls">
      <div class="brand">
        <div class="logo">
          <span class="circle two" :style="{ backgroundColor: toHex(colorOne)}"/>
          <span class="circle one" :style="{ backgroundColor: toHex(colorTwo)}"/>
        </div>
        <h1>duotone</h1>
        <p>Pairings & Effect Generator</p>
      </div>
      <div class="controls-content">
        <div class="tab-switch">
          <div :class="{'is-active': activeTab === 'colors'}" class="page-icon tones" @click="setActiveTab('colors')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62"><defs>
              <style>.cls-1{fill:none;stroke:rgba(255,255,255,.7);stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style>
            </defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line class="cls-1" x1="19" y1="15" x2="1" y2="15"/><line class="cls-1" x1="12.58" y1="29" x2="1" y2="29"/><path class="cls-1" d="M19,3a2,2,0,0,0-2-2H3A2,2,0,0,0,1,3V45a2,2,0,0,1,2-2H4.49L19,17.88Z"/><line class="cls-1" x1="37.56" y1="21.73" x2="21.97" y2="12.73"/><line class="cls-1" x1="26.87" y1="31.72" x2="14.97" y2="24.85"/><line class="cls-1" x1="12.87" y1="39.8" x2="7.97" y2="36.97"/><path class="cls-1" d="M8.78,42.16,34.26,27.45l9.3-16.11a2,2,0,0,0-.73-2.73l-12.12-7A2,2,0,0,0,28,2.33L4.49,43H8A2,2,0,0,1,8.78,42.16Z"/><line class="cls-1" x1="49.27" y1="39.56" x2="40.27" y2="23.97"/><line class="cls-1" x1="35.09" y1="43" x2="28.15" y2="30.97"/><line class="cls-1" x1="18.93" y1="43" x2="16.03" y2="37.97"/><path class="cls-1" d="M43.32,43l16.35-9.44a2,2,0,0,0,.73-2.73l-7-12.12A2,2,0,0,0,50.67,18L8.78,42.16A2,2,0,0,0,8,43Z"/><rect class="cls-1" x="22" y="22" width="18" height="60" rx="2" ry="2" transform="translate(-21 83) rotate(-90)"/><circle class="cls-1" cx="7.5" cy="54.5" r="2.5"/><line class="cls-1" x1="16" y1="49" x2="41" y2="49"/><line class="cls-1" x1="16" y1="53" x2="31" y2="53"/><line class="cls-1" x1="46" y1="49" x2="51" y2="49"/></g></g></svg>
            <span>COLORS</span>
          </div>
          <div :class="{'is-active': activeTab === 'image'}" class="page-icon camera" @click="setActiveTab('image')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 49"><defs>
              <style>.cls-1{fill:none;stroke:rgba(255,255,255,.7);stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style>
            </defs><title>camera</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M55,10H48.88a4,4,0,0,1-3.79-2.74L43.91,3.74A4,4,0,0,0,40.12,1H27.88a4,4,0,0,0-3.79,2.74L22.91,7.26A4,4,0,0,1,19.12,10H7a6,6,0,0,0-6,6V45a3,3,0,0,0,3,3H58a3,3,0,0,0,3-3V16A6,6,0,0,0,55,10Z"/><circle class="cls-1" cx="34" cy="29" r="15"/><circle class="cls-1" cx="34" cy="29" r="11"/><path class="cls-1" d="M32.46,23.27a5.93,5.93,0,0,1,7.27,4.2"/><circle class="cls-1" cx="53" cy="18" r="2"/><line class="cls-1" x1="12" y1="43" x2="12" y2="20"/><line class="cls-1" x1="12" y1="15" x2="12" y2="17"/><line class="cls-1" x1="27" y1="9" x2="41" y2="9"/></g></g></svg>
            <span>IMAGE</span>
          </div>
          <div :class="{'is-active': activeTab === 'settings'}" class="page-icon settings" @click="setActiveTab('settings')">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 44 44" enable-background="new 0 0 44 44" xml:space="preserve">
              <g id="brightness-contrastsvg">
                <path fill="rgba(255,255,255,.7)" id="path-1" d="M22,34c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S28.6,34,22,34z M22,12c-5.5,0-10,4.5-10,10
                  s4.5,10,10,10s10-4.5,10-10S27.5,12,22,12z"/>
                <path id="path-2" fill="rgba(255,255,255,.7)" opacity=".4" d="M10,22c0-6.6,5.4-12,12-12v24C15.4,34,10,28.6,10,22z"/>
                <path id="path-3" fill="rgba(255,255,255,.7)" d="M43,23h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S43.6,23,43,23z M33.3,12.1c-0.4,0.4-1,0.4-1.4,0
                  c-0.4-0.4-0.4-1,0-1.4l4.2-4.2c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L33.3,12.1z M22,44c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1
                  s1,0.4,1,1v6C23,43.6,22.6,44,22,44z M22,8c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v6C23,7.6,22.6,8,22,8z M7.9,37.6
                  c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.2-4.2c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L7.9,37.6z M10.7,12.1L6.4,7.9
                  c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4.2,4.2c0.4,0.4,0.4,1,0,1.4C11.7,12.5,11.1,12.5,10.7,12.1z M8,22c0,0.6-0.4,1-1,1H1
                  c-0.6,0-1-0.4-1-1s0.4-1,1-1h6C7.6,21,8,21.4,8,22z M33.3,31.9l4.2,4.2c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-4.2-4.2
                  c-0.4-0.4-0.4-1,0-1.4C32.3,31.5,32.9,31.5,33.3,31.9z"/>
              </g>
            </svg>
            <span>settings</span>
          </div>

        </div>

        <div v-if="activeTab === 'colors'" class="color-tab tab-content pretty-scroll">
          <div class="swatches">
            <div v-for="color in colors" :key="color.name" class="swatch" >
              <div class="colors" @click="changeColor(color)">
                <div :style="{'background-color': toRGB(color.one)}" class="color one">
                  <span>{{ toHex(color.one) }}</span>
                </div>
                <div :style="{'background-color': toRGB(color.two)}" class="color two">
                  <span>{{ toHex(color.two) }}</span>
                </div>
              </div>
              <p>{{ color.name }}</p>
            </div>
          </div>
        </div> <!-- end colors -->

        <div v-if="activeTab === 'image'" class="photos tab-content pretty-scroll">
                    <div class="field is-fullwidth">
            <div class="file is-outline">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" @change="uploadImage" accept="image/*">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload" />
                  </span>
                  <span class="file-label">
                    Upload File
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="field">
            <input v-model="query" type="text" placeholder="Search photos..." class="photo-input">
          </div>

          <div class="photo-grid">
            <div v-for="photo in photos" :key="photo.filename" @click="togglePhoto(photo)" class="photo">
              <img :src="photo.urlSmall">
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'settings'" class="settings-tab tab-content pretty-scroll">
          <p>contrast</p>
          <input v-model="contrast" class="slider is-fullwidth is-black is-large is-circle" step=".1" min=".1" max="3" value="1" type="range">

          <p>brightness</p>
          <input v-model="brightness" class="slider is-fullwidth is-black is-large is-circle" step=".1" min=".1" max="3" value="1" type="range">


        </div>

      </div>
    </div>
    
    <!-- <img v-if="downloading && !userImage" crossOrigin="Anonymous" id="download-container" :src="selectedPhoto.url" style="display:none;" @load="imageEvent"> -->
    <img crossOrigin="Anonymous" id="image-container" style="display:none;" :src="selectedPhoto.url" @load="imageEvent">
    

    <div class="column main-image">
      <div class="img-wrap" :class="{'is-transition': !showTransition}" :style="{'background-color': toRGB(colorOne)}">
        <div v-if="loading" class="img-loader">Loading...</div>
        <div v-if="loading" class="loader-drop" />
        <div class="social-share" >
          <a class="icon download" :style="{backgroundColor: toHex(colorOne)}"
             @click.prevent="downloadJpeg">
            <img src="/download-icon.svg" />
          </a>
          <a :style="{backgroundColor: toHex(colorOne)}" 
             href="https://twitter.com/intent/tweet?url=https://duotones.co&text=Duotone color pairings and effect generator – "
             class="icon"
             @click.prevent="openSocial($event, 600, 300)">
            <i class="fa fa-twitter"/>
          </a>
          <a :style="{backgroundColor: toHex(colorOne)}" 
             href="https://www.facebook.com/sharer/sharer.php?u=https://duotones.co&t=Duotone color pairings + effect generator"
             class="icon"
             @click.prevent="openSocial($event, 583, 400)">
            <i class="fa fa-facebook"/>
          </a>
        </div>
        <p :style="{'color': toRGB(colorOne)}" class="hex top">{{ toHex(colorOne) }}</p>
        <p :style="{'color': toRGB(colorTwo)}" class="hex bottom">{{ toHex(colorTwo) }}</p>
        
        <p class="attribution"><a href="https://medialoot.com"><span>powered by</span> Medialoot</a></p>

        <svg id="duotone" :viewBox="'0 0 '+ imgWidth + ' ' + imgHeight" :width="imgWidth" :height="imgHeight" preserveAspectRatio="xMidYMid slice">
          <defs>

            <filter id="duotone-filter">
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="linear" :slope="contrast" :intercept="-(0.5 * contrast) + 0.5"/>
                <feFuncG type="linear" :slope="contrast" :intercept="-(0.5 * contrast) + 0.5"/>
                <feFuncB type="linear" :slope="contrast" :intercept="-(0.5 * contrast) + 0.5"/>
              </feComponentTransfer>

              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="linear" :slope="brightness" />
                <feFuncG type="linear" :slope="brightness" />
                <feFuncB type="linear" :slope="brightness" />
              </feComponentTransfer>       

              <feColorMatrix
                id="duotone-matrix"
                :values="duotoneMatrix"
                type="matrix"
                color-interpolation-filters="sRGB" />  
            </filter>    
          </defs>
          <image id="source-image" x="50%" y="50%"
                 :transform="'rotate(' + rotation + ' ' + imgWidth/2 + ' ' + imgHeight/2 + ')' + ' translate(-' + naturalWidth/2 + ' -' + naturalHeight/2 + ')'"
                 :width="naturalWidth"
                 :height="naturalHeight"
                 filter="url(#duotone-filter)"
                 preserveAspectRatio="xMidYMid slice"/>
        </svg>


        <div class="jpg-wrapper" :class="{transition: !showTransition}"><img id="jpg-container" :width="imgWidth" :height="imgHeight"/></div>


        <svg id="duotone-effect" width="0" height="0" style="display:none">
          <defs>
            <filter id="duotone-filter">
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="linear" :slope="contrast" :intercept="-(0.5 * contrast) + 0.5"/>
                <feFuncG type="linear" :slope="contrast" :intercept="-(0.5 * contrast) + 0.5"/>
                <feFuncB type="linear" :slope="contrast" :intercept="-(0.5 * contrast) + 0.5"/>
              </feComponentTransfer>

              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="linear" :slope="brightness" />
                <feFuncG type="linear" :slope="brightness" />
                <feFuncB type="linear" :slope="brightness" />
              </feComponentTransfer>       

              <feColorMatrix
                :values="duotoneMatrix"
                type="matrix"
                color-interpolation-filters="sRGB" />  
            </filter>    
          </defs>
        </svg>
        <div class="img-controls">
          <!-- <div class="field">
            <p :style="{'background-color': toRGB(colorTwo)}" class="button download">
              <span class="icon">
                <i class="fa fa-copy" />
              </span>
              <span class="text">CSS</span>
            </p>
          </div> -->
          <!-- <div class="field">
            <p :style="{'background-color': toRGB(colorTwo)}" class="button download">
              <span class="icon">
                <i class="fa fa-code" />
              </span>
              <span class="text">Copy Effect</span>
            </p>
          </div>-->
          <div class="field">
            <a id="download-link" @click="downloadJpeg" download="duotone.jpg" :style="{'background-color': toRGB(colorTwo)}" :class="{'is-loading': downloading}" class="button download">
              <span class="icon">
                <i class="fa fa-cloud-download" />
              </span>
              <span class="text">Download JPG</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <canvas id="canvas" style="display:none;" />
    <!-- <a id="download-link" src="" download="duotone.jpg" style="display:none"/> -->
  </div>
</template>
<script>
var EXIF = require('exif-js')
import debounce from 'lodash/debounce'
import getPhotos from '~/services/photoSearch.js'

export default {
  layout: 'duotones',
  data() {
    return {
      photos: [],
      query: '',
      imgData: '',
      loading:false,
      userImage: false,
      downloading:false,
      rotation: 0,
      orientation: 1,
      contrast: 1, // contrast filter
      brightness: 1,
      naturalWidth: 1024,
      naturalHeight: 640,
      imgWidth: 1024,
      imgHeight: 640,
      showTransition: false,
      selectedPhoto: [],
      // defaultPhoto: 'https://jmperezperez.com/assets/images/posts/fecolormatrix-kanye-west.jpg',
      activeTab: 'colors',
      selectedPhoto: {
        url: 'https://img.glyphs.co/img/?q=85&src=aHR0cDovL3MzLmdseXBocy5jby9zdG9jay9waG90by0xNDQ5NDgwODgxMzkyLTcxNmQwZWEyNGE0Ny5qcGc=',
        urlMedium: 'https://img.glyphs.co/img/?w=1200&q=75&src=aHR0cDovL3MzLmdseXBocy5jby9zdG9jay9waG90by0xNDQ5NDgwODgxMzkyLTcxNmQwZWEyNGE0Ny5qcGc=',
        urlSmall: 'https://img.glyphs.co/img/?w=400&h=250&crop=true&enlarge=true&q=70&src=aHR0cDovL3MzLmdseXBocy5jby9zdG9jay9waG90by0xNDQ5NDgwODgxMzkyLTcxNmQwZWEyNGE0Ny5qcGc='
      },
      colorOne: [251, 240, 25],
      colorTwo: [1, 171, 109],
      colors: [
        {
          name: 'Forrest',
          one: [1, 171, 109],
          two: [36, 26, 95],
        },
        {
          name: 'Mountain Dew',
          one: [251, 240, 25],
          two: [1, 171, 109],
        },
        {
          name: 'Seafoam',
          one: [172, 212, 157],
          two: [96, 36, 87],
        },
        {
          name: 'Pink Sunset',
          one: [220, 67, 121],
          two: [17, 36, 94],
        },
        {
          name: 'Yellow',
          one: [251, 205, 32],
          two: [255, 93,119],
        },
        {
          name: 'Sepia',
          one: [255, 239, 179],
          two: [41, 9, 0],
        },
        {
          name: 'Fire Engine',
          one: [240, 14, 46],
          two: [10, 5, 5],
        }
      ]
    }
  },
  head () {
    return {
      title: "Duotone Effect Generator"
    }
  },
  computed: {
    duotoneMatrix() {
      let one = this.colorOne
      let two = this.colorTwo
      let value = [];
      value = value.concat(
      [one[0]/256 - two[0]/256, 0, 0, 0, two[0]/256]);
      value = value.concat(
      [one[1]/256 - two[1]/256, 0, 0, 0, two[1]/256]);
      value = value.concat(
      [one[2]/256 - two[2]/256, 0, 0, 0, two[2]/256]);
      value = value.concat([0, 0, 0, 1, 0]);
      return value.join(' ')
    }
  },
  watch: {
    query: debounce(function(val) {
      if(val !== undefined){
        this.getPhotos(val)
      }
    }, 200)
  },
  mounted (){
    this.getPhotos()
  },
  methods: {
    async getPhotos (query) {
      this.photos = await getPhotos(query)
    },
    openSocial(event, w, h) {
      let link = event.target.href
      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      var left = ((width / 2) - (w / 2)) + dualScreenLeft;
      var top = ((height / 2) - (h / 2)) + dualScreenTop;
      var newWindow = window.open(link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

      // Puts focus on the newWindow
      if (window.focus) {
          newWindow.focus();
      }
    },
    togglePhoto (hit) {
      if(this.selectedPhoto === hit){return}
      this.loading = true
      this.rotation = 0
      this.orientation = 1
      this.userImage = false
      this.selectedPhoto = hit
    },
    setActiveTab(tab) {
      this.activeTab = tab
    },
    changeColor(color){
      this.showTransition = true

      setTimeout(() => {
        this.showTransition = false
      }, 16)

      this.colorOne = color.one
      this.colorTwo = color.two

      this.$nextTick(() => {
        this.svgToPng()
      })
    },
    toRGB(color) {
      return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
    },
    setImageData(data) {
      console.log('set image data')
      // this.imgData = data
      let image = document.getElementById('source-image')
      image.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', data)
    },
    toHex(color) {
      return '#' + color.reduce((acc, val) => {
        return acc + (val.toString(16).length > 1 ? val.toString(16) : '0' + val.toString(16))
      }, '')
    },
    uploadImage(event) {
      this.loading = true
      this.userImage = true
      let file = event.target.files[0]
      let reader  = new FileReader()  
      reader.addEventListener("load", (event) => {
        // this.setImageData(event.target.result)
        let img = new Image()
        img.onload = () => {
          EXIF.getData(img, () => {
            let w = img.naturalWidth
            let h = img.naturalHeight
            let ratio = w/h

            if((h > 2400) || (w > 2400)){
              if (h > w) {
                h = 2400
                w = h*ratio
              } else {
                w = 2400
                h = w/ratio
              }
            }

            this.naturalHeight = h
            this.naturalWidth = w

            var canvas = document.createElement('CANVAS')
            var ctx = canvas.getContext('2d')

            canvas.height = h
            canvas.width = w

            ctx.drawImage(img, 0, 0, w, h)
            var dataURL = canvas.toDataURL('image/jpeg', .8)
            this.setImageData(dataURL)

            let orientation = img.exifdata.Orientation
            this.orientation = orientation

            switch(orientation) {
              case 8:
                this.rotation = 270
                this.imgWidth = h
                this.imgHeight = w
                break
              case 6:
                this.rotation = 90
                this.imgWidth = h
                this.imgHeight = w
                break
              case 3: 
                this.rotation = 180
                this.imgWidth = w
                this.imgHeight = h
                break
              default: 
                this.rotation = 0
                this.imgWidth = w
                this.imgHeight = h
            }

            this.$nextTick(() => {
              this.svgToPng()
            })
          })          
        }
        img.src = event.target.result
      }, false)

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    downloadJpeg(event){
      //event.preventDefault()
      this.downloading = true

      //var link = document.getElementById("download-link")
      //link.click()

      setTimeout(()=>{
        this.downloading = false
      }, 700)
      /*if (this.userImage) {
        this.svgToPng();
      }*/
    },
    imageEvent(event) {
      console.log('imageEvent')
      this.loading = this.downloading ? this.loading :  true
      this.getDataUri(event.target)
    },
    getDataUri(img) {
      console.log('get data uri')
      var canvas = document.createElement('CANVAS')
      var ctx = canvas.getContext('2d')
      var dataURL

      let h = this.imgHeight = this.naturalHeight = img.naturalHeight
      let w = this.imgWidth = this.naturalWidth = img.naturalWidth

      canvas.height = h
      canvas.width = w

      ctx.drawImage(img, 0, 0)
      dataURL = canvas.toDataURL('image/jpeg', .8)
      this.setImageData(dataURL)

      this.$nextTick(() => {
        this.svgToPng()
      })
    },
    svgToPng(){
      console.log('svg to png')
      var svgString = new XMLSerializer().serializeToString(document.getElementById('duotone'));
      var src = 'data:image/svg+xml;base64,' + window.btoa(svgString)
      // var canvas = document.getElementById('canvas')
      var canvas = document.createElement('canvas')
      var ctx = canvas.getContext("2d");

      let h = canvas.height = this.imgHeight
      let w = canvas.width = this.imgWidth

      var img = document.createElement('img')
      // console.log('dom url: ',url)
      img.onload = () => {
        console.log('svg2png image onload event')
          ctx.drawImage(img, 0, 0);
          let jpg = canvas.toDataURL("image/jpeg", .8)
          var link = document.getElementById("download-link")
          link.href = jpg
          link.href = jpg

          setTimeout(() => {
            document.getElementById('jpg-container').src = jpg
          }, 650)

          this.loading = false

          if (this.downloading) {
            //console.log('triggering download link click')
            //var link = document.getElementById("download-link")
            //link.href = jpg
            //link.click()
            this.downloading = false
            //link.href = ''
          }
      };
      img.src = src;
    }
  }
}
</script>
<style lang="scss">
.columns {
  padding:0;
  margin:0;
  border:10px solid black;
  background: linear-gradient(-160deg, #111, #444);
}
.column {
  padding:0;
}
.controls {
  flex-grow:.9;
  padding:0 0 40px 40px;
  height:90vh;
  min-width: 330px;
}
.main-image {
  height: calc(100vh - 20px);
  padding-left: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width:75%;

  .img-wrap{
    top:0%;
    right:0%;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    margin:50px;
    position:relative;
    // filter: grayscale(100%);
    // transition: filter .32s ease;
    

    &.is-transition {
      // filter:grayscale(0%);
    }

    &:hover, &:active, &:focus{
      svg{
        opacity:.6;
      }
      .img-controls {
        opacity:1;

        .field{
          margin:0 10px;
        }
      }
    }
  }

  svg {
    height:100%;
    width:100%;
    color-interpolation-filters:sRGB;
    overflow:hidden;
    transition: opacity .3s ease;
  }
}

.controls-content {
  width:100%;
  height: calc(100vh - 321.5px);
  //border: 1px solid #222;
}

.tabs li a {
  //border-left: 1px solid #222;
  //border-bottom:1px solid #222;
}

.tabs li.is-active a {
  background-color:#222;
  border-color:#222;
  color:#fff;
}

.tabs {
  width:100%;
}

.color-tab{
  overflow:hidden;
  height: 100%;
}
.swatches {
  //width: 100%;
  height:calc(100% - 40px);
  padding-bottom:30px;
  margin-right: -8px;
  padding-right: 4px;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  overflow-y:scroll;
  overflow-x:hidden;
}
.swatch {
  margin:3%;
  position:relative;  
  text-align:center;
  color: #aaa;
  cursor:pointer;
  width:44%;

  .colors {
    width:100%;
    padding:50% 0%;
    transform: rotate(40deg);
    border-radius:50%;
    overflow:hidden;
    box-shadow:1px 1px 15px rgba(0,0,0,.2);
  }

  .color {
    width:100%;
    height:50%;
    position:absolute;

    &.one{
      top: 0;
      border-top-right-radius:300px;
      border-top-left-radius:300px;
    }

    &.two{
      bottom:0;
      border-bottom-left-radius:300px;
      border-bottom-right-radius:300px;
    }

    span {
      display: none;
      color: rgba(255,255,255,.8);
    }
  }

  p {
    font-size:14px;
    padding-top:5px;
    bottom:-20px;
    left:50%;
  }
}

.hex {
  position: absolute;
  font-weight:900;
  font-size:56px;
  letter-spacing:-2px;
  z-index:10;
  height: 56px;
  display: block;
  line-height: 40px;
  max-height: 40px;
  text-transform: uppercase;
  transition: color .64s ease;

  &.top {
    top:0px;
    right:-12px;
    text-align:right;
    transform:scaleX(.9) translateY(-110%);
  }

  &.bottom {
    bottom: 0px;
    left:-14px;
    filter: brightness(1.2);
    transform:scaleX(.9) translateY(110%);
    //text-shadow: 0px 2px 1px rgba(255,255,255,.9);
  }
}

.photos {
  text-align:center;
  padding:20px;

  input {
    width:100%;
    padding:10px 20px;
    //margin-top:10px;
    //margin-right:10px;
    background-color: #00000038;
    border: none;
    color:#ddd;
  }

  .photo-grid {
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    margin-right: -9px;
    padding-right:4px;
    margin-top:10px;
    height: calc(100vh - 415px);
    overflow-y: scroll;

    .photo{
      width:100%;
      margin-bottom:.5%;
      cursor: pointer;

      img{
        width:100%;
      }
    }
  }
}

.img-controls{
  opacity:0;
  margin:0;
  padding:0;
  position:absolute;
  top:50%;
  transform: translateY(-50%);
  margin:auto;
  width:100%;;
  text-align:center;
  left:0;
  right:0;
  transition: opacity .3s ease;


  .field{
    display:inline-block;
    margin:0 0px;
    transition:margin .3s ease;
  }

  .button {
    // border:5px solid black;
    border:none;
    background-color:black;
    color:white;
    border-radius:0px;
    font-size:1.5em;
    font-weight:bold;
    overflow:hidden;
    justify-content:flex-start;
    transition:width .3s ease;
    box-shadow: 0px 2px 6px rgba(0,0,0,.1);
  }
}

.brand{
  color:rgba(255,255,255,.9);
  text-align:center;
  padding:40px 0px 30px;

  h1{
    font-size:2em;
    font-weight:900;
    transform:scaleX(.9);

  }

  p{
    opacity:.6;
    font-size:.8em;
    text-transform: uppercase;
  }

  .logo {
    position: relative;
    width:65px;
    padding:6% 0%;
    margin:0px auto 0px;
    transform: rotate(-35deg);


    .circle{
      width:60%;
      padding:30% 0%;
      border-radius:50%;
      position: absolute;
      opacity:.8;
      filter: brightness(1.5);
      background-color:white;
      top:0;
      transition: background-color .64s ease;

      &.one{
        left:0;
        opacity: .7;
      }

      &.two{
        right:0;
      }
    }
  }
}

.tab-content {
  //border:2px solid rgba(255,255,255,.7);
  border-top:0px;
  padding:15px;
  position:relative;
  background: linear-gradient(to top, #333, #3c3c3c);

  &:after {
    content: '';
    display: none;
    position:absolute;
    bottom:0px;
    left:0;
    right:0;
    height:80px;
    // background: linear-gradient(to bottom, rgba(0,0,0,0) 0% , #444 50%);
  }
}
.settings-tab{
  min-height:50vh;
  padding:20px;

  p {
    color: rgba(255,255,255,.6);
    text-transform: uppercase;
    font-size:.7em;
    margin-top:20px;
    display:inline-block;
  }

  input.slider {
    margin-bottom:20px;
    margin-top:10px;

    opacity:.7;
  }

}
.tab-switch{
  display:flex;
  justify-content: center;

  .page-icon {
    width:50%;
    height:70px;
    // border:2px solid rgba(255,255,255,.7);
    //border-radius: 50%;
    box-shadow: inset 0px -2px 4px rgba(0,0,0,.1);
    background-color:#3a3a3a;
    padding:17px;
    cursor:pointer;

    &.tones{
      border-right:none;
    }

    &.settings {
      padding:16px 17px;
      border-left:none;
    }

    &.is-active{
      background:linear-gradient(to bottom, #4a4a4a, #3c3c3c);
          box-shadow: inset 0px 2px 4px rgba(0,0,0,.1);

    }

    svg{
      width:100%;
      height:100%;
    }

    span{
      opacity:0;
    }
  }

}

.pretty-scroll {
  ::-webkit-scrollbar-track {
    //background-color: rgba(150,150,150,.1);
  }

  ::-webkit-scrollbar {
    width: 5px;
    height:8px;
    //background-color: rgba(150,150,150,.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(255,255,255,.3);
  }
}

.img-loader,
.img-loader:before,
.img-loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.2s infinite ease-in-out;
  animation: load7 1.2s infinite ease-in-out;
}

.loader-drop{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,.5);
  z-index: 10;
}
.img-loader {
  color: #ccc;
  font-size: 10px;
  margin: 0px auto;
  left:0;
  right:0;
  position: absolute;
  top: 50%;
  transform:translateY(-100%);
  text-indent: -9999em;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  z-index:100;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
}

@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

.social-share{
  position:absolute;
  top:-45px;
  left: 0px;
  
  .icon {
    color:black;
    margin-right: 8px;
    font-size:1.7em;
    width:45px;
    height:40px;
    display:inline-block;
    text-align:center;
    padding-top:2px;
    transition:background-color .64s ease;

    &.download {
      display:none;
    }
    
    .fa{
      pointer-events: none;
    }
    .fa-google-plus{
      transform: scaleX(.9);
    }

    .fa-facebook{
      transform: scaleY(.9);
      top:1px;
    }

    .fa-twitter{
      transform: scaleY(1.1);
    }
  }
}


.attribution {
  position:absolute;
  bottom:-28px;
  right:4px;
  opacity: .8;

  &:hover{
    opacity:1;
  }

  span{
    color:rgba(255,255,255,.4);
    font-weight:normal
  }

  a{
    color:rgba(255,255,255,.9);
    text-decoration:none;
    font-weight:bold;

  }
}

.img-transition {
  width:100%;
  height:100%;
  position:absolute;
  margin:0 auto;
  top:50%;
  transform: translateY(-50%);
  opacity: 0;
  filter: brightness(.6);

  &.hidden {
    opacity: 0;
    width:100%;
    height: 100%;
    transition: all .64s ease-out;
  }
}

.file-input{
  opacity:0;
}

.file-label{
  width:100%;

  &:hover .file-cta{
    background-color:#777;
    color:#fff;
  }

  .file-cta{
    background-color:#555;
    border:2px solid #777;
    border-radius:2px;
    width:100%;
    color:#ccc;
  }
}

.jpg-wrapper {
  position:absolute;
  top:50%;
  margin: 0 auto;
  transform:translateY(-50%);
  overflow:hidden;
  border-radius: 0px;
  width:100%;
  height:100%;

  &.transition {
    img {
      opacity:0;
      transition: opacity .64s ease;
    }
  }

  img {
    position:absolute;
    top:0;
    left:0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 769px) {
  html, body{
    overflow:hidden;
    width:100%;
    height:100%;
  }
  .main-image{
    
    position:fixed;
    top:50px;
    bottom:235px;
    height:auto;
    max-width:calc(100% - 20px);
    width: calc(100% - 20px);

    .img-wrap{
      margin:20px;
      width:calc(100% - 40px);
    }
  }

  .columns {
    padding-top:40px;
    position:absolute;
    top:0px;
    bottom:12px;
    left:0px;
    right:0px;
    overflow:hidden;
    height: auto;
    box-sizing: border-box;

    .column{
      flex-basis:auto;
    }
  }

  .tab-switch{

    .page-icon{
      height:60px;
    }
  }

  .hex{
    font-size:30px;

    &.top {
      bottom: 0px;
      left:-7px;
      right:auto;
      transform: scaleX(.9) translateY(85%);
      top:auto;
    }

    &.bottom{
      right:-4px;
      left:auto;
      transform: scaleX(.9) translateY(85%);
    }
  }

  .controls {
    padding:0px;
    width:calc(100vw - 20px);
    height: 220px;
    position:fixed;
    bottom:10px;
    //overflow:hidden;
    z-index:50;

    .controls-content {
      height:160px;
    }

  }

  .swatches{
    flex-wrap:nowrap;
    overflow-x:scroll;
    overflow-y:hidden;
    justify-content: flex-start;
    height:135px;
    padding-bottom:5px;

    .swatch{
      display:inline-block;
      width:70px;
      // height:70px;
      margin-right:50px;
      text-align:center;
      line-height:1em;
      margin-bottom:0px;

      .colors{
        height:50px;
        width:50px;
        padding:0;
        margin: 0 auto;

      }
    }
  }
  .attribution {
    display:none;
  }
  .photos {
    height: 160px;
    .field.is-fullwidth{
      width:35%;
      margin-right:0%;
    }

    .field {
      width:63%;
      margin-right:2%;
      float:right;
      margin-bottom:9px;
    }

    .photo-grid{
      margin:0;
      padding-bottom:5px;
      flex-wrap:nowrap;
      flex-direction: row;
      height:90px;
      overflow-x:auto;
      overflow-y:hidden;
      width:100%;

      .photo {
        display:inline-block;
        width: 90px;
        height:65px;
        margin-right:10px;
        flex-basis:auto;
        flex-grow:0;
        flex-shrink:0;

        img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
      }
    }
  }

  .settings-tab{
    height: 160px;
    min-height:0px;

    p {
      margin-top:3px;
    }

    input.slider {
      margin-top:8px;
      margin-bottom:15px;
    }
  }

  .social-share{
    position:fixed;
    top:32px;
    right:22px;
    left:auto;
    text-align:right;
    //width:200px;
  }

  .social-share{
    .icon.download {
      display:inline-block;

      img{
        width:24px;
        height:24px;
      }
    }
  }

  .brand{
    padding: 0;
    position:fixed;
    top:33px;
    left:24px;
    margin:0 auto;
    width:200px;
    text-align:center;

    p {
      display:none;
    }

    h1{
      margin-left:-15px;
      font-size:1.7em;
      transform: scaleX(.85);
    }

    .logo {
      padding: 0px;
      width:40px;
      height:40px;
      position: absolute;
      left:0px;
      top:2px;
      margin:0 0 0 7px;
      transform:rotate(-60deg);
      //margin: 0px 10px;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>

