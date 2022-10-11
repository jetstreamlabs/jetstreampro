<script setup>
const props = defineProps({
  show: {
    default: false,
  },
  maxWidth: {
    default: '2xl',
  },
  closeable: {
    default: true,
  },
})

const { show, maxWidth, closeable } = toRefs(props)
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
    <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div
          class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full shrink-0 sm:mx-0 sm:h-10 sm:w-10">
          <IconOutlineExclamation class="w-6 h-6 text-red-600" />
        </div>

        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg">
            <slot name="title"></slot>
          </h3>

          <div class="mt-2">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>

    <div class="px-6 py-4 text-right bg-gray-100">
      <slot name="footer"> </slot>
    </div>
  </Modal>
</template>
