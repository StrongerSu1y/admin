export const showTitle = (item, vm) => {
  if (item.name === 'home') {
    return '首页'
  }
  if (vm.$config.useI18n) {
    return vm.$t(item.name)
  } else if (item.meta && item.meta.title) {
    return item.meta.title
  }
  return item.name
  // return vm.$config.useI18n ? vm.$t(item.name) : ((item.meta && item.meta.title) || item.name)
}
