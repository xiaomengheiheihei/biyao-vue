<template>
    <scroll :beforeScroll = "true"
            :listenScroll = "true"
            :scrollEnd = "true"
            :scrollX = "true"
            :snap = "snap" 
            :momentum = "momentum"
            ref="wrapper"
            class="slider"
            @scrollEnd="scrollEnd"
            >
        <div class="slider-box">
            <div class="slider-item"
            v-for="(item, index) in items"
            :key="index">
            <img :src="item.newImageUrl">
            </div>
        </div>
        <div class="slider-bar-wrap">
            <span class="slider-bar-item" 
            v-for="(item, index) in items" 
            :key="index" 
            :class="{'slider-bar-item-active' : currentPageIndex == index}"></span>
        </div>
        <ul class="dto-wrap">
            <li class="dto-item">{{dtos}}</li>
        </ul>
    </scroll>
</template>
<script>
    import Scroll from '@/components/scroll'
    export default {
        props: {
            imgList: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            loop: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 4000
            }
        },
        data () {
            return {
                items: [],
                currentPageIndex: 1,
                snap: {
                    loop: true,
                    threshold: 0.1,
                    speed: 400
                },
                momentum: false,
                dtos: 0
            }
        },
        components: {
            Scroll
        },
        watch: {
            imgList: function () {
                var _this = this;
                this.items = this.items.concat(this.imgList);
                this.dtos = this.currentPageIndex + '/' + this.items.length;
                this.$nextTick(function () {
                    _this.scroll = _this.$refs.wrapper;     // scroll挂载到全局
                    _this.scroll._initScroll();
                    if (_this.autoPlay) {
                        clearTimeout(_this.timer)
                        _this._play()
                    }
                });
            }
        },
        methods: {
            _play () {
                let pageIndex = this.scroll.getCurrentPage().pageX + 1;
                this.dtos = pageIndex + '/' + this.items.length;
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    this.scroll.next(400);
                }, this.interval);
            },
            scrollEnd () {
                var _this = this;
                let pageIndex = _this.scroll.getCurrentPage().pageX + 1;
                _this.currentPageIndex = pageIndex;
                this.dtos = this.currentPageIndex + '/' + this.items.length;
                if (_this.autoPlay) {
                    clearTimeout(_this.timer)
                    _this._play()
                }
            }
        }
    }
</script>
<style scoped lang="less">
    .slider {
        position: relative;
        overflow: hidden;
        .slider-box {
            display: inline-block;
            white-space: nowrap;
            .slider-item {
                display: inline-block;
            }
        }
        .dto-wrap {
            position: absolute;
            right: .2rem;
            bottom: .3rem;
            width: .8rem;
            height: .4rem;
            background-color: rgba(0, 0, 0, .4);
            border-radius: .1rem;
            line-height: .4rem;
            color: rgb(255, 255, 255);
        }
    }
</style>

