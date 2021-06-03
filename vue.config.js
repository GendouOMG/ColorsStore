module.exports = {
    baseUrl: "/ColorsStore/",
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