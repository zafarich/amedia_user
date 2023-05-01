<template>
  <div>
    <div v-if="status == 401">
      <div class="container">
        <div class="notvideo">
          <img src="@/assets/img/notvideo.jpg" alt="" />
          <div v-if="$auth.loggedIn">
            <nuxt-link :to="{ name: 'profile___' + $i18n.locale }"
              >Vip status yoqish</nuxt-link
            >
          </div>
          <div v-if="!$auth.loggedIn">
            <h3>Vidoeni ko'rish uchun ro'yhatdan o'ting va obunani yoqing</h3>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div @click="closeModal" v-if="isKadr" class="fixvh"></div>
      <div
        v-if="isKadr"
        class="modal-card kadr-media"
        style="width: 900px; height: 90vh; overflow: hidden"
      >
        <div class="modal-title">
          <h2></h2>
          <button @click="closeModal">
            <fa class="times" icon="times" />
          </button>
        </div>

        <div class="modal-body" v-if="anime.screens.original != null">
          <div class="mod-img">
            <img :src="$cdn + anime.screens.original[number]" alt="" />
          </div>

          <div class="btn">
            <button @click="prev" class="prev">Orqaga</button>
            <span>{{ number + 1 }} - {{ anime.screens.original.length }}</span>
            <button @click="next" class="next">Keyingi</button>
          </div>
        </div>
      </div>
      <div class="id">
        <div class="season" v-if="anime != null">
          <!-- <pre>{{ anime }}</pre> -->
          <!-- <pre>{{ viewSeria }}</pre> -->
          <div class="top">
            <img :src="$cdn + anime.image" alt="" class="back" />
            <div class="opacity-banner"></div>
            <div class="info">
              <div class="container">
                <div class="title-top">
                  <h1>
                    {{ anime.name[$i18n.locale] }}
                  </h1>
                </div>
                <div class="card-row">
                  <div class="item-3 item-md-6">
                    <div class="info-film">
                      <div class="title">
                        <h2>{{ $t('info') }}</h2>
                        <div class="box-line">
                          <h3 class="key">
                            {{ $t('country') }}
                          </h3>
                          <h3 class="value">
                            {{ anime.country }}
                          </h3>
                        </div>
                        <div class="box-line">
                          <h3 class="key">
                            {{ $t('rejissor') }}
                          </h3>
                          <h3 class="value">
                            {{ anime.rejissor }}
                          </h3>
                        </div>
                        <div class="box-line">
                          <h3 class="key">
                            {{ $t('studiya') }}
                          </h3>
                          <h3 class="value">
                            {{ anime.studia }}
                          </h3>
                        </div>
                        <div class="box folder">
                          <h3 class="key">
                            {{ $t('onejanr') }}
                          </h3>
                          <div class="link" v-if="anime.janr != null">
                            <nuxt-link
                              v-for="janr in anime.janr"
                              :key="janr._id"
                              :to="{
                                name: 'filter___' + $i18n.locale,
                                query: {
                                  janr: janr._id,
                                },
                              }"
                              >{{ janr[`name${$i18n.locale}`] }}</nuxt-link
                            >
                          </div>
                        </div>
                        <div class="box cat">
                          <h3 class="key">
                            {{ $t('onecat') }}
                          </h3>
                          <div class="link">
                            <nuxt-link
                              v-for="cat in anime.category"
                              :key="cat._id"
                              :to="{
                                name: 'filter___' + $i18n.locale,
                                query: {
                                  category: cat._id,
                                },
                              }"
                              >{{ cat[`name${$i18n.locale}`] }}</nuxt-link
                            >
                          </div>
                        </div>
                        <div class="box-line">
                          <h3 class="key">
                            {{ $t('year') }}
                          </h3>
                          <h3 class="value">
                            {{ anime.year }}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-9 item-md-6" v-if="viewSeria != null">
                    <div class="video">
                      <div
                        v-if="
                          anime.price == 'free' ||
                          ($auth.loggedIn &&
                            $auth.user.status == 'vip' &&
                            anime.price == 'selling')
                        "
                      >
                        <iframe
                          :src="viewSeria.video"
                          frameborder="0"
                          allowfullscreen="allowfullscreen"
                        ></iframe>
                      </div>

                      <div
                        v-if="
                          anime.price == 'selling' &&
                          $auth.loggedIn &&
                          $auth.user.status == 'user'
                        "
                      >
                        <div class="iframe">
                          <h3>
                            Ushbu videoni ko'rish uchun, obunani yoqing. Agar
                            siz chet davlatdan bo'lsangiz telegram orqali
                            <a
                              class="c-gold"
                              href="https://t.me/anibla_adminbot"
                              target="_blank"
                              >@anibla_adminbot</a
                            >
                            murojat qiling
                          </h3>
                          <div class="btns">
                            <nuxt-link
                              :to="{
                                name: 'profile___' + $i18n.locale,
                              }"
                            >
                              Vip status yoqish
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                      <div v-if="!$auth.loggedIn && anime.price == 'selling'">
                        <div class="iframe">
                          <h3>
                            Ushbu videoni ko'rish uchun ro'yxatdan o'ting !
                          </h3>
                          <div class="btns">
                            <button
                              class="simple-btn"
                              @click="$store.commit('CHANGE_LOG')"
                            >
                              Kirish
                            </button>
                          </div>
                        </div>
                      </div>

                      <div v-if="viewSeria != null">
                        <a href="#" class="btn-simple down" @click="clickDown">
                          <span>
                            <fa icon="download" />
                          </span>
                          {{ $t('down') }}
                        </a>
                      </div>

                      <div class="seriyas">
                        <button
                          :class="
                            indexSeria == index
                              ? 'btn-simple active'
                              : 'btn-simple'
                          "
                          v-for="(item, index) in serial"
                          :key="item._id"
                          @click="clickSeria(item, index)"
                        >
                          {{ item.name[$i18n.locale] }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="seriyas">
                  <button
                    :class="
                      indexSeria == index ? 'btn-simple active' : 'btn-simple'
                    "
                    v-for="(item, index) in serial"
                    :key="item._id"
                    @click="clickSeria(item, index)"
                  >
                    {{ item.name[$i18n.locale] }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="body-id">
            <div class="body-title">
              <div class="container">
                <!-- <h1>Discover</h1> -->
                <div class="description">
                  <p>{{ anime.description[$i18n.locale] }}</p>
                </div>
                <div class="tag">
                  <span
                    class="tag-span"
                    v-for="(item, i) in anime.tags"
                    :key="i"
                    v-if="item != '' && item.length > 1"
                    >{{ item }}
                  </span>
                </div>
              </div>
            </div>

            <div class="tab-menu">
              <div class="container">
                <button
                  :class="tabIndex == i + 1 ? 'active btn-tab' : 'btn-tab'"
                  v-for="(item, i) in tabMenu"
                  :key="i"
                  @click="tabClick(i)"
                >
                  {{ item[$i18n.locale] }}
                </button>
              </div>
              <div class="line"></div>
            </div>

            <div class="content-about">
              <div class="container">
                <div class="card-row">
                  <div class="item-12 item-md-6">
                    <div
                      v-if="tabIndex == 1 && comments != null"
                      class="comments"
                    >
                      <div v-if="$auth.loggedIn">
                        <div v-if="comment" class="write-comment">
                          <div class="form">
                            <div class="text-error-default">
                              Diqqat !!! Izohinghiz saytda joylashishi uchun
                              iltimos fikringizni so'kinishsiz anime haqida
                              to'liq bayon eting. Aks holda saytga yuklanmaydi
                            </div>
                            <textarea
                              v-model="com.message"
                              name=""
                              id=""
                              rows="6"
                              :placeholder="$t('izoh')"
                            ></textarea>
                          </div>
                          <div class="send">
                            <button @click="sendComment" class="btn-simple">
                              {{ $t('send') }}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="kamentariyala scroll">
                        <div
                          class="comment scroll"
                          v-for="(item, i) in comments"
                          :key="i"
                          v-if="item.user"
                        >
                          <div class="person">
                            <div class="img">
                              <img
                                v-if="item.user.photo"
                                :src="$cdn + item.user.photo"
                                alt=""
                              />
                              <img
                                v-else
                                src="@/static/default-profile.png"
                                alt=""
                              />
                            </div>
                            <div class="name">
                              <h4 class="name">
                                {{ item.user.name }}
                                <span v-if="item.user.status == 'vip'">
                                  <img
                                    src="@/assets/img/staradmin.png"
                                    alt=""
                                  />
                                </span>
                              </h4>
                              <p class="date">
                                {{ dateFormat(item.createdAt) }}
                              </p>
                            </div>
                          </div>
                          <div class="izoh">
                            <CommentText :text="item.message" />

                            <div v-if="$auth.loggedIn" class="answer">
                              <div :class="isReply != i ? 'btn' : 'btn-none'">
                                <button class="replybtn" @click="clickReply(i)">
                                  <span>
                                    <fa icon="reply" />
                                  </span>
                                  {{ $t('reply') }}
                                </button>

                                <button
                                  class="deletebtn"
                                  v-if="$auth.user.role == 'admin'"
                                  @click="deleteComment(item._id)"
                                >
                                  <span>
                                    <fa icon="trash-alt" />
                                  </span>
                                  O'chirish
                                </button>
                              </div>

                              <div
                                v-if="isReply == i"
                                v-click-other="clickOut"
                                class="write-comment"
                              >
                                <div class="form">
                                  <textarea
                                    name=""
                                    id=""
                                    rows="6"
                                    v-model="commentText"
                                    :placeholder="$t('izoh')"
                                  ></textarea>
                                </div>
                                <div class="send">
                                  <button
                                    @click="sendReplyComment(item.user)"
                                    class="btn-simple"
                                  >
                                    {{ $t('send') }}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="tabIndex == 2" class="creater">
                      <div class="ijods">
                        <div class="card-row">
                          <div
                            v-for="(item, i) in [
                              ...anime.translator,
                              ...anime.tarjimon,
                            ]"
                            :key="i"
                            class="item-3 item-md-6"
                          >
                            <div class="person">
                              <div class="img">
                                <img :src="$cdn + item.image" alt="" />
                              </div>
                              <div class="name">
                                <p>
                                  {{ item.name }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="tabIndex == 3" class="kadrlar">
                      <div class="screens">
                        <div class="card-row">
                          <div
                            v-for="(item, i) in anime.screens.original"
                            :key="i"
                            class="item-3 item-md-3"
                          >
                            <div @click="clickImg(item, i)" class="kadr">
                              <img :src="$cdn + '/' + item" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click="closeModal" v-if="registermust" class="fixvh"></div>
    <div v-if="registermust" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h4>Ushbu videoni yuklab olish uchun ro'yxatdan o'ting!</h4>
      </div>

      <div class="modal-body">
        <div>
          <button
            class="btn-sm mb-15 w-100 btn-sm-active"
            @click="clickRegister"
          >
            Ro'yxatdan o'tish
          </button>
        </div>
        <!-- <div>
                    <button
                        class="btn-sm mb-15 w-100 btn-sm"
                        @click="closeModal"
                    >
                        Yopish
                    </button>
                </div> -->
      </div>
    </div>

    <div @click="closeModal" v-if="vipmust" class="fixvh"></div>
    <div v-if="vipmust" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h4>
          Ushbu videoni yuklab olish uchun obunani yoqing. Agar siz chet
          davlatdan bo'lsangiz telegram orqali
          <a class="c-gold" href="https://t.me/anibla_adminbot" target="_blank"
            >@anibla_adminbot</a
          >
          ga murojat qiling
        </h4>
      </div>

      <div class="modal-body">
        <div>
          <nuxt-link
            class="btn-sm mb-15 w-100 btn-sm-active d-a-center"
            :to="{
              name: 'profile___' + $i18n.locale,
            }"
          >
            Vip status yoqish
          </nuxt-link>
        </div>
        <!-- <div>
                    <button
                        class="btn-sm mb-15 w-100 btn-sm"
                        @click="closeModal"
                    >
                        Yopish
                    </button>
                </div> -->
      </div>
    </div>

    <div @click="closeModal" v-if="commmentWait" class="fixvh"></div>
    <div v-if="commmentWait" class="modal-card" style="width: 400px">
      <div class="modal-body">
        <div>
          <div class="text-error-default-xl">
            Sizning izohingizni adminlar ko'rib chiqqanidan so'ng saytga
            yuklanadi
          </div>
        </div>
        <div>
          <button class="btn-sm btn-sm-active mb-15 w-100" @click="closeModal">
            Yopish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentText from '../../components/CommentText.vue'
export default {
  head() {
    return {
      title: this.anime?.name[this.$i18n.locale],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: this.anime?.tags.join(' '),
          name: 'description',
          content: this.anime?.tags.join(' '),
        },
      ],
    }
  },
  data() {
    return {
      registermust: false,
      vipmust: false,
      commmentWait: false,
      isKadr: false,
      indexSeria: 0,
      viewSeria: null,
      image: null,
      status: null,
      number: 0,
      com: {
        message: '',
        season: '',
      },
      settings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
      tabMenu: [
        {
          uz: 'Izohlar',
          ru: 'Комментарии',
        },
        {
          uz: 'Ijodkorlar',
          ru: 'Создатели',
        },
        {
          uz: 'Kadrlar',
          ru: 'Скриншоты',
        },
      ],
      tabIndex: 1,
      isReply: -1,
      comment: true,
      anime: null,
      comments: null,
      serial: null,
      commentText: '',
    }
  },
  computed: {
    isLoginModal() {
      return this.$store.state.isLoginModal
    },
  },
  mounted() {
    this.getData()
    window.scrollTo(0, 0)
  },
  methods: {
    clickRegister() {
      this.closeModal()
      this.$store.commit('CHANGE_LOG')
    },
    clickDown() {
      if (!this.$auth.loggedIn) {
        this.registermust = true
      } else {
        if (this.$auth.user.status == 'vip') {
          window.location = this.viewSeria.url
        } else {
          this.vipmust = true
        }
      }
    },
    dateFormat(date) {
      let dateIso = new Date(date)
      let day = dateIso.getDate()
      let month = dateIso.getMonth() + 1
      let year = dateIso.getFullYear()
      let hour = dateIso.getHours()
      let minute = dateIso.getMinutes()
      if (day < 10) {
        day = '0' + day
      }
      if (month < 10) {
        month = '0' + month
      }
      return day + '-' + month + '-' + year + ' ' + hour + ':' + minute
    },
    closeModal() {
      this.vipmust = false
      this.registermust = false
      this.isRegister = false
      this.$store.commit('CHANGE_LOG_FALSE')
      this.isCheck = false
      this.isEmailRegister = false
      this.isJanr = false
      this.isYear = false
      this.isEmail = false
      this.isKadr = false
      this.commmentWait = false
    },
    clickemail() {
      this.isEmail = true
      this.$store.commit('CHANGE_LOG_FALSE')
    },
    clickemailregister() {
      this.isEmailRegister = true
      this.isEmail = false
    },
    openLogin() {
      this.closeModal()
      this.isLoginModal = true
    },
    openRegister() {
      this.closeModal()
      this.isRegister = true
    },
    clickImg(item, i) {
      this.isKadr = true
      this.image = item
      this.number = i
    },
    clickSeria(item, index) {
      this.viewSeria = item
      this.indexSeria = index
      window.scrollTo(0, 0)
    },
    async getData() {
      let anime = await this.$axios
        .$get('season/v2/' + this.$route.params.id)
        .then((res) => {
          this.status = res.status
          this.anime = res.data
          this.serial = res.seria
          this.viewSeria = this.serial[0]
          this.comments = res.comment
        })
    },
    prev() {
      if (this.number > 0) {
        this.number--
      } else {
        this.number = this.anime.screens.original.length - 1
      }
    },
    next() {
      if (this.number < this.anime.screens.original.length - 1) {
        this.number++
      } else {
        this.number = 0
      }
    },
    tabClick(i) {
      this.tabIndex = i + 1
    },
    clickReply(index) {
      this.isReply = index
    },
    async deleteComment(id) {
      await this.$axios.$delete('comment/' + id)
      this.getData()
    },
    async sendReplyComment(item) {
      // console.log('xxx', item)
      this.com.season = this.$route.params.id
      if (this.commentText != '') {
        this.commentText = `<b class="bold"> ${item.name} </b>, ${this.commentText}`
        this.com.message = this.commentText
        await this.$axios.$post('comment/add', this.com).then((res) => {
          this.commentText = ''
          this.isReply = -1
          this.comment = true
          this.com.message = ''
          this.commmentWait = true
          this.getData()
        })
      } else {
        alert("Matn bo'sh")
      }
    },
    async sendComment() {
      if (this.com.message != '') {
        this.com.season = this.$route.params.id
        await this.$axios.$post('comment/add', this.com).then((res) => {
          this.com.message = ''
          this.commmentWait = true
        })
        this.getData()
      } else {
        alert("Matn bo'sh")
      }
    },
    clickOut() {
      if (this.commentText == '') {
        this.isReply = -1
      }
    },
  },
  components: { CommentText },
}
</script>

