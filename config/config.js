export default {
    singular: true,
    routes: [{
        path: '/',
        component: './HelloWorld',//相对于 page 目录的相对路径。
    }],
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        }],
    ],
};