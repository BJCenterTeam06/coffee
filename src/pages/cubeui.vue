<template>
    <div>
        <cube-button type="submit">Submit Button</cube-button>
        <cube-scroll-nav
            :side=true
            :data="goods"
            :options="scrollOptions"
            v-if="goods.length"
        >
            <cube-scroll-nav-panel
                v-for="good in goods"
                :key="good.name"
                :label="good.name"
                :title="good.name"
            >
                <ul>
                    <li
                        v-for="food in good.foods"
                        :key="food.name"
                        class="food-item"
                    >
                        <div class="icon">
                            <img width="57" height="57" :src="food.icon" alt="">
                            <p>{{food.name}}</p>
                        </div>
                    </li>
                </ul>
            </cube-scroll-nav-panel>
        </cube-scroll-nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goods:[],
            scrollOptions:{
                click:false,
                directionLockThreshold:0
            }
        }
    }
}
</script>