<style lang="scss" scoped>
.text-error-default {
  font-size: 14px;
  color: #f94040;
  margin-bottom: 12px;
}

.text-error-default-xl {
  font-size: 16px;
  color: #f94040;
  margin-bottom: 16px;
}

.deletebtn {
  margin-left: 20px !important;
}

.iframe {
  border: 1px solid $gc;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 400px;
  border-radius: 10px;

  h3 {
    color: #fff;
    font-weight: 500;
    margin-bottom: 20px;
    padding: 0px 15px;
    text-align: center;
  }

  .btns {
    button,
    a {
      color: #fff;
      background: $gc;
      padding: 10px 20px;
      border-radius: 10px;
    }
  }
}

.tag {
  margin: 30px 0;
  display: subgrid;
  display: flex;
  flex-wrap: wrap;

  .tag-span {
    margin-right: 5px;
    margin-bottom: 5px;
    background: $gc;
    padding: 3px;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
  }
}

div.header-login {
  margin-left: 30px;
  display: flex;

  button.login {
    font-size: 16px;
    color: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    background-color: transparent;
    font-weight: 500;
    border: 1px solid transparent;
    transition: 0.2s;

    &:hover {
      background-color: $gc;
      color: #fff;
    }
  }

  div.profile {
    display: flex;
    position: relative;

    button.profile {
      display: flex;
      align-items: center;

      div.pro-img {
        position: relative;
        width: 45px;
        height: 45px;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      svg {
        font-size: 20px;
        margin-left: 5px;
        color: $gc;
      }
    }

    div.pro-dropdown {
      position: absolute;
      box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 8%);
      right: 0;
      top: 60px;
      background-color: $bc;
      border-radius: 5px;
      min-width: 180px;
      padding: 5px;

      h6 {
        font-size: 13px;
        margin: 5px 10px;
        font-weight: 500;
        color: $gc;
        border-bottom: 1px solid $gh;
        padding-bottom: 5px;
      }

      ul {
        // border-bottom: 1px solid $gh;
        // margin-bottom: 5px;

        li {
          display: block;

          a {
            font-size: 14px;
            color: #fff;
            padding: 8px 10px;
            display: block;
            font-weight: 500;
            border-radius: 5px;

            svg {
              margin-right: 10px;
            }

            &:hover {
              background-color: $gh;
              color: $gc;
            }
          }
        }
      }

      button.logout {
        font-size: 14px;
        font-weight: 500;
        color: rgb(255, 87, 87);
        padding: 5px 10px;
        display: block;
        width: 100%;
        text-align: left;
      }
    }
  }
}

