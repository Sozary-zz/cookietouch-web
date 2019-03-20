<template>
    <div class="md-layout" id="#login">
        <div class="cookie-container">
            <img src="~@/assets/pics/cookie.png">
        </div>

        <md-card class="md-layout-item md-size-20 md-small-size-100 login">
            <md-card-header>
                <div class="md-title">CookieTouch</div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field class="has-danger">
                            <label>Email</label>
                            <md-input v-model="initial"></md-input>
                        </md-field>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field>
                            <label>Mot de passe</label>
                            <md-input v-model="initial" type="password"></md-input>
                        </md-field>
                    </div>
                </div>
            </md-card-content>

            <md-card-actions>
                <md-button>Se connecter</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            initial: ""
        };
    }
};
</script>
<style lang="css">
.md-field.md-theme-default::before {
    background-color: #eec485;
}
.login {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6) !important;
    border-radius: 8px;
    color: whitesmoke !important;
}

.cookie-container {
    position: relative;
    width: 100%;
}

.cookie-container > img {
    width: 150px;
    height: 150px;
}

#app {
    background: url("~@/assets/pics/login_bg.jpg") no-repeat center fixed;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    /* background: red; */
}
</style>
