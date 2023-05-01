<template>
    <div>
        <div class="profile-page">
            <div @click="closeModal" v-if="balanceno" class="fixvh"></div>
            <div v-if="balanceno" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2 class="red">
                        {{ $t('mablagkam') }}
                    </h2>
                </div>

                <div class="modal-body">
                    <div>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="closeModal"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
            <div @click="closeModal" v-if="obunasuccess" class="fixvh"></div>
            <div v-if="obunasuccess" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2>{{ $t('obunasuccess') }}</h2>
                    <!-- <button @click="closeModal">
                        <fa class="times" icon="times" />
                    </button> -->
                </div>

                <div class="modal-body">
                    <div>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="closeModal"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
            <div @click="closeModal" v-if="obunayes" class="fixvh"></div>
            <div v-if="obunayes" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2>{{ $t('obunayoqilgan') }}</h2>
                    <!-- <button @click="closeModal">
                        <fa class="times" icon="times" />
                    </button> -->
                </div>

                <div class="modal-body">
                    <div>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="closeModal"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
            <div @click="closeModal" v-if="isObuna" class="fixvh"></div>
            <div v-if="isObuna" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2>{{ $t('obunatasdiqlang') }}</h2>
                    <button @click="closeModal">
                        <fa class="times" icon="times" />
                    </button>
                </div>

                <div class="modal-body">
                    <div>
                        <button
                            class="btn-sm mb-15 w-100 otmen"
                            @click="closeModal"
                        >
                            {{ $t('bekor') }}
                        </button>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="subscribe"
                        >
                            {{ $t('tasdiq') }}
                        </button>
                    </div>
                </div>
            </div>
            <div @click="closeModal" v-if="isName" class="fixvh"></div>
            <div v-if="isName" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2>{{ $t('changename') }}</h2>
                    <button @click="closeModal">
                        <fa class="times" icon="times" />
                    </button>
                </div>

                <div class="modal-body">
                    <div
                        class="input-form"
                        :class="{ 'form-error': $v.user.name.$error }"
                    >
                        <input
                            v-model="$v.user.name.$model"
                            type="text"
                            :placeholder="$t('ism')"
                        />
                        <h6 v-if="!$v.user.name.required" class="error-text">
                            {{ $t('tolshart') }}
                        </h6>
                    </div>

                    <div>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="editName"
                        >
                            {{ $t('edit') }}
                        </button>
                    </div>
                </div>
            </div>

            <div @click="closeModal" v-if="isBalance" class="fixvh"></div>
            <div v-if="isBalance" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2>{{ $t('balanstoldir') }}</h2>
                    <button @click="closeModal">
                        <fa class="times" icon="times" />
                    </button>
                </div>

                <div class="modal-body">
                    <div
                        class="input-form"
                        :class="{ 'form-error': $v.balance.$error }"
                    >
                        <input
                            v-model="$v.balance.$model"
                            type="text"
                            :placeholder="$t('summaenter')"
                            v-mask="'#######'"
                        />
                        <h6 v-if="!$v.balance.required" class="error-text">
                            {{ $t('tolshart') }}
                        </h6>
                        <h6 v-if="!$v.balance.between" class="error-text">
                            {{ $t('minikki') }}
                        </h6>
                    </div>
                    <div class="paytype">
                        <h2>{{ $t('tolovtype') }}</h2>
                        <div>
                            <button
                                @click="clickType(1)"
                                :class="payType == 1 ? 'active' : ''"
                            >
                                <img src="@/assets/img/payme.jpg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="payBalance"
                        >
                            {{ $t('tolash') }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="profile-header">
                    <div class="left">
                        <div class="person">
                            <div class="image-div">
                                <label for="image" class="upload-button">
                                    <input
                                        @change="changeImage($event)"
                                        type="file"
                                        id="image"
                                    />

                                    <span>
                                        <fa icon="pen" />
                                    </span>
                                </label>
                                <div class="img">
                                    <img
                                        v-if="$auth.user.photo != undefined"
                                        :src="$cdn + $auth.user.photo"
                                        alt=""
                                    />
                                    <img
                                        src="@/static/default-profile.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div class="name">
                                <h3>
                                    {{ $auth.user.name }}
                                    <button
                                        class="edit-btn"
                                        @click="isName = true"
                                    >
                                        <fa icon="edit" />
                                    </button>
                                </h3>
                                <h4>
                                    <span class="key">ID</span> :
                                    <span>{{ $auth.user.uid }}</span>
                                </h4>
                                <h4>
                                    <span class="key"> {{ $t('Balans') }}</span>
                                    :
                                    <span
                                        >{{ $auth.user.balance }}
                                        {{ $t('sum') }}
                                    </span>
                                </h4>
                                <h4 v-if="$auth.user.status == 'vip'">
                                    <span class="key">
                                        {{ $t('tarifend') }}</span
                                    >
                                    :
                                    <span>
                                        {{ $auth.user.endDate.slice(0, 10) }}
                                    </span>
                                </h4>
                                <button
                                    class="btn-simple mt-10"
                                    @click="isBalance = true"
                                >
                                    {{ $t('balanstoldir') }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <button class="" @click="$auth.logout()">
                            {{ $t('exit') }}
                            <span><fa icon="sign-out-alt" /></span>
                        </button>
                    </div>
                </div>

                <div class="tab-menu">
                    <button
                        :class="tabIndex == 1 ? 'active btn-tab' : 'btn-tab'"
                        @click="clickTab(1)"
                    >
                        <span class="let"> {{ $t('tarifla') }} </span>
                    </button>
                    <button
                        :class="tabIndex == 2 ? 'active btn-tab' : 'btn-tab'"
                        @click="clickTab(2)"
                    >
                        <span class="let"> {{ $t('like') }} </span>
                    </button>
                </div>
                <div class="content">
                    <div class="profil" v-if="tabIndex == 1">
                        <div class="top">
                            <div class="card-row">
                                <div
                                    v-for="(item, i) in pricelist"
                                    :key="i"
                                    class="item-3 item-md-6"
                                >
                                    <div class="box">
                                        <p v-if="item.type != 10">
                                            {{ item.type }} {{ $t('oylik') }}
                                        </p>
                                        <p v-else>1 {{ $t('yillik') }}</p>

                                        <div class="price">
                                            <h2>
                                                {{ item.amount }}
                                                {{ $t('sum') }}
                                            </h2>
                                            <button
                                                @click="obuna(item._id)"
                                                class="btn-simple"
                                            >
                                                {{ $t('obuna') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profil" v-if="tabIndex == 2">
                        <div class="like">
                            <div class="card-row">
                                <div
                                    class="item-3 item-md-3"
                                    v-for="(item, index) in likes"
                                    :key="index"
                                >
                                    <AnimeCard :anime="item.season" />
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
import { required, between } from 'vuelidate/lib/validators'
import AnimeCard from '../../components/AnimeCard.vue'
export default {
    layout: 'dashboard',
    middleware: 'auth',
    head() {
        return {
            title: `${this.$auth.user.name} - Amediatv`,
            meta: [
                {
                    name: 'description',
                    content: this.$t('titmeta'),
                },
            ],
        }
    },
    data() {
        return {
            isName: false,
            isBalance: false,
            obunayes: false,
            obunasuccess: false,
            pricelist: null,
            balanceno: null,
            obunaId: '',
            payType: 1,
            tabMenu: [
                {
                    uz: 'Profil',
                    ru: 'Profil',
                },
                {
                    uz: 'Tanlanganlar',
                    ru: 'Profil',
                },
            ],
            tabIndex: 1,
            isObuna: false,

            user: {
                name: '',
            },
            balance: '',
        }
    },

    computed: {
        likes() {
            return this.$store.state.like
        },
    },

    validations: {
        user: {
            name: {
                required,
            },
        },
        balance: {
            required,
            between: between(2000, 10000000),
        },
    },
    async mounted() {
        this.user.name = this.$auth.user.name
        let pricelist = await this.$axios.$get('/pricelist')
        this.pricelist = pricelist.data

        window.scrollTo(0, 0)
    },
    methods: {
        payBalance() {
            this.$v.balance.$touch
            if (!this.$v.balance.$invalid) {
                this.isBalance = false
                const amount = parseInt(this.balance) * 100
                if (this.payType == 1) {
                    const str =
                        'm=5fd067551c849a7578ddf061;ac.user=' +
                        this.$auth.user.uid +
                        ';a=' +
                        +amount +
                        ';c=https://amediatv.uz/profile'
                    const base64 = btoa(str)

                    const link = 'https://checkout.paycom.uz/' + base64
                    window.location = link
                }
            }
        },
        clickTab(i) {
            this.tabIndex = i
        },
        clickType(index) {
            this.payType = index
        },
        obuna(id) {
            if (this.$auth.user.status == 'user') {
                this.isObuna = true
                this.obunaId = id
            }
            if (this.$auth.user.status == 'vip') {
                this.obunayes = true
            }
        },
        async subscribe() {
            await this.$axios
                .$post('/profile/follow', { price: this.obunaId })
                .then((res) => {
                    if (res.data.status == 401) {
                        this.balanceno = true
                        this.isObuna = false
                    } else {
                        this.obunasuccess = true
                        this.isObuna = false
                    }
                })
        },
        closeModal() {
            this.isName = false
            this.isBalance = false
            this.isObuna = false
            this.obunayes = false
            this.obunasuccess = false
            this.balanceno = false
        },
        changeImage(event) {
            let fd = new FormData()
            fd.append('photo', event.target.files[0])

            this.$axios({
                url: 'profile/upload',
                method: 'POST',
                data: fd,
            }).then(async (res) => {
                await this.$auth.fetchUser()
            })
        },
        async editName() {
            let id = this.$auth.user._id
            await this.$axios
                .$put('profile/update/', {
                    name: this.user.name,
                })
                .then((res) => {
                    this.isName = false
                    this.$auth.fetchUser()
                })
        },
    },
    components: { AnimeCard },
}
</script>

<style lang="scss" scoped>
h2.red {
    color: red !important;
}
.paytype {
    margin: 15px 0;
    h2 {
        font-size: 18px;
        font-weight: 400;
        color: #333333;
        margin-bottom: 10px;
    }
    button {
        // box-shadow: 0 0 7px 0px #c5c5c5;
        border-radius: 10px;
        overflow: hidden;
        padding: 10px;
        width: 80px;
        height: 75px;
        margin-right: 10px;
        border: 1px solid #4e4e4e4a;
        &.active {
            box-shadow: 0 0 7px 0px $gc;
            border: 1px solid transparent;
        }
        img {
            width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.profile-page {
    margin-bottom: 60px;
    .tab-menu {
        display: flex;
        margin-bottom: 30px;
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
        button {
            // color: ;
            height: 40px;
            transition: all 0.3s;
            margin-right: 30px;
            font-weight: 500;
            font-size: 17px;
            &.active {
                color: $gc;
                // border-bottom: 1px solid $gc;
            }
            &:hover {
                color: $gc;
            }
        }
    }
    .profile-header {
        margin: 30px 0;
        background: #fff;
        // box-shadow: 0 0 3px;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        .right {
            // color: ;
            button {
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 10px;
                font-size: 14px;
                transition: 0.2s;
                &:hover {
                    background: $gc;
                    color: #fff;
                    span {
                        color: #fff;
                    }
                }
            }
            span {
                margin-left: 5px;
                color: $gc;
            }
        }
        .left {
            display: flex;
            align-items: center;
            .person {
                display: flex;
                .edit-btn {
                    font-size: 16px;
                    color: #333;
                    margin-left: 10px;

                    &:hover {
                        color: $gc;
                    }
                }
                .name {
                    margin-left: 15px;
                    span.key {
                        font-weight: 500;
                        color: #333;
                    }
                    h3 {
                        font-weight: 600;
                        // color: ;
                        font-weight: 500;
                    }
                    h4 {
                        font-weight: 500;
                        // color: ;
                        font-weight: 400;
                        color: #666;
                    }
                }
                .img {
                    width: 135px;
                    height: 135px;
                    border-radius: 5px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .image-div {
                    position: relative;
                }
                .upload-button {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    width: 30px;
                    height: 30px;
                    background-color: #fff;
                    color: $gc;
                    font-size: 16px;
                    border-radius: 100%;
                    border: 1px solid $gc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    &:hover {
                        background-color: $gc;
                        color: #fff;
                    }
                    input {
                        border-radius: 5px;
                        overflow: hidden;
                        position: absolute;
                        opacity: 0;
                        transform: translate(-1000%);
                    }
                }
            }
        }
    }
    .content {
        .profil {
            .top {
                margin-bottom: 20px;
                .box {
                    background: #fff;
                    // box-shadow: 0 0 3px;
                    padding: 20px;
                    border-radius: 10px;
                    transition: 0.2s;
                    &:hover {
                        box-shadow: 0 0 10px 0px #ddd;
                    }
                    p {
                        // color: ;
                        margin-bottom: 5px;
                    }
                    .price {
                        display: flex;
                        justify-content: space-between;

                        span {
                            font-size: 24px;
                            color: $gc;
                        }
                    }
                }
            }
            .bottom {
                margin-bottom: 20px;
                .card {
                    background: #fff;
                    // box-shadow: 0 0 3px;
                    padding: 20px;
                    border-radius: 10px;
                }
            }
        }
    }
    .settings {
        .card {
            background: #fff;
            // box-shadow: 0 0 3px;
            padding: 20px;
            border-radius: 10px;
            .input-form {
                p {
                    // color: ;
                    margin-bottom: 5px;
                }
            }
            .save {
                display: flex;
                justify-content: flex-end;
                button {
                    background: $gc;
                    padding: 10px 20px;
                    border-radius: 10px;
                    // color: ;
                }
            }
        }
    }
}
@media (max-width: 576px) {
    .profile-page {
        .profile-header {
            .left {
                .person {
                    .image-div {
                        height: 150px;
                        .img {
                            width: 150px;
                            height: 100%;
                        }
                    }
                }
            }
            .right {
                display: none;
            }
        }
        .content {
            .profil {
                .top {
                    .box {
                        padding: 20px;
                        margin-bottom: 15px;
                        display: block !important;
                        .price {
                            button {
                                padding: 3px 8px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