.notvideo {
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin: 30px 0;
  }

  a {
    background: $gc;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
  }

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 350px;
  }
}

.modal-body {
  height: 100%;

  .btn {
    position: absolute;

    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 12;
    margin-right: 20px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    span {
      font-weight: 600;
      width: 30px;
    }

    button {
      padding: 10px 20px;
      background: $gc;
      color: #fff;
      font-weight: 500;
    }
  }

  .mod-img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }
}

.slick-slider .slick-slide {
  padding: 0 15px !important;
}

.slick-prev {
  left: -20px !important;
}

.slick-next {
  right: -20px !important;
}

.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 100px !important;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: #e10d0d00 !important;
  border: none;
  outline: none;
  background: transparent !important;
  z-index: 12;

  &:hover {
    background: #000;
  }
}

.slick-next:before {
  content: '\276F' !important;
  color: #000 !important;
}

.slick-prev:before {
  content: '\276E' !important;
}

.seriyas {
  margin-top: 35px;

  button {
    margin-right: 10px;
    margin-bottom: 10px;
    background: transparent;
    width: 100px;

    &.active {
      background: $gc !important;
      color: #fff;
    }
  }
}

.content-about {
  margin: 40px 0;

  .item-12 {
    width: 100%;
  }

  .creater {
    .ijods {
      .person {
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        box-shadow: 0 0 1px 0px #333;

        .img {
          width: 70px;
          height: 70px;
          margin-right: 15px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }

        .name {
          p {
            font-size: 18px;
          }
        }
      }
    }
  }

  .screens {
    .kadr {
      margin-bottom: 20px;
      cursor: pointer;

      img {
        border-radius: 10px;
        height: 200px;
        object-fit: cover;
        width: 100%;
      }
    }
  }

  .comments {
    width: 70%;

    .reply {
      margin-bottom: 10px;
    }

    .write-comment {
      padding: 20px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 0 12px -10px #000;
      margin-bottom: 20px;

      .send {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
      }

      .form {
        textarea {
          padding: 10px;
          border: 1px solid #d9d9d9;
          width: 100%;

          &:focus {
            outline: 1px solid $gc;
          }
        }
      }
    }

    .kamentariyala {
      // max-height: 700px;
      // overflow-y: scroll;
    }

    .comment {
      margin-bottom: 20px;

      .izoh {
        border-radius: 0 10px 10px 10px;
        padding: 20px;
        background: #fff;
        box-shadow: 0 0 12px -10px #000;

        p {
          font-size: 16px;
          line-height: 26px;
        }

        .answer {
          display: block;

          .write-comment {
            padding: 20px 0;
            box-shadow: none;
            margin-bottom: 0px;
          }

          .btn {
            display: flex;
            justify-content: flex-end;
          }

          .btn-none {
            display: none;
          }
        }
      }

      .person {
        margin-bottom: 5px;
        display: flex;
        align-items: center;

        .img {
          width: 40px;
          height: 40px;
          margin-right: 10px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 3px;
          }
        }

        .name {
          h4 {
            color: #333;

            span {
              img {
                width: 20px;
              }
            }
          }

          p {
            font-size: 12px;
            color: rgba(29, 28, 28, 0.6);
            line-height: 20px;
            font-weight: 400;
          }
        }
      }
    }
  }
}

