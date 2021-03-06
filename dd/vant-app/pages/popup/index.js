const _my = require("../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "pages/popup/index"
    }
});
import createPage from "../../common/page";
createPage({
    data: {
        show: {
            middle: false,
            top: false,
            bottom: false,
            right: false,
            right2: false
        }
    },

    onTransitionEnd() {
        console.log(`You can't see me 🌚`);
    },

    toggle(type) {
        this.setData({
            [`show.${type}`]: !this.data.show[type]
        });
    },

    togglePopup() {
        this.toggle("middle");
    },

    toggleRightPopup() {
        this.toggle("right");
    },

    toggleRightPopup2() {
        this.toggle("right2");
    },

    toggleBottomPopup() {
        this.toggle("bottom");
    },

    toggleTopPopup() {
        this.toggle("top");
        setTimeout(() => {
            this.toggle("top");
        }, 2000);
    },

    onClickLeft() {
        _my.navigateBack();
    }
});
