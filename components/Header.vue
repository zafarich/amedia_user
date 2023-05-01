<template>
  <div>
    <div @click="isMenu = false" v-if="isMenu" class="fixvh menu-fix"></div>
    <div :class="isMenu ? 'menu-modal show' : 'menu-modal'">
      <div class="modal-title">
        <div class="flex top">
          <h2>Menu</h2>
          <button @click="isMenu = false">
            <fa class="times" icon="times" />
          </button>
        </div>
        <div class="btns">
          <button @click="clickJanr">{{ $t('janr') }}</button>
          <button @click="clickYear">{{ $t('years') }}</button>
        </div>
      </div>
    </div>

    <div @click="closeModal" v-if="isRegister" class="fixvh"></div>
    <div v-if="isRegister" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h2>{{ $t('kirish') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div
          class="input-form"
          :class="{ 'form-error': $v.register.name.$error }"
        >
          <input
            v-model="$v.register.name.$model"
            type="text"
            :placeholder="$t('ism')"
          />
          <h6 v-if="!$v.register.name.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>
        <div class="captcha-image" v-if="captchaImage">
          <img :src="'data:image/gif;base64,' + captchaImage" alt="" />
        </div>
        <div class="input-form" :class="{ 'form-error': $v.captcha.$error }">
          <input
            v-model="$v.captcha.$model"
            type="text"
            :placeholder="$t('Enter_code_from_image')"
          />
          <h6 v-if="!$v.captcha.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>

        <div>
          <button class="btn-sm mb-15 w-100 btn-sm-active" @click="sendName">
            {{ $t('davometish') }}
          </button>
        </div>
      </div>
    </div>

    <div @click="closeModal" v-if="isCheck" class="fixvh"></div>
    <div v-if="isCheck" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h2>{{ $t('kirish') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div
          class="input-form"
          :class="{ 'form-error': $v.auth.password.$error }"
        >
          <input
            v-model="$v.auth.password.$model"
            type="text"
            :placeholder="$t('kod')"
          />
          <h6 v-if="!$v.auth.password.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>

        <p class="send-code">
          {{ $t('kodsms') }}
        </p>

        <div>
          <button class="btn-sm mb-15 w-100 btn-sm-active" @click="sendCode">
            {{ $t('davometish') }}
          </button>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <div @click="closeModal" v-if="isEmailRegister" class="fixvh"></div>
    <div v-if="isEmailRegister" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h2>{{ $t('register') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div
          class="input-form"
          :class="{ 'form-error': $v.email.password.$error }"
        >
          <input
            v-model="$v.email.name.$model"
            type="text"
            :placeholder="$t('ism')"
          />
          <h6 v-if="!$v.email.password.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>
        <div
          class="input-form"
          :class="{ 'form-error': $v.email.password.$error }"
        >
          <input
            v-model="$v.email.email.$model"
            type="email"
            :placeholder="$t('email')"
          />
          <h6 v-if="!$v.email.password.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>
        <div
          class="input-form"
          :class="{ 'form-error': $v.email.password.$error }"
        >
          <div class="input-rel">
            <input
              v-model="$v.email.password.$model"
              :type="type"
              :placeholder="$t('parol')"
            />
            <button
              @click="changePasswordVisible"
              v-if="type == 'password'"
              class="btn-icon"
            >
              <fa class="icon" icon="eye" />
            </button>
            <button @click="changePasswordVisible" v-else class="btn-icon">
              <fa class="icon" icon="eye-slash" />
            </button>
          </div>
          <h6 v-if="!$v.email.password.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>
        <div
          class="input-form"
          :class="{
            'form-error':
              $v.email.repeatPassword.$error && !$v.email.password.$error,
          }"
        >
          <div class="input-rel">
            <input
              v-model="$v.email.repeatPassword.$model"
              :type="type"
              :placeholder="$t('parol2')"
            />
            <button
              @click="changePasswordVisible"
              v-if="type == 'password'"
              class="btn-icon"
            >
              <fa class="icon" icon="eye" />
            </button>
            <button @click="changePasswordVisible" v-else class="btn-icon">
              <fa class="icon" icon="eye-slash" />
            </button>
          </div>
          <!-- <h6
                        v-if="!$v.auth.repeatPassword.required"
                        class="error-text"
                    >
                        {{ $t('tolshart') }}
                    </h6> -->
          <h6
            v-if="
              !$v.email.repeatPassword.sameAsPassword &&
              !$v.email.password.$error
            "
            class="error-text"
          >
            {{ $t('parolerror') }}
          </h6>
        </div>

        <div>
          <button
            class="btn-sm mb-15 w-100 btn-sm-active"
            @click="EmailRegister"
          >
            {{ $t('register') }}
          </button>
        </div>
      </div>
    </div>
    <div @click="closeModal" v-if="isEmail" class="fixvh"></div>
    <div v-if="isEmail" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h2>{{ $t('kirish') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div
          class="input-form"
          :class="{ 'form-error': $v.logemail.email.$error }"
        >
          <input
            v-model="$v.logemail.email.$model"
            type="text"
            placeholder="Emailni kiriting..."
          />
          <h6 v-if="!$v.logemail.email.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>
        <div
          class="input-form"
          :class="{ 'form-error': $v.logemail.password.$error }"
        >
          <div class="input-rel">
            <input
              v-model="$v.logemail.password.$model"
              :type="type"
              placeholder="Parolni kiriting..."
            />
            <button
              @click="changePasswordVisible"
              v-if="type == 'password'"
              class="btn-icon"
            >
              <fa class="icon" icon="eye" />
            </button>
            <button @click="changePasswordVisible" v-else class="btn-icon">
              <fa class="icon" icon="eye-slash" />
            </button>
          </div>

          <h6 v-if="!$v.logemail.password.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>

        <div>
          <button class="btn-sm mb-15 w-100 btn-sm-active" @click="sendEmail">
            aa
            {{ $t('kirish') }}
          </button>
        </div>
        <div>
          <button @click="clickemailregister" class="">
            {{ $t('emailregister') }}
          </button>
        </div>
      </div>
    </div>

    <div @click="closeModal" v-if="isLoginModal" class="fixvh"></div>
    <div v-if="isLoginModal" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h2>{{ $t('kirish') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div
          class="input-form"
          :class="{ 'form-error': $v.login.phone.$error }"
        >
          <input
            type="text"
            v-model.trim="$v.login.phone.$model"
            autocomplete="off"
            placeholder="Telefon raqamni kiriting"
            v-mask="'+#############'"
          />
          <h6 v-if="!$v.login.phone.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
        </div>
        <div>
          <button @click="loginUser" class="btn-sm mb-15 w-100 btn-sm-active">
            {{ $t('kirish') }}
          </button>
        </div>
        <div>
          <button @click="clickemail" class="">
            {{ $t('emaillogin') }}
          </button>
        </div>
      </div>
    </div>

    <div @click="closeModal" v-if="isCaptcha" class="fixvh"></div>
    <div v-if="isCaptcha" class="modal-card" style="width: 400px">
      <div class="modal-title">
        <h2>{{ $t('Enter_code_from_image') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div class="captcha-image">
          <img :src="'data:image/gif;base64,' + captchaImage" alt="" />
        </div>
        <div class="input-form" :class="{ 'form-error': $v.captcha.$error }">
          <input
            type="text"
            v-model.trim="$v.captcha.$model"
            autocomplete="off"
            :placeholder="$t('Enter_code_from_image')"
          />
          <h6 v-if="!$v.captcha.required" class="error-text">
            {{ $t('tolshart') }}
          </h6>
          <div v-if="invalidCaptcha" class="error-text-basic">Kod xato</div>
        </div>

        <div>
          <button
            @click="continueCaptcha"
            class="btn-sm mb-15 w-100 btn-sm-active"
          >
            {{ $t('davometish') }}
          </button>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->

    <div @click="closeModal" v-if="isJanr" class="fixvh"></div>
    <div v-if="isJanr" class="modal-card" style="width: 900px">
      <div class="modal-title">
        <h2>{{ $t('janr') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div class="min-body">
          <div class="card-row">
            <div
              class="item-md-3 item-3"
              v-for="(item, index) in janr"
              :key="index"
              @click="isJanr = false"
            >
              <nuxt-link
                :to="{
                  name: 'filter___' + $i18n.locale,
                  query: { janr: item._id },
                }"
              >
                {{ item[`name${$i18n.locale}`] }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div @click="closeModal" v-if="isYear" class="fixvh"></div>
    <div v-if="isYear" class="modal-card" style="width: 900px">
      <div class="modal-title">
        <h2>{{ $t('years') }}</h2>
        <button @click="closeModal">
          <fa class="times" icon="times" />
        </button>
      </div>

      <div class="modal-body">
        <div class="min-body">
          <div class="card-row">
            <div
              class="item-md-3 item-3"
              v-for="(item, index) in year"
              :key="index"
              @click="isYear = false"
            >
              <nuxt-link
                :to="{
                  name: `filter___${$i18n.locale}`,
                  query: { year: item },
                }"
              >
                {{ item }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header :class="dheader ? 'dark' : '22'">
      <div class="blur"></div>
      <div class="container">
        <div class="header-inner">
          <div class="header-left">
            <nuxt-link :to="{ name: `index___${$i18n.locale}` }">
              <span class="logo">
                <img
                  width="140px"
                  height="23px"
                  src="/logo.png"
                  alt="amediatv"
                />
              </span>
            </nuxt-link>
          </div>

          <div class="header-right">
            <div class="header-center">
              <div class="header-nav">
                <ul>
                  <li>
                    <a href="#" @click="isJanr = true">
                      {{ $t('janr') }}
                    </a>
                  </li>
                  <li class="rel">
                    <a href="#" @click="isYear = true">{{ $t('years') }} </a>
                  </li>
                </ul>
              </div>
            </div>
            <div v-click-other="closeSearchs" class="media-search-icon">
              <button @click="mediaSearch">
                <fa icon="search" />
              </button>
              <div>
                <div v-if="searchMedia" class="search-media">
                  <div class="">
                    <div class="search-media-btn">
                      <input
                        v-model="search"
                        type="text"
                        @keydown="changeInput"
                        :placeholder="$t('search')"
                      />
                      <button @click="openSearch">
                        <fa icon="search" />
                      </button>
                    </div>
                    <div v-if="searchData != null">
                      <div
                        v-if="searchData.length > 0"
                        class="search-box-media scroll"
                      >
                        <ul>
                          <li
                            v-for="item in searchData"
                            :key="item"
                            v-show="searchData.length > 0"
                            @click="
                              searchBox = false
                              searchMedia = false
                              search = ''
                            "
                          >
                            <nuxt-link
                              :to="{
                                name: 'season-id___' + $i18n.locale,
                                params: {
                                  id: item._id,
                                },
                              }"
                            >
                              <div class="search-link">
                                <div class="img">
                                  <img :src="$cdn + item.image" alt="" />
                                </div>
                                <div class="text">
                                  <p>
                                    {{ item.name[$i18n.locale] }}
                                  </p>
                                </div>
                              </div>
                            </nuxt-link>
                          </li>
                          <li v-if="searchData.length == 0">
                            {{ $t('notfound') }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-click-other="closeSearch"
              :class="isSearch ? 'open search-box' : 'search-box'"
            >
              <div class="search">
                <input
                  v-model="search"
                  type="text"
                  @keydown="changeInput"
                  :placeholder="$t('search')"
                />
                <div v-if="searchBox" class="year scroll">
                  <div class="search">
                    <ul v-if="searchData != null">
                      <li
                        v-for="item in searchData"
                        :key="item"
                        v-show="searchData.length > 0"
                        @click="
                          searchBox = false
                          search = ''
                        "
                      >
                        <nuxt-link
                          :to="{
                            name: 'season-id___' + $i18n.locale,
                            params: {
                              id: item._id,
                            },
                          }"
                        >
                          <div class="search-link">
                            <div class="img">
                              <img :src="$cdn + item.image" alt="" />
                            </div>
                            <div class="text">
                              <p>
                                {{ item.name[$i18n.locale] }}
                              </p>
                            </div>
                          </div>
                        </nuxt-link>
                      </li>
                      <li v-show="searchData.length == 0">
                        {{ $t('notfound') }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button @click="openSearch">
                <fa icon="search" />
              </button>
            </div>
            <div></div>

            <div class="lang">
              <a
                @click.prevent="clickUz"
                :class="$i18n.locale == 'uz' ? 'active' : ''"
                href="#"
                >UZ</a
              >
              <span></span>
              <a
                @click.prevent="clickRu"
                :class="$i18n.locale == 'ru' ? 'active' : ''"
                href="#"
                >RU</a
              >
            </div>

            <div class="header-login">
              <button
                v-if="!$auth.loggedIn"
                class="login"
                @click="openLoginModal"
              >
                <span>
                  <fa icon="sign-in-alt" />
                </span>
                <span class="kirish"> {{ $t('kirish') }} </span>
              </button>

              <div v-else class="profile" v-click-other="clickOut">
                <button @click="isProfile = true" class="profile">
                  <div class="pro-img">
                    <img
                      v-if="$auth.user.photo"
                      :src="$cdn + $auth.user.photo"
                      alt=""
                    />
                    <img v-else src="@/static/default-profile.png" alt="" />
                  </div>
                  <fa icon="sort-down" />
                </button>

                <div v-if="isProfile" class="pro-dropdown">
                  <h6>{{ $auth.user.name }}</h6>
                  <ul>
                    <li @click="isProfile = false">
                      <nuxt-link
                        :to="{
                          name: `profile___${$i18n.locale}`,
                        }"
                      >
                        <span>
                          <fa icon="user" />
                        </span>
                        {{ $t('profil') }}
                      </nuxt-link>
                    </li>
                  </ul>
                  <button
                    @click="
                      $auth.logout()
                      isProfile = false
                    "
                    class="logout"
                  >
                    <fa icon="power-off" /> {{ $t('exit') }}
                  </button>
                </div>
              </div>
            </div>
            <div class="bar-btn">
              <button @click="clickBar">
                <fa icon="bars" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { required, minLength, sameAs, helpers } from 'vuelidate/lib/validators'
const email = helpers.regex(
  'alpha',
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
export default {
  data() {
    return {
      invalidCaptcha: false,
      captchaImage: null,
      isMenu: false,
      isEmail: false,
      searchMedia: false,
      year: [],
      isRegister: false,
      isEmailRegister: false,
      isCheck: false,
      isCaptcha: false,
      isProfile: false,
      isSearch: false,
      isJanr: false,
      isYear: false,
      searchBox: false,
      type: 'password',
      search: '',
      visiblePassword: false,
      dheader: true,
      email: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      },
      logemail: {
        email: '',
        password: '',
      },
      register: {
        name: '',
      },
      captcha: '',
      login: {
        phone: '+',
      },
      auth: {
        password: '',
      },
    }
  },
  validations: {
    email: {
      name: {
        required,
      },
      email: {
        required,
      },
      password: {
        required,
      },
      repeatPassword: {
        sameAsPassword: sameAs('password'),
      },
    },
    captcha: {
      required,
    },
    logemail: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
    register: {
      name: {
        required,
      },
    },
    login: {
      phone: {
        required,
      },
    },
    auth: {
      password: {
        required,
      },
    },
  },
  computed: {
    janr() {
      return this.$store.state.janr
    },
    isLoginModal() {
      return this.$store.state.isLoginModal
    },
  },
  watch: {
    isLoginModal: function () {
      this.getCaptchaImage()
    },
  },
  async mounted() {
    window.addEventListener('scroll', this.scrollBody)
    if (window.scrollY < 1) {
      this.dheader = false
    }

    for (let i = parseInt(new Date().getFullYear()); i >= 1991; i--) {
      this.year.push(i)
    }
  },
  created() {},
  methods: {
    async getCaptchaImage() {
      const res = await this.$axios.$get('auth/captcha')
      this.captchaImage = res.data.captcha
    },
    changePasswordVisible() {
      if (this.type == 'text') {
        this.type = 'password'
      } else {
        this.type = 'text'
      }
    },
    clickBar() {
      this.isMenu = true
    },
    clickJanr() {
      this.isJanr = true
      this.isMenu = false
    },
    clickYear() {
      this.isYear = true
      this.isMenu = false
    },
    clickemail() {
      this.isEmail = true
      this.$store.commit('CHANGE_LOG_FALSE')
    },
    async openLoginModal() {
      this.$store.commit('CHANGE_LOG')
      await this.getCaptchaImage()
    },
    clickemailregister() {
      this.isEmailRegister = true
      this.isEmail = false
    },
    clickUz() {
      this.$i18n.setLocale('uz')
    },
    clickRu() {
      this.$i18n.setLocale('ru')
    },
    async changeInput() {
      if (this.search.length >= 2) {
        let searchData = await this.$axios.$get(
          `season/search?text=${this.search}`
        )
        this.searchData = searchData.data
        // console.log('searchdata', this.searchData)
        this.searchBox = true
      } else {
        this.searchBox = false
        this.searchData = []
      }
    },
    scrollBody() {
      if (window.scrollY > 1) {
        this.dheader = true
      } else {
        this.dheader = false
      }
    },
    openSearch() {
      this.isSearch = true
    },
    mediaSearch() {
      this.searchMedia = true
    },
    closeSearch() {
      if (this.search == '') {
        this.isSearch = false
      }
    },
    closeSearchs() {
      if (this.search == '') {
        this.searchMedia = false
      }
    },

    changePasswordVisible() {
      if (this.type == 'text') {
        this.type = 'password'
      } else {
        this.type = 'text'
      }
    },
    clickOut() {
      this.isProfile = false
    },
    formReset() {
      this.register.name = ''
      this.login.phone = ''
      this.auth.password = ''

      this.closeModal()
      this.$v.login.$reset()
      this.$v.register.$reset()
      this.$v.auth.$reset()
    },

    openLogin() {
      this.closeModal()
      this.isLoginModal = true
    },
    openRegister() {
      this.closeModal()
      this.isRegister = true
    },
    closeModal() {
      this.isRegister = false
      this.$store.commit('CHANGE_LOG_FALSE')
      this.isCheck = false
      this.isEmailRegister = false
      this.isJanr = false
      this.isYear = false
      this.isEmail = false
      this.isCaptcha = false
    },
    handleType(event) {
      const { srcElement, type } = event
      const { name, value } = srcElement
      if (type === 'blur' && !value) {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },

    //register method
    sendName() {
      this.closeModal()
      this.isCheck = true
      this.$v.register.$touch()
      if (!this.$v.register.$invalid) {
        let phone = this.login.phone.replace(/[^0-9]/g, '')

        this.$axios
          .$post('auth/test/register', {
            name: this.register.name,
            phone,
            captcha: this.captcha,
          })
          .then((res) => {
            if (res.success) {
              this.closeModal()
              this.isCheck = true
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    //register method (email)
    EmailRegister() {
      this.closeModal()
      this.$v.email

      if (!this.$v.email.$invalid) {
        this.$axios
          .$post('auth/register/email', {
            name: this.email.name,
            phone: this.email.email,
            password: this.email.password,
          })
          .then(async (res) => {
            if (res.success) {
              let response = await this.$auth.loginWith('local', {
                data: {
                  phone: this.email.email,
                  password: this.email.password,
                },
              })
              this.closeModal()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    //login method

    async loginUser(captcha) {
      this.$v.login.$touch()
      if (!this.$v.login.$invalid) {
        let phone = this.login.phone.replace(/[^0-9]/g, '')

        const res = await this.$axios.$post('auth/test/check', {
          phone,
          captcha,
        })
        this.closeModal()
        if (res.data.status == 404) {
          this.isRegister = true
        }
        if (res.data.status == 200) {
          this.isCheck = true
        }
        if (res.data.status == 303) {
          this.isCaptcha = true
          return res.data.status
        }
      }
    },
    async continueCaptcha() {
      const res = await this.loginUser(this.captcha)

      if (res === 303) {
        this.invalidCaptcha = true
      }
    },
    async sendCode() {
      this.$v.auth.$touch()
      if (!this.$v.auth.$invalid) {
        let phone = this.login.phone.replace(/[^0-9]/g, '')

        try {
          let response = await this.$auth.loginWith('local', {
            data: {
              phone: phone,
              password: this.auth.password,
            },
          })
          this.$router.go()
        } catch (err) {
          console.log(err)
        }
      }
    },
    async sendEmail() {
      this.$v.logemail.$touch()
      if (!this.$v.logemail.$invalid) {
        try {
          let response = await this.$auth.loginWith('local', {
            data: {
              phone: this.logemail.email,
              password: this.logemail.password,
            },
          })
          this.formReset()
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style lang="scss">
.captcha-image {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0px;
}
.media-search-icon {
  display: none;

  button {
    font-size: 17px;
    color: #fff;
    padding: 5px 0;
  }
}

.search-media {
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 12;
  background: #252831;
  width: 100%;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  max-height: 300px;

  .search-box-media {
    top: 50px;
    background: #fff;
    padding: 10px 10px;
    padding-top: 20px;
    max-height: 230px;
    overflow-y: scroll;

    ul {
      list-style: none;

      li {
        margin-bottom: 10px;

        a {
          .search-link {
            display: flex;
            align-items: center;

            .img {
              width: 40px;
              height: 40px;
              margin-right: 3px;

              img {
                border-radius: 10px;
                width: 100%;
                height: 100%;
              }
            }

            .text {
              margin-left: 5px;
              max-width: 80%;

              p {
                color: #333;
                font-size: 14px;
              }
            }
          }

          &:hover {
            .text {
              p {
                color: $gc;
              }
            }
          }
        }
      }
    }
  }

  .search-media-btn {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      width: 100%;
      padding: 20px;
      padding-right: 50px;
      background: transparent;
      border: 0;
      color: #fff;
      font-size: 20px;

      &::placeholder {
        color: #fff;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      top: 50%;
      transform: translate(0%, -50%);
      font-size: 20px;
      color: #fff;
      position: absolute;
      right: 15px;
    }
  }
}

.bar-btn {
  display: none;
}

.menu-fix {
  opacity: 0 !important;
}

.show {
  left: 0 !important;
}

.menu-modal {
  position: fixed;
  top: 0;
  left: -102%;
  background: #252831;
  width: 70%;
  height: 100vh;
  z-index: 20;
  padding: 20px;
  transition: 0.3s;

  .top {
    color: $gc;

    button {
      color: $gc;
      font-size: 26px;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;

    button {
      color: $gc;
      padding: 10px 20px 10px 0;
      font-size: 22px;
    }
  }
}

.send-code {
  margin-bottom: 25px;
  font-size: 14px;
  font-weight: 500;
}

.search {
  position: relative;

  .year {
    position: absolute;
    top: 50px;
    background: #fff;
    padding: 10px 10px;
    padding-top: 20px;
    width: 330px;
    border-radius: 5px;
    max-height: 230px;
    overflow-y: scroll;

    ul {
      list-style: none;

      li {
        margin-bottom: 10px;

        a {
          .search-link {
            display: flex;
            align-items: center;

            .img {
              width: 40px;
              height: 40px;
              margin-right: 3px;

              img {
                border-radius: 10px;
                width: 100%;
                height: 100%;
              }
            }

            .text {
              margin-left: 5px;
              max-width: 80%;

              p {
                color: #333;
                font-size: 14px;
              }
            }
          }

          &:hover {
            .text {
              p {
                color: $gc;
              }
            }
          }
        }
      }
    }
  }
}

div.min-body {
  a {
    font-size: 16px;
    color: $tc;
    display: block;
    padding: 8px 15px;
    border-radius: 10px;
    border: 1px solid $gc;
    margin-bottom: 10px;

    &:hover {
      background-color: $gc;
      color: #fff;
    }
  }
}

header {
  padding: 10px 0px;
  // box-shadow: 0px 4px 6px 0px rgb(12 0 46 / 5%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // background-color: rgba(0, 0, 0, 0.75);
  z-index: 7;
  transition: 0.3s;

  // div.blur {
  //     position: absolute;
  //     opacity: 0.9;
  //     z-index: 4;
  //     width: 100%;
  //     height: 100%;
  //     top: 0;
  //     left: 0;
  //     -webkit-backdrop-filter: blur(8px);
  //     backdrop-filter: blur(8px);
  // }
  div.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;

    span.logo {
      img {
        width: 140px;
      }
    }

    div.header-center {
      div.header-nav {
        margin-right: 100px;

        ul {
          list-style-type: none;

          li {
            display: inline-block;
            margin-left: 30px;
            position: relative;
            padding: 15px 0px;

            a {
              display: block;
              text-decoration: none;
              color: #fff;
              font-size: 20px;
              font-weight: 400;
              transition: 0.2s;

              &:hover {
                color: $gc;
              }

              svg {
                font-size: 12px;
                font-weight: 400;
              }

              span.minus {
                display: none;
              }
            }

            ul.dropdown {
              position: absolute;
              display: none;
              background-color: $bc;
              box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
              width: 210px;
              z-index: 6;
              border-radius: 5px;
              overflow: hidden;
              top: 55px;

              li {
                display: block;
                margin-left: 0px;
                border-bottom: 1px solid #f5f5f5;
                padding: 0px;

                a {
                  padding: 10px 20px;
                  display: flex;
                  transition: 0.2s;

                  span.icon-right {
                    margin-left: -10px;
                    opacity: 0;
                    transition: 0.2s;
                    margin-right: 5px;
                    font-size: 16px;
                  }

                  &:hover {
                    color: #fff;
                    background-color: $gc;

                    span.icon-right {
                      margin-left: 0px;
                      opacity: 1;
                    }
                  }
                }
              }
            }
          }

          li:hover {
            ul.dropdown {
              display: block;
            }

            a {
              span.minus {
                display: inline-block;
              }

              span.plus {
                display: none;
              }
            }
          }
        }
      }
    }

    div.header-right {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      div.search-box {
        display: flex;

        input {
          width: 0px;
          transition: 0.2s;
          height: 35px;
          // border-top-left-radius: 5px;
          // border-bottom-left-radius: 5px;
          border: none;
          border-bottom: 1px solid #704f24;
          padding: 0px;
          background-color: transparent;
          color: #fff;
          font-weight: 400;
          font-size: 18px;

          &::placeholder {
            font-weight: 400;
            // color: $gh;
          }

          &:focus {
            outline: none;
          }
        }

        button {
          height: 35px;
          padding: 2px 12px;

          // border-top-right-radius: 5px;
          // border-bottom-right-radius: 5px;
          // border-bottom: 1px solid #704f24;
          // background-color: $gc;
          svg {
            color: #fff;
            font-size: 18px;
          }

          &:hover {
            svg {
              color: $gc;
            }
          }
        }
      }

      div.open {
        input {
          width: 200px;
          padding: 0px 10px;
        }
      }

      div.lang {
        display: flex;
        align-items: center;
        margin-left: 30px;

        a {
          font-size: 16px;
          color: #fff;
          font-weight: 400;
          line-height: 15px;

          &:hover {
            color: $gc;
          }
        }

        span {
          height: 15px;
          width: 1px;
          background-color: #fff;
          display: inline-block;
          margin: 0px 5px;
        }

        a.active {
          color: $gc;
          font-weight: 600;
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
    }
  }
}

.dark {
  background: $bc !important;

  div.header-right {
    border-bottom: 1px solid transparent !important;
  }
}

@media (max-width: 567px) {
  .media-search-icon {
    display: block;
  }

  .search-box {
    display: none !important;
  }

  .header-back {
    height: 60px !important;
  }

  header {
    .header-inner {
      .header-left {
        .logo {
          img {
            width: 110px !important;
            height: 18px;
          }
        }
      }

      .header-right {
        border: 0 !important;

        .header-login {
          .pro-img {
            width: 35px !important;
            height: 35px !important;
          }
        }

        .header-center {
          display: none;
        }

        .lang {
          margin-left: 15px !important;
          margin-right: 10px !important;
        }

        .header-login {
          margin: 0 10px !important;

          button.login {
            padding: 5px !important;
            font-size: 18px !important;

            span.kirish {
              display: none;
            }
          }
        }

        .bar-btn {
          display: block;

          button {
            color: #fff;
            font-size: 22px;
          }
        }
      }
    }
  }

  div.min-body {
    max-height: calc(100vh - 150px);
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>
