<template>
  <div class="nav-wrapper">
    <div class="nav-bg">
      <img :src="nav.bgimg"
           alt="">
    </div>
    <div class="top-type">
      <div class="top-content-one">
        <router-link class="class"
                     to="/navbar/list">
          <img :src="nav.class"
               alt="">
        </router-link>
        <a href="###"
           class="middlea"><img class="aa-img"
               :src="nav.middleGif"
               alt=""></a>
        <router-link class="mine_a"
                     to="/navbar/mine">
          <img class="mine"
               :src="nav.mine"
               alt="">
        </router-link>
      </div>
      <div class="top-content-two">

        <i class="search-icon"></i>

        <input type="text"
               class="searchInput"
               :placeholder="nav.searchText"
               autocomplete="off">

      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: {
        bgimg: "https://image2.suning.cn/uimg/cms/img/157727224905934526.jpg",
        class: "https://image3.suning.cn/uimg/cms/img/157199320847433454.png",
        mine: "https://image2.suning.cn/uimg/cms/img/157199322108277118.png",
        middleGif:
          "https://image1.suning.cn/uimg/cms/img/157727453632371186.gif",

        searchText: "学生奶粉"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@mixin cover {
  width: 100%;
  height: 100%;
}

.nav-wrapper {
  width: 100%;
  height: 88px;
  position: relative;
  .nav-bg {
    position: absolute;
    left: 0;
    top: 0;
    @include cover();
    img {
      @include cover();
    }
  }
  .top-type {
    position: relative;
    @include cover;
    .top-content-one {
      height: 44px;
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .class {
        padding: 5px;
        line-height: 44px;
        img {
          width: 18px;
          height: 30px;
        }
      }
      .aa-img {
        width: 235px;
        height: 35.5px;
        margin: 5px 0;
      }
      .mine_a {
        padding: 5px;
        line-height: 44px;
      }
      .mine {
        height: 30px;
        width: 18px;
      }
    }
    .top-content-two {
      height: 44px;

      width: 100%;
      box-sizing: border-box;
      padding: 5px 15px;
      position: relative;

      .searchLink {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        @include cover();
        z-index: 10;
      }
      .search-icon {
        width: 25px;
        height: 25px;
        top: 7px;
        left: 22px;

        position: absolute;
        display: block;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABGtJREFUWAntl8tr1EkQxzMT4qhBo/FBFLMylyWQwJIHiqCnqAdFXfci6klZkFW8uUpUPKjgHyAiomgCHnYRMRg8uHtSlyWuk5dBJ3pJloCPKIkoiUJmJn5q7PrRv4e/yTxO4g96qrq6Ht/uru6uKSv7/oWvQCR8OHx0dHR03sTExIpUKrWgoqLiVUNDw5tIJJIJtwofzQvQ0NDQgsnJyS24/HlmZmYjdKnHfYp+ElC3aZ1NTU0Jz3jO7qwADQ8Pzx0fHz+MtzaALM7p1SgA6gHs0ebm5u5Z2+RS7O/vX8OW3EDvhwDdj8heEvgDQGugy6BRrx7ya9XV1Qfj8fgn75i3H7pCPT09ewlwBaO5luEz+A6CdDLzpCUvk5waGxtrRfYLbQ+2MWv8IfzOlpaWl5bMx34VkAFz3bJ4C4jj5MVVaNqSB7K9vb2rM5nMOQZ3WwrPy8vL1zY2Nr6zZC42EJDZpntoZlcGAI9p2wHzv8t6Fh0mdoCVOo9qhVH/i5Xd8rVJ+fZbEtjkjAOmsrJyfSFgBADBLxF8F23GANrc19d3xPA+4gNkTpMmsGzT9rq6ug8+yzwEgLqFn1Nqwla2JZPJJdq3qQuQ3DMMtqkCTiRn8t4mtbcpeSP59MTIqqampo7Z48q7AKG0lf3We+aZJLAqFkuZXJrmTBZ/coJ9OewChMIOK3CHOLH6RbNM8A5OXosjYq3k8LR4nXoByXOQ/QDTqXypKD4z+OpSf+TSJuWVOoDkUkOob9NH76WnBsXSaDTaoz5YpVrllTqA5NVWITT0NrX0CmFfqBErtlJ5pQ4gKSFUiGJRx1z9BFF8v1c5K7RQeaUOIKlnVIhijfKlpuRNtfoE3LjySh1AUlwhlHqmDMVlJqdUr2SUyf5oOfOlhgMIEHICsq83RlHzalu2JWM3qCdi/qe8UgeQCFC4rQNQKSFK+g0MDCzHoXPUiXffG8ALyL579kgJ4TUopp9Opw9hn331AfOA52TE688FiJs0IYqixLbFTD3jtSmoPzg4WIu/39WYOBeVt6kLkBk4ainslnrG6hfMTk9P/4axXL6SGo9YnT+CnPkAcUN3Y9CuyqzUeUDt1H6hFD9b1Rb+JDG0PlJxlvoAiZSCXGbzMKvxZc9vkk8ncRSob/RCCbZzVIEydkx5Lw0MYP4dyKo8FwOcRdj/M6zUY9q2XMA4TXH0ziYSiX9EX3ywIt1C5cPXafH5pef+DRSqCqXmIk7Gn/Q3q8zQ19Au81DK2zRFgFpanMDr6LdaAd/zT6MKcGsZ+xd5dhHgr3KIfoW6ti4UkATHQbnUwMxKiqsqkeXzEbCdvNwnNrJq+Duh9kGgcgJSY6mBTdkplZ7vlVY9Q1ME66Jd5jTdhcorkN16cvEK9vst/Yus4EHtzxqQGuAsIpUeK7YJvpZgAm4+bZT+CNs4HIvF/q6vr3cea7UVKvY2KAGLbJX+gcwbkO28UF5AsX0XACP/2Z6ypT/pKhbqsyR2JPoKAAWe9JIE+CadfAZDI9Qzc39rMQAAAABJRU5ErkJggg==");
        background-size: cover;
      }

      .searchInput {
        border: 0;
        border-radius: 0.6rem;
        padding: 0.06rem 0.4rem 0 1.1rem;
        box-sizing: border-box;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: #fff;
        font-size: 16px;
        color: #999;
        display: block;
      }
    }
  }
}
</style>