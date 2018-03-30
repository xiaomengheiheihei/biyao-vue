<template>
      <scroll ref="main_wrapper"
              :listenScroll = true
              :snap = null
              @scroll = 'scrolling'
              class="scroll-base">
          <div class="wrap">
              <commenHeader :category-list="homeData.categoryList"></commenHeader>
              <Slider :img-list = "homeData.banners"
                      :loop = "loop"
                      :autoPlay = "autoPlay"
                      :interval = "interval">
              </Slider>
              <section class="platform-items">
                  <div class="platform-item" v-for="(item, index) in homeData.platformAssurance" :key="index">
                      <svg class="icon" aria-hidden="true">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-icon_right_sel"></use>
                      </svg>
                      <span>{{item}}</span>
                  </div>
              </section>
              <section class="article" v-if="homeData.article">
                  <img :src = "homeData.article.iconUrl" class="article-icon">
                  <div class="article-title">{{homeData.article.ext.title}}</div>
              </section>
              <div class="moudels-wrap" v-if="homeData.modules && homeData.modules.length > 0">
                  <section v-for="(v, i) in homeData.modules"
                                              :key="i"
                                              :class="'moudel-0' + v.moduleType">
                      <!-- 模板二 -->
                      <div class="moudel-detial-wrap" v-if="v.moduleType == 2">
                          <div class="module-two-left">
                              <img v-if="v.moduleInfo.moduleItems && v.moduleInfo.moduleItems.length > 0" 
                              :src = "v.moduleInfo.moduleItems[0].newImageUrl" alt="">
                          </div>
                          <div class="moudel-two-right" v-if="v.moduleInfo.moduleItems">
                              <div class="moudel-two-top">
                                  <img v-if="v.moduleInfo.moduleItems && v.moduleInfo.moduleItems.length > 0" 
                                  :src = "v.moduleInfo.moduleItems[1].newImageUrl" alt="">
                              </div>
                              <div class="moudel-two-bottom">
                                  <img v-if="v.moduleInfo.moduleItems && v.moduleInfo.moduleItems.length > 0" 
                                  :src = "v.moduleInfo.moduleItems[2].newImageUrl" alt="">
                              </div>
                          </div>
                      </div>
                      <!-- 模板一 -->
                      <div class="moudel-detial-wrap" v-if="v.moduleType == 1">
                          <div class="moudel-title">{{v.moduleInfo.moduleTitle}}</div>
                          <scroll :snap = "snap"
                                  :momentum = false
                                  :beforeScroll = "true"
                                  :listenScroll = "false"
                                  :scrollEnd = "false"
                                  :scrollX = true
                                  @scrollEnd = "scrollEnd"
                                  ref="wrapper1"
                                  class="moudel-detials-wrap">
                              <ul>
                                  <li v-for="(item, index) in v.moduleInfo.moduleItems" :key="index">
                                      <img :src="item.newImageUrl" alt="">
                                  </li>
                              </ul>
                          </scroll>
                      </div>
                      <!-- 模板三 -->
                      <div class="moudel-detial-wrap" v-if="v.moduleType == 3">
                            <div class="moudel-three-title">
                                <img v-if="v.moduleInfo.webpNewImageUrl" :src = "v.moduleInfo.webpNewImageUrl" alt="">
                                <div class="three-title">
                                    <div>
                                      <p>{{ v.moduleInfo.manufacturers }}</p>
                                      <p>{{ v.moduleInfo.moduleBrand }}</p>
                                    </div>
                                </div>
                            </div>
                      </div>
                  </section>
              </div>
          </div>
      </scroll>
</template>

<script>
    import commenHeader from '@/components/commenHeader'
    import Slider from '@/components/slider'
    import Scroll from '@/components/scroll'
    export default {
      name: 'homePage',
      data () {
        return {
          homeData: '',
          loop: true,
          autoPlay: false,
          interval: 1000,
          pullDownRefresh: true,
          snap: {
                loop: true,
                threshold: 0.1,
                speed: 400
          }
        }
      },
      components: {
        commenHeader,
        Slider,
        Scroll
      },
      watch:{

      },
      mounted () {
        
      },
      created () {
        var _this = this;
        _this.http.get('/cms/home/show.do', {pageIndex: 1,pageSize: 20})
        .then((response) => {
          if (response.success == 1) {
            _this.homeData = response.data;
            _this.$nextTick(() => {
                _this.scroll  = _this.$refs.wrapper1;
                _this.scroll[0]._initScroll();
                this.scroll = this.$refs.main_wrapper;
                this.scroll._initScroll();
            });
          }
        })
        .catch((error) => {
          console.error(error + '请求数据有误');
        });
      },
      methods: {
        scrollEnd () {
          this.scroll[0].next(400);
        },
        scrolling(pos) {
            this.scrollY = pos.y
        },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .scroll-base {
            position: relative;
            height: 100vh;
            width: 100%;
        .platform-items {
            overflow: hidden;
            display: flex;
            display: -webkit-flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 .2rem;
            height: .72rem;
            border-bottom: 1px solid #ccc;
            background-color: #fff;
            color: #7f4395;
            div:nth-child(2) {
              padding: 0 .5rem;
            }
        }
        .article {
          height: .72rem;
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-right: .2rem;
          background-color: #fff;
          .article-title {
            overflow: hidden;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: gray;
          }
        }
        .moudels-wrap {
          overflow: hidden;
          .moudel-02 {
            background-color: #fff;
            margin: .2rem  0;
            padding: .1rem 0;
            .moudel-detial-wrap {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
          .moudel-01 {
            .moudel-detial-wrap {
              position: relative;
              background-color: #fff;
              .moudel-title {
                height: 1rem;
                line-height: 1rem;
                color: #333;
                text-align: center;
                font-size: .32rem;
              }
              ul {
                display: inline-block;
                white-space: nowrap;
                li {
                  display: inline-block;
                  padding-left: .2rem;
                }
              }
            }
          }
          .moudel-03 {
            margin-top: .2rem;
            .moudel-detial-wrap {
              .moudel-three-title {
                width: 100%;
                height: 2.6rem;
                img {
                  display: block;
                  width: 100%;
                }
                .three-title {
                  position: relative;
                  top: 50%;
                  left: 50%;
                  transform: translate3d(-50%, -50%, 0);
                  width: 3.84rem;
                  height: 1.12rem;
                  border: .07rem solid rgba(255,255,255,.8);
                  div {
                    height: .9rem;
                    background: rgba(255,255,255,.8);
                    margin: .03rem .05rem;
                    padding: .15rem 0;
                  }
                }
              }
            }
          } 
        }
    } 
</style>
