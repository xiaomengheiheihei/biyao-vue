<template>
    <div class="header-wrap">
        <div id="search-wrap">
            <div class="place"></div>
            <div class="search-container">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
                    </svg>
                </span>
                请输入您想要的商品
            </div>
        </div>
        <scroll ref="wrapper" class="wrapper"
                    :data="categoryData"
                    :scrollX="scrollX">
            <ul ref="ul">
                <li @click="changeCategory(index, $event,item)" v-for="(item, index) in categoryData" :key="index" 
                :class="{'category-active' : (currentIndex === index)}">{{item.categoryName}}
                </li>
                <span class="category-bar-active" :class="{'category-bar-active-first' : !currentIndex }"></span>
            </ul>
        </scroll>
    </div>
</template>
<script>
    import BScorll from 'better-scroll'
    import Scroll from '@/components/scroll'
    export default {
        props: {
            categoryList: {
                type: Array,
                default: () => {
                    return []
                }
            }   
        },
        name: 'commenHeader',
        data () {
            return {
               categoryData: [],
               scrollX: true,
               currentIndex: 0,
               timer: null
            }
        },
        components: {
            Scroll
        },
        watch: {
            categoryList: function () {
                let _this = this;
                _this.categoryData =[{
					categoryId:0,
					categoryName:"推荐",
					subCategoryList:[]
                }].concat(_this.categoryList);
                _this.$nextTick(() => {
                    _this.calculateWidth();
                });
            }
        },
        created () {
            let _this = this;

        },
        mounted () {
            let _this = this;
            
        },
        methods: {
            calculateWidth: function () {       // 计算横向滚动容器宽度并重置better-scroll
                let _this = this;
                const sliderUl = _this.$refs.ul;
                this.scroll = _this.$refs.wrapper;
                this.scroll._initScroll();
            },
            changeCategory: function (index,event,item) {
                let _this = this;
                _this.currentIndex = index;
                let bar = _this.$refs.ul.getElementsByTagName('span');
                let start = event.target.offsetLeft;
                bar[0].style.transform = 'translate3D(' + start + 'px , 0 ,0)';     // 控制底部bar
                this.scroll.scrollToElement(event.target, 200, true, true, 'easing');
                item.categoryId != 0 && this.$router.push({path: 'list', query: {'id': item.categoryId}})
            }
        }
    }
</script>
<style scoped lang="less">
    .header-wrap {
        #search-wrap {
            background-color: #fff;
            height: .6rem;
            .place {
                background-color: #fff;
                height: .14rem;
            }
            .search-container {
                margin: 0 .2rem;
                background-color: #f2f2f2;
                line-height: .5rem;
                height: 100%;
                border-radius: .06rem;
                text-align: left;
                padding-left: .2rem;
                color: #808080;
                font-size: .3rem;
            }
        }
        .wrapper {
            overflow: hidden;
            height: 1rem;
            line-height: 1rem;
            border-bottom: 1px solid #ccc;
            font-size: .3rem;
            color: #808080;
            background-color: #fff;
            ul {
                padding-left: .15rem;
                display: inline-block;
                white-space: nowrap;
                li {
                    display: inline-block;
                    width: .8rem;
                    position: relative;
                }
                .category-active {
                  color: #401564;  
                }
                .category-bar-active{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: .05rem;
                    width: .8rem;
                    background-color: #401564;
                    transition: all .2s ease-in;
                }
                .category-bar-active-first {
                    margin-left: .15rem;
                }
            }
        }
    }
</style>
