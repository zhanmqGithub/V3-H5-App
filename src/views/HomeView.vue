<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { menuArticlelist, type ArticleParams, type Article } from '@/api/article'
defineOptions({
  name: 'home-view',
})
const userStore = useUserStore()
const active = ref('article')
const articleList = ref<Article[]>([])
const handleMenuArticlelist = async () => {
  try {
    const articleParams: ArticleParams = {
      pageNo: 1,
      pageSize: 10,
      type: userStore.userInfo.orgCode?.substring(0, 3),
    }
    const res = await menuArticlelist(articleParams)
    if (res) {
      articleList.value = res.records.map((article) => {
        if (article.summary && article.summary.length > 100) {
          article.summary = article.summary.substring(0, 99) + '......'
        }
        return article
      })
    }
  } catch (error) {
    console.log('handleMenuArticlelist error', error)
  }
}
handleMenuArticlelist()
</script>

<template>
  <div>
    <var-tabs v-model:active="active" sticky safe-area color="#F4F4F4">
      <var-tab name="article">文章</var-tab>
      <var-tab name="task">任务</var-tab>
    </var-tabs>
    <var-tabs-items v-model:active="active">
      <var-tab-item name="article" class="w-full pl-3 pr-3">
        <template v-for="article of articleList" :key="article.id">
          <var-paper class="mt-3 mb-3" :elevation="1" ripple :radius="16">
            <var-card
              layout="row"
              :title="article.title"
              :subtitle="article.publishDate"
              :src="article.imageHref"
            >
              <template #description>
                <var-ellipsis class="pl-3 pr-3" :line-clamp="2" :tooltip="false">
                  {{ article.summary }}
                </var-ellipsis>
              </template>
            </var-card>
          </var-paper>
        </template>
      </var-tab-item>
      <var-tab-item name="task"> 任务列表 </var-tab-item>
    </var-tabs-items>
  </div>
</template>
