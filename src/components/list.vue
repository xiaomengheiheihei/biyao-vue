<template>
    <div class="list-wrap">
        <!-- <commenHeader :category-list="homeData.categoryList"></commenHeader> -->
        <ul class="list-content">
            <li class="list-item" v-for="(item, index) in proList" :key="index">
                <img src="" alt="">
                <p class="title">{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import commenHeader from '@/components/commenHeader'
    export default {
        props: {
            productList: {
                type: Array
            }
        },
        name: 'proList',
        data () {
            return {
                proList: []
            }
        },
        components: {
            commenHeader
        }
    }
</script>

