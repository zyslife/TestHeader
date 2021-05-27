import { TabViewType, EnableSnapType } from '../types'

export default {
    PageRouteData: [
        { title: 'ExampleBasic.', description: 'A simple example', page: 'ExampleBasic' },
        { title: 'ExampleCustomTabbar.', description: 'The example contains the usage of a custom tabbar', page: 'ExampleCustomTabbar' },
        { title: 'ExampleWithPullRefresh.', description: 'Make each Tab page allow pull-down refreshes', page: 'ExampleWithPullRefresh' },
        { title: 'ExampleWithTabViewPullRefresh.', description: 'Let the tabs component allow a drop-down refresh', page: 'ExampleWithTabViewPullRefresh' },
        { title: 'ExampleHeaderAnimated.', description: 'Get scrollTrans using the makeScrollTrans function', page: 'ExampleHeaderAnimated' },
        { title: 'ExampleCarouselHeader.', description: "The header contains the Carousel component", page: 'ExampleCarouselHeader' },
    ],
    homeConfig: [
        {
            sectionTitle: 'Select your tab view', data: [
                { type: TabViewType.tabview, title: 'react-native-tab-view' },
                { type: TabViewType.default, title: 'react-native-scrollable-tab-view' },
            ]
        },
        {
            sectionTitle: 'Select the value of enableSnap in props', data: [
                { type: EnableSnapType.disableSnap, title: 'false' },
                { type: EnableSnapType.enableSnap, title: 'true' },
            ]
        }
    ],

    refreshImg: require('../resource/refresh.png'),
    HeaderImg: require('../resource/header_img.png'),
    IconImg: require('../resource/img13.jpeg'),
    IconImg2: require('../resource/img11.jpeg'),
    DetailImg: require('../resource/img15.jpeg'),
    DetailImg2: require('../resource/img10.jpeg'),

    BannerData: [
        require('../resource/img5.jpeg'),
        require('../resource/img4.jpeg'),
        require('../resource/img7.jpeg'),
        require('../resource/img8.jpeg')
    ],

    Page1Data: [
        { image: require('../resource/img1.jpeg'), title: '深秋的黄昏' }
        // { image: require('../resource/img2.jpeg'), title: '神秘的庄园' },
        // { image: require('../resource/img3.jpeg'), title: '美丽的湖泊' },
        // { image: require('../resource/img4.jpeg'), title: '童话的世界' },
        // { image: require('../resource/img5.jpeg'), title: '享受的古镇' },
        // { image: require('../resource/img6.jpeg'), title: '夜晚的江景' },
        // { image: require('../resource/img7.jpeg'), title: '壮丽的晚霞' },
        // { image: require('../resource/img8.jpeg'), title: '昏暗的酒馆' },
        // { image: require('../resource/img9.jpg'), title: '浪漫的长道' },
        // { image: require('../resource/img1.jpeg'), title: '深秋的黄昏' },
        // { image: require('../resource/img2.jpeg'), title: '神秘的庄园' },
        // { image: require('../resource/img3.jpeg'), title: '美丽的湖泊' },
        // { image: require('../resource/img4.jpeg'), title: '童话的世界' },
        // { image: require('../resource/img5.jpeg'), title: '享受的古镇' },
        // { image: require('../resource/img6.jpeg'), title: '夜晚的江景' }
    ],
    Page2Data: [
        { image: require('../resource/img11.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img12.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img13.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
        { image: require('../resource/img11.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
        { image: require('../resource/img12.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
        { image: require('../resource/img14.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img11.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img12.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img15.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
        { image: require('../resource/img11.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
        { image: require('../resource/img12.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img13.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img11.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img12.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img14.jpeg'), height: 100, text: '这里是测试文字', directory: 'left', imgSize: 80 },
        { image: require('../resource/img11.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
        { image: require('../resource/img12.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
        { image: require('../resource/img15.jpeg'), height: 100, text: '这里是测试文字', directory: 'right', imgSize: 80 },
    ],

    Page3Data: [
        { title: "测试标题1", data: ["测试文本测试文本测试文本1", "测试文本测试文本测试文本2", "测试文本测试文本测试文本3", "测试文本测试文本测试文本4", "测试文本测试文本测试文本5", "测试文本测试文本测试文本6"] },
        { title: "测试标题2", data: ["测试文本测试文本测试文本7", "测试文本测试文本测试文本8", "测试文本测试文本测试文本9", "测试文本测试文本测试文本10", "测试文本测试文本测试文本11", "测试文本测试文本测试文本12", "测试文本测试文本测试文本13", "测试文本测试文本测试文本14", "测试文本测试文本测试文本15", "测试文本测试文本测试文本16"] },
        { title: "测试标题3", data: ["测试文本测试文本测试文本17", "测试文本测试文本测试文本18", "测试文本测试文本测试文本19", "测试文本测试文本测试文本20", "测试文本测试文本测试文本21", "测试文本测试文本测试文本22"] },
        { title: "测试标题1", data: ["测试文本测试文本测试文本1", "测试文本测试文本测试文本2", "测试文本测试文本测试文本3", "测试文本测试文本测试文本4", "测试文本测试文本测试文本5", "测试文本测试文本测试文本6"] },
        { title: "测试标题2", data: ["测试文本测试文本测试文本7", "测试文本测试文本测试文本8", "测试文本测试文本测试文本9", "测试文本测试文本测试文本10", "测试文本测试文本测试文本11", "测试文本测试文本测试文本12", "测试文本测试文本测试文本13", "测试文本测试文本测试文本14", "测试文本测试文本测试文本15", "测试文本测试文本测试文本16"] },
        { title: "测试标题3", data: ["测试文本测试文本测试文本17", "测试文本测试文本测试文本18", "测试文本测试文本测试文本19", "测试文本测试文本测试文本20", "测试文本测试文本测试文本21", "测试文本测试文本测试文本22"] },
        { title: "测试标题1", data: ["测试文本测试文本测试文本1", "测试文本测试文本测试文本2", "测试文本测试文本测试文本3", "测试文本测试文本测试文本4", "测试文本测试文本测试文本5", "测试文本测试文本测试文本6"] },
        { title: "测试标题2", data: ["测试文本测试文本测试文本7", "测试文本测试文本测试文本8", "测试文本测试文本测试文本9", "测试文本测试文本测试文本10", "测试文本测试文本测试文本11", "测试文本测试文本测试文本12", "测试文本测试文本测试文本13", "测试文本测试文本测试文本14", "测试文本测试文本测试文本15", "测试文本测试文本测试文本16"] },
        { title: "测试标题3", data: ["测试文本测试文本测试文本17", "测试文本测试文本测试文本18", "测试文本测试文本测试文本19", "测试文本测试文本测试文本20", "测试文本测试文本测试文本21", "测试文本测试文本测试文本22"] },
        { title: "测试标题1", data: ["测试文本测试文本测试文本1", "测试文本测试文本测试文本2", "测试文本测试文本测试文本3", "测试文本测试文本测试文本4", "测试文本测试文本测试文本5", "测试文本测试文本测试文本6"] },
        { title: "测试标题2", data: ["测试文本测试文本测试文本7", "测试文本测试文本测试文本8", "测试文本测试文本测试文本9", "测试文本测试文本测试文本10", "测试文本测试文本测试文本11", "测试文本测试文本测试文本12", "测试文本测试文本测试文本13", "测试文本测试文本测试文本14", "测试文本测试文本测试文本15", "测试文本测试文本测试文本16"] },
        { title: "测试标题3", data: ["测试文本测试文本测试文本17", "测试文本测试文本测试文本18", "测试文本测试文本测试文本19", "测试文本测试文本测试文本20", "测试文本测试文本测试文本21", "测试文本测试文本测试文本22"] },
    ],
    TabData: [require('../resource/tab1.png'), require('../resource/tab2.png'), require('../resource/tab3.png')]

}