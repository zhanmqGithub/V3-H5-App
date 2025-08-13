<template>
  <div>
    <NavBar title="我的" :back="false"></NavBar>
    <div class="p-2">
      <div class="flex justify-between items-center mt-4 mb-4">
        <div class="flex justify-between items-center">
          <var-avatar src="https://varletjs.org/cat.jpg" :size="80" />
          <div class="ml-4">
            <div class="font-size-4 font-700">管理员</div>
            <div>
              <var-chip type="primary" size="small" color="#3673c8">试验工程师</var-chip>
            </div>
          </div>
        </div>
        <var-button text type="primary" text-color="#3673c8" size="large">修改头像</var-button>
      </div>
      <var-paper :elevation="false" :radius="16" class="w-full pt-4 pr-4 pb-2 pl-4">
        <div class="flex justify-between items-center pt-1 pb-1">
          <span class="font-size-4 color-gray">账号</span>
          <span class="font-size-4 color-black">admin</span>
        </div>
        <var-divider dashed />
        <div class="flex justify-between items-center pt-1 pb-1">
          <span class="font-size-4 color-gray">工号</span>
          <span class="font-size-4 color-black">00001</span>
        </div>
        <var-divider dashed />
        <div class="flex justify-between items-center pt-1 pb-1">
          <span class="font-size-4 color-gray">手机号</span>
          <span class="font-size-4 color-black">18888888888</span>
        </div>
        <var-divider dashed />
        <div class="flex justify-between items-center pt-1 pb-1">
          <span class="font-size-4 color-gray">邮箱</span>
          <span class="font-size-4 color-black">admin@163.com</span>
        </div>
        <var-divider dashed />
        <div class="flex justify-between items-center pt-1 pb-1">
          <span class="font-size-4 color-gray">部门</span>
          <span class="font-size-4 color-black">碰撞试验室</span>
        </div>
        <var-divider dashed />
        <div class="flex justify-between items-center pt-1 pb-1">
          <span class="font-size-4 color-gray">科室</span>
          <span class="font-size-4 color-black">车身试验室</span>
        </div>
        <var-divider dashed />
      </var-paper>
      <var-button text text-color="#3673c8" size="large" class="w-full mt-4">退出登录</var-button>
    </div>
  </div>
</template>
