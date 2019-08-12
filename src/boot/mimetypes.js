import mime from 'mime-types'
export default async ({ Vue }) => {
  Vue.prototype.$mime = mime
}
