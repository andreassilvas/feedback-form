<template>
    <div v-if="showSidebar" class="slider-overlay" @click="closeSidebar"></div>
    <div class="sidebar" :class="{ 'visible': showSidebar }">

        <div class="close-sidebar">
            <button class="close-button" @click="closeSidebar">
                <img src="@/assets/images/svg/closeButton.svg" alt="close feedback" class="x-close">
            </button>
        </div>

        <slot></slot>
    </div>
</template>
  
<script>
export default {
    emits: ['close-sidebar'],
    props: {
        showSidebar: Boolean,
    },
    methods: {
        closeSidebar() {
            this.$emit('close-sidebar')
        }
    }
};
</script>
  
<style scoped>
.sidebar {
    position: fixed;
    top: 50%;
    right: -535px;
    transform: translateY(-50%);
    width: 494px;
    height: 500px;
    background-color: #fff;
    color: #495057;
    transition: right 0.3s ease;
    z-index: 1000;
    border-radius: 20px;
}

.sidebar.visible {
    right: 0;
}

.close-sidebar {
    position: relative;
}

.close-button {
    position: absolute;
    top: 20px;
    left: -37px;
    width: 37px;
    height: 37px;
    background: #283747;
    border: 2px solid #283747;
    border-radius: 5px 0 0 5px;
    text-align: center;
    padding: 0;
    cursor: pointer;
}

img.x-close {
    height: 14px;
    margin: 0.2rem 0.2rem 0;
}

button img {
    -webkit-transition: -webkit-transform 1s;
    transition: transform 1s;
    transform-origin: center;
    transform-style: preserve-3D;
}

button:hover img {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.close-button:hover {
    background: #384c62;
    border: 1px solid #384c62;
}

.slider-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 1;
}

@media screen and (min-width: 280px) and (max-width:430px) {
    .sidebar {
        top: 288px;
        width: 348px;
    }

    .close-button {
        left: -25px;
        width: 25px;
        height: 25px;
    }

    img.x-close {
        height: 12px;
    }
}

@media screen and (width:540px) {
    .sidebar {
        top: 288px;
        width: 455px;
    }
}

</style>
  