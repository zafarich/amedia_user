<template>
  <div>
    <div class="trailer" v-if="trailer != null">
      <div class="content-trailer">
        <div class="container">
          <div class="head-trailer">
            <h2>{{ $t('new') }}</h2>
            <span class="line"></span>
          </div>
          <div class="body-trailer">
            <div class="card-row">
              <div class="item-4 item-md-6">
                <div class="info">
                  <h3>{{ $t('allanime') }}</h3>
                  <a href="#">{{ trailer.name[$i18n.locale] }}</a>
                  <p>
                    {{ trailer.description[$i18n.locale] }}
                  </p>
                </div>
              </div>
              <div class="item-8 item-md-6">
                <div class="video">
                  <iframe
                    :src="trailer.video"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    width="100%"
                    height="100%"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trailer: null,
    }
  },
  async mounted() {
    let tr = await this.$axios.$get('anotatsiya/home')
    this.trailer = tr.data
  },
}
</script>

<style lang="scss">
.trailer {
  background: url('@/assets/img/trailer.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
  padding: 100px 0;
  height: fit-content;
  z-index: 1;
  position: relative;
  margin-bottom: 80px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    z-index: -10;
  }
  .trailer-opacity {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    z-index: 0;
  }
  .content-trailer {
    width: 100%;
    z-index: 121;
  }
  .head-trailer {
    display: flex;
    flex-direction: column;
    h2 {
      z-index: 12;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #787878;
      padding: 10px 0;
      color: #fff;
    }
    h2::after {
      top: 11px;
      position: relative;
      content: '';
      width: 125px;
      height: 4px;
      background: $gc;
    }
  }
  .body-trailer {
    padding: 40px 0;
    .info {
      padding: 30px 0;
      h3 {
        color: $gc;
        font-weight: 500;
      }
      a {
        display: block;
        z-index: 12 !important;
        font-size: 28px;
        color: #fff;
        margin-bottom: 15px !important;
      }
      p {
        z-index: 12;
        color: #fff;
      }
    }
    .video {
      padding: 0 30px;
      z-index: 12;
      iframe {
        z-index: 12;
        border-radius: 10px;
        width: 100%;
        min-height: 400px;
      }
    }
  }
}
@media (max-width: 576px) {
  .trailer {
    padding: 20px 0;
    margin-bottom: 40px;

    .video {
      padding: 0 !important;
    }
  }
}
</style>
