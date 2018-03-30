<template>
    <ul class="slider-bar-wrap">
        <router-link to="/">
            <li class="footer-bar-item">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-index"></use>
                    </svg>
                </span>
                <div>首页</div>
            </li>
        </router-link>
        <router-link to="classify">
            <li class="footer-bar-item">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-classify"></use>
                    </svg>
                </span>
                <div>分类</div>
            </li>
        </router-link>
        <router-link to="/shopCar">
            <li class="footer-bar-item">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-shopcar"></use>
                    </svg>
                </span>
                <div>购物车</div>
            </li>
        </router-link>
        <router-link to="/mine">
            <li class="footer-bar-item">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-mine"></use>
                    </svg>
                </span>
                <div>我的</div>
            </li>
        </router-link>
    </ul>
</template>
<script>
    export default {
    
    }
</script>
<style lang="less">
    .slider-bar-wrap {
        position: fixed;
        bottom: 0;
        left: 0;
        height: .98rem;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            display: block;
            text-decoration: none;
            color: #333;
            width: 25%;
            height: 100%;
            li {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                span {
                    font-size: .36rem;
                }
            }
        }
    }
</style>



