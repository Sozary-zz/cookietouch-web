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
                            <md-input v-model="email"></md-input>
                        </md-field>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field>
                            <label>Mot de passe</label>
                            <md-input v-model="psw" type="password"></md-input>
                        </md-field>
                    </div>
                </div>
            </md-card-content>

            <md-card-actions>
                <md-button @click="signin()">Se connecter</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
import firebase from "firebase";
import axios from "axios";
import primus from "./primus.jss";
import SocketIO from "socket.io-client";
export default {
    data() {
        return {
            email: "",
            psw: ""
        };
    },
    methods: {
        randomString: function(len, bits = 36) {
            let outStr = "";
            let newStr;
            while (outStr.length < len) {
                newStr = Math.random()
                    .toString(bits)
                    .slice(2);
                outStr += newStr.slice(
                    0,
                    Math.min(newStr.length, len - outStr.length)
                );
            }
            return outStr.toUpperCase();
        },
        signin: function() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.psw)
                .then(() => {
                    console.log(" yes");
                })
                .catch(er => console.log(er));
        },
        createSocket: function(url) {
            return new primus(url, {
                manual: true,
                reconnect: {
                    max: 5000,
                    min: 500,
                    retries: 10
                },
                strategy: "disconnect,timeout",
                transformer: "engine.io",
                transport: {}
            });
            // // let socket = SocketIO(url);
            // let socket = new WebSocket(
            //     "wss://proxyconnection.touch.dofus.com/primus/?STICKER=" +
            //         this.randomString(12) +
            //         "&transport=websocket"
            // );
            // console.log(
            // "wss://proxyconnection.touch.dofus.com/primus/?STICKER=" +
            //     this.randomString(12) +
            //     "&transport=websocket"
            // );

            // socket.send(
            //     JSON.stringify({
            //         connecting: {
            //             appVersion: "1.16.6",
            //             buildVersion: "1.39.3",
            //             client: "ios",
            //             language: "fr",
            //             server: "login"
            //         }
            //     })
            // );
            // socket.onmessage = function(event) {
            //     console.log(event.data);
            // };
        },
        makeSticky: function(url, sessionId) {
            const sep = url.indexOf("?") === -1 ? "?" : "&";
            return url + sep + "STICKER=" + encodeURIComponent(sessionId);
        },
        initialize: function() {
            const config = {
                apiKey: "AIzaSyDWK5MrCUhiluOfj8emZT_ARUpbkzbwKTE",
                authDomain: "cookietouch-52c0c.firebaseapp.com",
                databaseURL: "https://cookietouch-52c0c.firebaseio.com",
                messagingSenderId: "423749577733",
                projectId: "cookietouch-52c0c",
                storageBucket: "cookietouch-52c0c.appspot.com"
            };
            return firebase.initializeApp(config);
        }
    },
    mounted() {
        this.initialize();

        axios
            .post(
                "https://haapi.ankama.com/json/Ankama/v2/Api/CreateApiKey",
                "login=kapumain&password=krapazor84&long_life_token=true"
            )
            .then(d => {
                let key = d.data.key;
                console.log(key);

                axios
                    .get(
                        "https://haapi.ankama.com/json/Ankama/v2/Account/CreateToken",
                        {
                            headers: {
                                apikey: key
                            },
                            params: {
                                game: 18
                            }
                        }
                    )
                    .then(d => {
                        let dataUrl = "https://proxyconnection.touch.dofus.com";
                        let sessionid = this.randomString(16);
                        let currentUrl = this.makeSticky(dataUrl, sessionid);
                        currentUrl =
                            "wss://proxyconnection.touch.dofus.com/primus/?STICKER=" +
                            this.randomString(16) +
                            "&transport=websocket";
                        let socket = this.createSocket(currentUrl);
                        console.log(currentUrl);

                        socket.on("open", () => {
                            console.log("here");
                        });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.log(err);
            });
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
