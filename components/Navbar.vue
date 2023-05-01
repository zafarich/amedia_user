<template>
    <div>
        <div class="navbar">
            <nav class="navbar-menu">
                <ul>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `profile___${$i18n.locale}` }"
                        >
                            <span class="nav-icon"> <fa icon="user" /> </span>
                            <b>Profil</b>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `uvideo___${$i18n.locale}` }"
                        >
                            <span class="nav-icon"> <fa icon="play" /> </span>
                            <b>Video kurslar</b>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `ucourse___${$i18n.locale}` }"
                        >
                            <span class="nav-icon"> <fa icon="rss" /> </span>
                            <b>Onlayn kurslar</b>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `settings___${$i18n.locale}` }"
                        >
                            <span class="nav-icon">
                                <fa icon="cog" />
                            </span>
                            <b>Sozlamalar</b>
                        </nuxt-link>
                    </li>
                    <li>
                        <a href="#">
                            <span class="nav-icon">
                                <fa icon="sign-out-alt" />
                            </span>
                            <b>Chiqish</b>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div.navbar {
    background: #fff;
    position: relative;
    padding: 20px 0px;
    nav.navbar-menu {
        position: relative;
        z-index: 3;
        ul {
            list-style-type: none;
            li {
                margin-bottom: 10px;
                a {
                    font-size: 16px;
                    padding: 5px 0px;
                    color: $tc;
                    display: block;
                    transition: 0.2s;
                    svg {
                        margin-right: 10px;
                    }
                    b {
                        font-weight: 500;
                    }
                    &:hover {
                        color: $gc;
                    }
                }
                a.nuxt-link-active {
                    color: $gc;
                }
            }
        }
    }
}

div.navbar::before {
    content: '';
    position: absolute;
    width: 1000px;
    top: 0;
    right: 0;
    background-color: #fff;
    height: 100%;
}
</style>
