<template>
  <div class="container">
    <div class="logo">
      <img
        alt="logo"
        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
      />
      <div class="logo-text">祖国的花朵</div>
    </div>
    <LoginBanner :carousel-item="carouselItem" />
    <div class="content">
      <div class="content-inner">
        <LoginForm @submit="handleSubmit" :loading="loading" :errorMessage="errorMessage" />
      </div>
      <div class="footer">
        <Footer text="祖国的花朵" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login',
}
</script>

<script lang="ts" setup>
import Footer from './footer/index.vue'
import LoginBanner from './banner/index.vue'
import LoginForm from './login-form/index.vue'
import bannerImage from './images/login-banner.png'
import { ValidatedError } from '@arco-design/web-vue/es/form/interface'

defineProps<{
  loading: boolean
  errorMessage: string
}>()

const emit = defineEmits<{
  (
    e: 'submit',
    args: {
      errors: Record<string, ValidatedError> | undefined
      values: Record<string, any>
    }
  ): void
}>()

const handleSubmit = ({
  errors,
  values,
}: {
  errors: Record<string, ValidatedError> | undefined
  values: Record<string, any>
}) => {
  emit('submit', { errors, values })
}

const carouselItem = [
  {
    slogan: 'login.banner.slogan1',
    subSlogan: 'login.banner.subSlogan1',
    image: bannerImage,
  },
  {
    slogan: 'login.banner.slogan2',
    subSlogan: 'login.banner.subSlogan2',
    image: bannerImage,
  },
  {
    slogan: 'login.banner.slogan3',
    subSlogan: 'login.banner.subSlogan3',
    image: bannerImage,
  },
]
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;

  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: var(--color-fill-1);
    font-size: 20px;
  }
}
</style>

<style lang="less" scoped>
// responsive
@media (max-width: 992px) {
  .container {
    .banner {
      width: 25%;
    }
  }
}
</style>