.body-id {
  margin-bottom: 80px;

  .body-title {
    margin: 30px 0;

    .description {
      font-size: 20px;
      color: #333;
      line-height: 26px;
    }
  }
}

.tab-menu {
  .line {
    width: 100%;
    height: 1px;
    background: #d9d9d9;
    z-index: -1;
  }

  button {
    // color: ;
    transition: all 0.3s;
    font-weight: 500;
    font-size: 17px;
    margin-right: 25px;
    padding: 15px 0px 15px 0;
    position: relative;

    &:first-child {
      padding-left: 0;
    }

    &.active {
      font-weight: 500;
      color: $gc;
    }

    &:hover {
      font-weight: 500;
      color: $gc;
    }

    &.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background: $gc;
    }
  }
}

.id {
  .season {
    .title-top {
      margin-bottom: 20px;

      h1 {
        font-size: 35px;
        color: #fff;
        font-weight: 500;
      }
    }

    .top {
      top: 0;
      left: 0;
      width: 100%;
      height: fit-content;
      position: relative;

      .video {
        iframe {
          width: 100%;
          min-height: 400px;
          border-radius: 10px;
        }

        .down-btn {
          display: none;
        }

        .seriyas {
          display: none;
        }
      }

      .info-film {
        // backdrop-filter: blur(10px);
        .title {
          color: #fff;

          h2 {
            font-weight: 400;
            margin-bottom: 20px;
          }
        }

        .folder,
        .cat {
          .link {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            max-width: 80%;

            a {
              margin-right: 5px;
              border-radius: 4px;
              color: $gc;
              transition: 0.2s;
              margin-bottom: 5px;
              padding: 0 1px;

              &:hover {
                color: #fff;
                background: $gc;
              }
            }
          }
        }

        .box-line {
          padding-bottom: 5px;
          border-bottom: 1px solid rgb(80, 80, 80);
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          &:last-child {
            border: 0;
          }

          h3.key {
            color: #fff;
            font-weight: 500;
            font-size: 15px;

            span {
              color: $gc;
              margin-right: 5px;
            }
          }

          h3.value {
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            max-width: 78%;
            text-align: right;
          }
        }

        .box {
          padding-bottom: 5px;
          border-bottom: 1px solid rgb(80, 80, 80);
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          &:last-child {
            border: 0;
          }

          h3.key {
            color: #fff;
            font-weight: 500;
            font-size: 15px;

            span {
              color: $gc;
              margin-right: 5px;
            }
          }

          h3.value {
            margin-top: 5px;
            font-size: 16px;
            font-weight: 400;
            margin-left: 30px;
          }
        }
      }

      .opacity-banner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.94;
        z-index: -1;
      }

      .info {
        // position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        padding: 20px 0;

        a.down {
          margin-top: 30px;
          width: 100%;
          background: $gc;
          color: #fff;
          text-align: center;
          display: block;
          position: relative;

          span {
            position: absolute;
            opacity: 0;
            left: 43%;
            top: 0px;
            transition: 0.2s;
          }

          &:hover {
            span {
              top: 6px;
              margin-top: 0px;
              opacity: 1;
            }
          }
        }
      }

      img.back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
      }
    }
  }
}

@media (max-width: 576px) {
  .kadr-media {
    height: 300px !important;

    .modal-title {
      margin-bottom: 10px !important;
    }

    .btn {
      margin-right: 0 !important;
      display: flex;
      align-items: center;

      span {
        min-width: 35px !important;
      }

      button {
        padding: 5px 10px !important;
      }
    }
  }

  .comments {
    width: 100% !important;
  }

  .id {
    .ijods {
      .person {
        box-shadow: 0 0 10px -8px #333 !important;
      }
    }

    .kadr {
      img {
        height: 180px !important;
      }
    }

    .item-3 {
      .down {
        display: none !important;
      }
    }

    .seriyas {
      display: none !important;
    }

    .video {
      .seriyas {
        display: block !important;
        margin-bottom: 10px;

        button {
          width: 82px !important;
          font-size: 11px !important;
          margin-right: 8px !important;
          margin-bottom: 8px !important;
        }
      }

      .down-btn {
        display: none !important;
      }
    }

    .top {
      .info {
        .title-top {
          h1 {
            font-weight: 500;
            font-size: 22px;
          }
        }

        .card-row {
          flex-direction: column-reverse;
        }
      }
    }
  }
}
</style>
