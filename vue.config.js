module.exports = {
    publicPath: "/ColorsStore/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/assets/styles/styles.scss";`
            },
            // scss: {
            //   additionalData: `@import "@/assets/styles/styles.scss"`
            // },
        }
    }
};