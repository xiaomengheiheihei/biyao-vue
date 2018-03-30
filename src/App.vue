<template>
    <div id="app">
      <header>
        <div id="down-app">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-trans-close"></use>
            </svg>
          </span>
        </div>
      </header>
      <transition>
          <router-view></router-view>
      </transition>
      <footerBar></footerBar>
    </div>
</template>

<script>
    import iconFont from '@/assets/iconfont'
    import footerBar from '@/components/footerBar'
    export default {
      name: 'app',
      components: {
        footerBar
      }
    }
</script>

<style lang="less">
  * {
      box-sizing: border-box;
    }
  /*清除外边距*/
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, figure, /*结构元素*/
  dl, dt, dd, ul, ol, li, /*列表元素*/
  fieldset, lengend, button, input, textarea, /*表单元素*/
  th, td, /*表格元素*/
  pre /*文本格式元素*/ {
      margin: 0;
  }
  /*清除内边距*/
  ul, ol, menu {
      padding: 0;
  }
  /*重置列表元素*/
  ul, ol {
      list-style: none;
  }
  /*将字体扶正*/
  address, cite, dfn, em, var {
      font-style: normal;
  }
  @font-face {
      font-family: 'iconfont';
      src: url('/static/fonts/iconfont.eot');
      src: url('/static/fonts/iconfont.eot?#iefix')
        format('embedded-opentype'), url('/static/fonts/iconfont.woff')
        format('woff'), url('/static/fonts/iconfont.ttf') format('truetype'),
        url('/static/fonts/iconfont.svg#iconfont') format('svg');
  }
  .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
  }
  .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
  }
  #app {
      font-family: PingFangSC-Regular,helvetica,'Heiti SC';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      font-size: .24rem;
      background-color: #f5f5f5;
      header {
        position: relative;
        z-index: 99;
        overflow: hidden;
        #down-app {
            position: relative;
            height: 1rem;
            width: 7.5rem;
            background: url('/static/image/header-down.png') no-repeat 0 0;
            background-size: 100%;
            span {
              position: absolute;
              top: .165rem;
              left: .15rem;
              z-index: 2;
              display: block;
              width: .6rem;
              height: .6rem;
              font-size: .55rem;
            }
        }
      }
  }
</style>
