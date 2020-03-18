<template>
  <div class="register" @click="handleNavHidden">
    <Header :title="title" :isGray="isGray">
      <div class="navigation" slot="btn" @click="handleNavShow($event)">
        <img
          src="data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTQ8RDQ8RDQ8RDQ8RDQ8RDQ8RDQ8RAEPSCIAAAAHdFJOUwD2cEy/EYW+tvqEAAAAb0lEQVRIDe2ROw7AMAhDwy/c/8ZVOgCVKuhayUyRsSF5WQsFAiAAAl8JiBKpPN29tv2uXTO9Jk5sxuRlz6Cp85nPrrlm0MjteM0pI4M2tGNO8Q2XiEjxDU+NSPX1QCOyqq//tsy8+bKLEwiAwK8IXL+VA7VJ24A2AAAAAElFTkSuQmCC"
          alt=""
        />
        <ul v-if="isNavShow" class="navul" id="navul">
          <li v-for="(item, index) in navList" :key="index">
            <router-link :to="{ path: item.link }"
              ><span>{{ item.text }}</span></router-link
            >
          </li>
        </ul>
      </div>
    </Header>
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
    <div class="toLogin">
      <router-link to="/login">前往登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      title: '欢迎注册',
      isGray: true,
      isNavShow: false,
      navList: [
        {
          link: '/navbar/index',
          text: '首页'
        },
        {
          link: '/navbar/list',
          text: '分类'
        },
        {
          link: '/navbar/search',
          text: '发现'
        },
        {
          link: '/navbar/cart',
          text: '购物车'
        },
        {
          link: '/navbar/mine',
          text: '我的'
        }
      ],
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              required: true,
              type: 'string',
              min: 3,
              max: 15
            },
            trigger: 'blur',
            messages: {
              required: '用户名不能为空',
              min: '用户名不能少于3个字符',
              max: '用户名不能大于15个字符'
            }
          },
          {
            //密码配置
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'submit',
            label: '注册'
          }
        ]
      }
    };
  },
  methods: {
    handleNavShow($event) {
      this.isNavShow = true;
      $event.stopPropagation();
    },
    handleNavHidden() {
      this.isNavShow = false;
    },
    submitHandler(e) {
      e.preventDefault();
      this.$http
        .get('/api/register', { params: this.model })
        .then(res => {
          if (res.success) {
            this.$dialog
              .confirm({
                title: '',
                message: '恭喜你，注册成功',
                confirmButtonText: '前往登录'
              })
              .then(() => {
                this.$router.push('/login');
              })
              .catch(() => {
                // on cancel
              });
          } else {
            this.$dialog({ message: res.message });
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579013710409&di=fd2e0e82f9f3892ffdfe2a7bce198f8c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F18%2F20160518083835_dvCKs.thumb.700_0.jpeg');
  background-size: cover;
  min-height: 850px;
  position: relative;
  .cube-form {
    background-color: rgba(255, 255, 255, 0.3);
    padding-top: 40px;
    padding-bottom: 20px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    border: 1px solid #fff;
    border-radius: 8px;
  }
  .toLogin {
    text-align: right;
    position: absolute;
    width: 100%;
    top: 255px;
    left: 0;
    height: 20px;
    a {
      font-size: 12px;
      margin-right: 20px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      line-height: 20px;
      color: #999;
    }
  }
  .navigation {
    position: absolute;
    top: 7px;
    right: 13px;

    img {
      width: 25px;
      height: 25px;
    }

    .navul {
      position: absolute;
      top: 40px;
      left: -95px;
      background-color: #333;
      z-index: 999;
      &::before {
        content: '';
        border-bottom: 8px solid #666;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;

        width: 0;
        height: 0;
        position: absolute;
        left: 85%;
        top: -8px;
        transform: translateX(-50%);
      }

      li {
        width: 125px;
        height: 45px;
        border-bottom: 1px solid #999;
        font-size: 16px;
        line-height: 45px;
        &:nth-child(1) {
          a {
            &::after {
              mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABJQTFRFLo/9Lo/9Lo/9Lo/9AAAALo/9x5IphwAAAAV0Uk5TWOIgqQDx9kpIAAAA1ElEQVQ4y+2UQRKDIAxF4wzunU45QKd6ASt7GnWvYu5/lVKwIBJ7ArNA4OEnP4IwnAXs+volTogiw5MnAbUc0fI2PGbBEGXqAZXJSU9daBOCqnLPwr6ZkmL2MyinlESV0INNawo7l5ueJ/ts0WYfiN47tI5FIMoktfRDiItiNZwE+LKk4baFTOunB9aAyIi2pgBlxXxQWxJo5pohKBcoO/YU9BM0RGs2PxItgIolprZZjwxZnZ+LXOQ/eS8Zae6O9Mxd6BxBScf4nnV/546gPfzF0vgAsaxKR7EkvqwAAAAASUVORK5CYII=');
              -webkit-mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABJQTFRFLo/9Lo/9Lo/9Lo/9AAAALo/9x5IphwAAAAV0Uk5TWOIgqQDx9kpIAAAA1ElEQVQ4y+2UQRKDIAxF4wzunU45QKd6ASt7GnWvYu5/lVKwIBJ7ArNA4OEnP4IwnAXs+volTogiw5MnAbUc0fI2PGbBEGXqAZXJSU9daBOCqnLPwr6ZkmL2MyinlESV0INNawo7l5ueJ/ts0WYfiN47tI5FIMoktfRDiItiNZwE+LKk4baFTOunB9aAyIi2pgBlxXxQWxJo5pohKBcoO/YU9BM0RGs2PxItgIolprZZjwxZnZ+LXOQ/eS8Zae6O9Mxd6BxBScf4nnV/546gPfzF0vgAsaxKR7EkvqwAAAAASUVORK5CYII=');
            }
          }
        }
        &:nth-child(2) {
          a {
            &::after {
              mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABhQTFRFLo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAALo/9QGDOBQAAAAd0Uk5TJJJ1tkXrAPzIW2oAAADnSURBVDjL7ZNNDoIwEIWJC44gJ0AuYOQABNyr0C0o1K1UcK5vM9NKQxlMXDsJi8eXaefnNUgBQC5FACzhc/SnSSbAiXH/ITnM4mJIA6fQPaiOYUskUvNL4p4IFHPSQoFE+ZUlFZKDT7oByc4n1yeS0Cf1aDr1A/7kdyJ4wm4hZTd3rLhtd6xD2gVXCXSV9J2YkBOl715B7pWs43Vkpfu/tK9Esi9rlWTiPFVOgkijD+8tMIJIpMKNLlS6Akk76ux8MO0bgeSmcLpErEDSPXAjZspGILm/5LR0K77k8PfwtfH9rMxgaW5vBXTrw52l9PkAAAAASUVORK5CYII=');
              -webkit-mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABhQTFRFLo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAALo/9QGDOBQAAAAd0Uk5TJJJ1tkXrAPzIW2oAAADnSURBVDjL7ZNNDoIwEIWJC44gJ0AuYOQABNyr0C0o1K1UcK5vM9NKQxlMXDsJi8eXaefnNUgBQC5FACzhc/SnSSbAiXH/ITnM4mJIA6fQPaiOYUskUvNL4p4IFHPSQoFE+ZUlFZKDT7oByc4n1yeS0Cf1aDr1A/7kdyJ4wm4hZTd3rLhtd6xD2gVXCXSV9J2YkBOl715B7pWs43Vkpfu/tK9Esi9rlWTiPFVOgkijD+8tMIJIpMKNLlS6Akk76ux8MO0bgeSmcLpErEDSPXAjZspGILm/5LR0K77k8PfwtfH9rMxgaW5vBXTrw52l9PkAAAAASUVORK5CYII=');
            }
          }
        }
        &:nth-child(3) {
          a {
            &::after {
              mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABVQTFRFLo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAAhP0sDQAAAAd0Uk5TYzEWntv+AJnAin8AAAEGSURBVDjLjdTNDoMgDABgTaZnk02fwHDfIp43jTs7ofcJC+//CItWJyCN42LMZ5GftpGhRnQsWdXJNt6LqmAeLfNEcWhjprIKBHPlBFd8PcPdEb3CRLUlivfbjxNhiZbFJmNXb8If9j5y8ZM3FLaMkK5S9u7mk2YVXruixSLKnWyajqFo4Z8lThKZz8uX/ImCT3vgt5FJal90j8JTX94CpSt8GeUizBe1COxTAI6Eno1eAb1qeqf06dAnSt8CfXP0be8zZDjOKi8TL4LM3oHKeJCMqJJb14QrqzelZEQ1KgwKVTAGWVUPa9VjULBTzEFBmYPC3WUKCssURHSkUlKi2n+62G58AagQzwmrsXO8AAAAAElFTkSuQmCC');
              -webkit-mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABVQTFRFLo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAAhP0sDQAAAAd0Uk5TYzEWntv+AJnAin8AAAEGSURBVDjLjdTNDoMgDABgTaZnk02fwHDfIp43jTs7ofcJC+//CItWJyCN42LMZ5GftpGhRnQsWdXJNt6LqmAeLfNEcWhjprIKBHPlBFd8PcPdEb3CRLUlivfbjxNhiZbFJmNXb8If9j5y8ZM3FLaMkK5S9u7mk2YVXruixSLKnWyajqFo4Z8lThKZz8uX/ImCT3vgt5FJal90j8JTX94CpSt8GeUizBe1COxTAI6Eno1eAb1qeqf06dAnSt8CfXP0be8zZDjOKi8TL4LM3oHKeJCMqJJb14QrqzelZEQ1KgwKVTAGWVUPa9VjULBTzEFBmYPC3WUKCssURHSkUlKi2n+62G58AagQzwmrsXO8AAAAAElFTkSuQmCC');
            }
          }
        }
        &:nth-child(4) {
          a {
            &::after {
              mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAAG5wVGOkIJ/OAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURQAAADU9RDU9RDU9RDU9RF2IWgwAAAAEdFJOUwAunmbKU26JAAABc0lEQVQ4y7VUbZaCMAxsCweoygFQcgBUDgAl9z/TNp+UXd/+2bd9KomTTJN0Sgi/rvh6PN25PaZsdod17eos5MzqIE5vwI3tAcv7hRjUmTmWOCLndhomj4hr/e0Zr8Gyi2w4UPQiwZFp+t3qoHzdeyGCYbVCZkFp9ZS7jMHjLD8kMsCK71f6KHU5IdvBfEYqgzMz4l6L8D7D9gHhP1P5gMDI/aqbagVmylyW8qM22HUs47dOkw1pQGHN/CXAioqI9xyBmys5XhH9uCOdMCcmtnIjEahpbNWEksN/LdpnNrndG6DzioZWlNrPhdqLuOULeKMBmClVdfRFGH2wYlQ6nSjojGHzM4FR6cdWo5TgJhfhGmsQUeSyHnoziYqKWyU6woLwmTdsUqTHtUh/QipDy9ywHZ0qm8VF1GvjFVjVpFXXq9zGckg5KnXCENyTS6s3WG+BSFU0LOo01Sbcc7QzAXyGG9p27RF3ZynWF83kmoA/SPELxo1H+loQseoAAAAASUVORK5CYII=');
              -webkit-mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAAG5wVGOkIJ/OAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURQAAADU9RDU9RDU9RDU9RF2IWgwAAAAEdFJOUwAunmbKU26JAAABc0lEQVQ4y7VUbZaCMAxsCweoygFQcgBUDgAl9z/TNp+UXd/+2bd9KomTTJN0Sgi/rvh6PN25PaZsdod17eos5MzqIE5vwI3tAcv7hRjUmTmWOCLndhomj4hr/e0Zr8Gyi2w4UPQiwZFp+t3qoHzdeyGCYbVCZkFp9ZS7jMHjLD8kMsCK71f6KHU5IdvBfEYqgzMz4l6L8D7D9gHhP1P5gMDI/aqbagVmylyW8qM22HUs47dOkw1pQGHN/CXAioqI9xyBmys5XhH9uCOdMCcmtnIjEahpbNWEksN/LdpnNrndG6DzioZWlNrPhdqLuOULeKMBmClVdfRFGH2wYlQ6nSjojGHzM4FR6cdWo5TgJhfhGmsQUeSyHnoziYqKWyU6woLwmTdsUqTHtUh/QipDy9ywHZ0qm8VF1GvjFVjVpFXXq9zGckg5KnXCENyTS6s3WG+BSFU0LOo01Sbcc7QzAXyGG9p27RF3ZynWF83kmoA/SPELxo1H+loQseoAAAAASUVORK5CYII=');
            }
          }
        }
        &:nth-child(5) {
          a {
            &::after {
              mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAALo/9Lo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAALo/9MGF0hQAAAAl0Uk5TAHoyVr2f4hcACU70ZwAAAe1JREFUOMt1VEtPwzAMTrtHr9NASLsNIUC9VUKAehsTMOUGAoF647Wh3gqMSfwM1jaT/y1O7KQPIJe6sf3Zsf1ZCHs+bhewuDgV7RPsAJ3HrKnwE5gPD8X77h2U44ZHAjcsHkNZ9zqBeyd/wnOl6MGsZrYPVw5LfjeCjgorddW4mU46YUnOWk9YsVOPXYLjiy2GTylSvLaZA5SkCnMyGBAEXB9tc5Ke0m/qlYygLw84QqLhwg1FK+oAXzqCpGhsEE6cXQBUphEZdHPCxluP05GUuv1NBqJPRoJdfU4hfBBfD6zhRyr69jci5sKm5NOxhck1oAU2cbjsGE9GJMaEuloLG49RRJeMJTfAV07jg4b7VJnLBGxTQnUq3tIn+wuVxpfYhSKrNKmTO5cwj9xsqJpGiJqIGhmJvw6+2L60rSltdTq3c/O9exna6lBFPUxMv3GJ+U25oqYLgSyGK8w4SKZ7O2Z4sQumVUsV4QigPY5eMCqpwKbbySsj6fnpoJO5xQnxVINoOJpmksKN6zgfr6CpwkkcTZqcTSMziQEMZJMlIj4j+DhXrQL0IWeWfLc0nuWjXP/DLGRj1mLjzDH4qcXgrGJ9vRXLivW4KWrsfqtvCqxxEbk90dgueiNda7eP7dZGoi22OF/83mJ/bL4fUySQ/0TSZf8AAAAASUVORK5CYII=');
              -webkit-mask-image: url('data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAALo/9Lo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAALo/9MGF0hQAAAAl0Uk5TAHoyVr2f4hcACU70ZwAAAe1JREFUOMt1VEtPwzAMTrtHr9NASLsNIUC9VUKAehsTMOUGAoF647Wh3gqMSfwM1jaT/y1O7KQPIJe6sf3Zsf1ZCHs+bhewuDgV7RPsAJ3HrKnwE5gPD8X77h2U44ZHAjcsHkNZ9zqBeyd/wnOl6MGsZrYPVw5LfjeCjgorddW4mU46YUnOWk9YsVOPXYLjiy2GTylSvLaZA5SkCnMyGBAEXB9tc5Ke0m/qlYygLw84QqLhwg1FK+oAXzqCpGhsEE6cXQBUphEZdHPCxluP05GUuv1NBqJPRoJdfU4hfBBfD6zhRyr69jci5sKm5NOxhck1oAU2cbjsGE9GJMaEuloLG49RRJeMJTfAV07jg4b7VJnLBGxTQnUq3tIn+wuVxpfYhSKrNKmTO5cwj9xsqJpGiJqIGhmJvw6+2L60rSltdTq3c/O9exna6lBFPUxMv3GJ+U25oqYLgSyGK8w4SKZ7O2Z4sQumVUsV4QigPY5eMCqpwKbbySsj6fnpoJO5xQnxVINoOJpmksKN6zgfr6CpwkkcTZqcTSMziQEMZJMlIj4j+DhXrQL0IWeWfLc0nuWjXP/DLGRj1mLjzDH4qcXgrGJ9vRXLivW4KWrsfqtvCqxxEbk90dgueiNda7eP7dZGoi22OF/83mJ/bL4fUySQ/0TSZf8AAAAASUVORK5CYII=');
            }
          }
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 5px;
            height: 22px;
            width: 22px;
            vertical-align: middle;
            margin-left: 5px;

            // -webkit-mask-position: 0 0;
            // -webkit-mask-repeat: no-repeat;
            -webkit-mask-size: 22px;
            mask-size: 22px;
            background-color: white;
          }

          span {
            // line-height: 45px;
            color: #fff;
            margin-left: 40px;
          }
        }
      }
    }
  }
}
</style>
