module.exports = {
  publicPath: './',
  configureWebpack: {
    devServer: {
      port: 8080,
      open: true,
      before(app) {
        let userpoor = [];
        app.get('/api/register', (req, res) => {
          const { username, password } = req.query;
          const userlength = userpoor.filter(item => item.username == username)
            .length;
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            });
          } else {
            userpoor.push({ username: username, password: password });
            res.json({
              success: true,
              message: '注册成功'
            });
          }
        });
        let tokenkey = 'denglu';
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query;
          const findUser = userpoor.find(
            item => item.username == username && item.password == password
          );
          if (findUser) {
            res.json({
              code: 0,
              message: '登录成功',
              token:
                tokenkey + '-' + username + '-' + (Date.now() + 60 * 60 * 1000)
            });
          } else {
            res.json({
              code: 1,
              message: '账号或密码错误'
            });
          }
        });
        // app.get('/api/loginState', (req, res) => {
        //   const { dateNow, token } = req.query;
        //   const tokenTime = token.split('-')[2];
        //   if (dateNow > tokenTime) {
        //     res.json({
        //       code: -1,
        //       message: '登录信息已过期'
        //     });
        //   }
        // });
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [
              {
                url: '###',
                image:
                  'https://image3.suning.cn/uimg/cms/img/157725726604345543.jpg?format=_is_1242w_610h'
              },
              {
                url: '###',
                image:
                  'https://image.suning.cn/uimg/aps/material/157727043657321867.jpg?format=_is_1242w_610h'
              },
              {
                url: '###',
                image:
                  'https://image.suning.cn/uimg/aps/material/157732446204255140.jpg?format=_is_1242w_610h'
              },
              {
                url: '###',
                image:
                  'https://image.suning.cn/uimg/aps/material/157726001886413164.jpg?format=_is_1242w_610h'
              },
              {
                url: '###',
                image:
                  'https://image.suning.cn/uimg/aps/material/157725629204382743.jpg?format=_is_1242w_610h'
              },
              {
                url: '###',
                image:
                  'https://oss.suning.com/aps/aps_learning/iwogh/2019/12/25/15/iwoghBannerPicture/fcc6f5320e194c288eeaa8cd94f5b152.png?format=_is_1242w_610h'
              },
              {
                url: '###',
                image:
                  'https://image.suning.cn/uimg/aps/material/157726449293657183.jpg?format=_is_1242w_610h'
              },
              {
                url: '###',
                image:
                  'https://image.suning.cn/uimg/aps/material/157726700118598968.jpg?format=_is_1242w_610h'
              }
            ]
          });
        });
        //滚动分类接口
        app.get('/api/rollinglist', (req, res) => {
          res.json({
            data: [
              [
                {
                  url: '###',
                  image:
                    'https://image1.suning.cn/uimg/cms/img/157354388821073511.png?format=_is_120w_120h.webp    ',
                  label: '抢购'
                },
                {
                  url: '###',
                  image:
                    'https://image1.suning.cn/uimg/cms/img/157165889469283916.png?format=_is_120w_120h.webp',
                  label: '超市'
                },
                {
                  url: '###',
                  image:
                    'https://image3.suning.cn/uimg/cms/img/157165891799364137.png?format=_is_120w_120h.webp',
                  label: '拼购'
                },
                {
                  url: '###',
                  image:
                    'https://image3.suning.cn/uimg/cms/img/157165893790085815.png?format=_is_120w_120h.webp',
                  label: '手机'
                },
                {
                  url: '###',
                  image:
                    'https://image3.suning.cn/uimg/cms/img/157165895671653077.png?format=_is_120w_120h.webp',
                  label: '家电'
                },
                {
                  url: '###',
                  image:
                    'https://image1.suning.cn/uimg/cms/img/157165897779526702.png?format=_is_120w_120h.webp',
                  label: '好物'
                },
                {
                  url: '###',
                  image:
                    'https://image2.suning.cn/uimg/cms/img/154708810364057852.png?format=_is_120w_120h.webp',
                  label: '赚钱'
                },
                {
                  url: '###',
                  image:
                    'https://image3.suning.cn/uimg/cms/img/157165906281444963.png?format=_is_120w_120h.webp',
                  label: '签到'
                },
                {
                  url: '###',
                  image:
                    'https://image3.suning.cn/uimg/cms/img/157165908511134313.png?format=_is_120w_120h.webp',
                  label: '领券'
                },
                {
                  url: '###',
                  image:
                    'https://image2.suning.cn/uimg/cms/img/157165912004147386.png?format=_is_120w_120h.webp',
                  label: '更多'
                }
              ],
              [
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/89640/36/2804/8167/5dd6aca9E4b04fedd/fbc6adc345138b30.png',
                  label: '国际'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png',
                  label: '拍卖'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png',
                  label: '唯品会'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg',
                  label: '玩3C'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png',
                  label: '沃尔玛'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png',
                  label: '没壮馆'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png',
                  label: '旅行'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png',
                  label: '二手'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png',
                  label: '物流'
                },
                {
                  url: '###',
                  image:
                    'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png',
                  label: '全部'
                }
              ]
            ]
          });
        });
        app.get('/api/classify', (req, res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg',
                    label: '空调'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574040779889_app_wap_list.jpg',
                    label: '取暖器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493018450115_pc_list.jpg',
                    label: '洗衣机'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1572917425316_imgApp_tmndir.jpg',
                    label: '手机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1491712405935_pc_list.jpg',
                    label: '电视'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1540517634070_imgApp_tmndir.jpg',
                    label: '生活家电'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493946827440_app_list.jpg',
                    label: '笔记本'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1568541017652_imgApp_tmndir.png',
                    label: '手表'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576229197878_imgApp_tmndir.png',
                    label: '奶粉'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1566980852073_imgApp_tmndir.png',
                    label: '白酒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1577168091388_pc_app_wap_list.png',
                    label: '跑步鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574945653418_imgApp_tmndir.jpg',
                    label: '水果'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1576227312342_imgApp_tmndir.png',
                    label: '拉杆箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1576227402281_imgApp_tmndir.jpg',
                    label: '马丁靴'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1576227466788_imgApp_tmndir.jpg',
                    label: '黄金项链'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg',
                    label: '空调'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574040779889_app_wap_list.jpg',
                    label: '取暖器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493018450115_pc_list.jpg',
                    label: '洗衣机'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1572917425316_imgApp_tmndir.jpg',
                    label: '手机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1491712405935_pc_list.jpg',
                    label: '电视'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1540517634070_imgApp_tmndir.jpg',
                    label: '生活家电'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493946827440_app_list.jpg',
                    label: '笔记本'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1568541017652_imgApp_tmndir.png',
                    label: '手表'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576229197878_imgApp_tmndir.png',
                    label: '奶粉'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1566980852073_imgApp_tmndir.png',
                    label: '白酒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1577168091388_pc_app_wap_list.png',
                    label: '跑步鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574945653418_imgApp_tmndir.jpg',
                    label: '水果'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1576227312342_imgApp_tmndir.png',
                    label: '拉杆箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1576227402281_imgApp_tmndir.jpg',
                    label: '马丁靴'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1576227466788_imgApp_tmndir.jpg',
                    label: '黄金项链'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg',
                    label: '空调'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574040779889_app_wap_list.jpg',
                    label: '取暖器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493018450115_pc_list.jpg',
                    label: '洗衣机'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1572917425316_imgApp_tmndir.jpg',
                    label: '手机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1491712405935_pc_list.jpg',
                    label: '电视'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1540517634070_imgApp_tmndir.jpg',
                    label: '生活家电'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493946827440_app_list.jpg',
                    label: '笔记本'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1568541017652_imgApp_tmndir.png',
                    label: '手表'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576229197878_imgApp_tmndir.png',
                    label: '奶粉'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1566980852073_imgApp_tmndir.png',
                    label: '白酒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1577168091388_pc_app_wap_list.png',
                    label: '跑步鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574945653418_imgApp_tmndir.jpg',
                    label: '水果'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1576227312342_imgApp_tmndir.png',
                    label: '拉杆箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1576227402281_imgApp_tmndir.jpg',
                    label: '马丁靴'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1576227466788_imgApp_tmndir.jpg',
                    label: '黄金项链'
                  }
                ]
              });
              break;
            case '1':
              res.json({
                data: [
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1550828788252_imgWap_tmndir.jpg',
                    label: '全部手机'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1563806106525_imgApp_tmndir.jpg',
                    label: '5G手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034219707644259.jpg',
                    label: '全面屏手机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1555401480933_imgWap_tmndir.jpg',
                    label: '游戏手机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1506588263468_imgWap_tmndir.jpg',
                    label: '老人机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034239177337452.jpg',
                    label: '拍照手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034253823355843.jpg',
                    label: '指纹手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034266353548220.jpg',
                    label: '面部识别手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034274958663129.jpg',
                    label: '女性手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1562146091928_imgWap_tmndir.jpg',
                    label: '长续航手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1562146091928_imgWap_tmndir.jpg',
                    label: '以旧换新'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1509101475328_imgApp_tmndir.png',
                    label: '手机维修'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1551147495769_imgWap_tmndir.jpg',
                    label: '二首优品'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156405620381241064.jpg',
                    label: '分期手机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1551706330220_imgApp_tmndir.png',
                    label: '精选好店'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1550828788252_imgWap_tmndir.jpg',
                    label: '全部手机'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1563806106525_imgApp_tmndir.jpg',
                    label: '5G手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034219707644259.jpg',
                    label: '全面屏手机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1555401480933_imgWap_tmndir.jpg',
                    label: '游戏手机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1506588263468_imgWap_tmndir.jpg',
                    label: '老人机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034239177337452.jpg',
                    label: '拍照手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034253823355843.jpg',
                    label: '指纹手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034266353548220.jpg',
                    label: '面部识别手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034274958663129.jpg',
                    label: '女性手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1562146091928_imgWap_tmndir.jpg',
                    label: '长续航手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1562146091928_imgWap_tmndir.jpg',
                    label: '以旧换新'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1509101475328_imgApp_tmndir.png',
                    label: '手机维修'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1551147495769_imgWap_tmndir.jpg',
                    label: '二首优品'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156405620381241064.jpg',
                    label: '分期手机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1551706330220_imgApp_tmndir.png',
                    label: '精选好店'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1550828788252_imgWap_tmndir.jpg',
                    label: '全部手机'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1563806106525_imgApp_tmndir.jpg',
                    label: '5G手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034219707644259.jpg',
                    label: '全面屏手机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1555401480933_imgWap_tmndir.jpg',
                    label: '游戏手机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1506588263468_imgWap_tmndir.jpg',
                    label: '老人机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034239177337452.jpg',
                    label: '拍照手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034253823355843.jpg',
                    label: '指纹手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034266353548220.jpg',
                    label: '面部识别手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156034274958663129.jpg',
                    label: '女性手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1562146091928_imgWap_tmndir.jpg',
                    label: '长续航手机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1562146091928_imgWap_tmndir.jpg',
                    label: '以旧换新'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1509101475328_imgApp_tmndir.png',
                    label: '手机维修'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1551147495769_imgWap_tmndir.jpg',
                    label: '二首优品'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/156405620381241064.jpg',
                    label: '分期手机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1551706330220_imgApp_tmndir.png',
                    label: '精选好店'
                  }
                ]
              });
              break;
            case '2':
              res.json({
                data: [
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1491712405935_pc_list.jpg',
                    label: '电视'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1566446837661_imgWap_tmndir.jpg',
                    label: '智慧屏'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691410650719725.jpg',
                    label: '65寸电视'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691411654361564.jpg',
                    label: '55寸电视'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691412371665812.jpg',
                    label: '32寸电视'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1495781596391_app_wap_list.png',
                    label: '4k超高清'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1563967441883_imgWap_tmndir.jpg',
                    label: '8k超高清'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/cms/img/146962161304410264.jpg',
                    label: '冰箱'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493018401008_pc_list.jpg',
                    label: '对开门冰箱'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493018418117_pc_list.jpg',
                    label: '多门冰箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493880240873_app_wap_list.jpg',
                    label: '三门冰箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493880401566_app_wap_list.jpg',
                    label: '双门冰箱'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493880471393_app_wap_list.jpg',
                    label: '双门冰箱'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1491712405935_pc_list.jpg',
                    label: '电视'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1566446837661_imgWap_tmndir.jpg',
                    label: '智慧屏'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691410650719725.jpg',
                    label: '65寸电视'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691411654361564.jpg',
                    label: '55寸电视'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691412371665812.jpg',
                    label: '32寸电视'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1495781596391_app_wap_list.png',
                    label: '4k超高清'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1563967441883_imgWap_tmndir.jpg',
                    label: '8k超高清'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/cms/img/146962161304410264.jpg',
                    label: '冰箱'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493018401008_pc_list.jpg',
                    label: '对开门冰箱'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493018418117_pc_list.jpg',
                    label: '多门冰箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493880240873_app_wap_list.jpg',
                    label: '三门冰箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493880401566_app_wap_list.jpg',
                    label: '双门冰箱'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493880471393_app_wap_list.jpg',
                    label: '双门冰箱'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1491712405935_pc_list.jpg',
                    label: '电视'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1566446837661_imgWap_tmndir.jpg',
                    label: '智慧屏'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691410650719725.jpg',
                    label: '65寸电视'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691411654361564.jpg',
                    label: '55寸电视'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/153691412371665812.jpg',
                    label: '32寸电视'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1495781596391_app_wap_list.png',
                    label: '4k超高清'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1563967441883_imgWap_tmndir.jpg',
                    label: '8k超高清'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/cms/img/146962161304410264.jpg',
                    label: '冰箱'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493018401008_pc_list.jpg',
                    label: '对开门冰箱'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493018418117_pc_list.jpg',
                    label: '多门冰箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493880240873_app_wap_list.jpg',
                    label: '三门冰箱'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493880401566_app_wap_list.jpg',
                    label: '双门冰箱'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493880471393_app_wap_list.jpg',
                    label: '双门冰箱'
                  }
                ]
              });
              break;
            case '3':
              res.json({
                data: [
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576748949308_app_wap_list.jpg',
                    label: '笔记本'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576749134530_app_wap_list.jpg',
                    label: '游戏本'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1576749142159_app_wap_list.jpg',
                    label: '轻薄本'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1577177966304_app_wap_list.jpg',
                    label: '台式机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1493947041765_app_list.jpg',
                    label: '一体机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1545806560270_app_wap_list.png',
                    label: '商用台式机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1526959930017_imgWap_tmndir.png',
                    label: '组装机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1576747431986_app_wap_list.jpg',
                    label: '联想'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1565060569521_imgWap_tmndir.png',
                    label: '精选好点'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1561692610907_app_wap_list.jpg',
                    label: 'iPad'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1561693186814_app_wap_list.jpg',
                    label: '华为平板'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1561693580331_app_wap_list.jpg',
                    label: '微软'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576748949308_app_wap_list.jpg',
                    label: '笔记本'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576749134530_app_wap_list.jpg',
                    label: '游戏本'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1576749142159_app_wap_list.jpg',
                    label: '轻薄本'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1577177966304_app_wap_list.jpg',
                    label: '台式机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1493947041765_app_list.jpg',
                    label: '一体机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1545806560270_app_wap_list.png',
                    label: '商用台式机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1526959930017_imgWap_tmndir.png',
                    label: '组装机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1576747431986_app_wap_list.jpg',
                    label: '联想'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1565060569521_imgWap_tmndir.png',
                    label: '精选好点'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1561692610907_app_wap_list.jpg',
                    label: 'iPad'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1561693186814_app_wap_list.jpg',
                    label: '华为平板'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1561693580331_app_wap_list.jpg',
                    label: '微软'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576748949308_app_wap_list.jpg',
                    label: '笔记本'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1576749134530_app_wap_list.jpg',
                    label: '游戏本'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1576749142159_app_wap_list.jpg',
                    label: '轻薄本'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1577177966304_app_wap_list.jpg',
                    label: '台式机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1493947041765_app_list.jpg',
                    label: '一体机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1545806560270_app_wap_list.png',
                    label: '商用台式机'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1526959930017_imgWap_tmndir.png',
                    label: '组装机'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1576747431986_app_wap_list.jpg',
                    label: '联想'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1565060569521_imgWap_tmndir.png',
                    label: '精选好点'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1561692610907_app_wap_list.jpg',
                    label: 'iPad'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1561693186814_app_wap_list.jpg',
                    label: '华为平板'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1561693580331_app_wap_list.jpg',
                    label: '微软'
                  }
                ]
              });
              break;
            case '4':
              res.json({
                data: [
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493019127990_pc_list.jpg',
                    label: '油烟机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493019104421_pc_list.jpg',
                    label: '烟灶套餐'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493019147058_pc_list.jpg',
                    label: '燃气灶'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1502197591805_imgApp_tmndir.jpg',
                    label: '商用电器'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493881777935_app_wap_search.jpg',
                    label: '集成灶'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1564732516563_imgWap_tmndir.jpg',
                    label: '垃圾处理器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1536910069646_imgApp_tmndir.jpg',
                    label: '洗碗机'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1541417677975_imgApp_tmndir.jpg',
                    label: '消毒柜'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1562748158431_imgApp_tmndir.jpg',
                    label: '方太'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1550045857529_app_list.png',
                    label: '热水器'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493019073739_pc_list.jpg',
                    label: '电热水器'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1493019094582_pc_list.jpg',
                    label: '燃气热水器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493019127990_pc_list.jpg',
                    label: '油烟机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493019104421_pc_list.jpg',
                    label: '烟灶套餐'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493019147058_pc_list.jpg',
                    label: '燃气灶'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1502197591805_imgApp_tmndir.jpg',
                    label: '商用电器'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493881777935_app_wap_search.jpg',
                    label: '集成灶'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1564732516563_imgWap_tmndir.jpg',
                    label: '垃圾处理器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1536910069646_imgApp_tmndir.jpg',
                    label: '洗碗机'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1541417677975_imgApp_tmndir.jpg',
                    label: '消毒柜'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1562748158431_imgApp_tmndir.jpg',
                    label: '方太'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1550045857529_app_list.png',
                    label: '热水器'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493019073739_pc_list.jpg',
                    label: '电热水器'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1493019094582_pc_list.jpg',
                    label: '燃气热水器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493019127990_pc_list.jpg',
                    label: '油烟机'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493019104421_pc_list.jpg',
                    label: '烟灶套餐'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493019147058_pc_list.jpg',
                    label: '燃气灶'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1502197591805_imgApp_tmndir.jpg',
                    label: '商用电器'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493881777935_app_wap_search.jpg',
                    label: '集成灶'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1564732516563_imgWap_tmndir.jpg',
                    label: '垃圾处理器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1536910069646_imgApp_tmndir.jpg',
                    label: '洗碗机'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1541417677975_imgApp_tmndir.jpg',
                    label: '消毒柜'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1562748158431_imgApp_tmndir.jpg',
                    label: '方太'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1550045857529_app_list.png',
                    label: '热水器'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1493019073739_pc_list.jpg',
                    label: '电热水器'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1493019094582_pc_list.jpg',
                    label: '燃气热水器'
                  }
                ]
              });
              break;
            case '5':
              res.json({
                data: [
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574762125296_app_wap_list.jpg',
                    label: '取暖器'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1574762253761_app_wap_list.jpg',
                    label: '加湿器'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1574762391561_app_wap_list.jpg',
                    label: '网红小家电'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1574762347828_app_wap_list.jpg',
                    label: '扫地机器人'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1574762413449_app_wap_list.jpg',
                    label: '养生壶'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1505960704078_imgApp_tmndir.jpg',
                    label: '电饼档'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1520250438391_imgApp_tmndir.jpg',
                    label: '电吹风'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1574762091030_app_wap_list.jpg',
                    label: '剃须刀'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1572264297523_pc_app_wap_search.jpg',
                    label: '电子茶炉'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574912073870_imgApp_tmndir.jpg',
                    label: '电饭煲'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1574762202227_app_wap_list.jpg',
                    label: '电压力锅'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1540517578429_imgApp_tmndir.jpg',
                    label: '榨汁/原汁机'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574762125296_app_wap_list.jpg',
                    label: '取暖器'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1574762253761_app_wap_list.jpg',
                    label: '加湿器'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1574762391561_app_wap_list.jpg',
                    label: '网红小家电'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1574762347828_app_wap_list.jpg',
                    label: '扫地机器人'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1574762413449_app_wap_list.jpg',
                    label: '养生壶'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1505960704078_imgApp_tmndir.jpg',
                    label: '电饼档'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1520250438391_imgApp_tmndir.jpg',
                    label: '电吹风'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1574762091030_app_wap_list.jpg',
                    label: '剃须刀'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1572264297523_pc_app_wap_search.jpg',
                    label: '电子茶炉'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574912073870_imgApp_tmndir.jpg',
                    label: '电饭煲'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1574762202227_app_wap_list.jpg',
                    label: '电压力锅'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1540517578429_imgApp_tmndir.jpg',
                    label: '榨汁/原汁机'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574762125296_app_wap_list.jpg',
                    label: '取暖器'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1574762253761_app_wap_list.jpg',
                    label: '加湿器'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1574762391561_app_wap_list.jpg',
                    label: '网红小家电'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1574762347828_app_wap_list.jpg',
                    label: '扫地机器人'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1574762413449_app_wap_list.jpg',
                    label: '养生壶'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1505960704078_imgApp_tmndir.jpg',
                    label: '电饼档'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1520250438391_imgApp_tmndir.jpg',
                    label: '电吹风'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1574762091030_app_wap_list.jpg',
                    label: '剃须刀'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1572264297523_pc_app_wap_search.jpg',
                    label: '电子茶炉'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1574912073870_imgApp_tmndir.jpg',
                    label: '电饭煲'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1574762202227_app_wap_list.jpg',
                    label: '电压力锅'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1540517578429_imgApp_tmndir.jpg',
                    label: '榨汁/原汁机'
                  }
                ]
              });
              break;
            case '6':
              res.json({
                data: [
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1535597538000_imgWap_tmndir.jpg',
                    label: '白酒'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535597924284_imgWap_tmndir.jpg',
                    label: '葡萄酒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1528859588265_imgApp_tmndir.jpg',
                    label: '饮用水'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1541121612170_imgWap_tmndir.jpg',
                    label: '蜂蜜'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535596158966_imgApp_tmndir.jpg',
                    label: '啤酒'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1544755939704_imgWap_tmndir.png',
                    label: '酸奶'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1541121667786_imgWap_tmndir.jpg',
                    label: '麦片/谷物'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1544755989405_imgWap_tmndir.png',
                    label: '纯奶'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535597857372_imgWap_tmndir.jpg',
                    label: '坚果'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1528859929418_imgApp_tmndir.jpg',
                    label: '茶饮料'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1541121708927_imgWap_tmndir.jpg',
                    label: '咖啡'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1545723083037_imgWap_tmndir.jpg',
                    label: '方便粥'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1535597538000_imgWap_tmndir.jpg',
                    label: '白酒'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535597924284_imgWap_tmndir.jpg',
                    label: '葡萄酒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1528859588265_imgApp_tmndir.jpg',
                    label: '饮用水'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1541121612170_imgWap_tmndir.jpg',
                    label: '蜂蜜'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535596158966_imgApp_tmndir.jpg',
                    label: '啤酒'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1544755939704_imgWap_tmndir.png',
                    label: '酸奶'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1541121667786_imgWap_tmndir.jpg',
                    label: '麦片/谷物'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1544755989405_imgWap_tmndir.png',
                    label: '纯奶'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535597857372_imgWap_tmndir.jpg',
                    label: '坚果'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1528859929418_imgApp_tmndir.jpg',
                    label: '茶饮料'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1541121708927_imgWap_tmndir.jpg',
                    label: '咖啡'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1545723083037_imgWap_tmndir.jpg',
                    label: '方便粥'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1535597538000_imgWap_tmndir.jpg',
                    label: '白酒'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535597924284_imgWap_tmndir.jpg',
                    label: '葡萄酒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1528859588265_imgApp_tmndir.jpg',
                    label: '饮用水'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1541121612170_imgWap_tmndir.jpg',
                    label: '蜂蜜'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535596158966_imgApp_tmndir.jpg',
                    label: '啤酒'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1544755939704_imgWap_tmndir.png',
                    label: '酸奶'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1541121667786_imgWap_tmndir.jpg',
                    label: '麦片/谷物'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1544755989405_imgWap_tmndir.png',
                    label: '纯奶'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535597857372_imgWap_tmndir.jpg',
                    label: '坚果'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1528859929418_imgApp_tmndir.jpg',
                    label: '茶饮料'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1541121708927_imgWap_tmndir.jpg',
                    label: '咖啡'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1545723083037_imgWap_tmndir.jpg',
                    label: '方便粥'
                  }
                ]
              });
              break;
            case '7':
              res.json({
                data: [
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/CgvX_h3W8YvmM9COaa9T1w.jpg',
                    label: '羽绒服'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/8YJZGv4eJG1xOEBByiJ9Ug.jpg',
                    label: '衬衫'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/4ds5WP_vSeYptPlUNo_a4Q.jpg',
                    label: '毛呢大衣'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/6W3XGOYH2qv4RgS5cEn2qw.jpg',
                    label: '男士外套'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/jSLksf_fKPuGHmD-vxlP7A.jpg',
                    label: '卫衣'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535686583174_imgApp_tmndir.jpg',
                    label: '牛仔裤'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1529033674951_imgWap_tmndir.jpg',
                    label: '免烫衬衫'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1535456554241_imgWap_tmndir.jpg',
                    label: '长袖衬衫'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535455316775_imgWap_tmndir.jpg',
                    label: '牛仔衬衫'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1535455267644_imgWap_tmndir.jpg',
                    label: '格子衬衫'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1535686797224_imgWap_tmndir.jpg',
                    label: '修身长裤'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1535686841120_imgWap_tmndir.jpg',
                    label: '直通长裤'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/CgvX_h3W8YvmM9COaa9T1w.jpg',
                    label: '羽绒服'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/8YJZGv4eJG1xOEBByiJ9Ug.jpg',
                    label: '衬衫'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/4ds5WP_vSeYptPlUNo_a4Q.jpg',
                    label: '毛呢大衣'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/6W3XGOYH2qv4RgS5cEn2qw.jpg',
                    label: '男士外套'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/jSLksf_fKPuGHmD-vxlP7A.jpg',
                    label: '卫衣'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535686583174_imgApp_tmndir.jpg',
                    label: '牛仔裤'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1529033674951_imgWap_tmndir.jpg',
                    label: '免烫衬衫'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1535456554241_imgWap_tmndir.jpg',
                    label: '长袖衬衫'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535455316775_imgWap_tmndir.jpg',
                    label: '牛仔衬衫'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1535455267644_imgWap_tmndir.jpg',
                    label: '格子衬衫'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1535686797224_imgWap_tmndir.jpg',
                    label: '修身长裤'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1535686841120_imgWap_tmndir.jpg',
                    label: '直通长裤'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/CgvX_h3W8YvmM9COaa9T1w.jpg',
                    label: '羽绒服'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/8YJZGv4eJG1xOEBByiJ9Ug.jpg',
                    label: '衬衫'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/4ds5WP_vSeYptPlUNo_a4Q.jpg',
                    label: '毛呢大衣'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/6W3XGOYH2qv4RgS5cEn2qw.jpg',
                    label: '男士外套'
                  },
                  {
                    image:
                      'https://uimgproxy.suning.cn/uimg1/sop/commodity/jSLksf_fKPuGHmD-vxlP7A.jpg',
                    label: '卫衣'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535686583174_imgApp_tmndir.jpg',
                    label: '牛仔裤'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1529033674951_imgWap_tmndir.jpg',
                    label: '免烫衬衫'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1535456554241_imgWap_tmndir.jpg',
                    label: '长袖衬衫'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1535455316775_imgWap_tmndir.jpg',
                    label: '牛仔衬衫'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1535455267644_imgWap_tmndir.jpg',
                    label: '格子衬衫'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1535686797224_imgWap_tmndir.jpg',
                    label: '修身长裤'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1535686841120_imgWap_tmndir.jpg',
                    label: '直通长裤'
                  }
                ]
              });
              break;
            case '8':
              res.json({
                data: [
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1578052938660_imgWap_tmndir.png',
                    label: '防晒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578053135329_imgWap_tmndir.png',
                    label: '面部护理'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578275326744_imgWap_tmndir.png',
                    label: '面膜'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1577360218155_imgWap_tmndir.png',
                    label: '口红'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578275409655_imgWap_tmndir.png',
                    label: '彩妆'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578275468739_imgWap_tmndir.png',
                    label: '护肤套装'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578276891015_imgWap_tmndir.png',
                    label: '香水/香氛'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578276930738_imgWap_tmndir.png',
                    label: '精华'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578277313251_imgWap_tmndir.png',
                    label: '卸妆'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1578295480931_imgWap_tmndir.png',
                    label: '身体沐浴'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578295632381_imgWap_tmndir.png',
                    label: '美发护发'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1578295668364_imgWap_tmndir.png',
                    label: '手部护理'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1578052938660_imgWap_tmndir.png',
                    label: '防晒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578053135329_imgWap_tmndir.png',
                    label: '面部护理'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578275326744_imgWap_tmndir.png',
                    label: '面膜'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1577360218155_imgWap_tmndir.png',
                    label: '口红'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578275409655_imgWap_tmndir.png',
                    label: '彩妆'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578275468739_imgWap_tmndir.png',
                    label: '护肤套装'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578276891015_imgWap_tmndir.png',
                    label: '香水/香氛'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578276930738_imgWap_tmndir.png',
                    label: '精华'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578277313251_imgWap_tmndir.png',
                    label: '卸妆'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1578295480931_imgWap_tmndir.png',
                    label: '身体沐浴'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578295632381_imgWap_tmndir.png',
                    label: '美发护发'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1578295668364_imgWap_tmndir.png',
                    label: '手部护理'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1578052938660_imgWap_tmndir.png',
                    label: '防晒'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578053135329_imgWap_tmndir.png',
                    label: '面部护理'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578275326744_imgWap_tmndir.png',
                    label: '面膜'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1577360218155_imgWap_tmndir.png',
                    label: '口红'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578275409655_imgWap_tmndir.png',
                    label: '彩妆'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578275468739_imgWap_tmndir.png',
                    label: '护肤套装'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578276891015_imgWap_tmndir.png',
                    label: '香水/香氛'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1578276930738_imgWap_tmndir.png',
                    label: '精华'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578277313251_imgWap_tmndir.png',
                    label: '卸妆'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1578295480931_imgWap_tmndir.png',
                    label: '身体沐浴'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1578295632381_imgWap_tmndir.png',
                    label: '美发护发'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1578295668364_imgWap_tmndir.png',
                    label: '手部护理'
                  }
                ]
              });
              break;
            case '9':
              res.json({
                data: [
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670357542765137.jpg',
                    label: 'K金吊坠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670357952772776.jpg',
                    label: 'K金项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670358277923751.jpg',
                    label: 'K金手链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670358568493715.jpg',
                    label: 'K金耳饰'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670353533427433.jpg',
                    label: '黄金吊坠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670353961946923.png',
                    label: '黄金手镯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670354271128976.png',
                    label: '黄金项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670354578680226.png',
                    label: '黄金戒指'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670355000514052.png',
                    label: '黄金转运珠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670355369032115.jpg',
                    label: '黄金耳饰'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1565005976824_app_wap_list.jpg',
                    label: '项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670347896337371.png',
                    label: '手链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670357542765137.jpg',
                    label: 'K金吊坠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670357952772776.jpg',
                    label: 'K金项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670358277923751.jpg',
                    label: 'K金手链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670358568493715.jpg',
                    label: 'K金耳饰'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670353533427433.jpg',
                    label: '黄金吊坠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670353961946923.png',
                    label: '黄金手镯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670354271128976.png',
                    label: '黄金项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670354578680226.png',
                    label: '黄金戒指'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670355000514052.png',
                    label: '黄金转运珠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670355369032115.jpg',
                    label: '黄金耳饰'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1565005976824_app_wap_list.jpg',
                    label: '项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670347896337371.png',
                    label: '手链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670357542765137.jpg',
                    label: 'K金吊坠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670357952772776.jpg',
                    label: 'K金项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670358277923751.jpg',
                    label: 'K金手链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670358568493715.jpg',
                    label: 'K金耳饰'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670353533427433.jpg',
                    label: '黄金吊坠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670353961946923.png',
                    label: '黄金手镯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670354271128976.png',
                    label: '黄金项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670354578680226.png',
                    label: '黄金戒指'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670355000514052.png',
                    label: '黄金转运珠'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670355369032115.jpg',
                    label: '黄金耳饰'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1565005976824_app_wap_list.jpg',
                    label: '项链'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/151670347896337371.png',
                    label: '手链'
                  }
                ]
              });
              break;
            case '10':
              res.json({
                data: [
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431862177972175.jpg',
                    label: '跑步鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1577182709992_pc_app_wap_list.png',
                    label: '运动鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431523992164345.jpg',
                    label: '板鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431530637484622.jpg',
                    label: '足球鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532077833095_imgWap_tmndir.jpg',
                    label: '篮球鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532077905417_imgWap_tmndir.jpg',
                    label: '帆布鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431528781033391.jpg',
                    label: '训练鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431528053586275.jpg',
                    label: '网球鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431529473961477.jpg',
                    label: '休闲鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532069060535_imgWap_tmndir.jpg',
                    label: '运动棉服'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1529047942312_imgWap_tmndir.jpg',
                    label: '运动卫衣'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1545787458889_pc_app_wap_list.png',
                    label: '运动羽绒服'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431862177972175.jpg',
                    label: '跑步鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1577182709992_pc_app_wap_list.png',
                    label: '运动鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431523992164345.jpg',
                    label: '板鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431530637484622.jpg',
                    label: '足球鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532077833095_imgWap_tmndir.jpg',
                    label: '篮球鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532077905417_imgWap_tmndir.jpg',
                    label: '帆布鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431528781033391.jpg',
                    label: '训练鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431528053586275.jpg',
                    label: '网球鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431529473961477.jpg',
                    label: '休闲鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532069060535_imgWap_tmndir.jpg',
                    label: '运动棉服'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1529047942312_imgWap_tmndir.jpg',
                    label: '运动卫衣'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1545787458889_pc_app_wap_list.png',
                    label: '运动羽绒服'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431862177972175.jpg',
                    label: '跑步鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1577182709992_pc_app_wap_list.png',
                    label: '运动鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431523992164345.jpg',
                    label: '板鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431530637484622.jpg',
                    label: '足球鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532077833095_imgWap_tmndir.jpg',
                    label: '篮球鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532077905417_imgWap_tmndir.jpg',
                    label: '帆布鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431528781033391.jpg',
                    label: '训练鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431528053586275.jpg',
                    label: '网球鞋'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149431529473961477.jpg',
                    label: '休闲鞋'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1532069060535_imgWap_tmndir.jpg',
                    label: '运动棉服'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1529047942312_imgWap_tmndir.jpg',
                    label: '运动卫衣'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1545787458889_pc_app_wap_list.png',
                    label: '运动羽绒服'
                  }
                ]
              });
              break;
            case '11':
              res.json({
                data: [
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017112574_pc_list.jpg',
                    label: '卷纸'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017133940_pc_list.jpg',
                    label: '抽纸'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493017151020_pc_list.jpg',
                    label: '手帕纸'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1494401362521_pc_list.jpg',
                    label: '厨房用纸'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1494401402534_pc_list.jpg',
                    label: '平板纸'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1494401422043_pc_list.jpg',
                    label: '湿纸巾'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/150174113855754425.jpg',
                    label: '洗衣液'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493017189101_pc_list.jpg',
                    label: '洗衣粉'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017205772_pc_list.jpg',
                    label: '洗洁精'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1494401448931_pc_list.jpg',
                    label: '消毒液'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1494401472170_pc_list.jpg',
                    label: '洁厕剂'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1494401524133_pc_list.jpg',
                    label: '百洁布'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017112574_pc_list.jpg',
                    label: '卷纸'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017133940_pc_list.jpg',
                    label: '抽纸'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493017151020_pc_list.jpg',
                    label: '手帕纸'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1494401362521_pc_list.jpg',
                    label: '厨房用纸'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1494401402534_pc_list.jpg',
                    label: '平板纸'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1494401422043_pc_list.jpg',
                    label: '湿纸巾'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/150174113855754425.jpg',
                    label: '洗衣液'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493017189101_pc_list.jpg',
                    label: '洗衣粉'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017205772_pc_list.jpg',
                    label: '洗洁精'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1494401448931_pc_list.jpg',
                    label: '消毒液'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1494401472170_pc_list.jpg',
                    label: '洁厕剂'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1494401524133_pc_list.jpg',
                    label: '百洁布'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017112574_pc_list.jpg',
                    label: '卷纸'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017133940_pc_list.jpg',
                    label: '抽纸'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1493017151020_pc_list.jpg',
                    label: '手帕纸'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1494401362521_pc_list.jpg',
                    label: '厨房用纸'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1494401402534_pc_list.jpg',
                    label: '平板纸'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1494401422043_pc_list.jpg',
                    label: '湿纸巾'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/150174113855754425.jpg',
                    label: '洗衣液'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1493017189101_pc_list.jpg',
                    label: '洗衣粉'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1493017205772_pc_list.jpg',
                    label: '洗洁精'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1494401448931_pc_list.jpg',
                    label: '消毒液'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1494401472170_pc_list.jpg',
                    label: '洁厕剂'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1494401524133_pc_list.jpg',
                    label: '百洁布'
                  }
                ]
              });
              break;
            case '12':
              res.json({
                data: [
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549404011320675.jpg',
                    label: '四件套'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549406082246552.jpg',
                    label: '磨毛套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549404658507386.jpg',
                    label: '全棉套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549405072496227.jpg',
                    label: '提花套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549464961129550.jpg',
                    label: '长绒棉套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549406759326248.jpg',
                    label: '针织套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549407174755110.jpg',
                    label: '儿童套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549407537717676.jpg',
                    label: '婚庆套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549408990721791.jpg',
                    label: '冬被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549469403444983.jpg',
                    label: '羽绒被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549410793637175.jpg',
                    label: '棉花被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549411219770781.jpg',
                    label: '羊毛被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549404011320675.jpg',
                    label: '四件套'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549406082246552.jpg',
                    label: '磨毛套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549404658507386.jpg',
                    label: '全棉套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549405072496227.jpg',
                    label: '提花套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549464961129550.jpg',
                    label: '长绒棉套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549406759326248.jpg',
                    label: '针织套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549407174755110.jpg',
                    label: '儿童套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549407537717676.jpg',
                    label: '婚庆套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549408990721791.jpg',
                    label: '冬被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549469403444983.jpg',
                    label: '羽绒被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549410793637175.jpg',
                    label: '棉花被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549411219770781.jpg',
                    label: '羊毛被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549404011320675.jpg',
                    label: '四件套'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549406082246552.jpg',
                    label: '磨毛套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549404658507386.jpg',
                    label: '全棉套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549405072496227.jpg',
                    label: '提花套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549464961129550.jpg',
                    label: '长绒棉套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549406759326248.jpg',
                    label: '针织套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549407174755110.jpg',
                    label: '儿童套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549407537717676.jpg',
                    label: '婚庆套件'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549408990721791.jpg',
                    label: '冬被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549469403444983.jpg',
                    label: '羽绒被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549410793637175.jpg',
                    label: '棉花被'
                  },
                  {
                    image:
                      'https://image1.suning.cn//uimg/cms/img/155549411219770781.jpg',
                    label: '羊毛被'
                  }
                ]
              });
              break;
            case '13':
              res.json({
                data: [
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403698730706874.jpg',
                    label: '座便器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403701031588452.jpg',
                    label: '沐浴'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403703509765107.jpg',
                    label: '水槽'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403246143574466.jpg',
                    label: '现代吸顶灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403426145889242.jpg',
                    label: '吊扇灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149404016734738256.jpg',
                    label: '插座'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149405451164153629.jpg',
                    label: '床'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149405787873386985.jpg',
                    label: '沙发'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1560138295430_imgApp_tmndir.jpg',
                    label: '晾衣架'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403356425542723.jpg',
                    label: '水晶吸顶灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403315022745378.jpg',
                    label: '欧式吊灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403325936405116.jpg',
                    label: '美式吊灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403698730706874.jpg',
                    label: '座便器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403701031588452.jpg',
                    label: '沐浴'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403703509765107.jpg',
                    label: '水槽'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403246143574466.jpg',
                    label: '现代吸顶灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403426145889242.jpg',
                    label: '吊扇灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149404016734738256.jpg',
                    label: '插座'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149405451164153629.jpg',
                    label: '床'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149405787873386985.jpg',
                    label: '沙发'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1560138295430_imgApp_tmndir.jpg',
                    label: '晾衣架'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403356425542723.jpg',
                    label: '水晶吸顶灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403315022745378.jpg',
                    label: '欧式吊灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403325936405116.jpg',
                    label: '美式吊灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403698730706874.jpg',
                    label: '座便器'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403701031588452.jpg',
                    label: '沐浴'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403703509765107.jpg',
                    label: '水槽'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403246143574466.jpg',
                    label: '现代吸顶灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403426145889242.jpg',
                    label: '吊扇灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149404016734738256.jpg',
                    label: '插座'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149405451164153629.jpg',
                    label: '床'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149405787873386985.jpg',
                    label: '沙发'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1560138295430_imgApp_tmndir.jpg',
                    label: '晾衣架'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403356425542723.jpg',
                    label: '水晶吸顶灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403315022745378.jpg',
                    label: '欧式吊灯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/cms/img/149403325936405116.jpg',
                    label: '美式吊灯'
                  }
                ]
              });
              break;
            case '14':
              res.json({
                data: [
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425529044_imgApp_tmndir.jpg',
                    label: '炒锅'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425632533_imgApp_tmndir.jpg',
                    label: '套锅'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1555425673867_imgApp_tmndir.jpg',
                    label: '蒸锅'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425708849_imgApp_tmndir.jpg',
                    label: '煎锅'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1555425746813_imgApp_tmndir.jpg',
                    label: '汤锅'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425789528_imgApp_tmndir.jpg',
                    label: '高压锅'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425835097_imgApp_tmndir.jpg',
                    label: '奶锅'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555471123014_pc_app_wap_list.jpg',
                    label: '烧水壶'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425916836_imgApp_tmndir.jpg',
                    label: '火锅'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555426056421_imgApp_tmndir.jpg',
                    label: '玻璃杯'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555426090790_imgApp_tmndir.jpg',
                    label: '保温杯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1555426281966_imgApp_tmndir.jpg',
                    label: '旅行杯'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425529044_imgApp_tmndir.jpg',
                    label: '炒锅'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425632533_imgApp_tmndir.jpg',
                    label: '套锅'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1555425673867_imgApp_tmndir.jpg',
                    label: '蒸锅'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425708849_imgApp_tmndir.jpg',
                    label: '煎锅'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1555425746813_imgApp_tmndir.jpg',
                    label: '汤锅'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425789528_imgApp_tmndir.jpg',
                    label: '高压锅'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425835097_imgApp_tmndir.jpg',
                    label: '奶锅'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555471123014_pc_app_wap_list.jpg',
                    label: '烧水壶'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425916836_imgApp_tmndir.jpg',
                    label: '火锅'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555426056421_imgApp_tmndir.jpg',
                    label: '玻璃杯'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555426090790_imgApp_tmndir.jpg',
                    label: '保温杯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1555426281966_imgApp_tmndir.jpg',
                    label: '旅行杯'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425529044_imgApp_tmndir.jpg',
                    label: '炒锅'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425632533_imgApp_tmndir.jpg',
                    label: '套锅'
                  },
                  {
                    image:
                      'https://image.suning.cn/uimg/asbs/ad/1555425673867_imgApp_tmndir.jpg',
                    label: '蒸锅'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425708849_imgApp_tmndir.jpg',
                    label: '煎锅'
                  },
                  {
                    image:
                      'https://image3.suning.cn/uimg/asbs/ad/1555425746813_imgApp_tmndir.jpg',
                    label: '汤锅'
                  },
                  {
                    image:
                      'https://image5.suning.cn/uimg/asbs/ad/1555425789528_imgApp_tmndir.jpg',
                    label: '高压锅'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425835097_imgApp_tmndir.jpg',
                    label: '奶锅'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555471123014_pc_app_wap_list.jpg',
                    label: '烧水壶'
                  },
                  {
                    image:
                      'https://image4.suning.cn/uimg/asbs/ad/1555425916836_imgApp_tmndir.jpg',
                    label: '火锅'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555426056421_imgApp_tmndir.jpg',
                    label: '玻璃杯'
                  },
                  {
                    image:
                      'https://image1.suning.cn/uimg/asbs/ad/1555426090790_imgApp_tmndir.jpg',
                    label: '保温杯'
                  },
                  {
                    image:
                      'https://image2.suning.cn/uimg/asbs/ad/1555426281966_imgApp_tmndir.jpg',
                    label: '旅行杯'
                  }
                ]
              });
              break;
          }
        });
        app.get('/api/discount', (req, res) => {
          res.json({
            discount: [
              {
                desc: '潮流好物立即抢',
                title: '限时抢购',
                count: true,
                content: [
                  {
                    img:
                      'https://image1.suning.cn/uimg/nmps/MBLSPZT/10040411911147388928picH_1_370x370.jpg',
                    price: 3.9
                  },
                  {
                    img:
                      'https://image2.suning.cn/uimg/nmps/MBLSPZT/100403411189933547picH_1_370x370.jpg',
                    price: 9.9
                  }
                ]
              },
              {
                desc: '好货一元秒',
                title: '大聚会',
                count: false,
                content: [
                  {
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/BbWJ3iUO7sLrRkGSvgMzgA.jpg?from=mobile',
                    text: '沃克斯'
                  },
                  {
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/9lTNSg4VsRU8iExBabkKaA.jpg?from=mobile',
                    text: '伊利'
                  }
                ]
              },
              {
                desc: '抢超值好货',
                title: '百亿补贴',
                count: false,
                content: [
                  {
                    img:
                      'https://image1.suning.cn/uimg/cms/img/157736460862433954.jpg?format=_is_200w_200h.webp',
                    text: '3件3折'
                  },
                  {
                    img:
                      'https://image1.suning.cn/uimg/cms/img/157736459405147741.jpg?format=_is_200w_200h.webp',
                    text: '立减20'
                  }
                ]
              },
              {
                desc: '两人拼更实惠',
                title: '热门拼购',
                count: false,
                content: [
                  {
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/G-kxYhIGQi3di5jzocJORQ.jpg?from=mobile',
                    text: '2人拼2.9'
                  },
                  {
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/xZzWwyr4QWkHNZ0acqs7kQ.jpg?from=mobile',
                    text: '2人拼49.9'
                  }
                ]
              }
            ]
          });
        });
        app.get('/api/detail', (req, res) => {
          switch (req.query.productId) {
            case 'p-1':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/Y0WaOmmEX1FaDhXqnZVbQA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/Gt1UVPoGV7XSvcrlkGDA-w.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/_sLY0KSaVK3M8emo19vUow.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/fZRqMNBh9qBuVUUxSgZoRA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/_eDzRliLur54Nm5oMkXEnw.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '249',
                    price_last: '.00',
                    product_title: '1.5折价37.4唐狮正品女磨毛修身小脚休闲长裤',
                    product_sub: '全场300-30,日期:25-26'
                  },
                  discount: {
                    discount_des: '还差1件参加满减活动',
                    coupon: {
                      lingquan: '实名认证领10元优惠券',
                      manjian: '满2件打1.5折'
                    }
                  },
                  for_new: false,
                  cluster: '423/酱红色 1件',
                  evaluation: '评价（26）',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000070661539.jpg?1547373167781',
                    name: '唐狮旗舰店',
                    prograss: 'width:70%',
                    shop_info: ['8.90低', '9.14高', '8.93低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/KsFZ6pSoc1ZZSUeOw52mLg.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/NlT5Mc7VCxaTnE7sM3Y3MQ.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/3ZsVMqjwkjFje6FwzR6ivQ.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/Pt6RnFG5FwhLk3PFzNs6Bw.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/dO3sWQPNHw8vCy955JDT0w.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/T8q2WheA2FvgpGlcL6vh9Q.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/c0bOpnNLSVn59HcCelRn8A.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/DUf6dqehjOX6k-XIy_SKqQ.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/H_x5M0PFhRJGERwr0FeuMg.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/b-A2PGJbgCUGkXgRWzcKHQ.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/10rqrzHo34pQ3Cp8nhSXNw.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/mNY9UhMxakb197ZGWbc1WA.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/fKpOW6VYXDe_DE1pDCXvkA.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/yNwYZz1Rf-50Jk_otJeOqg.jpg'
                  ]
                }
              });

              break;
            case 'p-2':
              res.json({
                product_data: {
                  banner: [
                    'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2020/01/22/16/iwoghBannerPicture/8a20d48774114a8098574e4b969d725f.png_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/G2X8Z9L2sXmtBaT62CRbtQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/WBp8rUZVncFw_PHoLyIZSw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/3CkL8KE8bSOkuIYMFncq8A.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/3CkL8KE8bSOkuIYMFncq8A.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '1199',
                    price_last: '.00',
                    product_title:
                      '小米 (MI) Redmi Note8 Pro 6+ 64GB 冰翡翠 6400万四摄小金刚拍照NFC手机超长待机G90T液冷游戏芯6.53“超大全面屏小米红米学生机双卡双待智能',
                    product_sub: '【限时直降200，到手价1199】'
                  },
                  discount: {
                    discount_des: '参加以下活动，预计到手价1149.00元',
                    coupon: {
                      lingquan: '实名认证领10元支付券',
                      manjian: '满1180元减50元',
                      yunzuan: '普通会员立返59云钻',
                      xianliang: '1-100000送赠品（送完即止）'
                    }
                  },
                  for_new: true,
                  cluster: ' 6GB+64GB 冰翡翠 1件',
                  evaluation: '评价1.0万+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000030000649.jpg?1539136621113',
                    name: '小米官方旗舰店',
                    prograss: 'width:80%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/VNQTBKcQG5TU_JvGstBd4g.png?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/KMUg8jTDSEI7PdBUpO_rAQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/YMT0hi2I1uUGnn8XJD-PhQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/zZVGafIeAI6pxdagMLN-fA.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/tncw2VI1cH6bVZ3DLpSwig.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/i077en7lSsYJKH8ZkURILQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/5Dqdmy5KZOHoPQYxuCCy8w.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/X1tprRttJC6VNu3rJKYAPw.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/FjtK2jHyC60gz52SWza1Vg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/z5l_hyPdXdLGw5Slbkt1bw.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/iRoZsVAMPKGdg_degCSGsg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/lWZh_S_ScvTh-__cWOwvFQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/HeaoVZdsO8FhdfuyiZgzlA.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/pFWYLVSiQ14C04wCUTyTJg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/CTaD2lkIs037tx0kfrL-yg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/YxlnctKRhBRvyK6FoiuCKQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/ubalxpg_8w6HYq1ZpEYO0g.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/MIX-WnsLwtSTgJC67WBI3w.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/74tlU9ENftBUmn2FMWCl7g.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/E5sKDtwqMAOP-0GogmP4Xw.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/6C_dt0ZaogdwvOycbYACjg.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/764101824431601167108200_x.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-3':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/atmosphere/_PBkXJwYsZDeMsyNd8HFQQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/Rs6y2l5eUM2OZ1QQc6A3BA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/wl_uflUtfw-U7FFib-YFSw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/guo_9Z-mlMsUkC1c1jGCsg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/y_qtDKCCpbEyUNJze1M30g.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '1499',
                    price_last: '.00',
                    product_title:
                      '长虹(CHANGHONG)55D2S 55英寸19核4K超高清电视机HDR轻薄平板LED液晶（黑色）',
                    product_sub:
                      '【长虹狂欢购！钜惠到手价1449，库存有限，手慢无】'
                  },
                  discount: {
                    discount_des: '参加以下活动，预计到手价1449.00元',
                    coupon: {
                      lingquan: '实名认证领10元支付券',
                      manjian: '满1000元减50元,限个人会员参加',
                      yunzuan: '普通会员立返74云钻'
                    }
                  },
                  for_new: true,
                  cluster: ' 1件,可选售后服务',
                  evaluation: '评价1.0万+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000030000009.jpg?1538294651102',
                    name: ' 长虹电视自营旗舰店 ',
                    prograss: 'width:85%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://image.suning.cn/uimg/sop/commodity/869505035633502052484296_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/415346373108279329191662_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/228285161285398762072666_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/824375754618433779586319_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/161195910418119102909822_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/734110530184824478723798_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/176893817231331221015276_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/206053722610745616147193_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/367141444128924048262904_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/714006967646901556306073_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/160528694712139921142356_x.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/8FD7lNwuusQhKTba8RTOSg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/-j3878ZoAtLuie8LGzOjuA.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-4':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/bzEKtSGfCsgkuFQcaXGK-Q.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/LrgIXIF3Oi69ZkMO8iFQVw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/oDJ8gn0a7SZsQt958DLGnA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/iye1zVhdxxlfY3MyovvWyw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/_0xBqMVg3gyNzkXbG4KLEg.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '1499',
                    price_last: '.00',
                    product_title:
                      '飞天53%vol 500ml贵州茅台酒（带杯） 酱香型白酒',
                    product_sub:
                      '每笔订单购买两瓶配一个手提袋，单瓶不配手提袋（喜宴用户剩余资格于2月档期购买）'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券'
                    }
                  },
                  for_new: false,
                  cluster: ' 1件,可选售后服务',
                  evaluation: '评价18万+',
                  shop: null,
                  content_detail: [
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/0DFnUgr_6ioeYM1YoElH7Q.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/GUQT7qkyulHFgFAIvoqfyQ.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/PziEDhat4MpE6ZIOfQOFyg.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/GE5Vvt9xpSOkVmehcTi9Cg.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/KXOIUiVD531yoPlvSVEmhw.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/l9rvzTgd2JemfaBEBQh3Xg.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/Y1zWCoC2hdSjwBhXPbgCnA.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/2uq5utQ25JS-E6eG0uhSSw.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/5aXHJ-F68LIS4alIKjoTiA.jpg'
                  ]
                }
              });

              break;
            case 'p-5':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/eEfWjCbIlDlbyidSeMLPQQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/AwzPTJ6bX2lXSIhJ_6oi1Q.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/Zgc9Iz0zlfLpH0AgCoixxg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/3oBQ3YyGGb5DnWAGBtrK6Q.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/SgrVVZf9cxBbHvO37ivbRA.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '1099',
                    price_last: '.00',
                    product_title:
                      '【新品】Apple二代新款AirPods（配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A',
                    product_sub:
                      '全新H1芯片，秒连无障碍！可语音激活Siri，轻点完成设置！充电一刻钟，音乐3小时！'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返27云钻'
                    }
                  },
                  for_new: true,
                  cluster: '【新款】H1芯片 有线充电  1件',
                  evaluation: '评价7.9万+',
                  shop: {
                    logo:
                      'http://image.suning.cn/uimg/cshop/logo/000000000030000400.jpg?1564468224089',
                    name: ' Apple产品自营旗舰店 ',
                    prograss: 'width:90%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://image.suning.cn/uimg/sop/commodity/189732916121336316511524_x.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/XnpsR4dXhT6V81FjhwpyEQ.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/RAF-h7cdImIid_Cv0mB4iQ.jpg'
                  ]
                }
              });

              break;
            case 'p-6':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/9sgjcRBpusO-NbpcE-OqjQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/CpmEgDKFmC-cap9_C8N6XQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/CX9dnlOh2UiXTrQ3c-hQ6Q.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/VZwR-24CG9js2n6c9gjKJw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/dd7_j6XMzHhX3Xsij3q42A.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '135',
                    price_last: '.00',
                    product_title:
                      '【亲源配方】海外Aptamil 澳洲爱他美金装 婴幼儿配方奶粉 3段（12-24月）900g/罐 新西兰原装进口',
                    product_sub:
                      '零售价 150元 【收藏店铺有惊喜】益生元组合GOS/FOS，激发卓越自护力，科学优量DHA，助力宝宝眼脑发育，甄选纯净新西兰奶源，全面营养帮助宝宝发育，100%新西兰原罐原装，官方正品值得信赖，40年科研'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返27云钻'
                    }
                  },
                  for_new: false,
                  cluster: '【新款】  1件',
                  evaluation: '评价7.9万+',
                  shop: {
                    logo:
                      'http://image.suning.cn/uimg/cshop/logo/000000000030002039.png?1568106623227',
                    name: ' 爱他美Aptamil国际直营海外旗舰店 ',
                    prograss: 'width:85%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/kXSqnKcfM6u0xgVuAVwZhA.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/IdSMR542_bJ5UOFIh4892A.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/8dgoAHBeFThjdeFeaNTJuA.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/7zGUMn3Bf7Q7ctws7t-3CQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/CSZ0najZXfSP5dHmdTFwvQ.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-7':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/4s9czrUbqfcakv9eYEudCw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/qv9DPFCiWuz-LaMQ8JZ0JA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/Ayb-gBKr52RRyZ9G4XSYbg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/_jtjM4rPlHK9ReVzWYmp9Q.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/aOvPJ1-muyrly47QYDI9rw.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '149',
                    price_last: '.00',
                    product_title:
                      'MAC魅可 子弹头口红唇膏 Chili小辣椒砖红色 3g',
                    product_sub: '小辣椒，枫叶砖红色，漂亮不夸张，显白提气场。'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返27云钻'
                    }
                  },
                  for_new: false,
                  cluster: 'Chili小辣椒砖红色 1件',
                  evaluation: '评价7.9万+',
                  shop: null,
                  content_detail: [
                    'https://image.suning.cn/uimg/sop/commodity/134794249295620410675422_x.jpg',
                    'https://image.suning.cn/uimg/sop/commodity/858618774131908383960672_x.jpg',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/AzbN6ZdRLxed8-7WlBJm8Q.png',
                    'https://image.suning.cn/uimg/sop/commodity/965222211812657579476237_x.jpg',
                    'https://image.suning.cn/uimg/sop/commodity/151076166575056216232076_x.jpg'
                  ]
                }
              });

              break;
            case 'p-8':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/atmosphere/8-hdExa0WY2_l-j_-nzpuQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/46--v5pVB99O-i8LKXCCSA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/x7X1dAELG728OOloTooz8w.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/I4nqs1unpxIRFME6GpQa1Q.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/NR45CudQCaQlzLvNd5wQmQ.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '2199',
                    price_last: '.00',
                    product_title:
                      '小天鹅（Little Swan）TG100V80WDG5 10公斤全自动变频滚筒洗脱一体洗衣机 智能健康洗护 家用金色',
                    product_sub:
                      '【高温煮洗 有效杀菌！今日1999，扫码赠煎锅&下单抽好礼！】'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返27云钻'
                    }
                  },
                  for_new: true,
                  cluster: ' 【行业爆款】10公斤变频滚筒 1件',
                  evaluation: '评价7.9万+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000030000058.jpg?1539260496694',
                    name: '  小天鹅洗衣机苏宁自营旗舰店  ',
                    prograss: 'width:80%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/dh1arYInI3XGtANS4xOvUw.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/Z5n87Jv6R4_IPapc9sY0gQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/WJrDJDsomp5EGP7WK-5TSg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/MtUjjjHsIo-0dXUSPxV23A.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/CXs8vw4c7ni-ujbKYp4K1A.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-16':
              res.json({
                product_data: {
                  banner: [
                    'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2020/01/22/11/iwoghBannerPicture/380c8341109a4823b6d2da85025c88ee.png_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/InwYvAjc0pFmAhrMx29DMg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/gHwNr71P1VUJJ2fLnYNCww.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/sJKFSaTM-sdGCxsp4nOLTw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/eLhBnzh_BiaaZPt8YeeyMw.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '2718',
                    price_last: '.00',
                    product_title:
                      '2019款 Apple iPad mini5 7.9英寸 平板电脑（64GB WLAN版 MUQY2CH/A 金色）',
                    product_sub: '小巧机身 A12仿生芯片 支持Apple Pencil'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返67云钻'
                    }
                  },
                  for_new: true,
                  cluster: ' iPad mini 64G 金色 【官方标配】 1件',
                  evaluation: '评价14万+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000030000400.jpg?1564468224089',
                    name: ' Apple产品自营旗舰店 ',
                    prograss: 'width:90%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/RN2kqvTsz8dErXdfR4XGDQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/vzbjHaPQ1X41CBxYKs1zgg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/wqg1IpVzvdkh8heMXhIwzA.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/tlIA95oQCZ0r1Ns2FWTy9Q.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-17':
              res.json({
                product_data: {
                  banner: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/vQvp_Cvqc68XEhNJaOTiNQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/co7t8mFyhL7W91NAqqHJxg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/BPwl_e59Y3_Sg9_TR_auBQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/HKGddSAz_UsFsBE0W4PkAg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/s21asNMvkr_uJHI6G47PuQ.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '19',
                    price_last: '.50',
                    product_title:
                      '富光（FUGUANG）玻璃杯WFB1013-320 320ml格调男女士带茶隔 便携创意双层泡茶玻璃水杯 黑色',
                    product_sub: '双层防烫 高硼硅玻璃 多色可选'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券'
                    }
                  },
                  for_new: false,
                  cluster: ' 黑色 1件',
                  evaluation: '评价1.8万+',
                  shop: {
                    logo:
                      'http://image.suning.cn/uimg/cshop/logo/000000000030000716.jpg?1554721208450',
                    name: '富光苏宁自营旗舰店',
                    prograss: 'width:80%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'http://image.suning.cn/uimg/sop/commodity/125912672715423889457540_x.jpg',
                    'http://image.suning.cn/uimg/sop/commodity/212996811548348761489000_x.jpg'
                  ]
                }
              });
              break;
            case 'p-18':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/atmosphere/PTo-Li56zKse683whSdRvQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/UylP6LNElgg7yAfFe2eV8w.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/pv25F_J7xVFpDNyNEsJyLw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/nPBjC1MwE6fNy8muYJH8kw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/tjYFRBsyt95PZVaUtEdyPQ.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '2499',
                    price_last: '.00',
                    product_title:
                      'Sharp/夏普 XLED-50MY4200A 50英寸4K超清智能网络家用平板电视',
                    product_sub: '4K超清面板 高性能CPU 杜比音效 智能UI'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返124云钻'
                    }
                  },
                  for_new: true,
                  cluster: ' 50吋 4K爆款 1件',
                  evaluation: '评价2.9万+',
                  shop: {
                    logo:
                      'http://image.suning.cn/uimg/cshop/logo/000000000030001478.jpg?1565781522468',
                    name: ' 夏普电视自营旗舰店 ',
                    prograss: 'width:90%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://image.suning.cn/uimg/sop/commodity/106647608855385943760235_x.jpg',
                    'https://image.suning.cn/uimg/sop/commodity/714786108936036798013827_x.jpg',
                    'https://image.suning.cn/uimg/sop/commodity/766425891180934507156101_x.jpg',
                    'https://image.suning.cn/uimg/sop/commodity/272776159210657636624890_x.jpg',
                    'https://image.suning.cn/uimg/sop/commodity/279580269335536485824834_x.jpg',
                    'https://image.suning.cn/uimg/sop/commodity/134476927268398380833771_x.jpg'
                  ]
                }
              });

              break;
            case 'p-19':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/oIofj2y1eHrZMDqd6tdG1w.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/Jy199w92U4EkEEf_EkjOeQ.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/5kThvvs4ptXYn2g28u2huw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/AnV5fW0KTGdYFCOJlMAXeg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/lM5m-bozWo8aCopD_B0oGA.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '69',
                    price_last: '.00',
                    product_title:
                      '加绒加厚打底裤裤女外穿修身柯基臀打底裤棉质竖条加绒一体裤仿羊绒连裤袜400g 黑色踩脚 均码（80-140斤）',
                    product_sub: '加绒加厚一体裤400克'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返6云钻'
                    }
                  },
                  for_new: false,
                  cluster: '黑色踩脚均码（80-140斤） 1件',
                  evaluation: '评价70+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000070211615.jpg?1523687506958',
                    name: '  新锐内衣专营店  ',
                    prograss: 'width:80%',
                    shop_info: ['9.90低', '9.26高', '8.63低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/DGSJ8FuAG5E_Dec9SQUx1w.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/FSZhai6fpzdKic1AwmpbGQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/usjviLS-4iLUsLNSFID8Hg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/9Q1z6Z5rZnkI_s-Kjbxbdg.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/DpRLVYJHWI7n41XDwgZDBQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/TcqstVmHpsn9nAzLNMm1oA.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-20':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/TJDBgIfsCQ8OndYQ2uFVpw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/ZyKbymRkQV-Z34Y2IZzIJw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/UOjwwg6I7jt3YBbaZW2nhA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/Hf-MBCfIfTjFhATgQI4A8A.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/52RyWWNsPDigwHC_KInO2A.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '59',
                    price_last: '.00',
                    product_title:
                      '度度兔(Dudutu)女童打底裤秋冬款小中大童裤子儿童加绒加厚打底裤女孩弹力长裤',
                    product_sub: '加绒加厚一体裤400克'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返6云钻'
                    }
                  },
                  for_new: false,
                  cluster: '黑色踩脚均码 1件',
                  evaluation: '评价1520+',
                  shop: {
                    logo:
                      'http://image.suning.cn/uimg/cshop/logo/000000000070788013.jpg?1558280186622',
                    name: '  度度兔旗舰店  ',
                    prograss: 'width:80%',
                    shop_info: ['8.61低', '8.11高', '8.72低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/ndz51VpCmb0vEdx-v-mITg.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/z203khSvPIA1IZm2sv2yyA.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/FWUVI3XbKq8x9h0fniAmJw.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/ajqRPSsVA4cl2meVJhPeXw.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/YY-0hVqtduCUsomeBzEoVw.jpg',
                    'http://uimgproxy.suning.cn/uimg1/sop/commodity/249ugFzuHAPd0ZCdkWPF4g.jpg'
                  ]
                }
              });

              break;
            case 'p-21':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/atmosphere/pkyxDu1_Qm-4hc0V40q6xA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/aU0oDJll5GTQ8Mj11nvJKA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/pMbvYhOdnOsBMcVcYm9K4Q.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/3DzpSAUfJwEvo53PtHVTxA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/_jfnozkqjnUUcW37aA8ykg.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '1799',
                    price_last: '.00',
                    product_title:
                      '容声（Ronshen）BCD-251WKD1NY 251升 三门三开门冰箱 风冷无霜 电脑控温三开门小型电冰箱',
                    product_sub:
                      '【#品质容声 开年钜惠#爆款风冷2号限时惊喜价1799！手慢无】'
                  },
                  discount: {
                    discount_des: '可参加以下优惠活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',

                      yunzuan: '普通会员立返120云钻'
                    }
                  },
                  for_new: true,
                  cluster: ' 【爆款】251升 三门风冷无霜（沐光金） 1件',
                  evaluation: '评价3.9万+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000030000063.jpg?1552291007976',
                    name: '  容声苏宁自营旗舰店  ',
                    prograss: 'width:85%',
                    shop_info: ['8.61低', '8.11高', '8.72低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/yw3J0aZzWfIxdwhJioin_A.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/TZes8sQlaj4SpWx01PktrA.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/xjwPX7qNnrH_AiqBFfDj3Q.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/QDl1iCY81BEPtS9y-8GG9w.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/vG-t1SxpIJ4Ly-CII29E5A.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/eRvdjvfO4OeNjsn1u5JjLA.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/y_9Zw7HACK0sclUfQCchGw.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-22':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/BNW9RFDpqC5WWklpY1WmWw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/gmCPfXVw6JkhxIyPzRN2CA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/8gq8DQXuTgJsVLRbEKlcRg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/7dYYirFyTQ9lB3WRzwiTrg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/dBYfGqSPl250ONwX_4H4Yw.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '799',
                    price_last: '.00',
                    product_title:
                      'Semir森马中长羽绒服男潮青少年春秋时尚男士连帽外套黑色冬装保暖韩版',
                    product_sub:
                      '【#品质容声 开年钜惠#爆款风冷2号限时惊喜价1799！手慢无】'
                  },
                  discount: {
                    discount_des: '还差1件参加满减活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',
                      manjian: '满2件打3.0折',
                      yunzuan: '普通会员立返20云钻'
                    }
                  },
                  for_new: false,
                  cluster: ' 颜色 尺码 ',
                  evaluation: '评价3.9万+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000070088010.jpg?1428044064696',
                    name: '  森马官方旗舰店  ',
                    prograss: 'width:95%',
                    shop_info: ['8.61低', '8.11高', '8.72低']
                  },
                  content_detail: [
                    'https://image.suning.cn/uimg/sop/commodity/341519897568993002377023_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/173043049770615443581573_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/186842545451770733053528_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/213601120710290949226162_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/266548847166618036498683_x.png?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/185634236911403646681170_x.jpg?from=mobile',
                    'https://image.suning.cn/uimg/sop/commodity/181775620316299317183689_x.jpg?from=mobile'
                  ]
                }
              });

              break;
            case 'p-23':
              res.json({
                product_data: {
                  banner: [
                    'https://imgservice.suning.cn/uimg1/b2c/image/WeCOsjft0yioktycUqiz6g.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/rW97AGQvE4xgVLUPTEVUDw.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/JQSbRGhdDyRXqEyEJpXyvg.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/5HZQNtJNtZE5U292cbQTCA.jpg_800w_800h_4e_100Q',
                    'https://imgservice.suning.cn/uimg1/b2c/image/dzrICgcISjQA6YTxrEWmJg.jpg_800w_800h_4e_100Q'
                  ],
                  product_message: {
                    price_number: '999',
                    price_last: '.00',
                    product_title:
                      '【李现推荐】美的/Midea2100W速热 60L电热水器F6021-V3C(HE)家用 智能变频 一级能效漏电保护',
                    product_sub:
                      '【#新年钜惠#今日钜惠价仅需999！美的生活，为你而省！】'
                  },
                  discount: {
                    discount_des: '还差1件参加满减活动',
                    coupon: {
                      lingquan: '实名认证领10元支付券',
                      manjian: '满2件打3.0折',
                      yunzuan: '普通会员立返20云钻'
                    }
                  },
                  for_new: false,
                  cluster: '  一级能效 双变频速热 60L 1件',
                  evaluation: '评价14万+',
                  shop: {
                    logo:
                      'https://image.suning.cn/uimg/cshop/logo/000000000030000188.jpg?1562834092186',
                    name: '  美的热水器苏宁自营旗舰店   ',
                    prograss: 'width:85%',
                    shop_info: ['8.61低', '8.11高', '8.72低']
                  },
                  content_detail: [
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/elKjhs_vLkpE-5c7CVqpfw.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/1amER9IRlHz2TqnBFPoe_g.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/vY79n4y-3DhacVeWfeNX3w.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/TYK4fREu0S6hDiLxitCWLw.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/3Bgqz8iv4HKRzcoSJDTuaQ.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/dGyLtmJtqCW_YP8BZvWZZw.jpg?from=mobile',
                    'https://uimgproxy.suning.cn/uimg1/sop/commodity/IH6CnCbucr8CsPxeR8KdJA.jpg?from=mobile'
                  ]
                }
              });

              break;
            default:
              break;
          }
        });
        app.get('/api/productList', (req, res) => {
          res.json({
            prolists: [
              {
                className: 'product_list_left',
                products: [
                  {
                    id: 'p-1',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/Y0WaOmmEX1FaDhXqnZVbQA.jpg_800w_800h_4e_100Q',
                    title: '1.5折价37.4唐狮正品女磨毛修身小脚休闲长裤',
                    coupons: ['自营', '领券99-10', '领券99-20'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '249'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '20+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-2',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/G2X8Z9L2sXmtBaT62CRbtQ.jpg?from=mobile',
                    title:
                      '小米 (MI) Redmi Note8 Pro 6+ 64GB 冰翡翠 6400万四摄小金刚拍照NFC手机超长待机G90T液冷游戏芯6.53 超大全面屏小米红米学生机双卡双待智能',
                    coupons: ['自营'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '1199'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '2100+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-3',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/atmosphere/_PBkXJwYsZDeMsyNd8HFQQ.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '(CHANGHONG)55D2S 55英寸19核4K超高清电视机HDR轻薄平板LED液晶（黑色）',
                    coupons: ['自营', '秒杀'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '1149'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.50'
                      },
                      {
                        className: 'pro_comments',
                        number: '3.1万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-4',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/bzEKtSGfCsgkuFQcaXGK-Q.jpg?format=_is_300w_300h_4e.webp',
                    title: '飞天53%vol 500ml贵州茅台酒（带杯） 酱香型白酒',
                    coupons: ['自营'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '1499'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '18万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-5',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/eEfWjCbIlDlbyidSeMLPQQ.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '【新品】Apple二代新款AirPods（配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A',
                    coupons: ['自营', '秒杀'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '1099'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '7.9+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-6',
                    img:
                      'https://imgservice3.suning.cn/uimg1/b2c/image/9sgjcRBpusO-NbpcE-OqjQ.jpg_300w_300h_4e',
                    title:
                      '【亲源配方】海外Aptamil 澳洲爱他美金装 婴幼儿配方奶粉 3段（12-24月）900g/罐 新西兰原装进口',
                    coupons: ['自营'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '135'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '8100+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-7',
                    img:
                      'https://imgservice2.suning.cn/uimg1/b2c/image/4s9czrUbqfcakv9eYEudCw.jpg_300w_300h_4e',
                    title: 'MAC魅可 子弹头口红唇膏 Chili小辣椒砖红色 3g',
                    coupons: ['自营'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '149'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '5300+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-8',
                    img:
                      'https://imgservice1.suning.cn/uimg1/b2c/atmosphere/8-hdExa0WY2_l-j_-nzpuQ.jpg_300w_300h_4e',
                    title:
                      '小天鹅（Little Swan）TG100V80WDG5 10公斤全自动变频滚筒洗脱一体洗衣机 智能健康洗护 家用金色',
                    coupons: ['自营'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '2199'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '5.5万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-9',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/FGAbRieAh9QDXgao7rvvLA.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      'Nestle雀巢奶粉脱脂高钙成人女士学生早餐牛奶粉16条400g袋装',
                    coupons: ['自营', '领券99-10', '领券99-20'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '106'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '20+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-10',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/9_B_dWKZtHsghLeh3uOfgw.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      'LKK55度杯 快速制冷降温杯保温杯智能水杯子创意礼物送女友LKK55度304不锈钢201-300ml保温壶 女神款-水润粉',
                    coupons: ['满199-30'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '268'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '2100+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-11',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/eSFqBTP8z3uFe9Ivk7PjgQ.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      'visine优能（YOUNENG）大眼睛 成人洗眼液清洁眼部护理液缓解眼干眼疲劳250ml',
                    coupons: ['自营', '领券99-10'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '85'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.5'
                      },
                      {
                        className: 'pro_comments',
                        number: '70+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-12',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/Snt5r75jdNVf1cIOVBM-zw.jpg?format=_is_300w_300h_4e.webp',
                    title: '飞天53%vol 500ml贵州茅台酒（带杯） 酱香型白酒',
                    coupons: ['自营', '领券99-10', '领券99-20'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '1499'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '14万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-13',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/JEkFNKboB93h5mn6Tz9XeQ.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '华为/HUAWEI Mate 30 Pro 5G 8GB+512GB 青山黛 超曲面环幕屏 麒麟990智慧芯片 4000万徕卡四摄 移动联通电信5G全网通手机',
                    coupons: ['自营', '领券1999-100'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '7899'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '200+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-14',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/tWwqBx25Ii_du4GEuA1Z5w.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '乐心（LIFESENSE）MAMBO大麦版 运动升级版 来电提醒 50米防水 睡眠监测 微信短信显示 适配蓝牙安卓ios',
                    coupons: ['自营', '大聚会'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '79'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '9500+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-15',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/EpEpoR4bux19CUooTV8prg.png?format=_is_300w_300h_4e.webp',
                    title:
                      '猫人女士外穿打底裤春秋天新款高腰显瘦踩脚大码弹力一体裤长裤 均码 深麻灰',
                    coupons: ['自营', '满1件打九折'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '35'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '260+评价'
                      }
                    ]
                  }
                ]
              },
              {
                className: 'product_list_right',
                products: [
                  {
                    id: 'p-16',
                    img:
                      'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2020/01/22/11/iwoghBannerPicture/380c8341109a4823b6d2da85025c88ee.png?format=_is_300w_300h_4e.webp',
                    title:
                      '2019款 Apple iPad mini5 7.9英寸 平板电脑（64GB WLAN版 MUQY2CH/A 金色）',
                    coupons: ['自营', '抢'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '2718'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '5.8万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-17',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/co7t8mFyhL7W91NAqqHJxg.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '富光（FUGUANG）玻璃杯WFB1013-320 320ml格调男女士带茶隔 便携创意双层泡茶玻璃水杯 黑色',
                    coupons: [],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '19.5'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.8万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-18',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/UylP6LNElgg7yAfFe2eV8w.jpg?from=mobile',
                    title:
                      'Sharp 夏普 XLED-50MY4200A 50英寸4K超清智能网络家用平板电视',
                    coupons: ['自营'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '2499'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.2万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-19',
                    img:
                      'https://imgservice4.suning.cn/uimg1/b2c/image/oIofj2y1eHrZMDqd6tdG1w.jpg_300w_300h_4e',
                    title:
                      '加绒加厚打底裤裤女外穿修身柯基臀打底裤棉质竖条加绒一体裤仿羊绒连裤袜400g 黑色踩脚 均码（80-140斤）',
                    coupons: ['自营', '满2件打2折'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '69'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.6万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-20',
                    img:
                      'https://imgservice5.suning.cn/uimg1/b2c/image/TJDBgIfsCQ8OndYQ2uFVpw.jpg_300w_300h_4e',
                    title:
                      '度度兔(Dudutu)女童打底裤秋冬款小中大童裤子儿童加绒加厚打底裤女孩弹力长裤',
                    coupons: ['自营', '大聚会'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '59'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.5万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-21',
                    img:
                      'https://imgservice5.suning.cn/uimg1/b2c/atmosphere/pkyxDu1_Qm-4hc0V40q6xA.jpg_300w_300h_4e',
                    title:
                      '容声（Ronshen）BCD-251WKD1NY 251升 三门三开门冰箱 风冷无霜 电脑控温三开门小型电冰箱',
                    coupons: ['自营'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '1799'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.0万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-22',
                    img:
                      'https://imgservice3.suning.cn/uimg1/b2c/image/BNW9RFDpqC5WWklpY1WmWw.jpg_300w_300h_4e',
                    title:
                      'Semir森马中长羽绒服男潮青少年春秋时尚男士连帽外套黑色冬装保暖韩版',
                    coupons: ['大聚会', '满2件打2折'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '799'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '500+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-23',
                    img:
                      'https://imgservice1.suning.cn/uimg1/b2c/image/WeCOsjft0yioktycUqiz6g.jpg_300w_300h_4e',
                    title:
                      'KAMJOVE/ 金灶 飘逸杯 K系列办公茶道杯 花茶壶 泡茶壶 耐热玻璃茶具过滤内胆水杯水具泡茶器冲茶器家用不保温茶壶 K-205（900ML）',
                    coupons: ['拼购'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '999'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.00'
                      },
                      {
                        className: 'pro_comments',
                        number: '540+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-24',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/atmosphere/J56SrmAdG5ED-2K-34iMdQ.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '小米（MI）电视4C 65英寸 4K超高清HDR 蓝牙语音遥控 人工智能语音 液晶平板电视 L65M5-4C',
                    coupons: ['自营', '大聚会', '满2000-100'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '2899'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.9万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-25',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/atmosphere/CB0Je2UYWpzvsGkS3MgRxg.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '科沃斯（ECOVACS）地宝绝尘S扫地机器人 CEN556 全自动智能规划清洁 拖扫吸式 家用吸尘器',
                    coupons: ['自营', '满200-10'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '799'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '3.3万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-26',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/atmosphere/7K1zDCvOGXKCD9-I52GWLQ.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '顾致 家纺床上用品纯棉欧美简约风全棉磨毛四件套平纹床单被套床裙式 1.2/1.5/1.8m米床品套装儿童学生宿舍被子 春暖花香粉 1.8m床四件套【床裙1.8*2.0米】',
                    coupons: ['自营', '满199-10'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '228'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.2万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-27',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/DeZZun6QuIDbhdvt1KCYTA.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '拉夏贝尔 拉贝缇两件套冬季新款金丝绒韩版修身荷叶边裙子连衣裙60006207 印花混色 L',
                    coupons: ['自营', '满2件打2折'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '299'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.9万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-28',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/iTi3z9bfxB8GKLPAVQwsUg.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '小米 (MI) Redmi  K20骁龙730 4800万超广角三摄 8GB+256GB 冰川蓝 全面屏弹出拍照游戏智能全网通4G手机',
                    coupons: ['自营', '大聚会', '满2000-100'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '2899'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.5万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-29',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/7IQmqYtNbHdypZ65-bG8Hw.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '新品拉贝缇秋冬连衣裙女两件套韩版修身显瘦针织背心高腰长袖60006135 条纹混色 M建议(105斤-115斤)',
                    coupons: ['满2件打2折'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '199'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '1.0万+评价'
                      }
                    ]
                  },
                  {
                    id: 'p-30',
                    img:
                      'https://imgservice.suning.cn/uimg1/b2c/image/kYi8J-k54TU5zcRBxZhnuw.jpg?format=_is_300w_300h_4e.webp',
                    title:
                      '拉夏贝尔秋冬季女装新款韩版显瘦V领无袖背带毛呢连衣裙10014920 浅灰 L建议(115斤-130斤)',
                    coupons: ['大聚会', '满2件打2折'],
                    price: [
                      {
                        className: 'pro_flag',
                        number: '￥'
                      },
                      {
                        className: 'pro_price_number',
                        number: '388'
                      },
                      {
                        className: 'pro_price_lastNumber',
                        number: '.0'
                      },
                      {
                        className: 'pro_comments',
                        number: '623+评价'
                      }
                    ]
                  }
                ]
              }
            ]
          });
        });
        app.get('/api/tabslabel', (req, res) => {
          res.json({
            data: [
              {
                label: '热门推荐'
              },
              {
                label: '手机数码'
              },
              {
                label: '大家电'
              },
              {
                label: '电脑办公'
              },
              {
                label: '厨卫大电'
              },
              {
                label: '生活家电'
              },
              {
                label: '食品酒水'
              },
              {
                label: '品质男装'
              },
              {
                label: '国际好物'
              },
              {
                label: '珠宝首饰'
              },
              {
                label: '运动户外'
              },
              {
                label: '居家生活'
              },
              {
                label: '居家家纺'
              },
              {
                label: '家装建材'
              },
              {
                label: '厨具水具'
              },
              {
                label: '二首优品'
              },
              {
                label: '生鲜菜肉'
              },
              {
                label: '奶粉尿布'
              },
              {
                label: '中央空调'
              },
              {
                label: '只能数码'
              },
              {
                label: '钟表眼镜'
              },
              {
                label: '品质男鞋'
              },
              {
                label: '流行女装'
              },
              {
                label: '精品女鞋'
              },
              {
                label: '汽车生活'
              },
              {
                label: '人群偏爱'
              },
              {
                label: '美妆护肤'
              },
              {
                label: '个人护理'
              },
              {
                label: '童装玩具'
              },
              {
                label: '皮具箱包'
              },
              {
                label: '内衣配饰'
              },

              {
                label: '图书音像'
              },

              {
                label: '礼品乐器'
              },

              {
                label: '艺术陶瓷'
              },

              {
                label: '医药馆'
              },

              {
                label: '特色馆'
              }
            ]
          });
        });
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
};
